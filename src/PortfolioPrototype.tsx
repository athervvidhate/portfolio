// Throwaway exploration: five home-page structures selected with ?variant=.
import { useEffect, useRef, useState } from 'react'
import './PortfolioPrototype.css'
import WorkbenchScene from './WorkbenchScene'

const projects = [
  { name: 'Fire-Ready Forests', kind: 'Research', description: 'Turning laser scans of a forest into individual trees a wildfire model can use.', detail: 'A pipeline combines airborne and terrestrial LiDAR with field inventories to estimate tree height, diameter, crown structure, and species. The output is a labeled treelist for physics-based fire simulation.', tools: 'Python, LiDAR, GeoPandas, scikit-learn, FastFuels', href: '/fire-ready-forests', action: 'Read the case study', image: '/fire-ready-forests/canopy-height-model.png', alt: 'Canopy height map of Shaver Lake, with tree heights encoded in purple, green, and yellow' },
  { name: 'Concert Scout AI', kind: 'Applications', description: 'Finding the next live show, with recommendations that start with your music taste.', detail: 'A concert recommendation platform for more than 300 active users. A multi-agent Gemini pipeline connects music preferences with live events, backed by FastAPI and Redis.', tools: 'Python, FastAPI, Redis, Next.js, Gemini', href: 'https://github.com/athervvidhate/ConcertScoutAI', action: 'View the code', image: '/concertscout.png', alt: 'Concert Scout interface with music preference and concert discovery options' },
  { name: 'Fitness recommendations', kind: 'Machine learning', description: 'Matching workout programs to people using a dataset of more than 600,000 rows.', detail: 'K-Means clustering, cosine similarity, and fine-tuned BERT embeddings power a workout recommendation engine, packaged with Docker and deployed on Google Cloud.', tools: 'Python, BERT, scikit-learn, Docker, GCP', href: 'https://workout.atherv.com', action: 'Open the walkthrough', image: '/lifting.png', alt: 'Fitness recommendation project preview' },
  { name: 'Cadence', kind: 'Applications', description: 'Making discharge paperwork useful after a patient leaves the hospital.', detail: 'Built at LA Hacks 2026 for heart failure patients. My contribution was the OCR and PII-removal pipeline that turns discharge paperwork into a medication regimen for daily voice check-ins.', tools: 'Python, Apple Vision, Gemma, Zetic, FastAPI, MongoDB', href: 'https://devpost.com/software/cadence-ch4rmf', action: 'Read on Devpost' },
  { name: 'Power outage analysis', kind: 'Machine learning', description: 'Investigating the conditions behind severe power outages.', detail: 'An end-to-end data science pipeline using Random Forests, feature engineering, and hyperparameter tuning to predict outage severity.', tools: 'Python, scikit-learn, Pandas, hypothesis testing', href: 'https://atherv.com/poweroutageanalysis', action: 'Explore the analysis', image: '/poweroutages.png', alt: 'Power outage analysis project preview' },
  { name: 'Body sway research', kind: 'Research', description: 'Exploring how people maintain balance through interactive data visualization.', detail: 'A study of balance control and posture mechanics presented with animated scrollytelling and permutation testing.', tools: 'JavaScript, D3.js, statistical analysis', href: 'https://atherv.com/bodyswaylab', action: 'Explore the study', image: '/bodysway.png', alt: 'Body sway research visualization' },
  { name: 'Multiple Linear Regression', kind: 'Machine learning', description: 'Building the model from first principles, then making it interactive.', detail: 'A linear regression engine built with matrix calculus and gradient descent, paired with an interactive Streamlit dashboard.', tools: 'Python, NumPy, Pandas, Streamlit', href: 'https://github.com/athervvidhate/linear-regression', action: 'View the code', image: '/linreg.png', alt: 'Multiple Linear Regression dashboard preview' },
  { name: 'MiniGit', kind: 'Systems', description: 'A small version control system that gets under the hood of Git.', detail: 'A Java implementation of more than ten core Git subcommands with hash map key-value persistence.', tools: 'Java, version control, system architecture', href: 'https://github.com/athervvidhate/MiniGit', action: 'View the code' },
  { name: 'Avid Autofill', kind: 'Currently building', description: 'Fill job applications from a profile stored in your browser.', detail: 'A browser extension that fills application fields and attaches your resume, then leaves review and submission to you. An optional Google Sheets connection tracks applications after approval. Supported site adapters are in beta.', tools: 'JavaScript, Chrome extensions, Google Sheets API', href: 'https://github.com/athervvidhate/avid-autofill', action: 'View on GitHub' },
  { name: 'FitBuddy', kind: 'Currently building', description: 'A mobile workout logger and routine planner.', detail: 'Track active workouts with rest timers and exercise notes, build reusable routines, and import training history from Bolt, Hevy, or Strong. Currently being developed with Expo and Supabase.', tools: 'Expo, React Native, Supabase, NativeWind', href: 'https://github.com/athervvidhate/fitbuddy', action: 'View on GitHub' },
]
const jobs = [
  ['Keysight Technologies', 'Machine Learning Engineer Intern', 'Jun 2026 to present', 'Built a demand anomaly detection pipeline that cut monthly analyst alerts by 88%, with 82% alert precision. Backtested forecast intervals and selected a method that improved coverage from 64.9% to 95.7%.'],
  ['Intellinum', 'AI Research & Development Intern', 'Jan to Jun 2026', 'Built a six-agent pipeline with Redis Streams and Claude to generate enterprise pages and integrate Oracle Fusion SCM APIs. Added schema validation and a rules-based checker that routes issues to engineering, QA, or integration teams.'],
  ['Nexa Tax', 'Full-Stack Developer Intern', 'Aug 2025 to Jan 2026', 'Built a RAG pipeline that extracted 23 data categories from financial documents at 95% accuracy. Cut document processing time by 60% and shipped chatbot APIs with persistent sessions.'],
  ['smartQED', 'Software Engineer Intern', 'Apr to Aug 2025', 'Fine-tuned a diagnostic LLM on more than 200 technical reports, cutting root-cause resolution time by 40% across product support cases.'],
  ['UC San Diego', 'Economics Lab Research Assistant', 'Apr to Aug 2025', 'Collected more than 100,000 historical newspaper records from the Library of Congress for research on presidential campaigns. Added retry and resume support for multi-day crawls, delivering more than 300 grouped publications.'],
]
const directions = [
  { id: 'atlas', name: 'Research atlas', note: 'Work first. Real figures, open space, blue ink.' },
  { id: 'index', name: 'Project index', note: 'Browse first. Large type, plum, a focused project viewer.' },
  { id: 'studio', name: 'Personal studio', note: 'Person first. A portrait, blue sidebar, longer project stories.' },
  { id: 'workbench', name: 'Workbench', note: 'A real desk scene. Open a screen or a project from the bookshelf.' },
  { id: 'playground', name: 'Model playground', note: 'Adjust a model yourself, then explore the projects behind the portfolio.' },
]
function Links() {
  return <div className="proto-links"><a href="https://github.com/athervvidhate">GitHub</a><a href="https://linkedin.com/in/athervvidhate">LinkedIn</a><a href="/Atherv_Vidhate_Resume.pdf" target="_blank" rel="noreferrer">Resume</a></div>
}
function Navigation() {
  return <nav aria-label="Main navigation"><a href="#work">Work</a><a href="#experience">Experience</a><a href="#about">About</a><a href="#contact">Contact</a></nav>
}
function Background() {
  return <section id="experience" className="proto-background"><div className="proto-section-heading"><h2>Where I've worked</h2><p>Industry & research</p></div><div className="proto-background-grid"><div className="proto-jobs">{jobs.map(([company, role, date, summary]) => <details key={company}><summary><span><strong>{company}</strong><span>{role}</span></span><span className="job-date">{date}</span><span className="disclosure-icon" aria-hidden="true">+</span></summary><p>{summary}</p></details>)}</div><aside id="about"><h3>At UC San Diego</h3><p>B.S. in Data Science<br />Minor in Business Analytics<br />Expected graduation 2027</p><p className="proto-gpa">3.91 <span>GPA</span></p><p>I also built an alumni portal for more than 1,000 members as historian of Tau Kappa Epsilon.</p><details><summary>Tools I work with</summary><p>Python, SQL, R, Java, TypeScript, PyTorch, scikit-learn, pandas, FastAPI, React, Docker, Redis, and Google Cloud.</p></details></aside></div></section>
}
function Contact() {
  return <footer id="contact" className="proto-contact"><div><p>Have something in mind?</p><h2>Let's talk.</h2><a className="proto-email" href="mailto:athervvidhate@gmail.com">athervvidhate@gmail.com</a></div><div><Links /><p>San Diego, California</p><a href="#top">Back to top</a></div></footer>
}
function ProjectRows() {
  const [filter, setFilter] = useState('All')
  return <section id="work" className="atlas-work"><div className="proto-section-heading"><h2>More things I've built</h2><span>Research, models & applications</span></div><div className="proto-filters" aria-label="Filter projects">{['All', 'Research', 'Machine learning', 'Applications', 'Systems'].map(x => <button key={x} aria-pressed={filter === x} onClick={() => setFilter(x)}>{x}</button>)}</div><div className="atlas-projects">{projects.filter(p => p.name !== 'Fire-Ready Forests' && (filter === 'All' || p.kind === filter)).map(p => <article key={p.name}><span className="project-kind">{p.kind}</span><h3><a href={p.href}>{p.name}</a></h3><p>{p.description}</p><details><summary>Project details</summary><p>{p.detail}</p><p className="project-tools">{p.tools}</p><a href={p.href}>{p.action}</a></details></article>)}</div></section>
}
export function VariantAtlas() {
  return <div className="proto-atlas"><header className="atlas-header"><a className="proto-wordmark" href="#top">Atherv Vidhate<span>Data science & machine learning</span></a><Navigation /></header><main><section className="atlas-intro"><div><p className="atlas-location">UC San Diego / California</p><h1>I build models<br />for messy data.</h1><p className="intro-copy">I'm Atherv. I build machine learning systems, investigate messy data, and turn the results into things people can use.</p><div className="atlas-current"><span aria-hidden="true" />Currently building anomaly detection systems at Keysight.</div><a className="proto-text-link" href="#work">Explore my work <span aria-hidden="true">↘</span></a></div><figure className="atlas-map"><div className="map-label"><span>Field study / Shaver Lake</span><span>California</span></div><img src={projects[0].image} alt={projects[0].alt} /><figcaption><span>Airborne LiDAR · Canopy height</span><span>0 to 60+ meters</span></figcaption></figure></section><section className="atlas-feature"><div><span>Featured research</span><h2>What does a wildfire<br />model need to know<br />about a tree?</h2></div><div><h3>Fire-Ready Forests</h3><p>{projects[0].detail}</p><a className="proto-solid-link" href={projects[0].href}>Read the case study</a></div></section><ProjectRows /><Background /></main><Contact /></div>
}
export function VariantIndex() {
  const [selected, setSelected] = useState(0)
  const p = projects[selected]
  return <div className="proto-index"><header className="index-header"><a href="#top">Atherv Vidhate</a><Navigation /></header><main><section className="index-intro"><h1>Atherv<br /><span>Vidhate.</span></h1><div><p>Data science student.<br />Machine learning engineer.</p><div className="index-now">At UC San Diego.<br />Currently at Keysight Technologies.</div><Links /></div></section><section id="work" className="index-work"><div className="proto-section-heading"><h2>The project index</h2><span>{projects.length} projects to look through</span></div><div className="index-browser"><div className="index-list" aria-label="Select a project">{projects.map((item, i) => <button key={item.name} onClick={() => setSelected(i)} aria-pressed={i === selected}><span>{item.name}<small>{item.kind}</small></span><span aria-hidden="true">{selected === i ? '↗' : '+'}</span></button>)}</div><article className="index-detail" aria-live="polite"><div className="index-detail-top"><span>{p.kind}</span><span>{selected + 1} / {projects.length}</span></div><h3>{p.name}</h3><p className="index-deck">{p.description}</p>{p.image ? <figure><img src={p.image} alt={p.alt} /></figure> : <div className="index-typographic-art" aria-hidden="true">{selected === 3 ? 'Read.\nUnderstand.\nRecover.' : selected === 7 ? 'commit\nbranch\nmerge' : p.name}</div>}<p>{p.detail}</p><p className="project-tools">{p.tools}</p><a className="proto-solid-link" href={p.href}>{p.action}</a></article></div></section><Background /></main><Contact /></div>
}
export function VariantStudio() {
  return <div className="proto-studio"><aside className="studio-sidebar"><a className="studio-monogram" href="#top" aria-label="Atherv Vidhate home">av<span>.</span></a><div className="studio-identity">Atherv Vidhate<span>Data science<br />& machine learning</span></div><Navigation /><div className="studio-sidebar-bottom"><p>Studying at UC San Diego.<br />Building at Keysight.</p><Links /><span>San Diego, CA</span></div></aside><div className="studio-page"><main><section className="studio-intro"><div className="studio-intro-copy"><p>A little about me</p><h1>Hey, I'm<br />Atherv.</h1><p>I study data science at UC San Diego and build machine learning systems. Right now, that means finding anomalies in demand data at Keysight.</p><a className="proto-text-link" href="#work">Take a look around <span aria-hidden="true">↘</span></a></div><figure><img src="/atherv-canyon.jpeg" alt="Atherv Vidhate" /><figcaption>Atherv Vidhate<br /><span>UC San Diego, class of 2027.</span></figcaption></figure><div className="studio-note"><span>Outside my coursework</span><p>An alumni portal.<br />1,000+ members.</p></div></section><section id="work" className="studio-work"><div className="proto-section-heading"><h2>A few things I've worked on</h2><span>Pick a project. Take a closer look.</span></div>{[projects[0], projects[1], projects[2]].map((p, i) => <article className={`studio-project studio-project-${i}`} key={p.name}><div className="studio-project-image"><img src={p.image} alt={p.alt} loading="lazy" /></div><div><span>{p.kind}</span><h3>{p.name}</h3><p>{p.description}</p><p className="studio-project-detail">{p.detail}</p><a className="proto-text-link" href={p.href}>{p.action}</a></div></article>)}<details className="studio-more"><summary>More projects</summary>{projects.slice(3).map(p => <article key={p.name}><h3><a href={p.href}>{p.name}</a></h3><p>{p.description}</p></article>)}</details></section><Background /></main><Contact /></div></div>
}

