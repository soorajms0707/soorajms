import React from "react";
import { ArrowRight, Download, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

/** One consistent section layout */
function Section({
  id,
  title,
  subtitle,
  children,
}: {
  id: string;
  title?: string; // optional so hero can omit
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        {title ? (
          <h2 className="text-3xl md:text-4xl font-bold text-slate-100">{title}</h2>
        ) : null}
        {subtitle ? <p className="text-slate-400 mt-2">{subtitle}</p> : null}
        <div className="mt-8">{children}</div>
      </div>
    </section>
  );
}

export default function Portfolio() {
  // important for GitHub Pages subpath
  const BASE = import.meta.env.BASE_URL;

  return (
    <main className="bg-transparent">
      {/* HERO */}
      <Section id="hero">
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

              {/* DOWNLOAD RESUME */}
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
              <div className="text-sm">
                +91 9207970707 • soorajms0707@gmail.com
              </div>
              <div className="text-sm">Kerala, India (open to remote)</div>

              <div className="flex gap-2 pt-2">
                <Button
                  asChild
                  size="icon"
                  variant="secondary"
                  className="rounded-full"
                >
                  <a
                    href="https://github.com/soorajms0707"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                  >
                    <Github className="h-4 w-4" />
                  </a>
                </Button>
                <Button
                  asChild
                  size="icon"
                  variant="secondary"
                  className="rounded-full"
                >
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
            <div className="absolute inset-0 pointer-events-none z-0 rounded-3xl bg-[radial-gradient(1200px_700px_at_85%_-10%,rgba(99,102,241,.10)_0%,transparent_55%)]" />
            <img
              src={`${BASE}profile.jpg`} // or profile.png
              alt="Sooraj"
              loading="lazy"
              className="relative z-10 w-full rounded-3xl border border-slate-800/60 bg-slate-900/40 object-cover"
            />
          </div>
        </div>
      </Section>

      {/* ABOUT */}
      <Section id="about" title="About" subtitle="How I work and what I focus on">
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
      {/* ... keep your Experience, Education, Achievements, Projects, Skills, Interests, Contact sections exactly as we built before ... */}
      {/* In Projects, Anti-Scrape card has no Git/Docs links */}

    </main>
  );
}
