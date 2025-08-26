
import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { ArrowDown, ArrowRight, Download, Github, Linkedin, Mail, MapPin, Phone, ExternalLink, Sparkles, FileText } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Section = ({ id, title, subtitle, children }: { id: string; title: string; subtitle?: string; children: React.ReactNode }) => (
  <section id={id} className="scroll-mt-24 py-16 md:py-24">
    <div className="max-w-6xl mx-auto px-4">
      <div className="mb-8">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-2xl md:text-4xl font-extrabold tracking-tight"
        >
          {title}
        </motion.h2>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-slate-400 mt-2 max-w-2xl"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
      {children}
    </div>
  </section>
);

const Badge = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-flex items-center rounded-full border border-slate-700/60 bg-slate-900/40 px-3 py-1 text-xs font-semibold text-slate-200 mr-2 mb-2">
    {children}
  </span>
);

const ProjectCard = ({ title, blurb, tags, links }: { title: string; blurb: string; tags: string[]; links?: { label: string; href: string }[] }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
  >
    <Card className="bg-slate-900/50 border-slate-800 hover:border-slate-700 transition-colors">
      <CardContent className="p-6">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="text-xl font-bold">{title}</h3>
            <p className="text-slate-400 mt-2">{blurb}</p>
          </div>
        </div>
        <div className="mt-4">
          {tags.map((t) => (
            <Badge key={t}>{t}</Badge>
          ))}
        </div>
        {links && links.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-3">
            {links.map((l) => (
              <Button key={l.href} asChild size="sm" variant="secondary" className="gap-2">
                <a href={l.href} target="_blank" rel="noreferrer">
                  <ExternalLink className="h-4 w-4" /> {l.label}
                </a>
              </Button>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  </motion.div>
);

const TimelineItem = ({ when, what, where, points }: { when: string; what: string; where: string; points: string[] }) => (
  <div className="relative pl-8 pb-10 border-l border-slate-800">
    <span className="absolute -left-[9px] top-1.5 h-4 w-4 rounded-full bg-cyan-500 shadow shadow-cyan-500/40" />
    <h4 className="font-bold">{what}</h4>
    <p className="text-slate-400 text-sm">{where} • {when}</p>
    <ul className="mt-2 list-disc pl-4 text-slate-300 space-y-1">
      {points.map((p, i) => (
        <li key={i}>{p}</li>
      ))}
    </ul>
  </div>
);

const Header = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 20, mass: 0.4 });

  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-slate-950/60 bg-transparent/40 border-b border-slate-800">
      <motion.div style={{ scaleX }} className="h-1 bg-gradient-to-r from-cyan-400 via-sky-500 to-fuchsia-500 origin-left" />
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#home" className="font-extrabold tracking-tight text-xl flex items-center gap-2">
          <Sparkles className="h-5 w-5 text-cyan-400" /> Sooraj <span className="text-slate-400">/ Portfolio</span>
        </a>
        <nav className="hidden md:flex items-center gap-4 text-sm">
          {[
            ["About", "about"],
            ["Projects", "projects"],
            ["Experience", "experience"],
            ["Skills", "skills"],
            ["Contact", "contact"],
          ].map(([label, id]) => (
            <a key={id as string} href={`#${id}`} className="px-3 py-1 rounded-md hover:bg-slate-800/60">
              {label}
            </a>
          ))}
          <Button asChild><a className="inline-flex items-center gap-2" href="/resume.pdf" download className="cursor-pointer button-link inline-flex items-center gap-2">
              <FileText className="h-4 w-4" /> Resume
            </a>
          </Button>
        </nav>
      </div>
    </header>
  );
};