const bookDrawings: Record<string, string> = {
  '8': 'M10 7h22v32H10z M15 15h12 M15 21h7 M15 29l4 4 13-14 M35 7v7 M32 10h6',
  '9': 'M5 18h5v12H5z M10 14h6v20h-6z M16 24h16 M32 14h6v20h-6z M38 18h5v12h-5z',
  '6': 'M8 8v31h33 M12 33l25-21 M15 28h.1 M21 29h.1 M25 19h.1 M31 20h.1 M36 10h.1',
  '4': 'M27 5L12 26h12l-3 17 15-24H24z',
  '5': 'M24 7a4 4 0 1 0 .1 0 M24 15v15 M13 22l11-5 11 5 M24 30l-9 11 M24 30l9 11 M6 15q-5 9 0 18 M42 15q5 9 0 18',
  '7': 'M14 11v24 M14 27c0-13 20-3 20-16 M10 7h8v8h-8z M10 35h8v8h-8z M30 3h8v8h-8z',
  parable: 'M24 41V21 M24 29C9 28 7 16 7 12c13 0 17 8 17 17 M24 23C24 10 34 7 41 7c0 11-7 16-17 16',
  disney: 'M7 39V22h9v17 M16 39V15h16v24 M32 39V22h9v17 M19 15l5-8 5 8 M24 7V2l8 3-8 2 M22 39v-8h4v8 M5 39h38',
  meditations: 'M7 14l17-9 17 9z M9 19h30 M12 19v19 M20 19v19 M28 19v19 M36 19v19 M7 38h34 M5 43h38',
  andromeda: 'M24 9l13 8v15l-13 8-13-8V17z M24 9V3 M37 17l6-4 M37 32l6 4 M24 40v5 M11 32l-6 4 M11 17l-6-4 M20 22h.1 M29 27h.1 M21 31h.1',
  atomic: 'M9 29a16 16 0 0 1 27-16 M36 5v8h-8 M39 19A16 16 0 0 1 12 35 M12 43v-8h8 M18 24l4 4 8-9',
}
function BookDrawing({ kind }: { kind: string }) {
  return <svg className="book-drawing" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={bookDrawings[kind]}/></svg>
}

