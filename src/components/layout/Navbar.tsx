import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  ArrowUpRight,
  Bot,
  ChevronDown,
  Code2,
  Database,
  Menu,
  Smartphone,
  Workflow,
  X,
} from "lucide-react";
import Logo from "@/components/site/Logo";
import ButtonLink from "@/components/site/ButtonLink";
import { NAV_LINKS, SERVICES } from "@/content/site";
import { cn } from "@/lib/utils";

const serviceIcons = {
  automation: Workflow,
  agents: Bot,
  software: Code2,
  web: Smartphone,
  data: Database,
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<number | null>(null);
  const location = useLocation();

  const clearCloseTimer = () => {
    if (closeTimer.current !== null) {
      window.clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  };

  const openServices = () => {
    clearCloseTimer();
    setServicesOpen(true);
  };

  const closeServices = () => {
    clearCloseTimer();
    setServicesOpen(false);
  };

  const scheduleCloseServices = () => {
    clearCloseTimer();
    closeTimer.current = window.setTimeout(() => setServicesOpen(false), 120);
  };

  useEffect(() => {
    return () => {
      if (closeTimer.current !== null) window.clearTimeout(closeTimer.current);
    };
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setServicesOpen(false);
  }, [location.pathname, location.hash]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        setServicesOpen(false);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    if (!servicesOpen) return;
    const onPointerDown = (event: PointerEvent) => {
      if (!servicesRef.current?.contains(event.target as Node)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, [servicesOpen]);

  const isActive = (href: string) => {
    if (href === "/#process") return location.pathname === "/" && location.hash === "#process";
    return location.pathname === href;
  };

  return (
    <header className="fixed inset-x-0 top-3 z-50 md:top-4">
      <div className="mx-auto w-[calc(100%-24px)] max-w-[1120px]">
        <nav className="nav-glass relative flex h-[58px] items-center justify-between gap-3 px-3 sm:px-4">
          <Logo className="shrink-0 pl-1" />

          <div className="hidden items-center gap-0.5 lg:flex">
            {NAV_LINKS.map((link) => {
              if (link.label !== "Services") {
                return (
                  <Link
                    key={link.href}
                    to={link.href}
                    className={cn("nav-link", isActive(link.href) && "nav-link-active")}
                  >
                    {link.label}
                  </Link>
                );
              }

              return (
                <div
                  key={link.href}
                  ref={servicesRef}
                  className="relative"
                  onMouseEnter={openServices}
                  onMouseLeave={scheduleCloseServices}
                  onFocus={openServices}
                  onBlur={(event) => {
                    if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
                      closeServices();
                    }
                  }}
                >
                  <Link
                    to={link.href}
                    aria-haspopup="true"
                    aria-expanded={servicesOpen}
                    aria-controls="services-nav-panel"
                    className={cn(
                      "nav-link gap-1",
                      (isActive(link.href) || servicesOpen) && "nav-link-active",
                    )}
                  >
                    {link.label}
                    <ChevronDown
                      size={11}
                      strokeWidth={2}
                      className={cn(
                        "mt-px opacity-40 transition-transform duration-200",
                        servicesOpen && "rotate-180 opacity-70",
                      )}
                    />
                  </Link>

                  {servicesOpen && (
                    <div
                      id="services-nav-panel"
                      className="nav-panel absolute left-1/2 top-full z-50 w-[660px] -translate-x-1/2 pt-3"
                    >
                      <div className="overflow-hidden rounded-[16px] border border-white/12 bg-[linear-gradient(102deg,#0a0d13,#07101c)] shadow-[0_40px_90px_-30px_rgba(0,0,0,0.95)]">
                        <div className="grid grid-cols-[1.55fr_1fr] gap-1 p-2">
                          <div className="p-2">
                            <div className="flex items-center justify-between px-2 pb-2">
                              <p className="meta-label">Services</p>
                              <span className="font-mono text-[9px] tracking-[0.12em] text-white/25">
                                05
                              </span>
                            </div>

                            <div className="space-y-0.5 border-t border-white/10 pt-1.5">
                              {SERVICES.map((service) => {
                                const Icon = serviceIcons[service.id as keyof typeof serviceIcons];
                                return (
                                  <Link
                                    key={service.id}
                                    to={`/services#${service.id}`}
                                    className="group flex items-start gap-3 rounded-[9px] p-2 transition-colors duration-200 hover:bg-white/[0.045]"
                                  >
                                    <span className="mt-px grid h-8 w-8 shrink-0 place-items-center rounded-[7px] border border-white/10 bg-white/[0.03] text-ice/60 transition-colors duration-200 group-hover:border-ice/20 group-hover:text-ice">
                                      <Icon size={15} strokeWidth={1.6} />
                                    </span>
                                    <span className="min-w-0 flex-1">
                                      <span className="flex items-center gap-1.5 text-[13px] font-medium text-white/80 transition-colors group-hover:text-white">
                                        {service.shortTitle}
                                        <ArrowUpRight
                                          size={11}
                                          className="-translate-x-1 opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-50"
                                        />
                                      </span>
                                      <span className="mt-0.5 block text-[11px] leading-[1.5] text-white/40">
                                        {service.summary}
                                      </span>
                                    </span>
                                  </Link>
                                );
                              })}
                            </div>

                            <Link
                              to="/services"
                              className="mt-1.5 flex items-center justify-between border-t border-white/10 px-2 pt-3 pb-1 font-mono text-[9px] uppercase tracking-[0.12em] text-white/40 transition-colors hover:text-white/80"
                            >
                              View all services
                              <ArrowUpRight size={12} />
                            </Link>
                          </div>

                          <div className="relative overflow-hidden rounded-[12px] border border-white/10 bg-white/[0.025] p-4">
                            <div
                              aria-hidden="true"
                              className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_85%_0%,rgba(172,206,239,0.14),transparent_58%)]"
                            />
                            <img
                              src="/art/cap-automation.svg"
                              alt=""
                              aria-hidden="true"
                              className="pointer-events-none absolute -top-10 -right-12 w-40 opacity-35"
                            />
                            <div className="relative flex h-full flex-col justify-between">
                              <div>
                                <p className="meta-label">Start here</p>
                                <p className="mt-3 text-[15px] font-medium leading-snug tracking-[-0.02em] text-white/90">
                                  Not sure which service fits?
                                </p>
                                <p className="mt-2 text-[11.5px] leading-relaxed text-white/42">
                                  A 30-minute call is usually enough to scope the first build.
                                </p>
                              </div>
                              <div className="mt-5 border-t border-white/10 pt-4">
                                <p className="font-display text-[1.7rem] font-medium leading-none tracking-[-0.04em] text-white/85">
                                  35%
                                </p>
                                <p className="mt-1.5 text-[10px] leading-[1.45] text-white/35">
                                  higher surgical list accuracy at SurgiSync
                                </p>
                              </div>
                              <div className="mt-5 space-y-2">
                                <ButtonLink
                                  to="/contact"
                                  variant="primary"
                                  size="sm"
                                  className="w-full"
                                  withArrow
                                >
                                  Book a free call
                                </ButtonLink>
                                <Link
                                  to="/case-studies"
                                  className="flex items-center justify-between px-1 text-[11px] text-white/40 transition-colors hover:text-white/80"
                                >
                                  See the work
                                  <ArrowUpRight size={12} />
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="flex items-center gap-2">
            <span className="hidden items-center gap-1.5 pr-2 font-mono text-[9px] uppercase tracking-[0.12em] text-white/30 xl:flex">
              <span className="h-1 w-1 rounded-full bg-emerald-400/70" />
              Available Q1
            </span>
            <ButtonLink
              to="/contact"
              variant="primary"
              size="sm"
              className="hidden sm:inline-flex"
              withArrow
            >
              Book a call
            </ButtonLink>
            <button
              type="button"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
              onClick={() => setIsOpen((value) => !value)}
              className="grid h-9 w-9 place-items-center rounded-[8px] border border-white/10 bg-white/[0.025] text-white/70 transition-colors hover:border-white/20 hover:text-white lg:hidden"
            >
              {isOpen ? <X size={17} /> : <Menu size={17} />}
            </button>
          </div>

          {isOpen && (
            <div className="absolute left-0 right-0 top-[calc(100%+8px)] rounded-[14px] border border-white/12 bg-[#0a0c10] p-2 shadow-[0_30px_70px_-20px_rgba(0,0,0,0.9)] lg:hidden">
              <div className="flex flex-col">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    className={cn(
                      "rounded-[8px] px-3 py-2.5 text-[14px] transition-colors",
                      isActive(link.href)
                        ? "bg-white/[0.06] text-white/90"
                        : "text-white/60 hover:bg-white/[0.04] hover:text-white/90",
                    )}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
              <div className="mt-2 border-t border-white/10 pt-2">
                <ButtonLink to="/contact" variant="primary" size="md" className="w-full" withArrow>
                  Book a call
                </ButtonLink>
              </div>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}