const Hero = () => (
  <section id="home" className="relative overflow-hidden">
    <div className="absolute inset-0 pointer-events-none z-0 bg-[radial-gradient(ellipse_at_top_right,rgba(14,165,233,0.2),transparent_50%),radial-gradient(ellipse_at_bottom_left,rgba(217,70,239,0.18),transparent_50%)]" />
    <div className="max-w-6xl mx-auto px-4 pt-16 md:pt-24 pb-20">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div>
          <motion.h1 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-4xl md:text-6xl font-extrabold tracking-tight">
            Data Engineer <span className="text-sky-400">&</span> AI Automation Specialist
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="mt-4 text-slate-300 text-lg">
            I build reliable data pipelines, anti-bot tooling, and AI‑driven automation across AWS/Azure — with a focus on performance, observability, and clean code.
          </motion.p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button asChild className="cursor-pointer">
  <a className="inline-flex items-center gap-2" href="#projects" onClick={(e) => { 
    e.preventDefault(); 
    console.log("[Explore] click fired");
    const el = document.getElementById('projects'); 
    if (el) el.scrollIntoView({behavior:'smooth'}); 
  }}>
    <ArrowRight className="h-4 w-4" /> Explore Projects
  </a>
</Button>
            <Button asChild>
  <a className="inline-flex items-center gap-2" href="/resume.pdf" download className="cursor-pointer button-link inline-flex items-center gap-2" onClick={() => console.log("[Resume] download click")}>
    <Download className="h-4 w-4"/> Download Resume</a></Button>
          </div>
          <div className="mt-6 flex flex-wrap gap-4 text-sm text-slate-400">
            <div className="flex items-center gap-2"><Phone className="h-4 w-4"/> +91 9207970707</div>
            <a className="flex items-center gap-2 hover:text-slate-200" href="mailto:soorajms0707@gmail.com"><Mail className="h-4 w-4"/> soorajms0707@gmail.com</a>
            <div className="flex items-center gap-2"><MapPin className="h-4 w-4"/> Kerala, India (open to remote)</div>
          </div>
          <div className="mt-6 flex items-center gap-3">
            <Button asChild size="icon" variant="secondary"><a href="https://github.com/soorajms0707" target="_blank" rel="noreferrer" aria-label="GitHub" className="cursor-pointer inline-flex items-center gap-2"><Github className="h-4 w-4"/></a></Button>
            <Button asChild size="icon" variant="secondary"><a href="https://www.linkedin.com/in/soorajms0707" target="_blank" rel="noreferrer"><Linkedin className="h-4 w-4"/></a></Button>
          </div>
        </div>
        <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }} className="relative z-10">
          <div className="aspect-[4/5] rounded-2xl bg-slate-900/60 border border-slate-800 overflow-hidden shadow-2xl">
            {/* Use profile.png from public */}
            <img src="/profile.jpg" alt="Sooraj" className="w-full h-full object-cover" />
          </div>
        </motion.div>
      </div>
      <div className="mt-10 flex items-center gap-2 text-slate-400 text-sm">
        <ArrowDown className="h-4 w-4"/> Scroll to explore
      </div>
    </div>
  </section>
);

const SkillsCloud = () => (
  <div className="flex flex-wrap">
    {[
      "Python","Pandas","PySpark","Spark","Airflow","Scrapy","Playwright","Selenium","Regex",
      "MySQL","MongoDB","Docker","AWS","Azure","REST APIs","NLP","ML","Anti‑bot detection"
    ].map((s) => (
      <Badge key={s}>{s}</Badge>
    ))}
  </div>
);

const ContactCard = () => (
  <Card className="bg-slate-900/50 border-slate-800">
    <CardContent className="p-6">
      <div className="grid md:grid-cols-3 gap-6">
        <div>
          <div className="text-sm uppercase tracking-wide text-slate-400">Email</div>
          <a className="font-semibold hover:underline" href="mailto:soorajms0707@gmail.com">soorajms0707@gmail.com</a>
        </div>
        <div>
          <div className="text-sm uppercase tracking-wide text-slate-400">GitHub</div>
          <a className="font-semibold hover:underline" href="https://github.com/soorajms0707" target="_blank" rel="noreferrer">github.com/soorajms0707</a>
        </div>
        <div>
          <div className="text-sm uppercase tracking-wide text-slate-400">LinkedIn</div>
          <a className="font-semibold hover:underline" href="https://www.linkedin.com/in/soorajms0707" target="_blank" rel="noreferrer">/in/soorajms0707</a>
        </div>
      </div>
    </CardContent>
  </Card>
);

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Header />
      <Hero />

      <Section id="about" title="About" subtitle="Designer of data systems, automation, and scraping toolchains with a quality-first mindset.">

