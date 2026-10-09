import { useState } from "react";

type Stored = { id: string; iv: number[]; ciphertext: number[] };
type VaultRecord = { name: string; role: string; added: string; filename: string; mime: string; data: string };
const KEY = "opitr-voice-vault-v1";
const enc = new TextEncoder();
const dec = new TextDecoder();
const b64 = (bytes: Uint8Array) => btoa(Array.from(bytes, x => String.fromCharCode(x)).join(""));
const from64 = (value: string) => Uint8Array.from(atob(value), x => x.charCodeAt(0));

async function derive(passphrase: string, salt: Uint8Array) {
  const material = await crypto.subtle.importKey("raw", enc.encode(passphrase), "PBKDF2", false, ["deriveKey"]);
  return crypto.subtle.deriveKey({ name: "PBKDF2", salt: salt as BufferSource, iterations: 250000, hash: "SHA-256" }, material, { name: "AES-GCM", length: 256 }, false, ["encrypt", "decrypt"]);
}
function readStore(): { salt: number[]; records: Stored[]; verifier?: Stored } | null {
  try { const value = localStorage.getItem(KEY); return value ? JSON.parse(value) : null; } catch { return null; }
}
function download(name: string, data: string, mime: string) {
  const a = document.createElement("a");
  const blob = new Blob([from64(data)], { type: mime || "application/octet-stream" });
  const url = URL.createObjectURL(blob);
  a.href = url; a.download = name; a.click();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}
