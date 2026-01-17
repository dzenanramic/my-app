"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Code2,
  Cpu,
  Globe2,
  Lightbulb,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import { siteContent, type IconName } from "@/config/site";
import { cn } from "@/lib/utils";

const iconMap: Record<IconName, LucideIcon> = {
  Lightbulb,
  Sparkles,
  Code2,
  Cpu,
  Globe2,
  ShieldCheck,
};

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Edge", href: "#edge" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Contact", href: "#contact" },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.75, ease: "easeOut", delay },
  viewport: { once: true, amount: 0.25 },
});

const blurOrb = (className: string) => (
  <div
    aria-hidden
    className={cn(
      "orb",
      "bg-gradient-to-br from-amber-500/40 via-sky-400/30 to-amber-300/30",
      className,
    )}
  />
);

export default function HomePage() {
  return (
    <main className="relative overflow-hidden">
      {blurOrb("-left-28 top-10")}
      {blurOrb("right-0 top-1/3")}
      {blurOrb("-bottom-24 left-1/2 -translate-x-1/2")}

      <div className="mx-auto flex max-w-6xl flex-col gap-14 px-6 pb-16 pt-10 sm:px-8 lg:pt-14">
        <SiteHeader />
        <Hero />
        <Services />
        <Edge />
        <Portfolio />
        <Contact />
      </div>
    </main>
  );
}