<div className="grid md:grid-cols-3 gap-6">
  <Card className="bg-slate-900/50 border-slate-800"><CardContent className="p-6">
    <div className="font-bold">What I do</div>
    <p className="text-slate-300 mt-2">I design and build scalable data pipelines, AI automation systems, and intelligent scraping solutions.</p>
  </CardContent></Card>
  <Card className="bg-slate-900/50 border-slate-800"><CardContent className="p-6">
    <div className="font-bold">How I work</div>
    <p className="text-slate-300 mt-2">I focus on clean, efficient, and reliable workflows, blending data engineering best practices with modern AI techniques.</p>
  </CardContent></Card>
  <Card className="bg-slate-900/50 border-slate-800"><CardContent className="p-6">
    <div className="font-bold">Now</div>
    <p className="text-slate-300 mt-2">Currently expanding my expertise in cloud platforms and AI-driven automation, while working on advanced anti-bot strategies.</p>
  </CardContent></Card>
</div>

</Section>

      <Section id="projects" title="Projects" subtitle="A few highlights. More on GitHub.">
        <div className="grid md:grid-cols-2 gap-6">
          <ProjectCard
            title="Anti‑Scrape Audit"
            blurb="Audits sites, detects 403/CAPTCHA/soft blocks, and scores scraping complexity. Automates Playwright checks and chooses headers/proxies/clients."
            tags={["Python","Playwright","Requests/Httpx","Proxy rotation"]}
            links={[{ label: "GitHub", href: "#" }, { label: "Docs", href: "#" }]}
          />
          <ProjectCard
            title="Data Validation & Monitoring"
            blurb="Automated checks for datatypes, header conformity, nulls, and quality issues; designed for pipelines needing reliability and alerting."
            tags={["Pandas","PySpark","Airflow","Monitoring"]}
          />
          <ProjectCard
            title="Asus Laptop Website"
            blurb="Full‑stack project with Django backend, user/admin login, and email inquiry flow."
            tags={["Django","HTML/CSS","JavaScript"]}
            links={[{ label: "GitHub", href: "https://github.com/soorajms0707/Asus_laptop-website" }]}
          />
          <ProjectCard
            title="IoT Safety Projects"
            blurb="Smart gas stove & LPG monitoring; Android‑controlled smart wheelchair; Raspberry‑Pi mini projects."
            tags={["IoT","Raspberry Pi","Sensors"]}
          />
        </div>
      </Section>

      <Section id="experience" title="Experience" subtitle="Hands‑on roles where I shipped and learned the most.">
<div className="grid md:grid-cols-1 gap-6"><Card className="bg-slate-900/60 border-slate-800"><CardContent className="p-6"><div className="flex items-start justify-between"><h3 className="text-xl font-semibold text-slate-100">Data Mining Engineer — Hashwave Technologies</h3><span className="text-sm text-slate-400 whitespace-nowrap">2023 – Present • Kerala, India</span></div><ul className="mt-4 text-slate-300 list-disc pl-6 space-y-2"><li>Led R&D initiatives, delivering proof-of-concept tools to solve complex data challenges.</li><li>Developed robust web scraping solutions using Scrapy, Playwright, and BeautifulSoup.</li><li>Automated large-scale data cleaning with Pandas and regex for faster, more accurate outputs.</li><li>Researched and implemented AI-driven methods to increase scraping and processing speed.</li><li>Built and deployed data pipelines integrating MySQL and MongoDB.</li><li>Optimized tools to adapt to site changes and bypass CAPTCHA/anti-bot systems.</li><li>Mentored engineers and trained new hires, boosting team capability and delivery speed.</li><li>Integrated REST APIs for seamless communication between microservices and frontend systems.</li><li>Deployed and scaled pipelines on AWS and Azure for high performance.</li><li>Performed code reviews to ensure clean, efficient, and standards-compliant code.</li></ul></CardContent></Card></div>
</Section>
<Section id="education" title="Education" subtitle="Academic background">

<div className="grid md:grid-cols-2 gap-6">
  <Card className="bg-slate-900/60 border-slate-800">
    <CardContent className="p-6">
      <h3 className="text-xl font-semibold text-slate-100">Bachelor of Computer Science & Engineering</h3>
      <p className="mt-2 text-slate-300">Vidya Academy of Science and Technology, Kerala, India (2018–2022)</p>
      <ul className="mt-4 text-slate-300 list-disc pl-6 space-y-2">
        <li>Strong grounding in data structures, algorithms, databases, and software engineering.</li>
        <li>Workshops & academic projects focused on Python development, IoT, and data processing.</li>
      </ul>
    </CardContent>
  </Card>
</div>

