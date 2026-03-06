import { useState, useEffect } from "react"
import Typewriter from 'typewriter-effect'

export default function Portfolio() {
  const messages = [
    "I'm a student at UC San Diego (go tritons!)",
    "I'm studying data science",
    "I analyze data to find insights",
    "I build predictive models",
    "I love machine learning and AI",
    "A bit about me:",
    "I'm honestly a huge tech nerd",
    "I've jailbroken every single device I've owned",
    "Gotten super into house music nowadays",
    "May have tinnitus...",
    "Thanks for visiting!",
    "I'm a student at UC San Diego (go tritons!)",
    "I'm studying data science",
    "I analyze data to find insights",
    "I build predictive models",
    "I love machine learning and AI",
    "A bit about me:",
    "I'm honestly a huge tech nerd",
    "I've jailbroken every single device I've owned",
    "Gotten super into house music nowadays",
    "May have tinnitus...",
    "Thanks for visiting!",
    "...",
    "if you made it this far, here's a little easter egg",
    "https://www.tiktok.com/t/ZP8hme11u/"
  ]

  const projects = [
    {
      title: "Concert Scout AI",
      description: "Designed and launched an AI-powered concert recommendation platform for 150+ users, building a multi-agent system to deliver personalized suggestions with scalable infrastructure, session management and analytics.",
      tech: ["Python", "FastAPI", "Redis", "Next.js", "Google ADK"],
      github: "https://github.com/athervvidhate/ConcertScoutAI",
      demo: "https://concertscout.app",
      image: "/concertscout.png",
    },
    {
      title: "Fitness Program Recommendation System",
      description: "Web app recommending full workout programs from a 600k+ row dataset using fine-tuned ALBERT/RoBERTa sentence embeddings, cosine similarity, and K-Means clustering. Dockerized and deployed on GCP.",
      tech: ["Python", "Docker", "GCP", "Transformers", "scikit-learn", "Streamlit"],
      github: "https://github.com/athervvidhate/liftingML",
      demo: "https://www.workout.atherv.com",
      temporarilyDown: true,
      image: "/lifting.png",
    },
    {
      title: "Power Outage Analysis",
      description: "Cleaned and engineered features from a power outage dataset, using one-hot encoding, hyperparameter tuning, and cross-validation to build Random Forest models predicting outage severity with a 15% accuracy improvement.",
      tech: ["Python", "scikit-learn", "Hypothesis Testing", "Data Science Lifecycle"],
      demo: "https://atherv.com/poweroutageanalysis",
      image: "/poweroutages.png",
    },
    {
      title: "Multiple Linear Regression from Scratch",
      description: "Built a multiple linear regression model from scratch using gradient descent and train/test split evaluation. Deployed on Streamlit so users can input their own data and visualize predictions live.",
      tech: ["Python", "NumPy", "Pandas", "Linear Algebra", "Streamlit"],
      github: "https://github.com/athervvidhate/linear-regression",
      demo: "https://atherv.com/linreg",
      image: "/linreg.png",
    },
    {
      title: "Body Sway Research Lab",
      description: "Interactive data visualization exploring how body sway affects balance and posture, with animated scrollytelling and real-time statistical analysis through permutation testing.",
      tech: ["JavaScript", "D3.js", "Statistical Analysis"],
      github: "https://github.com/athervvidhate/bodysway",
      demo: "https://atherv.com/bodyswaylab",
      image: "/bodysway.png",
    },
    {
      title: "MiniGit",
      description: "Custom version control system implementing 10+ Git commands with Hashmaps and serialization for efficient data persistence and version tracking.",
      tech: ["Java", "Version Control", "System Architecture"],
      github: "https://github.com/athervvidhate/MiniGit",
      image: "/minigit.png",
    },
  ]

  const education = {
    degree: "B.S. Data Science, Minor in Business Analytics",
    school: "UC San Diego",
    expectedGrad: "March 2027",
    gpa: "3.90",
  }

  const courseGroups = [
    {
      label: "Data Science",
      courses: ["Systems for Scalable Analytics (DSC 102)", "Practice of Data Science (DSC 80)", "Theoretical Foundations of Data Science (DSC 40A/40B)", "Data Structures and Algorithms (DSC 30)", "Principles of Data Science (DSC 20)", "Introduction to Data Science (DSC 10)"],
    },
    {
      label: "Machine Learning",
      courses: ["Representation Learning (DSC 140B)*", "Probabilistic Modeling & Machine Learning (DSC 140A)", "Recommender Systems & Web Mining (CSE 158)"],
    },
    {
      label: "Mathematics",
      courses: ["Data Analysis and Inference (MATH 189)*", "Probability and Statistics (MATH 183)", "Introduction to Probability (MATH 180A)", "Linear Algebra (MATH 18)", "Calculus (MATH 20C)"],
    },
    {
      label: "Business Analytics",
      courses: ["Advanced Business Analytics (MGT 155)*", "Information Technology - Business Analytics (MGT 153)", "Business Analytics (MGT 151)"],
    },
  ]

  const experience = [
    {
      title: "AI Research & Development Intern",
      organization: "Intellinum",
      period: "Jan 2026 – Present",
      bullets: [],
    },
    {
      title: "Full-Stack Developer Intern",
      organization: "Nexa Tax",
      period: "Aug 2025 – Dec 2025",
      bullets: [
        "Delivered 95% structured data extraction accuracy in production-grade AI tax processing system with 100+ PDF documents processed through RAG pipeline.",
        "Optimized computer vision pipeline achieving 60% reduction in processing time through YOLO object detection and multimodal LLM architecture, with 100% uptime for 1000+ concurrent users.",
        "Engineered scalable Flask REST API with LangChain and LangGraph state management, implementing 8+ endpoints for chatbot interaction and conversation history tracking.",
      ],
    },
    {
      title: "Software Engineer Intern",
      organization: "smartQED",
      period: "Apr 2025 – Aug 2025",
      bullets: [
        "Fine-tuned a diagnostic LLM on 200+ complex technical reports, reducing root cause resolution time by 40% across product support cases.",
        "Integrated an AI analytics agent with remote SQLite database via Model Context Protocol, enabling real-time analysis pipelines.",
        "Constructed a high-fidelity dataset for LLM training by sourcing, cleaning, and structuring over 2GB of raw aviation incident data.",
      ],
    },
    {
      title: "Economics Lab Research Assistant",
      organization: "UC San Diego Economics Department",
      period: "Apr 2025 – Aug 2025",
      bullets: [
        "Engineered an open-source data pipeline using the Library of Congress API to extract over 100,000 entries on historical newspaper coverage of 19th-century presidential campaigns.",
        "Analyzed relationships between historical newspaper titles using directed graphs and connected components analysis to identify and group over 300 related publications.",
        "Developed Python scripts with API pagination and error recovery logic, ensuring 100% data retrieval completion.",
      ],
    },
    {
      title: "Associate",
      organization: "Triton Consulting Group",
      period: "Jan 2024 – Present",
      bullets: [
        "Audited client's product analytics platform and built a scalable, client-facing tagging infrastructure with 100+ unique tags across 20 categorized workflows.",
        "Initiated and led a targeted outreach campaign connecting with 40+ regional companies, securing new partnerships and increasing project engagement by over 15%.",
        "Designed and delivered an interactive Tableau dashboard analyzing member demographics, retention patterns, and growth opportunities.",
      ],
    },
    {
      title: "Historian",
      organization: "Tau Kappa Epsilon",
      period: "Sep 2024 – Present",
      bullets: [
        "Built alumni engagement portal using Next.js and React to support donations, networking, and chapter history access for 1000+ members.",
        "Implemented software development lifecycle practices including conventional commits and code review standards.",
      ],
    },
  ]

  const [activeTab, setActiveTab] = useState("experience")
  const [showHeader, setShowHeader] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(true)

  useEffect(() => {
    const saved = localStorage.getItem("theme")
    if (saved) setIsDarkMode(saved === "dark")
  }, [])

  useEffect(() => {
    localStorage.setItem("theme", isDarkMode ? "dark" : "light")
    document.documentElement.classList.toggle("dark", isDarkMode)
  }, [isDarkMode])

  useEffect(() => {
    const onScroll = () => setShowHeader(window.scrollY > window.innerHeight * 0.8)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const scrollToAbout = () =>
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })

  const toggleTheme = () => setIsDarkMode((p) => !p)

  const SectionLabel = ({ number, title }: { number: string; title: string }) => (
    <div className="flex items-center gap-4 mb-12">
      <span className="font-mono text-sm font-bold text-acid">{number}</span>
      <div className="flex-1 h-px bg-black dark:bg-white opacity-20" />
      <span className="font-mono text-xs font-bold tracking-[0.25em] uppercase text-black dark:text-white opacity-50">
        {title}
      </span>
    </div>
  )

  return (
    <>
      {/* ── Sticky header ── */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200
          bg-white dark:bg-black border-b-2 border-black dark:border-white
          ${showHeader ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2 pointer-events-none"}`}
      >
        <div className="px-6 sm:px-10 h-11 flex items-center justify-end">
          <nav className="flex items-center gap-6 sm:gap-8">
            {[
              { label: "About", href: "#about" },
              { label: "Experience", href: "#education" },
              { label: "Projects", href: "#projects" },
            ].map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="font-mono text-xs font-bold uppercase tracking-widest text-black dark:text-white opacity-50 hover:opacity-100 transition-opacity"
              >
                {l.label}
              </a>
            ))}
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="font-mono text-xs font-bold uppercase tracking-widest text-black dark:text-white opacity-50 hover:opacity-100 transition-opacity"
            >
              {isDarkMode ? "Light" : "Dark"}
            </button>
          </nav>
        </div>
      </header>

      {/* ── Page ── */}
      <div className="bg-white dark:bg-black min-h-screen">

        {/* ════ HERO ════ */}
        <section className="min-h-screen flex flex-col px-6 sm:px-10 pt-16 pb-10 border-b-2 border-black dark:border-white">

          {/* Top bar */}
          <div className="flex items-center justify-between mb-auto pb-10">
            <span className="font-mono text-xs font-bold tracking-[0.3em] uppercase text-black dark:text-white opacity-40">
              Portfolio — 2026
            </span>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-acid flex-shrink-0" />
              <span className="font-mono text-xs text-black dark:text-white opacity-50">
                AI R&D @ Intellinum
              </span>
            </div>
          </div>

          {/* Name block — fills available vertical space */}
          <div className="flex-1 flex flex-col justify-center py-4">
            <h1
              className="font-display leading-none tracking-tight text-black dark:text-white select-none"
              style={{ fontSize: "clamp(4.5rem, 18vw, 14rem)" }}
            >
              ATHERV
            </h1>
            <h1
              className="font-display leading-none tracking-tight text-stroke select-none"
              style={{ fontSize: "clamp(4.5rem, 18vw, 14rem)" }}
            >
              VIDHATE
            </h1>
          </div>

          {/* Info strip */}
          <div className="border-t-2 border-black dark:border-white pt-5 pb-5">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap items-center gap-x-5 gap-y-1">
                <span className="font-mono text-xs font-bold uppercase tracking-widest text-black dark:text-white opacity-40">
                  Data Science
                </span>
                <span className="font-mono text-xs text-black dark:text-white opacity-20">—</span>
                <span className="font-mono text-xs font-bold uppercase tracking-widest text-black dark:text-white opacity-40">
                  UC San Diego
                </span>
                <span className="font-mono text-xs text-black dark:text-white opacity-20">—</span>
                <span className="font-mono text-xs font-bold uppercase tracking-widest text-black dark:text-white opacity-40">
                  San Diego, CA
                </span>
              </div>
              <div className="font-mono text-sm text-black dark:text-white opacity-50 h-6 flex items-center">
                <Typewriter
                  options={{
                    strings: messages,
                    autoStart: true,
                    loop: true,
                    deleteSpeed: 40,
                    delay: 75,
                    cursor: "_",
                    cursorClassName: "text-acid opacity-100",
                  }}
                />
              </div>
            </div>
          </div>

          {/* Bottom: CTAs + stats */}
          <div className="flex flex-wrap items-end justify-between gap-6 pt-5 border-t-2 border-black dark:border-white">
            {/* CTAs */}
            <div className="flex flex-wrap gap-3">
              <button
                onClick={scrollToAbout}
                className="px-6 py-2.5 bg-acid text-black font-bold text-sm uppercase tracking-widest hover:bg-yellow-300 active:scale-95 transition-all duration-100"
              >
                Learn More ↓
              </button>
              <a
                href="/Atherv_Vidhate_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2.5 border-2 border-black dark:border-white text-black dark:text-white font-bold text-sm uppercase tracking-widest hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black active:scale-95 transition-all duration-100"
              >
                Resume →
              </a>
            </div>

            {/* Stats */}
            <div className="flex items-center gap-6 sm:gap-10">
              {[
                { value: "3.9", label: "GPA" },
                { value: "6+", label: "Projects" },
                { value: "3", label: "Internships" },
              ].map((s, i) => (
                <div key={s.label} className="flex items-center gap-6 sm:gap-10">
                  {i > 0 && <div className="w-px h-8 bg-black dark:bg-white opacity-20" />}
                  <div className="text-right">
                    <div className="font-display text-4xl sm:text-5xl leading-none text-black dark:text-white">
                      {s.value}
                    </div>
                    <div className="font-mono text-[9px] font-bold tracking-[0.3em] uppercase text-black dark:text-white opacity-40 mt-1">
                      {s.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════ ABOUT ════ */}
        <section id="about" className="px-6 sm:px-10 py-20 border-b-2 border-black dark:border-white">
          <div className="max-w-6xl mx-auto">
            <SectionLabel number="#01" title="About" />

            <div className="grid lg:grid-cols-[1fr_320px] gap-12 lg:gap-16">

              {/* Left: bio */}
              <div>
                <p className="text-2xl sm:text-3xl font-light leading-snug text-black dark:text-white mb-6">
                  I build ML systems and data pipelines end-to-end, from raw data to deployed product. I'm drawn to problems where the model isn't the hard part; the infrastructure, iteration, and judgment around it are.
                </p>
                <p className="font-mono text-sm leading-relaxed text-black dark:text-white opacity-50 mb-10">
                  I've shipped production AI at two startups and done research at UCSD. I care about the whole lifecycle: how data gets collected, how models get evaluated, and how systems stay reliable under load. Working across the full stack changes how you think about modeling. My focus right now is on LLM systems, agentic workflows, and the infrastructure that makes them production-ready.
                </p>

                {/* Skills */}
                <div className="border-t-2 border-black dark:border-white pt-8">
                  <p className="font-mono text-[9px] font-bold tracking-[0.3em] uppercase text-black dark:text-white opacity-40 mb-4">Skills</p>
                  <div className="flex flex-wrap gap-2">
                    {["Python", "SQL", "Java", "JavaScript", "scikit-learn", "PyTorch", "TensorFlow", "Dask", "Git", "Docker", "AWS", "Redis", "Tableau"].map((s) => (
                      <span
                        key={s}
                        className="font-mono text-xs font-bold uppercase tracking-wider border border-black dark:border-white text-black dark:text-white opacity-60 px-2.5 py-1 hover:opacity-100 hover:bg-acid hover:border-acid hover:text-black transition-all duration-100"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right: photo + contact */}
              <div className="flex flex-col gap-8">
                {/* Photo — no rounding, stark border */}
                <div className="border-2 border-black dark:border-white overflow-hidden aspect-square">
                  <img
                    src="/photo.jpeg"
                    alt="Atherv Vidhate"
                    className="w-full h-full object-cover object-top"
                    loading="lazy"
                    decoding="async"
                  />
                </div>

                {/* Currently */}
                <div className="border-l-2 border-acid pl-4">
                  <p className="font-mono text-[9px] font-bold tracking-[0.3em] uppercase text-black dark:text-white opacity-40 mb-1">Currently</p>
                  <p className="font-bold text-sm text-black dark:text-white">AI Research & Development Intern</p>
                  <p className="font-mono text-xs text-black dark:text-white opacity-50 mt-0.5">Intellinum · Jan 2026 – Present</p>
                </div>

                {/* Contact */}
                <div>
                  <p className="font-mono text-[9px] font-bold tracking-[0.3em] uppercase text-black dark:text-white opacity-40 mb-3">Contact</p>
                  <div className="space-y-2">
                    {[
                      { label: "github.com/athervvidhate", href: "https://github.com/athervvidhate", ext: true },
                      { label: "athervvidhate@gmail.com", href: "mailto:athervvidhate@gmail.com", ext: false },
                      { label: "linkedin.com/in/athervvidhate", href: "https://linkedin.com/in/athervvidhate", ext: true },
                      { label: "Resume PDF →", href: "/Atherv_Vidhate_Resume.pdf", ext: true },
                    ].map((l) => (
                      <a
                        key={l.label}
                        href={l.href}
                        target={l.ext ? "_blank" : undefined}
                        rel={l.ext ? "noopener noreferrer" : undefined}
                        className="block font-mono text-xs text-black dark:text-white opacity-50 hover:opacity-100 hover:text-acid dark:hover:text-acid transition-all truncate"
                      >
                        {l.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ════ EXPERIENCE & EDUCATION ════ */}
        <section id="education" className="px-6 sm:px-10 py-20 border-b-2 border-black dark:border-white">
          <div className="max-w-6xl mx-auto">
            <SectionLabel number="#02" title="Background" />

            {/* Tabs — brutalist toggle */}
            <div className="flex gap-0 border-2 border-black dark:border-white mb-12 w-fit">
              {[
                { id: "experience", label: "Experience" },
                { id: "education", label: "Education" },
              ].map((tab, i) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-5 py-2 font-mono text-xs font-bold uppercase tracking-widest transition-all duration-100
                    ${i > 0 ? "border-l-2 border-black dark:border-white" : ""}
                    ${activeTab === tab.id
                      ? "bg-acid text-black"
                      : "bg-transparent text-black dark:text-white opacity-40 hover:opacity-70"
                    }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Experience */}
            {activeTab === "experience" && (
              <div className="space-y-0">
                {experience.map((item, i) => (
                  <div
                    key={i}
                    className={`grid sm:grid-cols-[180px_1fr] gap-4 sm:gap-10 py-8
                      ${i < experience.length - 1 ? "border-b border-black dark:border-white opacity-100" : ""}
                    `}
                    style={{ borderBottomOpacity: i < experience.length - 1 ? 0.15 : undefined }}
                  >
                    {/* Left: period + org */}
                    <div className="pt-0.5">
                      <p className="font-mono text-xs font-bold text-acid mb-1">{item.organization}</p>
                      <p className="font-mono text-xs text-black dark:text-white opacity-40">{item.period}</p>
                    </div>

                    {/* Right: title + bullets */}
                    <div>
                      <h4 className="font-bold text-sm uppercase tracking-wide text-black dark:text-white mb-3">
                        {item.title}
                      </h4>
                      {item.bullets.length > 0 && (
                        <ul className="space-y-2">
                          {item.bullets.map((b, j) => (
                            <li key={j} className="flex gap-3 font-mono text-xs leading-relaxed text-black dark:text-white opacity-50">
                              <span className="text-acid flex-shrink-0 mt-0.5 select-none">→</span>
                              <span>{b}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Education */}
            {activeTab === "education" && (
              <div>
                {/* Degree block */}
                <div className="border-2 border-black dark:border-white p-6 mb-12 flex flex-wrap items-start justify-between gap-6">
                  <div>
                    <h3 className="font-bold text-base uppercase tracking-wide text-black dark:text-white mb-1">
                      {education.degree}
                    </h3>
                    <p className="font-mono text-xs text-acid font-bold">{education.school}</p>
                    <p className="font-mono text-xs text-black dark:text-white opacity-40 mt-1">
                      Expected {education.expectedGrad}
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="font-display text-5xl leading-none text-black dark:text-white">
                      {education.gpa}
                    </div>
                    <div className="font-mono text-[9px] font-bold tracking-[0.3em] uppercase text-black dark:text-white opacity-40 mt-1">
                      GPA
                    </div>
                  </div>
                </div>

                {/* Coursework */}
                <p className="font-mono text-[9px] font-bold tracking-[0.3em] uppercase text-black dark:text-white opacity-40 mb-8">
                  Relevant Coursework
                </p>
                <div className="space-y-8">
                  {courseGroups.map((group) => (
                    <div key={group.label}>
                      <p className="font-mono text-xs font-bold text-acid mb-3">{group.label}</p>
                      <div className="grid sm:grid-cols-2 gap-2">
                        {group.courses.map((course) => (
                          <div
                            key={course}
                            className="font-mono text-xs text-black dark:text-white opacity-50 border border-black dark:border-white border-opacity-20 dark:border-opacity-20 px-3 py-2"
                          >
                            {course}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                  <p className="font-mono text-xs text-black dark:text-white opacity-30 italic">
                    * Course currently in progress
                  </p>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* ════ PROJECTS ════ */}
        <section id="projects" className="px-6 sm:px-10 py-20 border-b-2 border-black dark:border-white">
          <div className="max-w-6xl mx-auto">
            <SectionLabel number="#03" title="Work" />

            <div className="grid md:grid-cols-2 gap-0">
              {projects.map((project, i) => (
                <div
                  key={i}
                  className={`border-2 border-black dark:border-white
                    ${i % 2 === 1 ? "md:-ml-0.5" : ""}
                    ${i >= 2 ? "-mt-0.5" : ""}
                  `}
                >
                  {/* Card header: number + title */}
                  <div className="flex items-center justify-between border-b-2 border-black dark:border-white px-4 py-2">
                    <span className="font-display text-3xl leading-none text-acid">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-mono text-[9px] font-bold tracking-[0.25em] uppercase text-black dark:text-white opacity-30">
                      Project
                    </span>
                  </div>

                  {/* Image — object-contain, no cropping */}
                  <div className="aspect-video border-b-2 border-black dark:border-white bg-zinc-50 dark:bg-zinc-950 flex items-center justify-center p-3">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="max-w-full max-h-full object-contain"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <h3 className="font-bold text-sm uppercase tracking-wide text-black dark:text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="font-mono text-xs leading-relaxed text-black dark:text-white opacity-50 mb-4 line-clamp-3">
                      {project.description}
                    </p>

                    {/* Tech */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.tech.map((t, j) => (
                        <span
                          key={j}
                          className="font-mono text-[10px] font-bold uppercase tracking-wider border border-black dark:border-white text-black dark:text-white opacity-40 px-2 py-0.5"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex gap-4 pt-4 border-t-2 border-black dark:border-white border-opacity-20 dark:border-opacity-20">
                      {project.demo && (
                        project.temporarilyDown ? (
                          <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-black dark:text-white opacity-30 flex items-center gap-2">
                            <span className="w-1.5 h-1.5 bg-yellow-400 inline-block flex-shrink-0" />
                            Temporarily Down
                          </span>
                        ) : (
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-mono text-[10px] font-bold uppercase tracking-wider text-acid hover:opacity-70 transition-opacity"
                          >
                            View Project →
                          </a>
                        )
                      )}
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-mono text-[10px] font-bold uppercase tracking-wider text-black dark:text-white opacity-40 hover:opacity-100 transition-opacity"
                        >
                          GitHub →
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════ FOOTER ════ */}
        <footer className="px-6 sm:px-10 py-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <span className="font-display text-2xl tracking-wider text-black dark:text-white">
              ATHERV VIDHATE
            </span>
            <div className="flex flex-wrap items-center gap-6">
              {[
                { label: "GitHub", href: "https://github.com/athervvidhate", ext: true },
                { label: "LinkedIn", href: "https://linkedin.com/in/athervvidhate", ext: true },
                { label: "Email", href: "mailto:athervvidhate@gmail.com", ext: false },
              ].map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  target={l.ext ? "_blank" : undefined}
                  rel={l.ext ? "noopener noreferrer" : undefined}
                  className="font-mono text-xs font-bold uppercase tracking-widest text-black dark:text-white opacity-40 hover:opacity-100 hover:text-acid dark:hover:text-acid transition-all"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}