export function VoiceVault() {
  const [passphrase, setPassphrase] = useState("");
  const [key, setKey] = useState<CryptoKey | null>(null);
  const [records, setRecords] = useState<VaultRecord[]>([]);
  const [status, setStatus] = useState("");
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [busy, setBusy] = useState(false);
  async function decrypt(item: Stored, current: CryptoKey): Promise<VaultRecord> {
    const plain = await crypto.subtle.decrypt({ name: "AES-GCM", iv: new Uint8Array(item.iv) }, current, new Uint8Array(item.ciphertext));
    return JSON.parse(dec.decode(plain)) as VaultRecord;
  }
  async function encrypt(record: VaultRecord, current: CryptoKey): Promise<Stored> {
    const iv = crypto.getRandomValues(new Uint8Array(12));
    const cipher = await crypto.subtle.encrypt({ name: "AES-GCM", iv }, current, enc.encode(JSON.stringify(record)));
    return { id: crypto.randomUUID(), iv: Array.from(iv), ciphertext: Array.from(new Uint8Array(cipher)) };
  }
  async function unlock() {
    if (passphrase.length < 12) { setStatus("Use a passphrase of at least 12 characters."); return; }
    setBusy(true);
    try {
      let store = readStore();
      if (!store) store = { salt: Array.from(crypto.getRandomValues(new Uint8Array(16))), records: [] };
      const current = await derive(passphrase, new Uint8Array(store.salt));
      if (store.verifier) await decrypt(store.verifier, current);
      else {
        store.verifier = await encrypt({ name: "vault-check", role: "", added: "", filename: "", mime: "", data: "" }, current);
        localStorage.setItem(KEY, JSON.stringify(store));
      }
      const all = await Promise.all(store.records.map(x => decrypt(x, current)));
      setKey(current); setRecords(all); setPassphrase(""); setStatus("Vault unlocked on this device.");
    } catch { setStatus("Unable to unlock. Check the passphrase and browser storage."); }
    finally { setBusy(false); }
  }
  async function add() {
    if (!key || !file || !name.trim() || !role.trim()) { setStatus("Provide the actor, role and signed release file."); return; }
    if (file.size > 750000) { setStatus("File must be smaller than 750 KB for local browser storage."); return; }
    setBusy(true);
    try {
      const data = b64(new Uint8Array(await file.arrayBuffer()));
      const record = { name: name.trim(), role: role.trim(), added: new Date().toISOString(), filename: file.name, mime: file.type, data };
      const store = readStore();
      if (!store) throw new Error("Missing vault");
      store.records.push(await encrypt(record, key));
      localStorage.setItem(KEY, JSON.stringify(store));
      setRecords(v => [...v, record]); setName(""); setRole(""); setFile(null);
      setStatus("Encrypted copy saved in this browser. Back up the signed originals separately.");
    } catch { setStatus("Could not save. Browser storage may be full or disabled."); }
    finally { setBusy(false); }
  }
  return <section className="voice-vault" aria-labelledby="voice-vault-title">
    <div className="voice-kicker">Producer workspace · local encrypted archive</div>
    <h2 id="voice-vault-title" className="font-display text-4xl">Signed release archive.</h2>
    <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[#e7e1d4]/70">Store a copy of each actor's completed and returned agreement in a passphrase-protected vault on this device. Files never leave your browser. This is not a shared server archive, cloud backup or verification of signature. Losing this browser data or passphrase means losing the archive.</p>
    {!key ? <div className="mt-7 flex max-w-lg flex-col gap-3 sm:flex-row">
      <label className="sr-only" htmlFor="vault-pass">Vault passphrase</label>
      <input id="vault-pass" type="password" autoComplete="off" value={passphrase} onChange={e=>setPassphrase(e.target.value)} placeholder={readStore() ? "Enter vault passphrase" : "Create vault passphrase (12+ chars)"} className="min-h-12 flex-1 border border-[#e7e1d4]/25 bg-[#151713] px-4" />
      <button type="button" disabled={busy} onClick={unlock} className="min-h-12 bg-[#c4a574] px-6 text-[#14110c]">{readStore() ? "Unlock" : "Create vault"}</button>
    </div> : <>
      <div className="mt-7 grid gap-4 rounded-xl border border-[#e7e1d4]/15 p-5 md:grid-cols-2">
        <label className="text-sm">Actor name<input value={name} onChange={e=>setName(e.target.value)} className="mt-2 min-h-11 w-full border border-[#e7e1d4]/20 bg-transparent px-3" /></label>
        <label className="text-sm">Role / episode<input value={role} onChange={e=>setRole(e.target.value)} className="mt-2 min-h-11 w-full border border-[#e7e1d4]/20 bg-transparent px-3" /></label>
        <label className="text-sm md:col-span-2">Returned, signed agreement (PDF, image or HTML, max 750 KB)<input type="file" accept=".pdf,.png,.jpg,.jpeg,.html,application/pdf,image/*,text/html" onChange={e=>setFile(e.target.files?.[0] || null)} className="mt-2 block w-full text-sm" /></label>
        <button type="button" disabled={busy} onClick={add} className="min-h-12 bg-[#c4a574] px-5 text-[#14110c] md:justify-self-start">Archive signed release</button>
      </div>
      <div className="mt-8 flex items-center justify-between gap-4"><h3 className="font-display text-2xl">Records ({records.length})</h3><button type="button" className="text-sm underline underline-offset-4" onClick={()=>{setKey(null);setRecords([]);}}>Lock vault</button></div>
      <div className="mt-4 divide-y divide-[#e7e1d4]/15 border-y border-[#e7e1d4]/15">{records.length ? records.map((r,i)=><div key={i} className="flex flex-wrap items-center justify-between gap-3 py-4"><div><strong className="block">{r.name}</strong><span className="text-sm text-[#e7e1d4]/60">{r.role} · {new Date(r.added).toLocaleDateString("en-AU")}</span></div><button type="button" onClick={()=>download(r.filename,r.data,r.mime)} className="min-h-11 border border-[#c4a574]/50 px-4 text-sm">Download copy</button></div>) : <p className="py-6 text-sm text-[#e7e1d4]/55">No signed releases archived yet.</p>}</div>
    </>}
    {status && <p role="status" className="mt-4 text-sm text-[#c4a574]">{status}</p>}
  </section>;
}