</Section>
<Section id="achievements" title="Achievements & Certifications" subtitle="Highlights from my CV">

<div className="grid md:grid-cols-2 gap-6">
  <Card className="bg-slate-900/60 border-slate-800"><CardContent className="p-6">
    <h3 className="text-xl font-semibold text-slate-100">Python Web Development Expert (A+), NACTET — 2023</h3>
    <ul className="mt-3 text-slate-300 list-disc pl-6 space-y-2">
      <li>Built full-stack web apps with Python, Django, HTML, CSS, JavaScript.</li>
      <li>Worked with REST APIs, modular coding, and Git version control.</li>
    </ul>
  </CardContent></Card>
  <Card className="bg-slate-900/60 border-slate-800"><CardContent className="p-6">
    <h3 className="text-xl font-semibold text-slate-100">Python Django–Angular Full Stack Development (A+), Luminar Technolab — 2023</h3>
    <ul className="mt-3 text-slate-300 list-disc pl-6 space-y-2">
      <li>Developed full-stack projects using Django backend with responsive frontends.</li>
      <li>Learned Angular fundamentals and component-based UI design.</li>
    </ul>
  </CardContent></Card>
  <Card className="bg-slate-900/60 border-slate-800"><CardContent className="p-6">
    <h3 className="text-xl font-semibold text-slate-100">Internet of Things Using Raspberry Pi — 2019</h3>
    <p className="mt-3 text-slate-300">Built IoT applications with Raspberry Pi: sensors, data collection, automation.</p>
  </CardContent></Card>
  <Card className="bg-slate-900/60 border-slate-800"><CardContent className="p-6">
    <h3 className="text-xl font-semibold text-slate-100">Data Science A–Z Completion Certificate — 2022</h3>
    <p className="mt-3 text-slate-300">Covered preprocessing, analysis, visualization, and ML basics with Python.</p>
  </CardContent></Card>
</div>

</Section>



      <Section id="skills" title="Skills" subtitle="Tooling I use frequently and enjoy.">