export function VariantWorkbench() {
  const [selected, setSelected] = useState<number | null>(null)
  const dialog = useRef<HTMLDialogElement>(null)
  useEffect(() => { if (selected !== null) dialog.current?.showModal() }, [selected])
  return <div className="proto-workbench">
    <header className="bench-header"><a href="#top">Atherv Vidhate</a><Navigation /><a href="/Atherv_Vidhate_Resume.pdf">Resume</a></header>
    <main>
      <section className="bench-intro"><div><div className="bench-person"><img src="/atherv-canyon.jpeg" alt="Atherv Vidhate" /><p>Hey, I'm Atherv.<br /><span>Data science at UC San Diego.</span></p></div><h1>A few things<br />on my desk.</h1></div><div className="bench-intro-aside"><p>A post-discharge companion. Music recommendations. Models built from scratch.</p><p>I build things with data. Here's a look at what that actually means.</p><a href="#experience">Currently at Keysight Technologies</a></div></section>
      <section id="work" className="bench-work"><WorkbenchScene openProject={setSelected} /></section>
      <section className="project-bookshelf" aria-labelledby="shelf-title">
        <div className="shelf-heading"><h2 id="shelf-title">A little further reading.</h2><p>Side projects, past work, and my reading shelf.<br />Pick one up.</p></div>
        {[[8,9,6],[4,5,7]].map((row,rowIndex)=><div className="shelf-row" key={rowIndex}>
          <div className="shelf-contents">
            <div className="shelf-plank shelf-mobile-plank" aria-hidden="true"/>
            {row.map(i=><button className={`shelf-project shelf-project-${i}`} key={i} onClick={()=>setSelected(i)}><span className="book-category">{projects[i].kind}</span><BookDrawing kind={String(i)}/><strong>{projects[i].name}</strong><span className="book-open">Open project ↗</span></button>)}
            {rowIndex===0 ? <div className="shelf-books" aria-label="On my reading shelf"><span className="reading-parable">Parable of the Sower<BookDrawing kind="parable"/></span><span className="reading-disney" tabIndex={0}>Disney War<i className="reading-bookmark">Currently reading</i><BookDrawing kind="disney"/></span><span className="reading-meditations">Meditations<BookDrawing kind="meditations"/></span></div> : <div className="shelf-books" aria-label="More books I have read"><span className="reading-andromeda">The Andromeda Strain<BookDrawing kind="andromeda"/></span><span className="reading-atomic">Atomic Habits<BookDrawing kind="atomic"/></span></div>}
          </div><div className="shelf-plank" aria-hidden="true" />
        </div>)}
      </section>
      <Background />
    </main><Contact />
    <dialog ref={dialog} className="bench-dialog" aria-labelledby="bench-dialog-title" onClose={()=>setSelected(null)}>
      <button className="bench-close" autoFocus onClick={()=>dialog.current?.close()}>Close <span aria-hidden="true">×</span></button>
      {selected !== null && <article><span>{projects[selected].kind}</span><h2 id="bench-dialog-title">{projects[selected].name}</h2>{projects[selected].image && <img src={projects[selected].image} alt={projects[selected].alt} />}<p>{projects[selected].detail}</p><p className="project-tools">{projects[selected].tools}</p><a className="proto-solid-link" href={projects[selected].href}>{projects[selected].action}</a></article>}
    </dialog>
  </div>
}

