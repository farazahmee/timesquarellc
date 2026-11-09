import { Link } from "react-router-dom";
import { ArrowUpRight, Linkedin, Mail, MapPin } from "lucide-react";
import Container from "@/components/site/Container";
import Logo from "@/components/site/Logo";
import { SITE } from "@/content/site";

const columns = [
  {
    title: "Services",
    links: [
      { label: "AI automation", href: "/services#automation" },
      { label: "AI agents", href: "/services#agents" },
      { label: "Custom software", href: "/services#software" },
      { label: "Web & mobile", href: "/services#web" },
      { label: "Data & integrations", href: "/services#data" },
    ],
  },
  {
    title: "Work",
    links: [
      { label: "Case studies", href: "/case-studies" },
      { label: "SurgiSync", href: "/case-studies#surgisync" },
      { label: "RevelTV", href: "/case-studies#reveltv" },
      { label: "Simpla.AI", href: "/case-studies#simpla-ai" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Process", href: "/#process" },
      { label: "Insights", href: "/blog" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy policy", href: "/privacy-policy" },
      { label: "Terms of service", href: "/terms-of-service" },
      { label: "LinkedIn", href: SITE.linkedinUrl },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#07080a]">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-grid opacity-30" />
      <Container className="relative">
        <div className="grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.35fr_.7fr_.7fr_.7fr_.7fr] lg:gap-10 lg:py-20">
          <div className="max-w-[300px]">
            <Logo />
            <p className="mt-5 text-[13px] leading-[1.65] text-white/45">
              AI automation, agents, and custom software for operations teams.
              Built in England, working across time zones.
            </p>
            <div className="mt-6 space-y-2.5 text-[12px] text-white/45">
              <a
                href={`mailto:${SITE.email}`}
                className="flex items-center gap-2 transition-colors hover:text-white/80"
              >
                <Mail size={13} strokeWidth={1.7} className="text-white/30" />
                {SITE.email}
              </a>
              <p className="flex items-center gap-2">
                <MapPin size={13} strokeWidth={1.7} className="text-white/30" />
                {SITE.location}
              </p>
              <a
                href={SITE.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 transition-colors hover:text-white/80"
              >
                <Linkedin size={13} strokeWidth={1.7} className="text-white/30" />
                LinkedIn
              </a>
            </div>
          </div>

          {columns.map((column) => (
            <div key={column.title}>
              <h3 className="font-mono text-[10px] uppercase tracking-[0.15em] text-white/35">
                {column.title}
              </h3>
              <ul className="mt-5 space-y-3">
                {column.links.map((link) => {
                  const external = /^https?:\/\//.test(link.href);
                  return (
                    <li key={link.label}>
                      {external ? (
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group inline-flex items-center gap-1.5 text-[13px] text-white/50 transition-colors hover:text-white/85"
                        >
                          {link.label}
                          <ArrowUpRight
                            size={11}
                            className="opacity-0 transition-all duration-300 group-hover:opacity-60"
                          />
                        </a>
                      ) : (
                        <Link
                          to={link.href}
                          className="group inline-flex items-center gap-1.5 text-[13px] text-white/50 transition-colors hover:text-white/85"
                        >
                          {link.label}
                          <ArrowUpRight
                            size={11}
                            className="opacity-0 transition-all duration-300 group-hover:opacity-60"
                          />
                        </Link>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-4 border-t border-white/10 py-6 text-[11px] text-white/35 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {SITE.legalName}. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <span>Registered in England</span>
            <Link to="/privacy-policy" className="transition-colors hover:text-white/70">
              Privacy
            </Link>
            <Link to="/terms-of-service" className="transition-colors hover:text-white/70">
              Terms
            </Link>
          </div>
        </div>

        <div aria-hidden="true" className="relative -mb-2 overflow-hidden pt-2">
          <p className="footer-wordmark translate-y-[18%] text-center">TimeSquare</p>
        </div>
      </Container>
    </footer>
  );
}
