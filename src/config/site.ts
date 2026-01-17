export type IconName =
  | "Lightbulb"
  | "Sparkles"
  | "Code2"
  | "Cpu"
  | "Globe2"
  | "ShieldCheck";

export const siteContent = {
  brand: "Light&ConsulITing",
  strapline: "Precision in Every Lumen. Excellence in Every Line of Code.",
  hero: {
    eyebrow: "Relux-driven lighting intelligence",
    title: "Precision in Every Lumen. Excellence in Every Line of Code.",
    subtitle:
      "We plan compliant lighting with Relux — EN 12464, 3D simulations, and sensor-tuned schemes. And when workflows need it, we build web apps and automation to keep teams moving.",
    ctaPrimary: { label: "Start Your Project", href: "#contact" },
    ctaSecondary: { label: "View Capabilities", href: "#services" },
    highlights: [
      "EN 12464 and emergency-ready deliverables",
      "Relux 3D simulations with daylight + controls",
      "Integrated web portals for submissions and reports",
    ],
  },
  primaryService: {
    title: "Relux Lighting Planning",
    intro:
      "Standards-led lighting design with precise calculation, glare control, and documentation you can issue.",
    bullets: [
      "EN 12464 compliance with UGR and uniformity checks",
      "3D scenes, daylight factors, and sensor optimization",
      "Emergency, exterior, and retrofit scenarios validated",
      "Schedules, aiming diagrams, and marked-up plans",
    ],
  },
  secondaryServices: [
    {
      title: "Web Development",
      icon: "Code2" as IconName,
      body: "Fast, reliable web experiences and dashboards tailored for engineering teams and project workflows.",
      points: [
        "Next.js applications with secure auth and APIs",
        "Dashboards for submissions, approvals, and reporting",
        "Design systems that stay consistent across products",
      ],
    },
    {
      title: "Software Consulting",
      icon: "Cpu" as IconName,
      body: "Architecture, integrations, and automation that connect your lighting process to the rest of your stack.",
      points: [
        "BIM/IFC handoffs and data clean-up",
        "Custom Relux plugins or scripting to accelerate workflows",
        "Integrations with CRMs, ERPs, and project tools",
      ],
    },
  ],
  edge: {
    title: "The ConsulITing Edge",
    body: "Lighting know-how amplified by software rigor. We automate the repetitive parts, keep data structured, and surface insights sooner.",
    bullets: [
      "Automation for repeated room types and fixture swaps",
      "Reusable calculation templates tuned to your standards",
      "APIs and portals so teams submit, track, and retrieve faster",
      "Data models that keep photometrics, rooms, and schedules in sync",
    ],
  },
  portfolio: {
    title: "Selected Work",
    items: [
      {
        title: "Helix Research Campus",
        category: "Lighting",
        tag: "Relux | EN 12464",
        summary:
          "Lab, office, and circulation lighting tuned for low glare and energy targets with sensor zoning.",
      },
      {
        title: "Portside Logistics",
        category: "Lighting",
        tag: "Relux | Exterior",
        summary:
          "Yard and canopy simulation with spill control, emergency egress validation, and aiming documentation.",
      },
      {
        title: "FluxOps Portal",
        category: "Web App",
        tag: "Next.js | Dashboards",
        summary:
          "Submission and reporting portal with secure file intake, status tracking, and automated report delivery.",
      },
    ],
  },
  contact: {
    title: "Start Your Project",
    subtitle:
      "Send drawings, targets, or a short brief — we will respond within one business day.",
    email: "hello@lightconsul.it",
    phone: "+49 160 0000000",
    location: "Remote-first across EU",
  },
  seo: {
    title: "Light&ConsulITing | Relux Lighting Planning & Web Engineering",
    description:
      "Relux lighting calculations, EN 12464 compliance, 3D simulations, and custom web applications. Lighting precision meets IT rigor.",
  },
};