// Synthetic points for a small teaching example, unrelated to project results.
const demoPoints = [[1,2], [2,2.4], [3,4.1], [4,4.4], [5,6.2], [6,6.1], [7,7.9], [8,8.4], [9,10]]
export function VariantPlayground() {
  const [slope, setSlope] = useState(0.4)
  const [residuals, setResiduals] = useState(true)
  const error = demoPoints.reduce((sum,[x,y])=>sum + (y - (slope*x+0.8))**2,0)/demoPoints.length
  const fit = demoPoints.reduce((sum,[x,y])=>sum+x*(y-0.8),0)/demoPoints.reduce((sum,[x])=>sum+x*x,0)
  return <div className="proto-playground">
    <header className="play-header"><a href="#top">atherv<span aria-hidden="true">*</span></a><Navigation /><span>San Diego, CA</span></header>
    <main><section className="play-intro"><div className="play-intro-copy"><p>Data science student. Machine learning engineer.</p><h1>A little<br />less abstract.</h1><p>I'm Atherv Vidhate. I build models and the software around them. Start with a small one.</p><a href="#work" className="play-work-link">Or go straight to the work <span aria-hidden="true">↙</span></a></div>
      <section className="play-experiment" aria-labelledby="experiment-title"><div className="experiment-heading"><h2 id="experiment-title">Can you fit the line?</h2><span>Try it</span></div><p>Move the slider. Get the line close to the dots.</p>
        <svg className="regression-plot" viewBox="0 0 460 300" role="img" aria-label={`Synthetic scatter plot. Line slope ${slope.toFixed(2)}. Mean squared error ${error.toFixed(2)}.`}>
          <defs><clipPath id="plot-clip"><rect x="35" y="15" width="405" height="250" /></clipPath></defs>
          {[1,3,5,7,9].map(n=><g key={n}><line x1="35" x2="440" y1={265-n*22} y2={265-n*22} stroke="#c9d3c8" /><text x="16" y={270-n*22} fontSize="10" fill="#4c6054">{n}</text><text x={35+n*40} y="286" fontSize="10" fill="#4c6054">{n}</text></g>)}
          <path d="M35 15V265H440" fill="none" stroke="#617067" />
          <g clipPath="url(#plot-clip)">{residuals && demoPoints.map(([x,y])=><line key={x} x1={35+x*40} x2={35+x*40} y1={265-y*22} y2={265-(slope*x+0.8)*22} stroke="#ad623c" strokeWidth="2" strokeDasharray="3 4" />)}<line x1="35" y1={265-0.8*22} x2="435" y2={265-(slope*10+0.8)*22} stroke="#233faa" strokeWidth="4" />{demoPoints.map(([x,y])=><circle key={x} cx={35+x*40} cy={265-y*22} r="6" fill="#233faa" stroke="#f5f4c6" strokeWidth="2" />)}</g>
        </svg>
        <div className="experiment-readout"><label htmlFor="line-slope">Slope <output>{slope.toFixed(2)}</output></label><span>Mean squared error <output>{error.toFixed(2)}</output></span></div>
        <input id="line-slope" type="range" min="0" max="1.6" step="0.01" value={slope} onChange={e=>setSlope(Number(e.target.value))} />
        <div className="experiment-actions"><label><input type="checkbox" checked={residuals} onChange={e=>setResiduals(e.target.checked)} /> Show errors</label><button onClick={()=>setSlope(fit)}>Fit it for me</button></div>
        <p className="experiment-caption">Illustrative data, with the intercept fixed at 0.8. Try my <a href={projects[6].href}>regression project</a>.</p>
      </section>
    </section>
    <div className="play-current"><img src="/atherv-canyon.jpeg" alt="Atherv Vidhate" /><p>Currently at Keysight Technologies.<br /><span>Building demand forecasting and anomaly detection systems.</span></p><a href="/Atherv_Vidhate_Resume.pdf">My resume</a></div>
    <section id="work" className="play-projects"><div className="play-projects-heading"><h2>Things I've<br />put together.</h2><p>Open a project to see<br />what went into it.</p></div>{projects.map((p,i)=><details key={p.name} className={`play-drawer play-drawer-${i%4}`} open={i===0 ? true : undefined}><summary><span>{p.name}</span><small>{p.kind}</small><span className="drawer-cross" aria-hidden="true">+</span></summary><div className="play-drawer-body"><div><h3>{p.description}</h3><p>{p.detail}</p><p className="project-tools">{p.tools}</p><a className="proto-text-link" href={p.href}>{p.action}</a></div>{p.image && <img src={p.image} alt={p.alt} loading="lazy" />}</div></details>)}</section>
    <Background /></main><Contact />
  </div>
}

