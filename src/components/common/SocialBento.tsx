import { Link } from "react-router-dom";
import { Linkedin, Github, Figma, Sparkles, Mail } from "lucide-react";

const socialItems = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/pandyashweta/",
    icon: Linkedin,
    external: true,
  },
  {
    label: "GitHub",
    href: "https://github.com/Pandyashweta",
    icon: Github,
    external: true,
  },
  {
    label: "Figma",
    href: "https://www.figma.com/@pandyashweta",
    icon: Figma,
    external: true,
  },
  {
    label: "Creative",
    href: "/creative",
    icon: Sparkles,
    external: false,
  },
];

interface SocialBentoProps {
  layout?: "stack" | "grid";
}

export default function SocialBento({ layout = "stack" }: SocialBentoProps) {
  return (
    <div className="flex flex-col gap-3 w-full">
      <div
        className={
          layout === "grid"
            ? "grid grid-cols-1 sm:grid-cols-2 gap-3"
            : "flex flex-col gap-3"
        }
      >
        {socialItems.map((item) => {
          const Icon = item.icon;
          const cardClass =
            "group flex items-center justify-between rounded-xl bg-[var(--bg-card)] hover:bg-[var(--bg-card-hover)] border border-transparent hover:border-[var(--border-color)] px-5 py-3.5 text-[15px] font-normal text-[var(--text-primary)] transition-all duration-200";
          const iconEl = (
            <Icon className="w-4 h-4 text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] transition-colors" />
          );

          return item.external ? (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className={cardClass}
            >
              <span>{item.label}</span>
              {iconEl}
            </a>
          ) : (
            <Link key={item.label} to={item.href} className={cardClass}>
              <span>{item.label}</span>
              {iconEl}
            </Link>
          );
        })}
      </div>

      <a
        href="mailto:pandyashweta.in@gmail.com"
        className="group flex items-center justify-between rounded-xl bg-[var(--text-primary)] text-[var(--bg-primary)] px-5 py-3.5 text-[15px] font-medium hover:opacity-90 transition-opacity"
      >
        <span>Contact Me</span>
        <Mail className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
      </a>
    </div>
  );
}
