import{i as e,n as t,r as n}from"./index-Cs27DKWZ.js";import{t as r}from"./site-header-FQ4oLQ9t.js";var i=e(n()),a=t(),o={legalName:``,credit:``,email:``,phone:``,address:``,role:``,session:``,signature:``,adult:!1,volunteer:!1,read:!1},s=[`Voice of Anxiety, Episode 1, Sarah`,`Voice of Depression, Episode 2, Marcus`,`Voice of Trauma, Episode 3, Elena`,`Voice of Bipolar, Episode 4, David`,`Voice of OCD, Episode 5, Priya`,`Voice of Addiction, Episode 6, Tom`,`Voice of Panic, Episode 7, Aisha`,`Voice of Rejection sensitivity, Episode 8, Liam`,`Voice of Dysmorphia, Episode 9, Sophie`,`Voice of Grief, Episode 10, Jordan`,`Voice of Social anxiety, Episode 11, Mei`,`Host read, or another role`];function c(){return new Date().toLocaleDateString(`en-AU`,{day:`numeric`,month:`long`,year:`numeric`})}function l(e){let t=[];return e.legalName.trim().length<2&&t.push(`Add your legal name.`),e.address.trim().length<5&&t.push(`Add the address the Producer should keep on the release.`),/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.email.trim())||t.push(`Add an email that can take a reply.`),e.role.trim().length<2&&t.push(`Name the role or episode.`),e.adult||t.push(`This release is for adults. Under 18, do not use this form.`),e.volunteer||t.push(`Confirm you are volunteering for no financial reward.`),e.read||t.push(`Confirm you have read the copyright, moral rights, and Western Australian law terms.`),(e.signature.trim().toLowerCase()!==e.legalName.trim().toLowerCase()||e.signature.trim().length<2)&&t.push(`Type your legal name again, exactly, as the signature.`),t}function u(e,t){let n=e.credit.trim()||`No public credit`,r=e.session.trim()||`dates to be agreed`;return`VOLUNTEER PERFORMER RELEASE
The Other Person in the Room
Draft for a Western Australian volunteer voice contribution. Not legal advice.

Date of signing: ${t}

PARTIES
Performer: ${e.legalName.trim()}
Address: ${e.address.trim()}
Email: ${e.email.trim()}
Phone: ${e.phone.trim()||`Not given`}
Credit name: ${n}

Producer: Adam James, host of the podcast The Other Person in the Room, Perth, Western Australia.

1. VOLUNTEER — NO FINANCIAL REWARD
The Performer takes part of their own free will, as a volunteer. There is no fee, wage, salary, superannuation, royalty, profit share, gift, or other financial reward for the performance or for signing this release. Nothing in this release creates employment, a contract for services, or a right to payment under the Fair Work Act 2009 (Cth) or any other law. The Performer may stop volunteering for future sessions at any time. Recordings already made, and this release, continue to apply to those recordings.

A receipted out-of-pocket expense is payable only if the Producer agrees to it in writing before the expense is incurred. Repayment of that expense is not a fee for the performance.

2. WHAT IS BEING RECORDED
The Performer will give a voice performance for The Other Person in the Room.
Role or episode: ${e.role.trim()}
Session: ${r}
If a session is also filmed, this release covers the Performer's image in that recording to the same extent as the voice.

3. COPYRIGHT — COPYRIGHT ACT 1968 (CTH)
Copyright in material an unpaid contributor creates stays with them unless it is assigned in writing. By signing, the Performer assigns to the Producer all copyright the Performer holds in the performance and in the sound recording of it, and all performers' rights in the performance that the Act allows to be dealt with, throughout the world, for the full term of those rights, including renewals. To the extent the Act allows future copyright to be assigned in writing, this assignment includes future copyright in the performance and recording.

The Producer may reproduce, edit, adapt, abridge, fictionalise, communicate, publish, and promote the recording in the podcast, the book, transcripts, excerpts, and publicity, including formats not yet in use.

If any part of that assignment is held not to pass, the Performer grants the Producer an exclusive, irrevocable, worldwide, royalty-free licence to use that part for the same purposes, for the full term of the right.

4. MORAL RIGHTS — CONSENT, NOT A WAIVER
Moral rights under the Copyright Act 1968 (Cth), including a performer's moral rights in a recorded performance, cannot be assigned or sold. They remain with the Performer. A waiver is not what this clause relies on.

The Performer consents in writing to the Producer, and anyone the Producer authorises, doing the following, including where the act would otherwise infringe those moral rights:
(a) not attributing the Performer, or attributing the Performer only by the credit name above;
(b) editing, shortening, rearranging, and placing the performance beside other voices, including a voice written as an illness, wound, or other presence;
(c) using the performance in the project and its promotion even if the Performer later objects to the context.

The consent is genuine, and it is limited to this project and promotion of this project.

5. PROMISES
The Performer confirms they are 18 or older and have capacity to sign. The voice is their own. They will not perform material that belongs to someone else unless the Producer has cleared it. They have been given time to read this release and may take it away before signing.

6. PRIVACY
The Producer will use the Performer's name and contact details only to administer this release and the recording, and will keep the signed copy reasonably secure. Completing the form on the project website does not send it anywhere. The Performer downloads or prints it, and gives the signed copy to Adam James themselves.

7. GOVERNING LAW
This release is governed by the laws of Western Australia and the applicable laws of the Commonwealth of Australia. The courts of Western Australia have exclusive jurisdiction.

8. WHAT THIS DRAFT DOES NOT DO
This document is a project draft for volunteer voice contributors. It is not legal advice and it is not a ruling that the production is a community organisation. The Volunteers and Food and Other Donors (Protection from Liability) Act 2002 (WA) is not stated to apply. A solicitor admitted in Western Australia should review this release before anyone relies on it.

The typed name is the Performer's electronic signature for this draft. The copy kept by the Producer should also carry a wet-ink signature, or another electronic signature the parties agree to use.

SIGNED by the Performer as a volunteer, for no financial reward.

Electronic signature: ${e.signature.trim()}
Legal name: ${e.legalName.trim()}
Date: ${t}

Wet-ink signature: _______________________________

Witness name (optional): _______________________________
Witness signature: _______________________________
`}function d(e){return e.replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/"/g,`&quot;`)}function f(e){return`<!doctype html><html lang="en"><head><meta charset="utf-8"><title>Volunteer performer release</title>
    <style>
      body{font-family:Georgia,serif;color:#14110c;max-width:40rem;margin:2.5rem auto;line-height:1.45;padding:0 1.25rem}
      p{margin:0 0 .35rem}
    </style></head><body>${d(e).split(`
`).map(e=>e.trim()?`<p>${e}</p>`:`<br>`).join(``)}</body></html>`}function p(e){return e.trim().replace(/[^\w\-]+/g,`-`).replace(/-+/g,`-`).replace(/^-|-$/g,``)||`performer`}function m(e,t,n){let r=new Blob([t],{type:n}),i=URL.createObjectURL(r),a=document.createElement(`a`);a.href=i,a.download=e,a.click(),URL.revokeObjectURL(i)}function h(){let[e,t]=(0,i.useState)(o),[n,d]=(0,i.useState)(!1),[h,v]=(0,i.useState)(null),[y,b]=(0,i.useState)([]),x=(0,i.useRef)(null),S=(0,i.useMemo)(()=>c(),[]);function C(e,n){t(t=>({...t,[e]:n}))}function w(t){t.preventDefault();let n=l(e);if(b(n),n.length){v(null);return}v(u(e,S)),requestAnimationFrame(()=>x.current?.scrollIntoView({behavior:`smooth`,block:`start`}))}function T(){h&&m(`OPITR-volunteer-release-${p(e.legalName)}.html`,f(h),`text/html;charset=utf-8`)}function E(){if(!h)return;let e=window.open(``,`_blank`,`noopener,noreferrer`);if(!e){b([`The print window was blocked. Download the release and print that file.`]);return}e.document.write(f(h)),e.document.close(),e.focus(),e.print()}return(0,a.jsxs)(`main`,{className:`min-h-screen bg-[#0c0b09] text-[#e7e1d4]`,children:[(0,a.jsx)(r,{}),(0,a.jsxs)(`section`,{className:`grid gap-12 px-5 py-12 md:grid-cols-12 md:px-10`,children:[(0,a.jsxs)(`div`,{className:`md:col-span-5`,children:[(0,a.jsx)(`p`,{className:`text-[11px] uppercase tracking-[0.28em] text-[#c4a574]`,children:`Western Australia · Volunteer · No fee`}),(0,a.jsx)(`h1`,{className:`mt-4 font-display text-5xl leading-[0.9] md:text-6xl`,children:`A release for the voice, not a wage.`}),(0,a.jsx)(`p`,{className:`mt-6 text-[#e7e1d4]/75`,children:`For adults lending a voice to Adam James. No financial reward. Copyright is assigned in writing, because a volunteer otherwise keeps it. Moral rights stay with the performer. The consent is a consent, not a waiver.`}),(0,a.jsx)(`p`,{className:`mt-4 text-sm text-[#e7e1d4]/55`,children:`The release is made on this device. It is not uploaded. It is a project draft, not legal advice. Have a Western Australian solicitor read it before anyone relies on it. Under 18: stop here.`})]}),(0,a.jsxs)(`form`,{onSubmit:w,className:`space-y-4 md:col-span-7`,noValidate:!0,children:[(0,a.jsx)(g,{id:`legal-name`,label:`Legal name`,value:e.legalName,onChange:e=>C(`legalName`,e),autoComplete:`name`}),(0,a.jsx)(g,{id:`credit`,label:`Credit name. Leave blank for no public credit.`,value:e.credit,onChange:e=>C(`credit`,e)}),(0,a.jsxs)(`div`,{className:`grid gap-4 sm:grid-cols-2`,children:[(0,a.jsx)(g,{id:`email`,label:`Email`,type:`email`,value:e.email,onChange:e=>C(`email`,e),autoComplete:`email`}),(0,a.jsx)(g,{id:`phone`,label:`Phone, if you want one on the form`,value:e.phone,onChange:e=>C(`phone`,e),autoComplete:`tel`})]}),(0,a.jsx)(g,{id:`address`,label:`Address`,value:e.address,onChange:e=>C(`address`,e),autoComplete:`street-address`}),(0,a.jsxs)(`label`,{className:`block text-sm`,htmlFor:`role`,children:[(0,a.jsx)(`span`,{className:`mb-1 block text-[#e7e1d4]/70`,children:`Role`}),(0,a.jsxs)(`select`,{id:`role`,value:n?`other`:e.role,onChange:e=>{e.target.value===`other`?(d(!0),C(`role`,``)):(d(!1),C(`role`,e.target.value))},className:`min-h-11 w-full border border-[#e7e1d4]/20 bg-[#0c0b09] px-3 text-[#e7e1d4]`,children:[(0,a.jsx)(`option`,{value:``,children:`Choose a role`}),s.map(e=>(0,a.jsx)(`option`,{value:e,children:e},e)),(0,a.jsx)(`option`,{value:`other`,children:`Another role, typed below`})]})]}),n&&(0,a.jsx)(g,{id:`role-other`,label:`Type the role`,value:e.role,onChange:e=>C(`role`,e)}),(0,a.jsx)(g,{id:`session`,label:`Session date, if known`,value:e.session,onChange:e=>C(`session`,e)}),(0,a.jsx)(_,{checked:e.adult,onChange:e=>C(`adult`,e),label:`I am 18 or older. This form is not for a child.`}),(0,a.jsx)(_,{checked:e.volunteer,onChange:e=>C(`volunteer`,e),label:`I am volunteering. I am not being paid, and I am not promised pay, a royalty, or a gift for this performance.`}),(0,a.jsx)(_,{checked:e.read,onChange:e=>C(`read`,e),label:`I have read that copyright is assigned, that moral rights stay with me, and that Western Australian law governs the release.`}),(0,a.jsx)(g,{id:`signature`,label:`Type your legal name as your signature`,value:e.signature,onChange:e=>C(`signature`,e)}),y.length>0&&(0,a.jsx)(`ul`,{className:`space-y-1 text-sm text-[#c4a574]`,role:`alert`,children:y.map(e=>(0,a.jsx)(`li`,{children:e},e))}),(0,a.jsx)(`button`,{type:`submit`,className:`min-h-11 bg-[#e7e1d4] px-5 text-xs uppercase tracking-[0.18em] text-[#14110c]`,children:`Generate the release`})]})]}),h&&(0,a.jsxs)(`section`,{ref:x,className:`border-t border-[#e7e1d4]/10 px-5 py-12 md:px-10`,children:[(0,a.jsx)(`p`,{className:`max-w-xl text-sm text-[#e7e1d4]/65`,children:`Download this and send the file to Adam James, or print it and sign the wet-ink line. The site does not keep a copy.`}),(0,a.jsxs)(`div`,{className:`mt-6 flex flex-wrap gap-3`,children:[(0,a.jsx)(`button`,{type:`button`,onClick:T,className:`min-h-11 bg-[#c4a574] px-5 text-xs uppercase tracking-[0.18em] text-[#14110c]`,children:`Download release`}),(0,a.jsx)(`button`,{type:`button`,onClick:E,className:`min-h-11 border border-[#e7e1d4]/30 px-5 text-xs uppercase tracking-[0.18em]`,children:`Print release`})]}),(0,a.jsx)(`pre`,{className:`mt-6 max-w-3xl whitespace-pre-wrap bg-[#e7e1d4] p-6 font-display text-sm leading-relaxed text-[#14110c]`,children:h})]})]})}function g({id:e,label:t,value:n,onChange:r,type:i=`text`,autoComplete:o}){return(0,a.jsxs)(`label`,{className:`block text-sm`,htmlFor:e,children:[(0,a.jsx)(`span`,{className:`mb-1 block text-[#e7e1d4]/70`,children:t}),(0,a.jsx)(`input`,{id:e,type:i,value:n,autoComplete:o,onChange:e=>r(e.target.value),className:`min-h-11 w-full border border-[#e7e1d4]/20 bg-transparent px-3 text-[#e7e1d4] outline-none`})]})}function _({label:e,checked:t,onChange:n}){return(0,a.jsxs)(`label`,{className:`flex min-h-11 items-start gap-3 text-sm leading-snug text-[#e7e1d4]/80`,children:[(0,a.jsx)(`input`,{type:`checkbox`,checked:t,onChange:e=>n(e.target.checked),className:`mt-1 size-4 accent-[#c4a574]`}),(0,a.jsx)(`span`,{children:e})]})}export{h as component};