export function WorkbenchPortfolio() {
  return <div className="portfolio-prototype" id="top"><a className="prototype-skip" href="#work">Skip to projects</a><VariantWorkbench /></div>
}

export default function PortfolioPrototype() {
  const readVariant = () => {
    const value = new URLSearchParams(window.location.search).get('variant')
    return Math.max(0, directions.findIndex(d => d.id === value))
  }
  const [current, setCurrent] = useState(readVariant)
  const [showNotes, setShowNotes] = useState(false)
  const change = (next: number) => {
    const value = (next + directions.length) % directions.length
    const url = new URL(window.location.href)
    url.searchParams.set('variant', directions[value].id)
    url.hash = ''
    window.history.pushState({}, '', url)
    setCurrent(value)
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior })
  }
  useEffect(() => {
    const onPop = () => setCurrent(readVariant())
    const onKey = (event: KeyboardEvent) => {
      if ((event.target as HTMLElement).closest('input, textarea, select, [contenteditable], [role="slider"], dialog') || event.altKey || event.ctrlKey || event.metaKey) return
      if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
        event.preventDefault()
        change(current + (event.key === 'ArrowRight' ? 1 : -1))
      }
    }
    window.addEventListener('popstate', onPop)
    window.addEventListener('keydown', onKey)
    return () => { window.removeEventListener('popstate', onPop); window.removeEventListener('keydown', onKey) }
  }, [current])
  return <div className="portfolio-prototype" id="top"><a className="prototype-skip" href="#work">Skip to projects</a>{current === 0 ? <VariantAtlas /> : current === 1 ? <VariantIndex /> : current === 2 ? <VariantStudio /> : current === 3 ? <VariantWorkbench /> : <VariantPlayground />}{import.meta.env.DEV && <div className="prototype-controls"><div className="prototype-note" hidden={!showNotes}><strong>{directions[current].name}</strong><p>{directions[current].note}</p><p>Draft design using existing portfolio content. Switch with the arrows or your keyboard.</p><a href="/">View the original site</a></div><div className="prototype-bar"><span className="prototype-tag">Design preview</span><button onClick={() => change(current - 1)} aria-label="Previous design">←</button><select className="prototype-select" aria-label="Design option" value={current} onChange={e=>change(Number(e.target.value))}>{directions.map((d,i)=><option key={d.id} value={i}>{i+1}. {d.name}</option>)}</select><div className="prototype-choices">{directions.map((d, i) => <button key={d.id} onClick={() => change(i)} aria-pressed={i === current}><span className="choice-number">{i + 1}</span> {d.name}</button>)}</div><button onClick={() => change(current + 1)} aria-label="Next design">→</button><button onClick={() => setShowNotes(!showNotes)} aria-expanded={showNotes} aria-label="About this design" className="prototype-info">i</button></div><span className="prototype-sr" aria-live="polite">{directions[current].name}. {directions[current].note}</span></div>}</div>
}