function SiteHeader() {
  return (
    <header className="glass-card flex flex-col gap-4 border-white/10 bg-slate-900/60 px-4 py-3 sm:flex-row sm:items-center sm:justify-between sm:px-6">
      <div className="flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-amber-400 to-sky-400 text-slate-950 font-black shadow-lg shadow-amber-500/30">
          LC
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.22em] text-amber-200/80">
            {siteContent.brand}
          </p>
          <p className="text-sm text-slate-200/80">
            Relux lighting + web engineering
          </p>
        </div>
      </div>
      <nav className="flex flex-wrap items-center gap-3 text-sm text-slate-300">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="rounded-full px-3 py-1 transition hover:bg-white/10 hover:text-white"
          >
            {link.label}
          </Link>
        ))}
        <Link
          href="#contact"
          className="glow-ring inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-amber-400/20 via-sky-400/20 to-amber-300/20 px-4 py-2 text-sm font-semibold text-white shadow-[0_10px_40px_rgba(0,0,0,0.45)] transition hover:from-amber-400/30 hover:to-sky-400/30"
        >
          Start your project
          <ArrowRight size={16} />
        </Link>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section id="hero" className="relative">
      <motion.div
        {...fadeUp()}
        className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]"
      >
        <div className="space-y-7">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-amber-200">
            <Sparkles size={14} /> {siteContent.hero.eyebrow}
          </div>
          <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
            {siteContent.hero.title}
          </h1>
          <p className="max-w-2xl text-lg text-slate-200/80 lg:text-xl">
            {siteContent.hero.subtitle}
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href={siteContent.hero.ctaPrimary.href}
              className="glow-ring inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-amber-400 to-sky-400 px-5 py-3 text-base font-semibold text-slate-950 shadow-[0_20px_60px_rgba(56,189,248,0.35)] transition hover:-translate-y-0.5 hover:shadow-[0_25px_70px_rgba(251,191,36,0.35)]"
            >
              {siteContent.hero.ctaPrimary.label}
              <ArrowRight size={18} />
            </Link>
            <Link
              href={siteContent.hero.ctaSecondary.href}
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-base font-semibold text-white transition hover:border-white/30 hover:bg-white/10"
            >
              {siteContent.hero.ctaSecondary.label}
            </Link>
          </div>
          <div className="divider-glow" />
          <ul className="grid gap-3 text-sm text-slate-200/80 sm:grid-cols-2">
            {siteContent.hero.highlights.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2 rounded-xl border border-white/5 bg-white/5 px-3 py-2"
              >
                <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-amber-400/20 text-amber-200">
                  <ShieldCheck size={16} />
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="glass-card relative isolate overflow-hidden border-white/10 bg-slate-900/70 p-6">
          <div
            className="absolute inset-0 bg-gradient-to-br from-white/5 via-slate-900/60 to-slate-950"
            aria-hidden
          />
          <div
            className="absolute -right-10 -top-24 h-72 w-72 rounded-full bg-amber-400/20 blur-3xl"
            aria-hidden
          />
          <div
            className="absolute -left-16 bottom-0 h-64 w-64 rounded-full bg-sky-400/20 blur-3xl"
            aria-hidden
          />
          <div className="relative space-y-6">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-400 to-sky-400 text-slate-950 shadow-lg shadow-amber-500/30">
                <Lightbulb size={22} />
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.16em] text-amber-200/80">
                  Relux Excellence
                </p>
                <p className="text-lg font-semibold text-white">
                  Standards-first results
                </p>
              </div>
            </div>
            <p className="text-slate-200/80">
              EN 12464 compliant calculations, glare control, emergency
              readiness, and schedules your build teams can issue.
            </p>
            <div className="grid grid-cols-2 gap-3 text-sm text-slate-100/90">
              {[
                { label: "EN 12464", value: "Office + Industrial" },
                { label: "3D Sims", value: "Daylight + Controls" },
                { label: "Deliverables", value: "Reports + Markups" },
                { label: "Extras", value: "Portals + Plugins" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 shadow-inner shadow-white/5"
                >
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-300/70">
                    {item.label}
                  </p>
                  <p className="text-base font-semibold text-white">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-sm text-slate-200/80">
              Relux is our core instrument. Software craft lets us automate the
              repetitive parts and deliver faster.
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="space-y-12">
      <motion.div
        {...fadeUp()}
        className="relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900/70 p-8 shadow-[0_30px_120px_rgba(0,0,0,0.55)]"
      >
        <div
          className="absolute inset-0 bg-gradient-to-br from-amber-400/12 via-transparent to-sky-400/12"
          aria-hidden
        />
        <div
          className="absolute -left-10 -top-10 h-48 w-48 rounded-full bg-amber-400/30 blur-3xl"
          aria-hidden
        />
        <div
          className="absolute -right-14 bottom-0 h-56 w-56 rounded-full bg-sky-400/25 blur-3xl"
          aria-hidden
        />
        <div className="relative flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-xl space-y-4">
            <p className="text-xs uppercase tracking-[0.24em] text-amber-200">
              The Core
            </p>
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">
              {siteContent.primaryService.title}
            </h2>
            <p className="text-lg text-slate-200/80">
              {siteContent.primaryService.intro}
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {siteContent.primaryService.bullets.map((item) => (
              <div
                key={item}
                className="glass-card border-white/10 bg-white/5 p-4 text-sm text-slate-100"
              >
                <div className="mb-2 inline-flex h-8 w-8 items-center justify-center rounded-full bg-amber-400/20 text-amber-200">
                  <Sparkles size={18} />
                </div>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      <motion.div {...fadeUp(0.1)} className="grid gap-5 lg:grid-cols-2">
        {siteContent.secondaryServices.map((service, idx) => (
          <motion.div
            key={service.title}
            {...fadeUp(idx * 0.05)}
            className="glass-card flex flex-col gap-4 border-white/10 bg-slate-900/60"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-amber-400 to-sky-400 text-slate-950">
                {(() => {
                  const Icon = iconMap[service.icon] ?? Lightbulb;
                  return <Icon size={22} />;
                })()}
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-amber-200/80">
                  Secondary
                </p>
                <h3 className="text-xl font-semibold text-white">
                  {service.title}
                </h3>
              </div>
            </div>
            <p className="text-slate-200/80">{service.body}</p>
            <ul className="space-y-2 text-sm text-slate-100/80">
              {service.points.map((point) => (
                <li key={point} className="flex items-start gap-2">
                  <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-sky-400/20 text-sky-200">
                    <ArrowRight size={14} />
                  </span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

function Edge() {
  return (
    <section id="edge" className="space-y-6">
      <motion.div {...fadeUp()} className="flex flex-col gap-3">
        <p className="text-xs uppercase tracking-[0.22em] text-amber-200">
          ConsulITing
        </p>
        <h2 className="text-3xl font-semibold text-white sm:text-4xl">
          {siteContent.edge.title}
        </h2>
        <p className="max-w-3xl text-lg text-slate-200/80">
          {siteContent.edge.body}
        </p>
      </motion.div>
      <motion.div
        {...fadeUp(0.05)}
        className="grid gap-4 md:grid-cols-2 lg:grid-cols-4"
      >
        {siteContent.edge.bullets.map((item) => (
          <div
            key={item}
            className="glass-card h-full border-white/10 bg-slate-900/60 p-5 text-sm text-slate-100"
          >
            <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-sky-400/30 to-amber-400/30 text-white">
              <Cpu size={18} />
            </div>
            {item}
          </div>
        ))}
      </motion.div>
    </section>
  );
}

function Portfolio() {
  return (
    <section id="portfolio" className="space-y-8">
      <motion.div {...fadeUp()} className="flex flex-col gap-3">
        <p className="text-xs uppercase tracking-[0.22em] text-amber-200">
          Work
        </p>
        <h2 className="text-3xl font-semibold text-white sm:text-4xl">
          {siteContent.portfolio.title}
        </h2>
        <p className="max-w-3xl text-lg text-slate-200/80">
          Lighting simulations, schedules, and documentation — plus the web apps
          that keep submittals and reports moving.
        </p>
      </motion.div>
      <motion.div
        {...fadeUp(0.05)}
        className="grid gap-5 md:grid-cols-2 lg:grid-cols-3"
      >
        {siteContent.portfolio.items.map((item, idx) => (
          <motion.article
            key={item.title}
            {...fadeUp(idx * 0.05)}
            className="glass-card group h-full border-white/10 bg-slate-900/60 p-5"
          >
            <div className="mb-4 flex items-center justify-between text-sm text-slate-300/80">
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-amber-200">
                {item.category}
              </span>
              <span className="text-amber-100">{item.tag}</span>
            </div>
            <h3 className="text-xl font-semibold text-white">{item.title}</h3>
            <p className="mt-3 text-slate-200/80">{item.summary}</p>
            <div className="mt-6 inline-flex items-center gap-2 text-sm text-sky-200">
              <span>Preview</span>
              <ArrowRight
                size={16}
                className="transition group-hover:translate-x-1"
              />
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="space-y-8">
      <motion.div
        {...fadeUp()}
        className="grid gap-6 lg:grid-cols-[1.2fr_1fr] lg:items-start"
      >
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.22em] text-amber-200">
            Contact
          </p>
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">
            {siteContent.contact.title}
          </h2>
          <p className="max-w-2xl text-lg text-slate-200/80">
            {siteContent.contact.subtitle}
          </p>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            <ContactChip
              icon={Mail}
              label="Email"
              value={siteContent.contact.email}
            />
            <ContactChip
              icon={Phone}
              label="Phone"
              value={siteContent.contact.phone}
            />
            <ContactChip
              icon={MapPin}
              label="Location"
              value={siteContent.contact.location}
            />
          </div>
        </div>

        <form className="glass-card border-white/10 bg-slate-900/60 p-6 shadow-[0_30px_100px_rgba(0,0,0,0.6)]">
          <div className="grid gap-4 sm:grid-cols-2">
            <Field
              label="Name"
              id="name"
              type="text"
              placeholder="Your name"
              required
            />
            <Field
              label="Email"
              id="email"
              type="email"
              placeholder="you@company.com"
              required
            />
            <Field
              label="Project Type"
              id="project"
              type="text"
              placeholder="Lighting | Web | Both"
              className="sm:col-span-2"
            />
            <Field
              label="Message"
              id="message"
              as="textarea"
              placeholder="Share drawings, targets, or timelines."
              className="sm:col-span-2"
              required
            />
          </div>
          <button
            type="submit"
            className="glow-ring mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-amber-400 to-sky-400 px-5 py-3 text-base font-semibold text-slate-950 shadow-[0_20px_60px_rgba(56,189,248,0.35)] transition hover:-translate-y-0.5"
          >
            Send request
            <ArrowRight size={18} />
          </button>
          <p className="mt-3 text-center text-xs text-slate-400">
            We respond within one business day with scope, timeline, and next
            steps.
          </p>
        </form>
      </motion.div>

      <footer className="flex flex-col gap-2 border-t border-white/10 pt-6 text-sm text-slate-300/80 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-2 text-white">
          <span className="text-lg font-semibold">{siteContent.brand}</span>
          <span className="text-slate-400">| Lighting + IT</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-slate-400">
            Relux, EN 12464, Web Engineering
          </span>
          <span className="h-1 w-1 rounded-full bg-amber-400" aria-hidden />
          <span className="text-slate-400">Reliable, modern, precise.</span>
        </div>
      </footer>
    </section>
  );
}

type FieldProps = {
  label: string;
  id: string;
  type?: string;
  as?: "input" | "textarea";
  placeholder?: string;
  className?: string;
  required?: boolean;
};

function Field({
  label,
  id,
  type = "text",
  as = "input",
  placeholder,
  className,
  required,
}: FieldProps) {
  const shared = {
    id,
    name: id,
    placeholder,
    required,
    className:
      "w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-300/50",
  } as const;

  return (
    <label
      className={cn("space-y-2 text-sm text-slate-200", className)}
      htmlFor={id}
    >
      <span className="block text-slate-200/80">{label}</span>
      {as === "textarea" ? (
        <textarea {...shared} rows={4} />
      ) : (
        <input {...shared} type={type} />
      )}
    </label>
  );
}

type ContactChipProps = {
  icon: LucideIcon;
  label: string;
  value: string;
};

function ContactChip({ icon: Icon, label, value }: ContactChipProps) {
  return (
    <div className="glass-card flex items-center gap-3 border-white/10 bg-slate-900/60 p-4">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-amber-400/30 to-sky-400/30 text-white">
        <Icon size={18} />
      </div>
      <div className="text-sm text-slate-200/80">
        <p className="text-xs uppercase tracking-[0.18em] text-amber-200/80">
          {label}
        </p>
        <p className="font-semibold text-white">{value}</p>
      </div>
    </div>
  );
}
