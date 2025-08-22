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


  const [activeTab, setActiveTab] = useState("education")
  const [showHeader, setShowHeader] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    // Check for saved theme preference or default to dark mode
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark');
    }
  }, []);

  useEffect(() => {
    // Save theme preference to localStorage
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    // Apply theme to document
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };



  useEffect(() => {
    const onScroll = () => {
      // Hero section is 100vh, so show header after scrolling 80vh
      setShowHeader(window.scrollY > window.innerHeight * 0.8);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({
      behavior: "smooth",
    })
  }

  const projects = [
    {
      title: 'Fitness Program Recommendation System',
      description: 'Built and deployed a web app that recommends full workout programs from a 600k+ row dataset of user generated workouts using fine‑tuned ALBERT/RoBERTa sentence embeddings, cosine similarity, and K‑Means clustering. Dockerized for easy deployment and deployed on GCP.',
      tech: ['Python', 'Docker', 'GCP', 'Transformers', 'scikit-learn', 'Streamlit'],
      github: 'https://github.com/athervvidhate/liftingML',
      demo: 'https://www.workout.atherv.com',
      walkthrough: 'https://workout-walkthrough.atherv.com',
      image: '/lifting.png',
    },
    {
      title: "Concert Scout AI",
      description: "Designed and launched an AI-powered concert recommendation platform for 150+ users, building a multi-agent system to deliver personalized suggestions and deploying scalable infrastructure with user session management and analytics tracking.",
      tech: ["Python", "FastAPI", "Redis", "Next.js", "Google ADK"],
      github: "https://github.com/athervvidhate/ConcertScoutAI",
      demo: "https://concertscout.app",
      image: "/concertscout.png",
    },
    {
      title: "Multiple Linear Regression from Scratch",
      description: "Built a multiple linear regression model from scratch, using gradient descent to optimize the model's parameters and train/test split to evaluate model performance. Deployed on Streamlit to allow users to learn about MLR and input their own data and see the model's predictions.",
      tech: ["Python", "NumPy", "Pandas", "Linear Algebra", "Streamlit"],
      github: "https://github.com/athervvidhate/linear-regression",
      demo: "https://atherv.com/linreg",
      image: "/linreg.png",
    },
    {
      title: "Power Outage Analysis",
      description: 'Cleaned and engineered features from power outage dataset and used techniques like one-hot encoding, hyperparameter tuning, and cross-validation to build optimized Random Forest models predicting outage severity, achieving a 15% accuracy improvement.',
      tech: ["Python", "scikit-learn", "Hypothesis Testing", "Data Science Lifecycle"],
      demo: "https://atherv.com/poweroutageanalysis",
      image: "/poweroutages.png",
    },
    {
      title: "Body Sway Research Lab",
      description: "Developed an interactive data visualization exploring how body sway affects balance and posture, featuring animated scrollytelling elements and real-time statistical analysis through permutation testing to validate research findings.",
      tech: ["JavaScript", "D3.js", "Statistical Analysis"],
      github: "https://github.com/athervvidhate/bodysway",
      demo: "https://atherv.com/bodyswaylab",
      image: "/bodysway.png",
    },
    {
      title: "MiniGit",
      description: "Developed a custom version control system, implementing 10+ Git commands with Hashmaps and serialization for efficient data persistence and version tracking.",
      tech: ["Java", "Version Control", "System Architecture"],
      github: "https://github.com/athervvidhate/MiniGit",
      image: "/minigit.png",
    },
  ]

  const education = {
    degree: "B.S. Data Science, Minor in Business Analytics",
    school: "UC San Diego",
    expectedGrad: "June 2027",
    gpa: "3.9",
    relevantCourses: [
        "Information Technology - Business Analytics (MGT 153)*",
        "Business Analytics (MGT 151)*",
        "Probabilistic Modeling & Machine Learning (DSC 140A)*",
        "Recommender Systems & Web Mining (CSE 158)*",
        "Systems for Scalable Analytics (DSC 102)",
        "Practice of Data Science (DSC 80)",
        "Theoretical Foundations of Data Science (DSC 40A/40B)",
        "Data Structures and Algorithms (DSC 30)",
        "Principles of Data Science (DSC 20)",
        "Introduction to Data Science (DSC 10)",
        "Probability and Statistics (MATH 183)",
        "Linear Algebra (MATH 18)",
        "Calculus (MATH 20A/20B/20C)",
    ],
  }

  const experience = [
    {
      title: "Software Engineer Intern",
      organization: "smartQED",
      period: "Jun 2025 - Present",
      description: "Fine-tuned a diagnostic LLM on 200+ complex technical reports, significantly improving the model’s reasoning capability and reducing root cause resolution time by 40% across product support cases.",
      description2: "Integrated an AI analytics agent with remote SQLite database via Model Context Protocol, enabling real-time analysis pipelines and showcasing next-gen automation frameworks to senior leadership.",
      description3: "Constructed a high-fidelity dataset for LLM training by sourcing, cleaning, and structuring over 2GB of raw aviation incident data to support high-accuracy safety prediction models."
    },
    {
      title: "Economics Lab Research Assistant",
      organization: "UC San Diego Economics Department",
      period: "Jan 2024 - Jul 2025",
      description: "Engineered an open source data pipeline using the Library of Congress API to extract over 100,000 entries on historical newspaper coverage of 19th-century presidential campaigns.",
      description2: "Analyzed relationships between historical newspaper titles by constructing directed graphs and applying connected components analysis to identify and group over 300 related publications.",
      description3: "Developed Python scripts with API pagination and error recovery logic, ensuring 100% data retrieval completion across multi-page JSON responses and optimizing network efficiency."
    },
    {
      title: "Associate",
      organization: "Triton Consulting Group",
      period: "Jan 2024 - Present",
      description: "Audited client's product analytics platform and built a scalable, client-facing tagging infrastructure with 100+ unique tags across 20 categorized workflows, enabling long-term data flexibility.",
      description2: "Initiated and led a targeted outreach campaign that connected with 40+ regional companies, securing new client partnerships and increasing project engagement by over 15%",
      description3: "Designed and delivered an interactive Tableau dashboard analyzing member demographics, retention patterns, and growth opportunities, driving data-backed engagement initiatives."
    },
    {
      title: "Active Member",
      organization: "Tau Kappa Epsilon",
      period: "Sep 2023 - Present",
      description: "Built Tau Kappa Epsilon alumni engagement portal using Next.js and React to support donations, networking, and access to chapter history for 1000+ members",
      description2: "Implemented software development lifecycle practices including conventional commits and code review standards to ensure high code quality.",
    },
  ]

  return (
    <>
      {/* Sticky Header that appears after scrolling past hero */}
      <div
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${showHeader ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8 pointer-events-none'} bg-white/70 dark:bg-neutral-900/80 backdrop-blur border-b border-neutral-200/30 dark:border-neutral-800/40`}
      >
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
          <span className="text-lg font-semibold bg-gradient-to-r from-amber-400 via-orange-400 to-rose-400 bg-clip-text text-transparent tracking-wide">Atherv Vidhate</span>
          <nav className="flex items-center space-x-3 sm:space-x-6">
            <a href="#about" className="text-gray-700 dark:text-neutral-200 hover:text-amber-500 dark:hover:text-amber-400 transition-colors duration-200 text-xs sm:text-sm font-medium">About Me</a>
            <a href="#education" className="text-gray-700 dark:text-neutral-200 hover:text-amber-500 dark:hover:text-amber-400 transition-colors duration-200 text-xs sm:text-sm font-medium">Education & Experience</a>
            <a href="#projects" className="text-gray-700 dark:text-neutral-200 hover:text-amber-500 dark:hover:text-amber-400 transition-colors duration-200 text-xs sm:text-sm font-medium">Projects</a>
            <button
              onClick={toggleTheme}
              className="p-1.5 sm:p-2 rounded-lg bg-neutral-200 dark:bg-neutral-700 hover:bg-neutral-300 dark:hover:bg-neutral-600 transition-colors duration-200"
              aria-label="Toggle theme"
            >
              {isDarkMode ? (
                <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                </svg>
              ) : (
                <svg className="w-5 h-5 text-gray-700" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              )}
            </button>
          </nav>
        </div>
      </div>
      <div className="min-h-screen bg-neutral-50 dark:bg-neutral-900 bg-grid">
        {/* Enhanced Full Screen Hero Section */}
        <div className="h-screen flex flex-col items-center justify-center px-4 relative overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            {/* Floating Data Points */}
            <div className="absolute top-20 left-10 w-2 h-2 bg-amber-400 rounded-full animate-pulse opacity-60"></div>
            <div className="absolute top-40 right-20 w-3 h-3 bg-orange-400 rounded-full animate-bounce opacity-40"></div>
            <div className="absolute bottom-40 left-20 w-1 h-1 bg-rose-400 rounded-full animate-ping opacity-80"></div>
            <div className="absolute top-60 left-1/4 w-2 h-2 bg-amber-300 rounded-full animate-pulse opacity-50"></div>
            <div className="absolute bottom-60 right-1/3 w-1 h-1 bg-orange-300 rounded-full animate-bounce opacity-70"></div>
            


            {/* Floating Code Elements */}
            <div className="absolute top-32 right-32 text-xs text-gray-700 dark:text-neutral-600 font-mono opacity-40 animate-float">
              <span className="text-blue-600 dark:text-blue-400">def</span> <span className="text-yellow-600 dark:text-yellow-300">analyze_data</span>()
            </div>
            <div className="absolute bottom-32 left-32 text-xs text-gray-700 dark:text-neutral-600 font-mono opacity-40 animate-float" style={{animationDelay: '2s'}}>
              <span className="text-green-600 dark:text-green-400">return</span> <span className="text-purple-600 dark:text-purple-400">insights</span>
            </div>
            <div className="absolute top-1/2 left-16 text-xs text-gray-700 dark:text-neutral-600 font-mono opacity-40 animate-float" style={{animationDelay: '4s'}}>
              <span className="text-blue-600 dark:text-blue-400">import</span> <span className="text-yellow-600 dark:text-yellow-300">pandas</span>
            </div>
          </div>

          {/* Main Content */}
          <div className="text-center max-w-4xl mx-auto relative z-10">
            {/* Enhanced Title with Gradient */}
            <h1 className="text-6xl md:text-8xl font-light mb-8 tracking-tight">
              <span className="text-gray-900 dark:text-white">
                Hello, I'm
              </span>
              <br />
              <span className="font-semibold bg-gradient-to-r from-amber-400 via-orange-400 to-rose-400 bg-clip-text text-transparent">
                Atherv
              </span>
            </h1>

            {/* Enhanced Typing Text with Typewriter JS */}
            <div className="h-20 md:h-24 flex items-center justify-center mb-8">
              <div className="relative">
                <div className="text-3xl md:text-4xl text-gray-600 dark:text-neutral-300 font-light">
                  <Typewriter
                    options={{
                      strings: messages,
                      autoStart: true,
                      loop: true,
                      deleteSpeed: 40,
                      delay: 75,
                      cursor: '|',
                      cursorClassName: 'animate-pulse text-amber-500 ml-1'
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="flex justify-center space-x-4 sm:space-x-8 mb-8">
              <div className="text-center rounded-lg px-4 py-3 bg-white/60 dark:bg-white/5 border border-neutral-200/60 dark:border-white/10 backdrop-blur-md shadow-sm">
                <div className="text-2xl font-bold text-amber-500">3.9</div>
                <div className="text-xs uppercase tracking-wide text-gray-600 dark:text-gray-400">GPA</div>
              </div>
              <div className="text-center rounded-lg px-4 py-3 bg-white/60 dark:bg-white/5 border border-neutral-200/60 dark:border-white/10 backdrop-blur-md shadow-sm">
                <div className="text-2xl font-bold text-orange-500">6+</div>
                <div className="text-xs uppercase tracking-wide text-gray-600 dark:text-gray-400">Projects</div>
              </div>
              <div className="text-center rounded-lg px-4 py-3 bg-white/60 dark:bg-white/5 border border-neutral-200/60 dark:border-white/10 backdrop-blur-md shadow-sm">
                <div className="text-2xl font-bold text-rose-500">3</div>
                <div className="text-xs uppercase tracking-wide text-gray-600 dark:text-gray-400">Years</div>
              </div>
            </div>

            {/* Quick Action Buttons */}
            <div className="flex justify-center space-x-4 mb-8">
              <button 
                onClick={scrollToAbout}
                className="px-8 py-3 bg-gradient-to-r from-amber-600 to-rose-600 text-white rounded-lg shadow-lg shadow-amber-500/20 hover:shadow-rose-500/20 transition-all duration-300 transform hover:-translate-y-0.5 font-medium"
              >
                Learn More
              </button>
              <a 
                                 href="/Atherv_Vidhate_Resume.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-8 py-3 rounded-lg text-gray-700 dark:text-neutral-200 ring-1 ring-neutral-300 dark:ring-white/10 hover:ring-amber-400 hover:text-amber-500 dark:hover:text-amber-400 transition-all duration-300 transform hover:-translate-y-0.5 font-medium"
              >
                View Resume
              </a>
            </div>
          </div>

          {/* Enhanced Bouncing Arrow */}
          <button
            onClick={scrollToAbout}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-900 dark:text-white hover:text-amber-500 transition-colors duration-300"
            aria-label="Scroll to about section"
          >
            <div className="animate-bounce">
              <div className="relative">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
            </div>
          </button>
        </div>

        {/* VSCode Window */}
        <div id="about" className="px-4 pt-20 pb-20">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-light text-gray-900 dark:text-white mb-4 text-center">About Me</h2>
            <div className="h-1 w-16 mx-auto bg-gradient-to-r from-amber-400 via-orange-400 to-rose-400 rounded-full mb-8"></div>

            <div className="grid lg:grid-cols-2 gap-12 items-stretch max-w-6xl mx-auto">
              {/* VSCode Style Code Block */}
              <div className="bg-neutral-200 dark:bg-neutral-800 rounded-lg overflow-hidden max-h-96 ">
                {/* VSCode Header */}
                <div className="bg-neutral-300 dark:bg-neutral-700 px-4 py-2 flex items-center space-x-2">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="text-gray-700 dark:text-gray-300 text-sm ml-4">about_me.py</div>
                </div>

                {/* Code Content */}
                <div className="p-4 font-mono text-xs leading-relaxed max-h-80 overflow-y-auto">
                  <div className="text-gray-600 dark:text-gray-400">
                    <span className="text-purple-600 dark:text-purple-400">from</span> <span className="text-gray-900 dark:text-white">life</span>{" "}
                    <span className="text-purple-600 dark:text-purple-400">import</span> <span className="text-yellow-600 dark:text-yellow-300">Human</span>
                  </div>
                  <br />
                  <div>
                    <span className="text-purple-600 dark:text-purple-400">class</span> <span className="text-blue-600 dark:text-blue-400">Atherv</span>
                    <span className="text-gray-900 dark:text-white">(</span>
                    <span className="text-yellow-600 dark:text-yellow-300">Human</span>
                    <span className="text-gray-900 dark:text-white">):</span>
                  </div>
                  <div className="ml-4">
                    <span className="text-purple-600 dark:text-purple-400">def</span> <span className="text-blue-600 dark:text-blue-400">__init__</span>
                    <span className="text-gray-900 dark:text-white">(</span>
                    <span className="text-orange-600 dark:text-orange-400">self</span>
                    <span className="text-gray-900 dark:text-white">):</span>
                  </div>
                  <div className="ml-8">
                    <span className="text-orange-600 dark:text-orange-400">self</span>
                    <span className="text-gray-900 dark:text-white">.full_name = </span>
                    <span className="text-green-600 dark:text-green-400">'Atherv Vidhate'</span>
                  </div>
                  <div className="ml-8">
                    <span className="text-orange-600 dark:text-orange-400">self</span>
                    <span className="text-gray-900 dark:text-white">.school = </span>
                    <span className="text-green-600 dark:text-green-400">'UC San Diego'</span>
                  </div>
                  <div className="ml-8">
                    <span className="text-orange-600 dark:text-orange-400">self</span>
                    <span className="text-gray-900 dark:text-white">.major = </span>
                    <span className="text-green-600 dark:text-green-400">'Data Science'</span>
                  </div>
                  <div className="ml-8">
                    <span className="text-orange-600 dark:text-orange-400">self</span>
                    <span className="text-gray-900 dark:text-white">.expected_grad = </span>
                    <span className="text-green-600 dark:text-green-400">'June 2027'</span>
                  </div>
                  <div className="ml-8">
                    <span className="text-orange-600 dark:text-orange-400">self</span>
                    <span className="text-gray-900 dark:text-white">.resume = </span>
                    <span className="text-blue-600 dark:text-blue-400">Resume</span>
                    <span className="text-gray-900 dark:text-white">(</span>
                                         <a href="/Atherv_Vidhate_Resume.pdf" target="_blank" rel="noopener noreferrer" className="text-green-600 dark:text-green-400 underline hover:text-green-500 dark:hover:text-green-300">Resume.pdf</a>
                    <span className="text-gray-900 dark:text-white">)</span>
                  </div>
                  <div className="ml-8">
                    <span className="text-orange-600 dark:text-orange-400">self</span>
                    <span className="text-gray-900 dark:text-white">.skills = &#123;</span>
                  </div>
                  <div className="ml-12">
                    <span className="text-green-600 dark:text-green-400">'languages'</span>
                    <span className="text-gray-900 dark:text-white">: [</span>
                    <span className="text-green-600 dark:text-green-400">'Python'</span>
                    <span className="text-gray-900 dark:text-white">, </span>
                    <span className="text-green-600 dark:text-green-400">'SQL'</span>
                    <span className="text-gray-900 dark:text-white">, </span>
                    <span className="text-green-600 dark:text-green-400">'Java'</span>
                    <span className="text-gray-900 dark:text-white">, </span>
                    <span className="text-green-600 dark:text-green-400">'JavaScript'</span>
                    <span className="text-gray-900 dark:text-white">],</span>
                  </div>
                  <div className="ml-12">
                    <span className="text-green-600 dark:text-green-400">'libraries'</span>
                    <span className="text-gray-900 dark:text-white">: [</span>
                    <span className="text-green-600 dark:text-green-400">'scikit-learn'</span>
                    <span className="text-gray-900 dark:text-white">, </span>
                    <span className="text-green-600 dark:text-green-400">'TensorFlow'</span>
                    <span className="text-gray-900 dark:text-white">, </span>
                    <span className="text-green-600 dark:text-green-400">'PyTorch'</span>
                    <span className="text-gray-900 dark:text-white">, </span>
                    <span className="text-green-600 dark:text-green-400">'Dask'</span>
                    <span className="text-gray-900 dark:text-white">]</span>
                  </div>
                  <div className="ml-12">
                    <span className="text-green-600 dark:text-green-400">'tools'</span>
                    <span className="text-gray-900 dark:text-white">: [</span>
                    <span className="text-green-600 dark:text-green-400">'Git'</span>
                    <span className="text-gray-900 dark:text-white">, </span>
                    <span className="text-green-600 dark:text-green-400">'Docker'</span>
                    <span className="text-gray-900 dark:text-white">, </span>
                    <span className="text-green-600 dark:text-green-400">'Tableau'</span>
                    <span className="text-gray-900 dark:text-white">, </span>
                    <span className="text-green-600 dark:text-green-400">'AWS'</span>
                    <span className="text-gray-900 dark:text-white">, </span>
                    <span className="text-green-600 dark:text-green-400">'Redis'</span>
                    <span className="text-gray-900 dark:text-white">]</span>
                  </div>
                  <div className="ml-8">
                    <span className="text-gray-900 dark:text-white">&#125;</span>
                  </div>
                  <div className="ml-8">
                    <span className="text-orange-600 dark:text-orange-400">self</span>
                    <span className="text-gray-900 dark:text-white">.interests = [</span>
                  </div>
                  <div className="ml-12">
                    <span className="text-green-600 dark:text-green-400">'machine learning & AI'</span>
                    <span className="text-gray-900 dark:text-white">,</span>
                  </div>
                  <div className="ml-12">
                    <span className="text-green-600 dark:text-green-400">'data visualization'</span>
                    <span className="text-gray-900 dark:text-white">,</span>
                  </div>
                  <div className="ml-12">
                    <span className="text-green-600 dark:text-green-400">'technology'</span>
                    <span className="text-gray-900 dark:text-white">,</span>
                  </div>
                  <div className="ml-12">
                    <span className="text-green-600 dark:text-green-400">'music & concerts'</span>
                    <span className="text-gray-900 dark:text-white">,</span>
                  </div>
                  <div className="ml-12">
                    <span className="text-green-600 dark:text-green-400">'lifting'</span>
                    <span className="text-gray-900 dark:text-white">,</span>
                  </div>
                  <div className="ml-12">
                    <span className="text-green-600 dark:text-green-400">'cooking'</span>
                    <span className="text-gray-900 dark:text-white">,</span>
                  </div>
                  <div className="ml-8">
                    <span className="text-gray-900 dark:text-white">]</span>
                  </div>
                  <br />
                  <div className="ml-4">
                    <span className="text-purple-600 dark:text-purple-400">def</span> <span className="text-blue-600 dark:text-blue-400">contact</span>
                    <span className="text-gray-900 dark:text-white">(</span>
                    <span className="text-orange-600 dark:text-orange-400">self</span>
                    <span className="text-gray-900 dark:text-white">) -&gt; </span>
                    <span className="text-yellow-600 dark:text-yellow-300">dict</span>
                    <span className="text-gray-900 dark:text-white">[</span>
                    <span className="text-yellow-600 dark:text-yellow-300">str</span>
                    <span className="text-gray-900 dark:text-white">, </span>
                    <span className="text-yellow-600 dark:text-yellow-300">str</span>
                    <span className="text-gray-900 dark:text-white">]:</span>
                  </div>
                  <div className="ml-8">
                    <span className="text-purple-600 dark:text-purple-400">return</span> <span className="text-gray-900 dark:text-white">&#123;</span>
                  </div>
                  <div className="ml-12">
                    <span className="text-green-600 dark:text-green-400">'email'</span>
                    <span className="text-gray-900 dark:text-white">: </span>
                    <span className="text-green-600 dark:text-green-400">'</span>
                    <a href="mailto:athervvidhate@gmail.com" className="text-green-600 dark:text-green-400 underline hover:text-green-500 dark:hover:text-green-300">athervvidhate@gmail.com</a>
                    <span className="text-green-600 dark:text-green-400">'</span>
                    <span className="text-gray-900 dark:text-white">,</span>
                  </div>
                  <div className="ml-12">
                    <span className="text-green-600 dark:text-green-400">'linkedin'</span>
                    <span className="text-gray-900 dark:text-white">: </span>
                    <span className="text-green-600 dark:text-green-400">'</span>
                    <a href="https://linkedin.com/in/athervvidhate" target="_blank" rel="noopener noreferrer" className="text-green-600 dark:text-green-400 underline hover:text-green-500 dark:hover:text-green-300">linkedin.com/in/athervvidhate</a>
                    <span className="text-green-600 dark:text-green-400">'</span>
                    <span className="text-gray-900 dark:text-white">,</span>
                  </div>
                  <div className="ml-12">
                    <span className="text-green-600 dark:text-green-400">'github'</span>
                    <span className="text-gray-900 dark:text-white">: </span>
                    <span className="text-green-600 dark:text-green-400">'</span>
                    <a href="https://github.com/athervvidhate" target="_blank" rel="noopener noreferrer" className="text-green-600 dark:text-green-400 underline hover:text-green-500 dark:hover:text-green-300">github.com/athervvidhate</a>
                    <span className="text-green-600 dark:text-green-400">'</span>
                    <span className="text-gray-900 dark:text-white">,</span>
                  </div>
                  <div className="ml-8">
                    <span className="text-gray-900 dark:text-white">&#125;</span>
                  </div>
                </div>
              </div>

              {/* Profile Image */}
              <div className="flex justify-center lg:justify-start h-full ">
                <div className="w-full h-full overflow-hidden max-h-96 flex items-center justify-center rounded-lg relative ">
                  <img
                                         src="/photo.jpeg"
                    alt="Atherv Vidhate"
                    className="h-full w-auto object-contain rounded-lg"
                    loading="lazy" decoding="async"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Education & Experience Tabs */}
        <div id="education" className="px-4 py-20">
          <div className="max-w-4xl mx-auto">
            {/* Tab Navigation */}
            <div className="flex justify-center mb-8">
              <div className="bg-neutral-200 dark:bg-neutral-800 rounded-lg p-1 flex flex-col sm:flex-row ring-1 ring-neutral-300 dark:ring-white/10">
                <button
                  onClick={() => setActiveTab("education")}
                  className={`px-4 sm:px-6 py-2 rounded-md text-sm font-medium transition-colors duration-200 whitespace-nowrap ${
                    activeTab === "education" ? "bg-gradient-to-r from-amber-600 to-rose-600 text-white" : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                  }`}
                >
                  Education & Coursework
                </button>
                <button
                  onClick={() => setActiveTab("experience")}
                  className={`px-4 sm:px-6 py-2 rounded-md text-sm font-medium transition-colors duration-200 whitespace-nowrap ${
                    activeTab === "experience" ? "bg-gradient-to-r from-amber-600 to-rose-600 text-white" : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                  }`}
                >
                  Experience & Involvement
                </button>
              </div>
            </div>

            {/* Tab Content */}
            <div className="bg-neutral-100 dark:bg-neutral-800 rounded-lg p-8 ring-1 ring-neutral-200 dark:ring-white/10">
              {activeTab === "education" && (
                <div>
                  <h3 className="text-2xl font-medium text-gray-900 dark:text-white mb-6">Education & Coursework</h3>

                  <div className="mb-8">
                    <h4 className="text-xl text-amber-500 mb-2">{education.degree}</h4>
                    <p className="text-gray-700 dark:text-gray-300 mb-1">{education.school}</p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-1">Expected Graduation: {education.expectedGrad}</p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">GPA: {education.gpa}</p>
                  </div>

                  <div>
                    <h4 className="text-lg text-gray-900 dark:text-white mb-4">Relevant Coursework</h4>
                    
                    <div className="mb-6">
                      <h5 className="text-md font-medium text-amber-500 mb-3">Data Science</h5>
                      <div className="grid md:grid-cols-2 gap-3">
                      <div className="bg-neutral-200 dark:bg-neutral-700 rounded-md p-3">
                          <span className="text-gray-700 dark:text-gray-300 text-sm">Systems for Scalable Analytics (DSC 102)</span>
                        </div>
                        <div className="bg-neutral-200 dark:bg-neutral-700 rounded-md p-3">
                          <span className="text-gray-700 dark:text-gray-300 text-sm">Practice of Data Science (DSC 80)</span>
                        </div>
                        <div className="bg-neutral-200 dark:bg-neutral-700 rounded-md p-3">
                          <span className="text-gray-700 dark:text-gray-300 text-sm">Theoretical Foundations of Data Science (DSC 40A/40B)</span>
                        </div>
                        <div className="bg-neutral-200 dark:bg-neutral-700 rounded-md p-3">
                          <span className="text-gray-700 dark:text-gray-300 text-sm">Data Structures and Algorithms (DSC 30)</span>
                        </div>
                        <div className="bg-neutral-200 dark:bg-neutral-700 rounded-md p-3">
                          <span className="text-gray-700 dark:text-gray-300 text-sm">Principles of Data Science (DSC 20)</span>
                        </div>
                        <div className="bg-neutral-200 dark:bg-neutral-700 rounded-md p-3">
                          <span className="text-gray-700 dark:text-gray-300 text-sm">Introduction to Data Science (DSC 10)</span>
                        </div>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h5 className="text-md font-medium text-orange-500 mb-3">Machine Learning & Advanced Topics</h5>
                      <div className="grid md:grid-cols-2 gap-3">
                        <div className="bg-neutral-200 dark:bg-neutral-700 rounded-md p-3">
                          <span className="text-gray-700 dark:text-gray-300 text-sm">Probabilistic Modeling & Machine Learning (DSC 140A)*</span>
                        </div>
                        <div className="bg-neutral-200 dark:bg-neutral-700 rounded-md p-3">
                          <span className="text-gray-700 dark:text-gray-300 text-sm">Recommender Systems & Web Mining (CSE 158)*</span>
                        </div>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h5 className="text-md font-medium text-rose-500 mb-3">Mathematics</h5>
                      <div className="grid md:grid-cols-2 gap-3">
                        <div className="bg-neutral-200 dark:bg-neutral-700 rounded-md p-3">
                          <span className="text-gray-700 dark:text-gray-300 text-sm">Probability and Statistics (MATH 183)</span>
                        </div>
                        <div className="bg-neutral-200 dark:bg-neutral-700 rounded-md p-3">
                          <span className="text-gray-700 dark:text-gray-300 text-sm">Introduction to Probability (MATH 180A)</span>
                        </div>
                        <div className="bg-neutral-200 dark:bg-neutral-700 rounded-md p-3">
                          <span className="text-gray-700 dark:text-gray-300 text-sm">Linear Algebra (MATH 18)</span>
                        </div>
                        <div className="bg-neutral-200 dark:bg-neutral-700 rounded-md p-3">
                          <span className="text-gray-700 dark:text-gray-300 text-sm">Calculus (MATH 20C)</span>
                        </div>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h5 className="text-md font-medium text-amber-600 mb-3">Business Analytics</h5>
                      <div className="grid md:grid-cols-2 gap-3">
                        <div className="bg-neutral-200 dark:bg-neutral-700 rounded-md p-3">
                          <span className="text-gray-700 dark:text-gray-300 text-sm">Information Technology - Business Analytics (MGT 153)*</span>
                        </div>
                        <div className="bg-neutral-200 dark:bg-neutral-700 rounded-md p-3">
                          <span className="text-gray-700 dark:text-gray-300 text-sm">Business Analytics (MGT 151)*</span>
                        </div>
                      </div>
                    </div>

                    <div className="text-xs text-gray-500 dark:text-gray-400 italic mt-4">
                      * Course currently in progress
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "experience" && (
                <div>
                  <h3 className="text-2xl font-medium text-gray-900 dark:text-white mb-6">Experience & Involvement</h3>

                  <div className="space-y-6">
                    {experience.map((item, index) => (  
                      <div key={index} className="border-l-2 border-amber-600 pl-6">
                        <h4 className="text-lg text-amber-500 mb-1">{item.title}</h4>
                        <p className="text-gray-900 dark:text-white font-medium mb-1">{item.organization}</p>
                        <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">{item.period}</p>
                          <ul className="list-disc list-inside space-y-3">
                            {item.description && <li className="text-gray-700 dark:text-gray-300 text-sm"> {item.description}</li>}
                            {item.description2 && <li className="text-gray-700 dark:text-gray-300 text-sm"> {item.description2}</li>}
                            {item.description3 && <li className="text-gray-700 dark:text-gray-300 text-sm"> {item.description3}</li>}
                          </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Projects Section */}
        <div id="projects" className="px-4 py-20">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-light text-gray-900 dark:text-white mb-12 text-center">Projects</h2>

            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className={`group bg-neutral-100 dark:bg-neutral-800 rounded-xl overflow-hidden transition-all duration-300 shadow-sm hover:shadow-lg hover:-translate-y-1 ring-1 ring-neutral-200/60 dark:ring-white/10 ${projects.length % 2 === 1 && index === projects.length - 1 ? 'md:col-span-2 md:max-w-lg md:mx-auto' : ''}`}
                >
                  {/* Project Image Header */}
                  <div className="relative h-48 bg-neutral-200 dark:bg-neutral-700 overflow-hidden">
                    <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-amber-400 via-orange-400 to-rose-400"></div>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                      loading="lazy" decoding="async"
                    />
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-3">{project.title}</h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-4 text-sm leading-relaxed">{project.description}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, techIndex) => (
                        <span key={techIndex} className="px-2 py-1 bg-neutral-200 dark:bg-neutral-700 text-gray-700 dark:text-gray-300 text-xs rounded">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex space-x-4">
                    {project.demo && <a
                        href={project.demo}
                        className="text-green-400 hover:text-green-300 text-sm transition-colors duration-300"
                      >
                        View Project →
                      </a> }
                      {project.walkthrough && <a
                        href={project.walkthrough}
                        className="text-red-400 hover:text-green-300 text-sm transition-colors duration-300"
                      >
                        Walkthrough →
                      </a> }
                      {project.github && <a
                        href={project.github}
                        className="text-amber-500 hover:text-amber-400 text-sm transition-colors duration-300"
                      >
                        GitHub →
                      </a> }
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer with Social Icons */}
        <footer className="px-4 py-12 border-t border-neutral-200 dark:border-neutral-800">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center space-x-6 mb-6">
              <a
                href="https://github.com/athervvidhate"
                className="w-12 h-12 border border-neutral-300 dark:border-neutral-600 rounded-full flex items-center justify-center hover:border-gray-900 dark:hover:border-white hover:text-gray-900 dark:hover:text-white transition-colors duration-300 text-gray-600 dark:text-gray-400"
              >
                <span className="sr-only">GitHub</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <a
                href="https://linkedin.com/in/athervvidhate"
                className="w-12 h-12 border border-neutral-300 dark:border-neutral-600 rounded-full flex items-center justify-center hover:border-gray-900 dark:hover:border-white hover:text-gray-900 dark:hover:text-white transition-colors duration-300 text-gray-600 dark:text-gray-400"
              >
                <span className="sr-only">LinkedIn</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="mailto:athervvidhate@gmail.com"
                className="w-12 h-12 border border-neutral-300 dark:border-neutral-600 rounded-full flex items-center justify-center hover:border-gray-900 dark:hover:border-white hover:text-gray-900 dark:hover:text-white transition-colors duration-300 text-gray-600 dark:text-gray-400"
              >
                <span className="sr-only">Email</span>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </a>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
} 