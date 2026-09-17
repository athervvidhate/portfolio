import { useState } from "react"

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState<"all" | "experience" | "projects" | "education" | "skills">("all")
  const [copiedEmail, setCopiedEmail] = useState<boolean>(false)

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("athervvidhate@gmail.com")
    setCopiedEmail(true)
    setTimeout(() => setCopiedEmail(false), 2000)
  }

  const experience = [
    {
      title: "Machine Learning Engineer Intern",
      organization: "Keysight Technologies",
      period: "Jun 2026 - Present",
      summary: "Building demand anomaly detection pipelines with Isolation Forests, a seven-model PyOD ensemble, and LSTM autoencoders.",
      tech: "Python, PyTorch, PyOD, Isolation Forest, LSTM Autoencoders, Anomaly Detection",
    },
    {
      title: "AI Research & Development Intern",
      organization: "Intellinum",
      period: "Jan 2026 - Jun 2026",
      summary: "Built a six-agent system with Redis Streams and Claude to generate and test Oracle Fusion SCM changes without a manual development loop.",
      tech: "Python, Redis Streams, Claude API, Agentic Workflows, LLM Grounding",
    },
    {
      title: "Full-Stack Developer Intern",
      organization: "Nexa Tax",
      period: "Aug 2025 - Jan 2026",
      summary: "Reached 95% structured-field accuracy in a RAG document extraction pipeline and cut YOLO processing time by 60%.",
      tech: "Python, Flask, LangChain, LangGraph, YOLO, PyTorch, RAG, Docker",
    },
    {
      title: "Software Engineer Intern",
      organization: "smartQED",
      period: "Apr 2025 - Aug 2025",
      summary: [
        "Fine-tuned a diagnostic LLM on more than 200 technical reports, cutting root-cause resolution time by 40% across product support cases.",
        "Connected an AI analytics agent to a remote SQLite database through Model Context Protocol and demonstrated the analysis workflow to senior leadership.",
        "Built an LLM training dataset from more than 2 GB of aviation incident data for safety prediction models.",
      ],
      tech: "Python, LLM fine-tuning, Model Context Protocol, SQLite, Data Engineering",
    },
    {
      title: "Economics Lab Research Assistant",
      organization: "UC San Diego Economics Department",
      period: "Apr 2025 - Aug 2025",
      summary: "Built a Library of Congress data pipeline for more than 100,000 records and analyzed networks in historical media.",
      tech: "Python, Library of Congress API, Pandas, Network Analysis",
    },
  ]

  const projects = [
    {
      title: "Fitness Program Recommendation System",
      description: "Workout recommendation engine processing 600k+ rows with K-Means clustering, cosine similarity, and fine-tuned BERT embeddings. Dockerized on GCP.",
      tech: "Python, Docker, GCP, BERT Transformers, scikit-learn, Streamlit",
      github: "https://github.com/athervvidhate/liftingML",
      demo: "https://workout.atherv.com",
      demoLabel: "walkthrough",
    },
    {
      title: "Cadence",
      description: "At LA Hacks 2026, we built a post-discharge companion for heart failure patients. I built the OCR and PII-removal pipeline that turns discharge paperwork into a medication regimen for daily voice check-ins.",
      tech: "Python, Apple Vision, Gemma, Zetic, FastAPI, MongoDB",
      devpost: "https://devpost.com/software/cadence-ch4rmf",
    },
    {
      title: "Fire-Ready Forests",
      description: "LiDAR and field-data pipeline for estimating tree structure and species, producing labeled treelists for physics-based wildfire simulations.",
      tech: "Python, LiDAR, GeoPandas, scikit-learn, FastFuels",
      demo: "/fire-ready-forests",
      demoLabel: "case study",
    },
    {
      title: "Concert Scout AI",
      description: "AI concert recommendation platform for 300+ active users built with a multi-agent Gemini pipeline, FastAPI, Next.js, and Redis.",
      tech: "Python, FastAPI, Redis, Next.js, Google Gemini",
      github: "https://github.com/athervvidhate/ConcertScoutAI",
    },
    {
      title: "Power Outage Analysis",
      description: "End-to-end data science pipeline using Random Forests, hyperparameter tuning, and feature engineering to predict power outage severity (+15% accuracy).",
      tech: "Python, scikit-learn, Hypothesis Testing, Pandas",
      demo: "https://atherv.com/poweroutageanalysis",
    },
    {
      title: "Multiple Linear Regression from Scratch",
      description: "Custom linear regression engine built from first principles using matrix calculus and gradient descent, with a live interactive Streamlit dashboard.",
      tech: "Python, NumPy, Pandas, Linear Algebra, Streamlit",
      github: "https://github.com/athervvidhate/linear-regression",
      demo: "https://atherv.com/linreg",
    },
    {
      title: "Body Sway Research Lab",
      description: "Interactive data visualization investigating balance control and posture mechanics with animated scrollytelling and permutation testing.",
      tech: "JavaScript, D3.js, Statistical Analysis",
      github: "https://github.com/athervvidhate/bodysway",
      demo: "https://atherv.com/bodyswaylab",
    },
    {
      title: "MiniGit",
      description: "Custom Git version control system in Java implementing 10+ core Git subcommands with hash map key-value persistence.",
      tech: "Java, Version Control, System Architecture",
      github: "https://github.com/athervvidhate/MiniGit",
    },
  ]

  const courseGroups = [
    {
      label: "Data Science & Systems",
      courses: "DSC 102 (Scalable Analytics), DSC 80 (Practice of DS), DSC 40A/B (Theoretical Foundations), DSC 30 (Data Structures), DSC 20, DSC 10",
    },
    {
      label: "Machine Learning & AI",
      courses: "CSE 156 (Statistical NLP), CSE 153 (Machine Learning for Music), DSC 152 (Applied Statistical Data Analysis), DSC 140B (Representation Learning), DSC 140A (Probabilistic Modeling and ML), CSE 158 (Recommender Systems)",
    },
    {
      label: "Mathematics & Statistics",
      courses: "MATH 189 (Data Analysis & Inference), MATH 183 (Statistics), MATH 180A (Probability), MATH 18 (Linear Algebra), MATH 20C (Calculus III)",
    },
    {
      label: "Business Analytics",
      courses: "MGT 159T (Data Science with AI), MGT 155 (Advanced Business Analytics), MGT 153 (Information Technology and Business Analytics), MGT 151R (Business Analytics), MGT 71 (Operating Successful Business)",
    },
  ]

  const skillCategories = [
    {
      category: "Languages",
      items: [
        ["Python", "https://cdn.simpleicons.org/python/3f3f3f"],
        ["SQL", "https://cdn.simpleicons.org/postgresql/3f3f3f"],
        ["R", "https://cdn.simpleicons.org/r/3f3f3f"],
        ["Java", "https://cdn.simpleicons.org/openjdk/3f3f3f"],
        ["TypeScript", "https://cdn.simpleicons.org/typescript/3f3f3f"],
        ["JavaScript", "https://cdn.simpleicons.org/javascript/3f3f3f"],
        ["HTML", "https://cdn.simpleicons.org/html5/3f3f3f"],
        ["CSS", "https://cdn.simpleicons.org/css/3f3f3f"],
      ],
    },
    {
      category: "Frameworks & libraries",
      items: [
        ["scikit-learn", "https://cdn.simpleicons.org/scikitlearn/3f3f3f"],
        ["PyTorch", "https://cdn.simpleicons.org/pytorch/3f3f3f"],
        ["TensorFlow", "https://cdn.simpleicons.org/tensorflow/3f3f3f"],
        ["Apache Spark", "https://cdn.simpleicons.org/apachespark/3f3f3f"],
        ["LangChain", "https://cdn.simpleicons.org/langchain/3f3f3f"],
        ["pandas", "https://cdn.simpleicons.org/pandas/3f3f3f"],
        ["Matplotlib", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/matplotlib/matplotlib-original.svg"],
        ["NumPy", "https://cdn.simpleicons.org/numpy/3f3f3f"],
        ["Dask", "https://cdn.simpleicons.org/dask/3f3f3f"],
        ["FastAPI", "https://cdn.simpleicons.org/fastapi/3f3f3f"],
      ],
    },
    {
      category: "Tools & platforms",
      items: [
        ["Git", "https://cdn.simpleicons.org/git/3f3f3f"],
        ["Docker", "https://cdn.simpleicons.org/docker/3f3f3f"],
        ["AWS", "https://cdn.jsdelivr.net/npm/simple-icons@12.4.0/icons/amazonwebservices.svg"],
        ["Google Cloud", "https://cdn.simpleicons.org/googlecloud/3f3f3f"],
        ["Redis", "https://cdn.simpleicons.org/redis/3f3f3f"],
        ["PostgreSQL", "https://cdn.simpleicons.org/postgresql/3f3f3f"],
        ["Tableau", "https://cdn.jsdelivr.net/npm/simple-icons@12.4.0/icons/tableau.svg"],
        ["Power BI", "https://cdn.jsdelivr.net/npm/simple-icons@12.4.0/icons/powerbi.svg"],
        ["Excel", "https://cdn.jsdelivr.net/npm/simple-icons@12.4.0/icons/microsoftexcel.svg"],
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-[#ffffff] text-[#222222] selection:bg-[#333333] selection:text-white transition-colors duration-150">
      <main className="max-w-xl mx-auto px-5 py-14 sm:py-20 flex flex-col justify-between min-h-screen font-sans">
        <div>
          {/* Header section */}
          <section className="mb-10">
            {/* Avatar & Hero Text Inline */}
            <div className="flex items-center gap-4 sm:gap-5 mb-6">
              <img
                src="/atherv-canyon.jpeg"
                alt="Atherv Vidhate"
                className="w-24 h-24 sm:w-28 sm:h-28 rounded-xl object-cover object-[center_18%] border border-[#2a2a2a] shrink-0"
              />
              <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#111111]">
                hey, i’m atherv
              </h1>
            </div>

            <p className="text-sm sm:text-base leading-relaxed text-[#444444] mb-4">
              Data science and machine learning at UC San Diego. I currently build demand forecasting and anomaly detection systems at Keysight.
            </p>

            <div className="text-xs text-[#888888] mb-6">
              uc san diego • san diego, ca
            </div>

            {/* Links bar */}
            <div className="flex flex-wrap items-center gap-4 text-xs">
              <a
                href="https://github.com/athervvidhate"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#555555] hover:text-[#111111] underline underline-offset-4 decoration-[#cccccc] transition-colors"
              >
                github
              </a>
              <a
                href="https://linkedin.com/in/athervvidhate"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#555555] hover:text-[#111111] underline underline-offset-4 decoration-[#cccccc] transition-colors"
              >
                linkedin
              </a>
              <button
                onClick={handleCopyEmail}
                className="text-[#555555] hover:text-[#111111] underline underline-offset-4 decoration-[#cccccc] transition-colors cursor-pointer"
              >
                {copiedEmail ? "email copied!" : "email"}
              </button>
              <a
                href="/Atherv_Vidhate_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#555555] hover:text-[#111111] underline underline-offset-4 decoration-[#cccccc] transition-colors"
              >
                resume
              </a>
            </div>
          </section>

          {/* Section Filter Pills */}
          <div className="flex items-center gap-2 mb-8 text-xs">
            {[
              { id: "all", label: "all" },
              { id: "experience", label: "experience" },
              { id: "projects", label: "projects" },
              { id: "education", label: "education" },
              { id: "skills", label: "skills" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveSection(tab.id as typeof activeSection)}
                className={`px-2.5 py-1 rounded transition-colors text-xs font-medium ${
                  activeSection === tab.id
                    ? "bg-[#efefed] text-[#111111]"
                    : "text-[#888888] hover:text-[#333333]"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* EXPERIENCE SECTION */}
          {(activeSection === "all" || activeSection === "experience") && (
            <section className="mb-10">
              <div className="inline-block px-2.5 py-0.5 rounded bg-[#f1f1ef] text-xs font-semibold text-[#37352f] mb-4">
                Experience
              </div>

              <div className="space-y-4">
                {experience.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-2.5 -mx-2.5 rounded-md hover:bg-[#f5f5f4] transition-colors duration-150"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-x-3 gap-y-0.5 mb-1">
                      <div className="text-sm font-medium text-[#111111] leading-snug">
                        <span>{item.title}</span>
                        <span className="text-[#777777]"> @ </span>
                        <span>{item.organization}</span>
                      </div>
                      <span className="text-xs text-[#888888] font-normal shrink-0 whitespace-nowrap">
                        [{item.period}]
                      </span>
                    </div>

                    {Array.isArray(item.summary) ? (
                      <ul className="list-disc pl-4 space-y-1 text-xs text-[#666666] leading-relaxed">
                        {item.summary.map((point) => <li key={point}>{point}</li>)}
                      </ul>
                    ) : (
                      <p className="text-xs text-[#666666] leading-relaxed">{item.summary}</p>
                    )}

                    <div className="text-[11px] text-[#888888] mt-1.5">
                      {item.tech}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* PROJECTS SECTION */}
          {(activeSection === "all" || activeSection === "projects") && (
            <section className="mb-10">
              <div className="inline-block px-2.5 py-0.5 rounded bg-[#f1f1ef] text-xs font-semibold text-[#37352f] mb-4">
                Projects
              </div>

              <div className="space-y-4">
                {projects.map((project, idx) => (
                  <div
                    key={idx}
                    className="p-2.5 -mx-2.5 rounded-md hover:bg-[#f5f5f4] transition-colors duration-150"
                  >
                    <div className="flex items-baseline justify-between gap-x-3 text-sm font-medium mb-1">
                      <div className="text-[#111111]">
                        <span>{project.title}</span>
                      </div>

                      <div className="flex items-center gap-3 text-xs shrink-0 whitespace-nowrap">
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#666666] hover:text-[#111111] underline underline-offset-2 decoration-[#cccccc] transition-colors"
                          >
                            github
                          </a>
                        )}
                        {project.devpost && (
                          <a
                            href={project.devpost}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#666666] hover:text-[#111111] underline underline-offset-2 decoration-[#cccccc] transition-colors"
                          >
                            devpost
                          </a>
                        )}
                        {project.demo && (
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#666666] hover:text-[#111111] underline underline-offset-2 decoration-[#cccccc] transition-colors"
                          >
                            {project.demoLabel ?? "demo"}
                          </a>
                        )}
                      </div>
                    </div>

                    <p className="text-xs text-[#666666] leading-relaxed">
                      {project.description}
                    </p>

                    <div className="text-[11px] text-[#888888] mt-1.5">
                      {project.tech}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* EDUCATION SECTION */}
          {(activeSection === "all" || activeSection === "education") && (
            <section className="mb-10">
              <div className="inline-block px-2.5 py-0.5 rounded bg-[#f1f1ef] text-xs font-semibold text-[#37352f] mb-4">
                Education
              </div>

              <div className="p-2.5 -mx-2.5 rounded-md hover:bg-[#f5f5f4] transition-colors duration-150 mb-4">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-x-3 gap-y-0.5 text-sm font-medium">
                  <div className="text-[#111111]">
                    <span>University of California, San Diego</span>
                  </div>
                  <span className="text-xs text-[#888888] font-normal shrink-0 whitespace-nowrap">
                    [Expected Graduation: 2027]
                  </span>
                </div>
                <p className="text-xs text-[#555555] mt-1">
                  Bachelor of Science in Data Science, Minor in Business Analytics &bull; 3.91 GPA
                </p>
                <ul className="mt-2 list-disc pl-4 text-xs leading-relaxed text-[#666666]">
                  <li>
                    Tau Kappa Epsilon historian, Sep 2024 to present. Built a Next.js alumni portal for more than 1,000 members.
                  </li>
                </ul>
              </div>

              <div className="space-y-2.5">
                {courseGroups.map((group, idx) => (
                  <div key={idx} className="text-xs">
                    <span className="text-[#888888] font-medium mr-1.5">{group.label}:</span>
                    <span className="text-[#555555]">{group.courses}</span>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* SKILLS SECTION */}
          {(activeSection === "all" || activeSection === "skills") && (
            <section className="mb-10">
              <div className="inline-block px-2.5 py-0.5 rounded bg-[#f1f1ef] text-xs font-semibold text-[#37352f] mb-4">
                Skills
              </div>

              <div className="space-y-7">
                {skillCategories.map((group, idx) => (
                  <div key={idx}>
                    <p className="text-[11px] text-[#888888] font-medium mb-2">{group.category}</p>
                    <ul className="flex flex-wrap gap-1.5" aria-label={group.category}>
                      {group.items.map(([name, icon]) => (
                        <li
                          key={name}
                          tabIndex={0}
                          aria-label={name}
                          className="skill-icon group relative grid h-10 w-10 place-items-center rounded-md border border-[#e8e8e5] bg-[#fafaf9] outline-none"
                        >
                          <img src={icon} alt="" className="h-5 w-5 object-contain opacity-75" loading="lazy" />
                          <span className="pointer-events-none absolute left-1/2 top-full z-10 mt-1.5 -translate-x-1/2 whitespace-nowrap rounded bg-[#222222] px-2 py-1 text-[10px] text-white opacity-0 shadow-sm">
                            {name}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>

      </main>
    </div>
  )
}