<div className="space-y-6"><div><h3 className="text-slate-200 font-semibold mb-2">Languages</h3><div className="flex flex-wrap gap-2 text-xs"><span className="px-2 py-1 rounded-full bg-slate-800 border border-slate-700">Python</span><span className="px-2 py-1 rounded-full bg-slate-800 border border-slate-700">C</span><span className="px-2 py-1 rounded-full bg-slate-800 border border-slate-700">C++</span><span className="px-2 py-1 rounded-full bg-slate-800 border border-slate-700">JavaScript</span><span className="px-2 py-1 rounded-full bg-slate-800 border border-slate-700">HTML</span><span className="px-2 py-1 rounded-full bg-slate-800 border border-slate-700">CSS</span></div></div><div><h3 className="text-slate-200 font-semibold mb-2">Frameworks</h3><div className="flex flex-wrap gap-2 text-xs"><span className="px-2 py-1 rounded-full bg-slate-800 border border-slate-700">Django</span><span className="px-2 py-1 rounded-full bg-slate-800 border border-slate-700">Angular</span><span className="px-2 py-1 rounded-full bg-slate-800 border border-slate-700">Bootstrap</span><span className="px-2 py-1 rounded-full bg-slate-800 border border-slate-700">Scrapy</span><span className="px-2 py-1 rounded-full bg-slate-800 border border-slate-700">Playwright</span><span className="px-2 py-1 rounded-full bg-slate-800 border border-slate-700">jQuery</span></div></div><div><h3 className="text-slate-200 font-semibold mb-2">Databases</h3><div className="flex flex-wrap gap-2 text-xs"><span className="px-2 py-1 rounded-full bg-slate-800 border border-slate-700">MySQL</span><span className="px-2 py-1 rounded-full bg-slate-800 border border-slate-700">MariaDB</span><span className="px-2 py-1 rounded-full bg-slate-800 border border-slate-700">MongoDB</span></div></div><div><h3 className="text-slate-200 font-semibold mb-2">Tools & Platforms</h3><div className="flex flex-wrap gap-2 text-xs"><span className="px-2 py-1 rounded-full bg-slate-800 border border-slate-700">GitHub</span><span className="px-2 py-1 rounded-full bg-slate-800 border border-slate-700">PyCharm</span><span className="px-2 py-1 rounded-full bg-slate-800 border border-slate-700">Postman</span><span className="px-2 py-1 rounded-full bg-slate-800 border border-slate-700">REST API</span><span className="px-2 py-1 rounded-full bg-slate-800 border border-slate-700">Visual Studio</span><span className="px-2 py-1 rounded-full bg-slate-800 border border-slate-700">Azure</span><span className="px-2 py-1 rounded-full bg-slate-800 border border-slate-700">AWS</span><span className="px-2 py-1 rounded-full bg-slate-800 border border-slate-700">Docker</span><span className="px-2 py-1 rounded-full bg-slate-800 border border-slate-700">Apache Airflow</span></div></div><div><h3 className="text-slate-200 font-semibold mb-2">Libraries</h3><div className="flex flex-wrap gap-2 text-xs"><span className="px-2 py-1 rounded-full bg-slate-800 border border-slate-700">Pandas</span><span className="px-2 py-1 rounded-full bg-slate-800 border border-slate-700">bs4</span><span className="px-2 py-1 rounded-full bg-slate-800 border border-slate-700">Selenium</span><span className="px-2 py-1 rounded-full bg-slate-800 border border-slate-700">Ajax</span></div></div><div><h3 className="text-slate-200 font-semibold mb-2">AI & Data Skills</h3><div className="flex flex-wrap gap-2 text-xs"><span className="px-2 py-1 rounded-full bg-slate-800 border border-slate-700">AI-driven automation</span><span className="px-2 py-1 rounded-full bg-slate-800 border border-slate-700">ML</span><span className="px-2 py-1 rounded-full bg-slate-800 border border-slate-700">NLP</span><span className="px-2 py-1 rounded-full bg-slate-800 border border-slate-700">Data Validation & Quality Monitoring</span></div></div><div><h3 className="text-slate-200 font-semibold mb-2">Data Processing</h3><div className="flex flex-wrap gap-2 text-xs"><span className="px-2 py-1 rounded-full bg-slate-800 border border-slate-700">PySpark</span><span className="px-2 py-1 rounded-full bg-slate-800 border border-slate-700">Apache Spark</span></div></div><div><h3 className="text-slate-200 font-semibold mb-2">Operating Systems</h3><div className="flex flex-wrap gap-2 text-xs"><span className="px-2 py-1 rounded-full bg-slate-800 border border-slate-700">Windows</span><span className="px-2 py-1 rounded-full bg-slate-800 border border-slate-700">Linux</span></div></div><div><h3 className="text-slate-200 font-semibold mb-2">Soft Skills</h3><div className="flex flex-wrap gap-2 text-xs"><span className="px-2 py-1 rounded-full bg-slate-800 border border-slate-700">Communication</span><span className="px-2 py-1 rounded-full bg-slate-800 border border-slate-700">Problem Solving</span><span className="px-2 py-1 rounded-full bg-slate-800 border border-slate-700">Creativity</span></div></div></div>
</Section>
<Section id="interests" title="Interests" subtitle="Outside of work">
<Card className="bg-slate-900/60 border-slate-800"><CardContent className="p-6"><ul className="text-slate-300 list-disc pl-6 space-y-2"><li>Data-driven problem solving</li><li>Exploring new technologies</li><li>AI & automation</li><li>Trading</li><li>Reading & driving</li><li>Music & movies</li></ul></CardContent></Card>
</Section>


      <Section id="contact" title="Contact" subtitle="Let’s build something useful.">
        <ContactCard />
      </Section>

      <footer className="border-t border-slate-800 py-8 mt-8">
        <div className="max-w-6xl mx-auto px-4 text-sm text-slate-400 flex flex-col md:flex-row items-center justify-between gap-3">
          <div>© {new Date().getFullYear()} Sooraj M S. All rights reserved.</div>
          <div className="flex items-center gap-4">
            <a className="hover:text-slate-200" href="https://github.com/soorajms0707" target="_blank" rel="noreferrer"><Github className="h-4 w-4 inline mr-1"/>GitHub</a>
            <a className="hover:text-slate-200" href="https://www.linkedin.com/in/soorajms0707" target="_blank" rel="noreferrer"><Linkedin className="h-4 w-4 inline mr-1"/>LinkedIn</a>
            <a className="hover:text-slate-200" href="mailto:soorajms0707@gmail.com"><Mail className="h-4 w-4 inline mr-1"/>Email</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
