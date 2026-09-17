import { useRef, useState } from 'react'
import DeskRunner from './DeskRunner'

// The artwork and its controls share one coordinate system so they stay aligned.
export default function WorkbenchScene({ openProject }: { openProject: (index: number) => void }) {
  const [steam, setSteam] = useState(true)
  const [sips, setSips] = useState(0)
  const [game, setGame] = useState(false)
  const photoDialog = useRef<HTMLDialogElement>(null)
  const escapeClicks = useRef(0)
  const escapeKey = useRef<HTMLButtonElement>(null)
  const closeGame = () => { setGame(false); escapeKey.current?.focus() }
  return <>
    <div className="desk-caption"><p>Click a screen or pick up a project.</p><button aria-pressed={!steam} onClick={() => setSteam(!steam)}>{steam ? 'Pause steam' : 'Resume steam'}</button></div>
    <div className={`desk-room ${steam ? '' : 'steam-paused'}`}>
      <svg className="desk-art" viewBox="0 0 1200 690" role="img" aria-label="A wooden workbench with a monitor, an open laptop on a stand, a keyboard, a vertical mouse, steaming coffee, and a framed photograph of Atherv.">
        <defs>
          <linearGradient id="wood" x2="0" y2="1"><stop stopColor="#d1a171"/><stop offset="1" stopColor="#b58156"/></linearGradient>
          <linearGradient id="edge" x2="0" y2="1"><stop stopColor="#926140"/><stop offset="1" stopColor="#68452e"/></linearGradient>
          <linearGradient id="metal" x2="1" y2=".4"><stop stopColor="#9ba8a7"/><stop offset=".5" stopColor="#d6ddda"/><stop offset="1" stopColor="#82928f"/></linearGradient>
          <linearGradient id="cup" x2="1" y2="0"><stop stopColor="#bd603f"/><stop offset=".6" stopColor="#d37b52"/><stop offset="1" stopColor="#ac543b"/></linearGradient>
          <clipPath id="photo-frame"><rect x="997" y="209" width="84" height="112"/></clipPath>
        </defs>
        <path d="M78 407L1140 407 1200 606H0Z" fill="url(#wood)"/>
        <path d="M0 606H1200V630Q600 656 0 630Z" fill="url(#edge)"/>
        <path d="M55 634L45 690H76L92 636M1114 635L1130 690H1165L1152 633" fill="#4b4e42"/>
        <g fill="none" stroke="#845638" opacity=".16">
          <path d="M66 437Q460 410 1150 436M51 451Q480 430 1158 452M31 516Q360 477 1175 508M18 562Q650 529 1189 561M6 588Q570 571 1196 591"/>
          <path d="M105 476Q280 458 383 477T750 478 1130 489M715 549Q870 532 1030 550M125 578Q320 557 481 577"/>
        </g>
        <ellipse cx="599" cy="477" rx="248" ry="29" fill="#443e30" opacity=".13"/>
        {/* Monitor and aluminum stand. */}
        <path d="M586 324H645L662 421H573Z" fill="url(#metal)"/>
        <path d="M544 420Q617 410 692 420L717 438Q617 451 520 438Z" fill="#9ca9a4"/>
        <path d="M545 420Q618 414 692 420L705 429Q619 439 531 429Z" fill="#c8d1cc"/>
        <rect x="408" y="91" width="425" height="262" rx="13" fill="#293b37"/>
        <rect x="414" y="96" width="413" height="249" rx="9" fill="#162a27"/>
        <rect x="425" y="108" width="391" height="222" rx="3" fill="#dce8e0"/>
        <circle cx="620" cy="101" r="2" fill="#738880"/>
        <circle cx="797" cy="341" r="2" fill="#a7d8ba"/>
        {/* Raised laptop, open screen, and stand. */}
        <ellipse cx="261" cy="439" rx="135" ry="19" fill="#50412e" opacity=".14"/>
        <path d="M231 367H279L293 425H217Z" fill="url(#metal)"/><path d="M215 367H295L300 377H210Z" fill="#9aa9a2"/>
        <path d="M181 423H318L332 433H171Z" fill="#8e9c97"/>
        <g>
          <rect x="135" y="172" width="237" height="160" rx="9" fill="#53625d"/>
          <rect x="139" y="176" width="229" height="152" rx="7" fill="#bfc9c1"/>
          <rect x="147" y="184" width="213" height="130" rx="3" fill="#263329"/>
          <circle cx="254" cy="179" r="2" fill="#45524d"/>
          <path d="M109 363Q254 374 398 363V370Q254 383 109 370Z" fill="#7d8e86"/>
          <path d="M139 328H370L398 363Q254 374 109 363Z" fill="#c4ccc5" stroke="#99a89f" strokeWidth="1"/>
          <path d="M144 333H364L377 349H129Z" fill="#64766c"/>
          {[0,1].map(row => <g key={row}>{Array.from({length:12},(_,col)=><path key={col} d={`M${146+col*18-row*5} ${335+row*7}h15l2 4h-19z`} fill="#aebbb0"/>)}</g>)}
          <path d="M234 353H284L293 362H226Z" fill="#b3bfb5" stroke="#87998b" strokeWidth=".8"/>
          <path d="M234 373h40" stroke="#50665a" strokeWidth="2" strokeLinecap="round"/>
        </g>
        {/* Real photo in a freestanding timber frame. */}
        <ellipse cx="1040" cy="411" rx="72" ry="9" fill="#4b3c2c" opacity=".13"/><path d="M1086 317L1110 410H1098L1078 339Z" fill="#684b33"/>
        <g transform="translate(0 58)"><rect x="978" y="190" width="122" height="159" rx="3" fill="#735038"/><rect x="985" y="197" width="108" height="145" fill="#b08a58"/><rect x="991" y="203" width="96" height="133" fill="#f6f1df"/><image className="desk-photo" href="/atherv-canyon.jpeg" x="985" y="174" width="108" height="144" preserveAspectRatio="xMidYMin slice" clipPath="url(#photo-frame)"/><text x="1039" y="332" textAnchor="middle" fontFamily="Georgia,serif" fontSize="7" fill="#65594a">Atherv / UC San Diego</text></g>
        {/* Desk mat, keyboard, and an upright ergonomic mouse. */}
        <path d="M424 435H827L869 557H407Z" fill="#526658" opacity=".93"/>
        <g transform="translate(454 447)">
          <rect width="287" height="91" rx="8" fill="#7d8980"/>
          <rect y="-3" width="287" height="87" rx="8" fill="#b9c1b6"/>
          {[0,1,2].map(row => <g key={row}>{Array.from({length:12},(_,col)=><rect key={col} x={9+col*22.3} y={5+row*19} width="19" height="15" rx="2" fill={row===0 && col===0 ? '#cc7755' : '#e8e4d8'} stroke="#98a39a" strokeWidth=".7"/>)}</g>)}
          {[9,34,59,206,231,256].map(x=><rect key={x} x={x} y="63" width="20" height="14" rx="2" fill="#e8e4d8" stroke="#98a39a" strokeWidth=".7"/>)}
          <rect x="84" y="63" width="117" height="14" rx="2" fill="#e8e4d8" stroke="#98a39a" strokeWidth=".7"/>
        </g>
        <ellipse cx="797" cy="493" rx="29" ry="16" fill="#35463c" opacity=".5"/>
        <g transform="translate(1594 0) scale(-1 1)">
          <path d="M775 491Q755 466 774 439Q791 414 808 430Q822 442 824 476Q818 499 795 499Z" fill="#35443e"/>
          <path d="M777 487Q768 459 786 436Q797 423 807 433Q810 458 803 491Z" fill="#526158"/>
          <path d="M796 433L790 466" stroke="#1c2e25" strokeWidth="2"/>
          <rect x="791" y="438" width="5" height="14" rx="2" fill="#a6b1a4" transform="rotate(12 793 445)"/>
        </g>
        {/* Ceramic mug and animated steam. */}
        <g transform="translate(-32 0)">
        <ellipse cx="964" cy="484" rx="69" ry="24" fill="#684c32" opacity=".2"/>
        <ellipse cx="960" cy="478" rx="63" ry="20" fill="#e6d6b1"/><ellipse cx="960" cy="475" rx="54" ry="15" fill="#c8b38c"/>
        <path d="M996 412Q1025 404 1024 430Q1023 451 997 449" fill="none" stroke="#ae573b" strokeWidth="9"/>
        <path d="M918 399L925 468Q960 482 995 468L1002 399Z" fill="url(#cup)"/>
        <ellipse cx="960" cy="399" rx="43" ry="15" fill="#e4af85"/><ellipse cx="960" cy="399" rx="36" ry="10" fill="#b78462"/>
        <ellipse className="coffee-level" cx="960" cy={399 + sips * 1.3} rx={36 - sips * 3} ry={10 - sips * 1.5} fill="#503a2b" opacity={sips === 3 ? 0 : 1}/>
        {sips === 0 && <path d="M943 396Q958 387 977 398" stroke="#b78b61" fill="none" strokeWidth="2"/>}
        <g transform="translate(0 -15)" className="coffee-steam" opacity={sips === 3 ? 0 : 1} fill="none" stroke="#fffdf1" strokeWidth="5" strokeLinecap="round"><path d="M942 391Q925 372 944 350T942 311"/><path d="M961 382Q979 361 961 340T964 298"/><path d="M982 394Q998 374 982 357T987 322"/></g>
        </g>
      </svg>
      <button className="desk-photo-hit" aria-label="View full photograph of Atherv at the Grand Canyon" onClick={() => photoDialog.current?.showModal()}/>
      <button className="desk-coffee-hit" aria-label={sips === 3 ? 'Refill coffee' : 'Take a sip of coffee'} onClick={() => setSips(value => (value + 1) % 4)}><span className="coffee-hint" aria-live="polite">{sips === 3 ? 'Empty. One more for a refill?' : sips ? 'A little less coffee.' : 'Coffee break?'}</span></button>
      <button ref={escapeKey} className="desk-escape-hit" aria-label="Escape key" title="Esc" onClick={() => {
        escapeClicks.current += 1
        if (escapeClicks.current === 3) { escapeClicks.current = 0; setGame(true) }
      }}/>
      {game ? <DeskRunner onClose={closeGame}/> : <button className="desk-screen desk-monitor-screen" onClick={() => openProject(2)} aria-label="Open featured project Fitness recommendations"><span className="screen-topline">Fitness recommendations <span>Machine learning</span></span><svg className="desk-project-mark monitor-mark" viewBox="0 0 48 48" aria-hidden="true"><path d="M5 18h5v12H5z M10 14h6v20h-6z M16 24h16 M32 14h6v20h-6z M38 18h5v12h-5z"/></svg><strong>A workout program<br />that fits you.</strong><span className="screen-bottomline">BERT embeddings & 600,000+ rows <b>Open project ↗</b></span></button>}
      <button className="desk-screen desk-laptop-screen" onClick={() => openProject(1)} aria-label="Open Concert Scout AI"><span>Concert Scout AI</span><svg className="desk-project-mark laptop-mark" viewBox="0 0 48 48" aria-hidden="true"><path d="M8 20v8 M16 12v24 M24 5v38 M32 13v22 M40 19v10"/></svg><strong>Find your<br />next show.</strong><span>Music discovery for 300+ users ↗</span></button>
      <button className="desk-paper desk-forest" onClick={() => openProject(0)} aria-label="Open Fire-Ready Forests"><span className="notebook-label">FIELD NOTES / 01</span><strong>Fire-Ready<br />Forests</strong><span className="notebook-subtitle">LiDAR & wildfire modeling</span><svg className="desk-project-mark forest-mark" viewBox="0 0 48 48" aria-hidden="true"><path d="M18 4L7 19h6L4 32h12v11h4V32h12l-9-13h6z M34 14l-6 9 M34 14l10 15h-6l7 10H30 M35 39v5"/></svg></button>
      <button className="desk-paper desk-cadence" onClick={() => openProject(3)} aria-label="Open Cadence"><span className="clipboard-label">CARE PLAN</span><svg className="desk-project-mark cadence-mark" viewBox="0 0 48 48" aria-hidden="true"><path d="M24 40S5 29 5 17C5 5 19 4 24 14 29 4 43 5 43 17c0 12-19 23-19 23z M7 24h9l4-8 7 15 4-7h10"/></svg><strong>Cadence</strong><span>Care after<br />discharge ↗</span></button>
    </div>
    <dialog ref={photoDialog} className="bench-dialog desk-photo-dialog" aria-label="Atherv at the Grand Canyon">
      <button className="bench-close" autoFocus onClick={() => photoDialog.current?.close()}>Close <span aria-hidden="true">×</span></button>
      <img src="/atherv-canyon.jpeg" alt="Atherv standing at a Grand Canyon overlook beneath a cloudy sky" width="768" height="1024"/>
    </dialog>
    <div className="desk-project-access" aria-label="Desk projects"><span>On the desk</span>{[[2,'Fitness recommendations'],[1,'Concert Scout'],[0,'Fire-Ready Forests'],[3,'Cadence']].map(([i,name])=><button key={i} onClick={()=>openProject(Number(i))}>{name}</button>)}</div>
  </>
}
