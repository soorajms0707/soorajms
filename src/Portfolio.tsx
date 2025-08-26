import React from "react";
import { ArrowRight, Download, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

/** Helper: one consistent section layout */
function Section({
  id,
  title,
  subtitle,
  children,
}: {
  id: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-100">{title}</h2>
        {subtitle ? (
          <p className="text-slate-400 mt-2">{subtitle}</p>
        ) : null}
        <div className="mt-8">{children}</div>
      </div>
    </section>
  );
}

export default function Portfolio() {
  // very important on GitHub Pages
  const BASE = import.meta.env.BASE_URL || "/";

  return (
    <main className="bg-transparent">
      {/* HERO */}
      <Section id="hero" title="">
        <div className="relative z-10 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight text-slate-100">
              Data Engineer <span className="text-sky-400">&amp; AI</span>
              <br />
              Automation
              <br />
              Specialist
            </h1>

            <p className="mt-6 text-slate-300 max-w-2xl">
              I build reliable data pipelines, anti-bot tooling, and AI-driven
              automation across AWS/Azure — with a focus on performance,
              observability, and clean code.
            </p>

            <div className="mt-6 flex gap-3">
              {/* EXPLORE PROJECTS */}
              <Button asChild className="cursor-pointer">
                <a
                  className="inline-flex items-center gap-2"
                  href="#projects"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById("projects")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  <ArrowRight className="h-4 w-4" /> Explore Projects
                </a>
              </Button>

              {/* DOWNLOAD RESUME (uses BASE) */}
              <Button asChild className="cursor-pointer">
                <a
                  className="inline-flex items-center gap-2"
                  href={`${BASE}resume.pdf`}
                  download
                >
                  <Download className="h-4 w-4" /> Download Resume
                </a>
              </Button>
            </div>

            {/* Contact row */}
            <div className="mt-6 space-y-2 text-slate-300/90">
              <div className="text-sm">+91 9207970707 • soorajms0707@gmail.com</div>
              <div className="text-sm">Kerala, India (open to remote)</div>

              <div className="flex gap-2 pt-2">
                <Button asChild size="icon" variant="secondary" className="rounded-full">
                  <a
                    href="https://github.com/soorajms0707"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                  >
                    <Github className="h-4 w-4" />
                  </a>
                </Button>
                <Button asChild size="icon" variant="secondary" className="rounded-full">
                  <a
                    href="https://www.linkedin.com/in/soorajs0707"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* Profile image */}
          <div className="relative">
            {/* non-blocking decorative overlay lives behind content */}
            <div className="absolute inset-0 pointer-events-none z-0 rounded-3xl bg-[radial-gradient(1200px_700px_at_85%_-10%,rgba(99,102,241,.10)_0%,transparent_55%)]" />
            <img
              src={`${BASE}profile.jpg`} // change to profile.png if you use png
              alt="Sooraj"
              className="relative z-10 w-full rounded-3xl border border-slate-800/60 bg-slate-900/40 object-cover"
            />
          </div>
        </div>
      </Section>

      {/* ABOUT (keep your profile sentences) */}
      <Section
        id="about"
        title="About"
        subtitle="How I work and what I focus on"
      >
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-slate-900/50 border-slate-800">
            <CardContent className="p-6">
              <div className="font-bold">What I do</div>
              <p className="text-slate-300 mt-2">
                I design and build scalable data pipelines, AI automation systems,
                and intelligent scraping solutions.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-slate-900/50 border-slate-800">
            <CardContent className="p-6">
              <div className="font-bold">How I work</div>
              <p className="text-slate-300 mt-2">
                I focus on clean, efficient, and reliable workflows, blending data
                engineering best practices with modern AI techniques.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-slate-900/50 border-slate-800">
            <CardContent className="p-6">
              <div className="font-bold">Now</div>
              <p className="text-slate-300 mt-2">
                Expanding cloud expertise and AI-driven automation while working on
                advanced anti-bot strategies.
              </p>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* EXPERIENCE */}
      <Section
        id="experience"
        title="Experience"
        subtitle="Hands-on roles where I shipped and learned the most."
      >
        <div className="grid md:grid-cols-1 gap-6">
          <Card className="bg-slate-900/60 border-slate-800">
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <h3 className="text-xl font-semibold text-slate-100">
                  Data Mining Engineer — Hashwave Technologies
                </h3>
                <span className="text-sm text-slate-400 whitespace-nowrap">
                  2023 – Present • Kerala, India
                </span>
              </div>
              <ul className="mt-4 text-slate-300 list-disc pl-6 space-y-2">
                <li>Led R&amp;D initiatives, delivering proof-of-concept tools to solve complex data challenges.</li>
                <li>Developed robust web scraping solutions using Scrapy, Playwright, and BeautifulSoup.</li>
                <li>Automated large-scale data cleaning with Pandas and regex for faster, more accurate outputs.</li>
                <li>Researched and implemented AI-driven methods to increase scraping and processing speed.</li>
                <li>Built and deployed data pipelines integrating MySQL and MongoDB.</li>
                <li>Optimized tools to adapt to site changes and bypass CAPTCHA/anti-bot systems.</li>
                <li>Mentored engineers and trained new hires, boosting team capability and delivery speed.</li>
                <li>Integrated REST APIs for seamless communication between microservices and frontend systems.</li>
                <li>Deployed and scaled pipelines on AWS and Azure for high performance.</li>
                <li>Performed code reviews to ensure clean, efficient, and standards-compliant code.</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* EDUCATION */}
      <Section id="education" title="Education" subtitle="Academic background">
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-slate-900/60 border-slate-800">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-slate-100">
                Bachelor of Computer Science &amp; Engineering
              </h3>
              <p className="mt-2 text-slate-300">
                Vidya Academy of Science and Technology, Kerala, India (2018–2022)
              </p>
              <ul className="mt-4 text-slate-300 list-disc pl-6 space-y-2">
                <li>Strong grounding in data structures, algorithms, databases, and software engineering.</li>
                <li>Workshops &amp; academic projects focused on Python development, IoT, and data processing.</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* ACHIEVEMENTS */}
      <Section
        id="achievements"
        title="Achievements & Certifications"
        subtitle="Highlights from my CV"
      >
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-slate-900/60 border-slate-800">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-slate-100">
                Python Web Development Expert (A+), NACTET — 2023
              </h3>
              <ul className="mt-3 text-slate-300 list-disc pl-6 space-y-2">
                <li>Built full-stack web applications using Python, Django, HTML, CSS, and JavaScript, with DB integration and form handling.</li>
                <li>Worked with RESTful APIs and followed best practices in modular coding and Git.</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-slate-900/60 border-slate-800">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-slate-100">
                Python Django–Angular Full Stack Development (A+), Luminar Technolab — 2023
              </h3>
              <ul className="mt-3 text-slate-300 list-disc pl-6 space-y-2">
                <li>Developed full-stack projects using Django backend with responsive frontends.</li>
                <li>Gained foundational Angular skills in component-based UI design.</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-slate-900/60 border-slate-800">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-slate-100">Internet of Things Using Raspberry Pi — 2019</h3>
              <p className="mt-3 text-slate-300">
                Practical knowledge building IoT apps with Raspberry Pi, including sensors, data collection, and automation.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-slate-900/60 border-slate-800">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-slate-100">Data Science A-Z Completion Certificate — 2022</h3>
              <p className="mt-3 text-slate-300">
                Covered data preprocessing, analysis, visualization, and introductory machine learning using Python tools.
              </p>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* PROJECTS */}
      <Section id="projects" title="Projects" subtitle="A few highlights. More on GitHub.">
        <div className="grid md:grid-cols-2 gap-6">
          {/* Anti-Scrape Audit — links removed per request */}
          <Card className="bg-slate-900/60 border-slate-800">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-slate-100">Anti-Scrape Audit</h3>
              <p className="mt-3 text-slate-300">
                Audits sites, detects 403/CAPTCHA/soft blocks, and scores scraping complexity. Automates Playwright checks and
                chooses headers/proxies/clients.
              </p>

              {/* tech badges */}
              <div className="mt-4 flex flex-wrap gap-2 text-xs">
                {["Python", "Playwright", "Requests/Httpx", "Proxy rotation"].map((t) => (
                  <span
                    key={t}
                    className="px-2 py-1 rounded-full bg-slate-800 border border-slate-700 text-slate-200"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* ⛔️ No Git/Docs buttons here */}
            </CardContent>
          </Card>

          {/* Data Validation & Monitoring */}
          <Card className="bg-slate-900/60 border-slate-800">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-slate-100">Data Validation &amp; Monitoring</h3>
              <p className="mt-3 text-slate-300">
                Automated checks for datatypes, header conformity, nulls, and quality issues; designed for pipelines needing
                reliability and alerting.
              </p>
              <div className="mt-4 flex flex-wrap gap-2 text-xs">
                {["Pandas", "PySpark", "Airflow", "Monitoring"].map((t) => (
                  <span
                    key={t}
                    className="px-2 py-1 rounded-full bg-slate-800 border border-slate-700 text-slate-200"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Links kept for other projects */}
              <div className="mt-5 flex gap-3">
                <Button asChild variant="secondary">
                  <a
                    className="inline-flex items-center gap-2"
                    href="https://github.com/soorajms0707"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="h-4 w-4" /> GitHub
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Asus Laptop Website */}
          <Card className="bg-slate-900/60 border-slate-800">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-slate-100">Asus Laptop Website</h3>
              <p className="mt-3 text-slate-300">
                Full-stack project with Django backend, user/admin login, and email inquiry flow.
              </p>
              <div className="mt-4 flex flex-wrap gap-2 text-xs">
                {["Python", "Django", "HTML", "CSS", "JS"].map((t) => (
                  <span
                    key={t}
                    className="px-2 py-1 rounded-full bg-slate-800 border border-slate-700 text-slate-200"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-5 flex gap-3">
                <Button asChild variant="secondary">
                  <a
                    className="inline-flex items-center gap-2"
                    href="https://github.com/soorajms0707/Asus_laptop-website"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="h-4 w-4" /> GitHub
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* IoT Safety Projects */}
          <Card className="bg-slate-900/60 border-slate-800">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-slate-100">IoT Safety Projects</h3>
              <p className="mt-3 text-slate-300">
                Smart gas stove &amp; LPG monitoring; Android-controlled smart wheelchair; Raspberry-Pi mini projects.
              </p>
              <div className="mt-4 flex flex-wrap gap-2 text-xs">
                {["Sensors", "Raspberry-Pi", "Android", "Safety"].map((t) => (
                  <span
                    key={t}
                    className="px-2 py-1 rounded-full bg-slate-800 border border-slate-700 text-slate-200"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* SKILLS */}
      <Section id="skills" title="Skills" subtitle="Tooling I use frequently and enjoy.">
        <div className="space-y-6">
          {[
            ["Languages", ["Python", "C", "C++", "JavaScript", "HTML", "CSS"]],
            ["Frameworks", ["Django", "Angular", "Bootstrap", "Scrapy", "Playwright", "jQuery"]],
            ["Databases", ["MySQL", "MariaDB", "MongoDB"]],
            [
              "Tools & Platforms",
              ["GitHub", "PyCharm", "Postman", "REST API", "Visual Studio", "Azure", "AWS", "Docker", "Apache Airflow"],
            ],
            ["Libraries", ["Pandas", "bs4", "Selenium", "Ajax"]],
            ["AI & Data Skills", ["AI-driven automation", "ML", "NLP", "Data Validation & Quality Monitoring"]],
            ["Data Processing", ["PySpark", "Apache Spark"]],
            ["Operating Systems", ["Windows", "Linux"]],
            ["Soft Skills", ["Communication", "Problem Solving", "Creativity"]],
          ].map(([group, items]) => (
            <div key={group as string}>
              <h3 className="text-slate-200 font-semibold mb-2">{group as string}</h3>
              <div className="flex flex-wrap gap-2 text-xs">
                {(items as string[]).map((t) => (
                  <span key={t} className="px-2 py-1 rounded-full bg-slate-800 border border-slate-700">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* INTERESTS */}
      <Section id="interests" title="Interests" subtitle="Outside of work">
        <Card className="bg-slate-900/60 border-slate-800">
          <CardContent className="p-6">
            <ul className="text-slate-300 list-disc pl-6 space-y-2">
              <li>Data-driven problem solving</li>
              <li>Exploring new technologies</li>
              <li>AI &amp; automation</li>
              <li>Trading</li>
              <li>Reading &amp; driving</li>
              <li>Music &amp; movies</li>
            </ul>
          </CardContent>
        </Card>
      </Section>

      {/* CONTACT */}
      <Section id="contact" title="Contact" subtitle="Let’s build something useful.">
        <Card className="bg-slate-900/60 border-slate-800">
          <CardContent className="p-6">
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <div className="text-slate-400 text-sm">Email</div>
                <div className="text-slate-200">soorajms0707@gmail.com</div>
              </div>
              <div>
                <div className="text-slate-400 text-sm">GitHub</div>
                <div className="text-slate-200">github.com/soorajms0707</div>
              </div>
              <div>
                <div className="text-slate-400 text-sm">LinkedIn</div>
                <div className="text-slate-200">/in/soorajs0707</div>
              </div>
            </div>
            <div className="mt-6 text-xs text-slate-500">
              © {new Date().getFullYear()} Sooraj M S. All rights reserved.
            </div>
          </CardContent>
        </Card>
      </Section>
    </main>
  );
}
