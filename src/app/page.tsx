import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { Navbar } from "@/components/ui/navbar";
import { SocialSidebar } from "@/components/ui/social-sidebar";
import { BackgroundLayer } from "@/components/ui/background-layer";
import { TechStackMarquee } from "@/components/ui/tech-stack-marquee";
import { AchievementsSection } from "@/components/ui/achievements-section";
import { SkillsSection } from "@/components/ui/skills-section";
import { ScrollNav } from "@/components/ui/scroll-nav";
import { ContactSection } from "@/components/ui/contact-section";
import { ScrollVideoBackground } from "@/components/ui/scroll-video-background";

const allProjects = [
  {
    id: 1,
    title: "Drishti OS",
    subtitle: "Computer Vision Operating System",
    description: "A multi-task deep learning pipeline featuring YOLOv8, ArcFace, and OCR modules for simultaneous facial recognition and anomaly identification. The custom weapon detection model achieved a 95% Mean Average Precision under varying illumination and occlusion levels.",
    badges: ["Python", "YOLOv8", "OpenCV", "ArcFace"],
    latencyMetric: "150ms per-frame",
    primaryLink: "#",
  },
  {
    id: 2,
    title: "DocReviver",
    subtitle: "Agentic Memory Surgeon",
    description: "A high-throughput backend system built with FastAPI and WebSockets to process real-time telemetry from distributed AI agents. The workflow coordinates automated anomaly detection and localized repair heuristics.",
    badges: ["Python", "FastAPI", "WebSockets", "Google ADK"],
    latencyMetric: "15% delay reduction",
    primaryLink: "#",
  },
  {
    id: 3,
    title: "Eco Mender Bot",
    subtitle: "Autonomous Environmental Robot",
    description: "A mobile robotics platform built for strict hardware execution constraints. The software utilizes frequency scaling and custom PWM generation for precise motor actuation, bypassing standard high-level libraries.",
    badges: ["ROS2", "Gazebo", "RViz2", "C++"],
    latencyMetric: "20% responsiveness gain",
    primaryLink: "#",
  },
  {
    id: 4,
    title: "Brother",
    subtitle: "Agent-Enabled Routine Manager",
    description: "A local voice-activated scheduling system that automates daily routine management. The software processes natural language commands to execute dynamic task prioritization using scheduling heuristics.",
    badges: ["Python", "SQLite", "Google ADK"],
    latencyMetric: "Persistent local logging",
    primaryLink: "#",
  },
  {
    id: 5,
    title: "Spectral Data Acquisition",
    subtitle: "Asynchronous Hardware Interface",
    description: "A high-throughput data pipeline and cross-platform GUI designed for laboratory instruments. The software automates hyperspectral data ingestion and includes image validation testing suites for hardware and software stability.",
    badges: ["Python", "Asyncio", "GUI Development"],
    latencyMetric: "30% exception reduction",
    primaryLink: "#",
  },
  {
    id: 6,
    title: "Residential Load Forecaster",
    subtitle: "Streaming Data Pipeline",
    description: "A real-time predictive modeling system built for streaming-optimized feature engineering. The architecture operates under strict low-latency constraints to analyze residential data continuously.",
    badges: ["Rust", "Pathway Framework", "Machine Learning"],
    latencyMetric: "18% accuracy improvement",
    primaryLink: "#",
  }
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-transparent text-black dark:text-white selection:bg-[#0080ff] dark:selection:bg-[#00f0ff] selection:text-white dark:selection:text-black relative">
      <BackgroundLayer />
      
      <div className="relative z-10 w-full">
        <Navbar />
        <SocialSidebar />
        <ScrollNav />

        {/* HERO SECTION */}
        <section id="hero" className="relative w-full min-h-screen flex flex-col pt-0 bg-transparent">
          <TechStackMarquee />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex-grow flex items-center mt-12 pb-24">
            <div className="max-w-3xl">
              <h2 className="text-[#0080ff] dark:text-[#00f0ff] font-mono mb-4 text-lg">Hi, my name is</h2>
              <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4 text-black dark:text-white">
                Ibrahim Azeem Mohammed.
              </h1>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-gray-700 dark:text-gray-400">
                I build intelligence into silicon and software.
              </h1>
              <p className="mt-8 text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl leading-relaxed">
                I am the CTO & Co-founder of Drishti. As an ECE engineer deeply immersed in software architecture, I engineer high-performance systems—from Computer Vision Operating Systems to Autonomous Environmental Robots.
              </p>
              <div className="mt-10">
                <a 
                  href="#work" 
                  className="inline-flex items-center justify-center px-8 py-4 rounded-full border border-black/10 dark:border-white/10 bg-white/5 dark:bg-black/20 backdrop-blur-md text-black dark:text-white font-mono text-sm tracking-wider uppercase transition-all duration-300 hover:bg-[#0080ff] dark:hover:bg-[#00f0ff] hover:text-white dark:hover:text-black hover:border-transparent hover:shadow-[0_0_20px_rgba(0,128,255,0.5)] dark:hover:shadow-[0_0_20px_rgba(0,240,255,0.5)] hover:-translate-y-1"
                >
                  Check out my work!
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT SECTION (Solid) */}
        <section id="about" className="relative w-full py-32 bg-white dark:bg-transparent">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white font-mono">
                <span className="text-[#0080ff] dark:text-[#00f0ff]">01.</span> About Me
              </h2>
              <div className="h-px bg-gray-200 dark:bg-[#222] flex-grow ml-6"></div>
            </div>
            
            <div className="text-gray-600 dark:text-gray-400 leading-relaxed space-y-6 text-lg">
              <p>
                I am a software engineer and <strong>NIT Warangal</strong> student specializing in backend architectures, computer vision, and agentic AI. I design software systems that process real-time data streams and execute complex AI workflows. My experience includes building asynchronous Python pipelines at <strong>KFUPM</strong> and deploying deep learning models on hardware-restricted platforms.
              </p>
              <p>
                I prioritize system efficiency and low-latency performance. I am currently developing <strong>Drishti OS</strong>, a multi-task computer vision pipeline for simultaneous facial recognition and anomaly identification. I optimized this system to cut execution time by 50% while keeping peak memory consumption strictly under 2GB. When you review my projects, you will see scalable solutions verified by concrete metrics.
              </p>
              <p>
                I actively build software that interfaces with physical systems and complex data models. If you examine my recent work, you will find a real-time predictive modeling system built with <strong>Rust</strong> that improved forecasting accuracy by 18%. I write clean, optimized code and construct precise software systems designed for speed and reliability.
              </p>
            </div>
          </div>
        </section>

        {/* WORK SECTION (Translucent) */}
        <section id="work" className="relative w-full py-32 bg-white/40 dark:bg-transparent backdrop-blur-2xl dark:backdrop-blur-none">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white font-mono">
                <span className="text-[#0080ff] dark:text-[#00f0ff]">02.</span> Selected Work
              </h2>
              <div className="h-px bg-gray-200 dark:bg-[#222] flex-grow ml-6"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {allProjects.map((project) => (
                <CardContainer key={project.id} className="w-full">
                  <CardBody className="bg-gray-50 dark:bg-[#0a0a0a] border border-gray-200 dark:border-[#222] hover:border-[#0080ff] dark:hover:border-[#00f0ff]/40 transition-colors duration-300 rounded-xl p-6 w-full flex flex-col h-full shadow-2xl">
                    <CardItem translateZ="50" className="text-2xl font-bold text-black dark:text-white mb-2">
                      {project.title}
                    </CardItem>
                    <CardItem translateZ="40" className="text-sm text-[#0080ff] dark:text-[#00f0ff] mb-6 font-mono">
                      {project.subtitle}
                    </CardItem>
                    <CardItem translateZ="30" className="text-sm text-gray-600 dark:text-gray-400 mb-8 flex-grow leading-relaxed">
                      {project.description}
                    </CardItem>
                    
                    <CardItem translateZ="40" className="w-full mt-auto">
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.badges.map((badge) => (
                          <span key={badge} className="px-3 py-1 bg-gray-200 dark:bg-[#151515] text-xs font-mono text-gray-700 dark:text-gray-300 rounded border border-gray-300 dark:border-[#333]">
                            {badge}
                          </span>
                        ))}
                      </div>
                      <div className="flex justify-between items-center border-t border-gray-200 dark:border-[#222] pt-4">
                        <span className="text-xs font-mono text-gray-500 uppercase tracking-wider">Metric</span>
                        <span className="text-xs font-mono text-[#0080ff] dark:text-[#00f0ff] font-semibold">{project.latencyMetric}</span>
                      </div>
                    </CardItem>
                  </CardBody>
                </CardContainer>
              ))}
            </div>
          </div>
        </section>

        {/* ACHIEVEMENTS SECTION (Solid) */}
        <section id="achievements" className="relative w-full py-32 bg-white dark:bg-transparent">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white font-mono">
                <span className="text-[#0080ff] dark:text-[#00f0ff]">03.</span> Achievements
              </h2>
              <div className="h-px bg-gray-200 dark:bg-[#222] flex-grow ml-6"></div>
            </div>

            <AchievementsSection username="rahmani143" />
          </div>
        </section>

        {/* CAREER & EDUCATION SECTION (Translucent) */}
        <section id="education" className="relative w-full py-32 bg-white/40 dark:bg-transparent backdrop-blur-2xl dark:backdrop-blur-none">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white font-mono">
                <span className="text-[#0080ff] dark:text-[#00f0ff]">04.</span> Career & Education
              </h2>
              <div className="h-px bg-gray-200 dark:bg-[#222] flex-grow ml-6"></div>
            </div>

            <div className="relative border-l border-gray-300 dark:border-[#333] ml-4 md:ml-0 space-y-12 pb-8">
              
              <div className="relative pl-8">
                <div className="absolute w-4 h-4 bg-white dark:bg-black border-2 border-gray-400 dark:border-[#333] rounded-full -left-[9px] top-1"></div>
                <h3 className="text-xl font-bold text-black dark:text-white">CTO & Co-founder</h3>
                <p className="text-[#0080ff] dark:text-[#00f0ff] font-mono text-sm mb-4">Drishti OS • Present</p>
                <p className="text-gray-600 dark:text-gray-400">Leading the architectural design and deployment of an autonomous CV operating system.</p>
              </div>

              <div className="relative pl-8">
                <div className="absolute w-4 h-4 bg-white dark:bg-black border-2 border-gray-400 dark:border-[#333] rounded-full -left-[9px] top-1"></div>
                <h3 className="text-xl font-bold text-black dark:text-white">Research Intern</h3>
                <p className="text-[#0080ff] dark:text-[#00f0ff] font-mono text-sm mb-4">KFUPM • Previous</p>
                <p className="text-gray-600 dark:text-gray-400">Engineered asynchronous Python pipelines for real-time processing of massive hyperspectral data arrays.</p>
              </div>
              
              <div className="relative pl-8">
                <div className="absolute w-4 h-4 bg-white dark:bg-black border-2 border-gray-400 dark:border-[#333] rounded-full -left-[9px] top-1"></div>
                <h3 className="text-xl font-bold text-black dark:text-white">B.Tech in Electronics and Communication Engineering (ECE)</h3>
                <p className="text-[#0080ff] dark:text-[#00f0ff] font-mono text-sm mb-4">National Institute of Technology, Warangal • Expected 2027</p>
                <p className="text-gray-600 dark:text-gray-400">Bridging the gap between silicon architecture and advanced software engineering.</p>
              </div>

              <div className="relative pl-8">
                <div className="absolute w-4 h-4 bg-white dark:bg-black border-2 border-gray-400 dark:border-[#333] rounded-full -left-[9px] top-1"></div>
                <h3 className="text-xl font-bold text-black dark:text-white">High School</h3>
                <p className="text-[#0080ff] dark:text-[#00f0ff] font-mono text-sm mb-4">International Indian School, Dammam • Saudi Arabia • Graduated 2023</p>
                <p className="text-gray-600 dark:text-gray-400">Completed secondary education with a strong foundation in science, mathematics, and technical logic.</p>
              </div>
            </div>
          </div>
        </section>

        {/* SKILLS SECTION (Solid) */}
        <section id="skills" className="relative w-full py-32 bg-white dark:bg-transparent">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white font-mono">
                <span className="text-[#0080ff] dark:text-[#00f0ff]">05.</span> Skills & Technologies
              </h2>
              <div className="h-px bg-gray-200 dark:bg-[#222] flex-grow ml-6"></div>
            </div>
            <SkillsSection />
          </div>
        </section>

        {/* CONTACT SECTION (Translucent) */}
        <section id="contact" className="relative w-full py-32 bg-white/40 dark:bg-transparent backdrop-blur-2xl dark:backdrop-blur-none">
          <ContactSection />
        </section>
        
        {/* Footer */}
        <footer className="w-full py-16 mt-auto border-t border-gray-200/50 dark:border-white/10 flex flex-col items-center justify-center gap-4 relative z-10">
          <p className="text-sm md:text-base font-medium text-black dark:text-white tracking-wide drop-shadow-sm">
            Looking forward to working together.
          </p>
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 text-xs text-black/60 dark:text-white/60 font-mono mt-2">
            <span>© {new Date().getFullYear()}</span>
            <span className="hidden md:block w-1 h-1 rounded-full bg-black/30 dark:bg-white/30"></span>
            <span>Designed & Built by Ibrahim Azeem Mohammed</span>
          </div>
        </footer>
      </div>
    </main>
  );
}
