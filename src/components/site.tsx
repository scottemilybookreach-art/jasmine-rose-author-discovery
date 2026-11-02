import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { ArrowUp, Menu, X, Mail, Instagram, Facebook, Twitter, Linkedin } from "lucide-react";

export const EMAIL = "jasminerosebookresearch@gmail.com";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/success-stories", label: "Success Stories" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
] as const;

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link to="/" className="flex items-center gap-3" aria-label="Jasmine Rose home">
      <img src="/favicon.svg" alt="" width={36} height={36} className="h-9 w-9" />
      <span className={`font-display text-xl font-semibold tracking-[0.25em] ${light ? "text-primary-foreground" : "text-primary"}`}>
        JASMINE <span className="text-gold-grad">ROSE</span>
      </span>
    </Link>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const path = useRouterState({ select: (s) => s.location.pathname });
  useEffect(() => setOpen(false), [path]);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 20);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? "glass shadow-soft py-3" : "py-5"}`}>
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 lg:px-8" aria-label="Main">
        <Logo />
        <ul className="hidden items-center gap-8 text-sm font-medium text-foreground lg:flex">
          {NAV.map((n) => (
            <li key={n.to}>
              <Link to={n.to} className="nav-link" activeOptions={{ exact: true }}>{n.label}</Link>
            </li>
          ))}
        </ul>
        <Link to="/contact" className="btn-gold hidden !py-2.5 !px-5 text-sm lg:inline-flex">Get Started</Link>
        <button className="grid h-11 w-11 place-items-center rounded-full text-primary lg:hidden" onClick={() => setOpen((o) => !o)} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open}>
          {open ? <X /> : <Menu />}
        </button>
      </nav>
      {open && (
        <div className="glass mx-4 mt-3 rounded-3xl p-6 shadow-lux lg:hidden">
          <ul className="flex flex-col gap-4 text-lg">
            {NAV.map((n) => (
              <li key={n.to}><Link to={n.to} className="nav-link" activeOptions={{ exact: true }}>{n.label}</Link></li>
            ))}
          </ul>
          <Link to="/contact" className="btn-gold mt-6 w-full justify-center">Get Started</Link>
        </div>
      )}
    </header>
  );
}

export function Footer() {
  return (
    <footer className="bg-royal text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 md:grid-cols-3 lg:px-8">
        <div>
          <Logo light />
          <p className="mt-4 max-w-xs text-primary-foreground/80">Helping Authors Get Discovered Through Goodreads Listopia</p>
        </div>
        <div>
          <h3 className="text-xl text-gold">Contact</h3>
          <a href={`mailto:${EMAIL}`} className="mt-3 flex items-center gap-2 break-all text-primary-foreground/90 hover:text-gold"><Mail className="h-4 w-4 shrink-0" />{EMAIL}</a>
          <div className="mt-5 flex gap-3">
            {[Instagram, Facebook, Twitter, Linkedin].map((I, i) => (
              <a key={i} href="#" aria-label={["Instagram", "Facebook", "Twitter", "LinkedIn"][i]} className="glass-dark grid h-10 w-10 place-items-center rounded-full transition hover:-translate-y-1 hover:text-gold"><I className="h-4 w-4" /></a>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-xl text-gold">Explore</h3>
          <ul className="mt-3 grid grid-cols-2 gap-2 text-primary-foreground/85">
            {NAV.map((n) => <li key={n.to}><Link to={n.to} className="hover:text-gold">{n.label}</Link></li>)}
            <li><Link to="/privacy" className="hover:text-gold">Privacy Policy</Link></li>
            <li><Link to="/terms" className="hover:text-gold">Terms of Service</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-primary-foreground/15 py-6 text-center text-sm text-primary-foreground/70">Copyright © 2026 Jasmine Rose</div>
    </footer>
  );
}

export function BackToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const on = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} aria-label="Back to top"
      className={`btn-gold fixed bottom-6 right-6 z-40 !p-0 h-12 w-12 justify-center transition-all duration-500 ${show ? "opacity-100" : "pointer-events-none translate-y-6 opacity-0"}`}>
      <ArrowUp className="h-5 w-5" />
    </button>
  );
}

/** Rotates the favicon slowly while the site is loading or navigating, then settles upright. */
export function FaviconSpinner() {
  const pending = useRouterState({ select: (s) => s.status === "pending" || s.isLoading });
  const path = useRouterState({ select: (s) => s.location.pathname });
  const [spinUntil, setSpinUntil] = useState(0);
  const img = useRef<HTMLImageElement | null>(null);

  useEffect(() => setSpinUntil(performance.now() + 2400), [path]);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const link = document.querySelector<HTMLLinkElement>("link[rel='icon']");
    if (!link) return;
    const canvas = document.createElement("canvas");
    canvas.width = canvas.height = 64;
    const ctx = canvas.getContext("2d")!;
    if (!img.current) { img.current = new Image(); img.current.src = "/favicon.svg"; }
    let angle = 0, raf = 0, last = performance.now(), frame = 0;
    const tick = (t: number) => {
      const active = pending || t < spinUntil;
      angle = (angle + (t - last) * 0.12) % 360; // ~3s per turn
      last = t;
      if (!active && angle < 8) { link.href = "/favicon.svg"; return; } // finish upright
      if (++frame % 3 === 0 && img.current?.complete) {
        ctx.clearRect(0, 0, 64, 64);
        ctx.save(); ctx.translate(32, 32); ctx.rotate((angle * Math.PI) / 180);
        ctx.drawImage(img.current, -32, -32, 64, 64); ctx.restore();
        link.href = canvas.toDataURL("image/png");
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [pending, spinUntil]);
  return null;
}

export function Reveal({ children, className = "", delay = 0, zoom = false, as: Tag = "div" }: { children: ReactNode; className?: string; delay?: number; zoom?: boolean; as?: "div" | "li" | "article" }) {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => { if (e?.isIntersecting) { el.classList.add("is-visible"); io.disconnect(); } }, { threshold: 0.15, rootMargin: "0px 0px -40px 0px" });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    <Tag ref={ref as any} className={`reveal ${zoom ? "zoom" : ""} ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </Tag>
  );
}

export function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const [n, setN] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (!e?.isIntersecting) return;
      io.disconnect();
      const start = performance.now(), d = 1800;
      const step = (t: number) => {
        const p = Math.min(1, (t - start) / d);
        setN(Math.round(to * (1 - Math.pow(1 - p, 3))));
        if (p < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    });
    io.observe(el);
    return () => io.disconnect();
  }, [to]);
  return <span ref={ref}>{n.toLocaleString()}{suffix}</span>;
}

export function AnimatedText({ text, start = 0, className = "" }: { text: string; start?: number; className?: string }) {
  let i = 0;
  return (
    <span className={className} aria-label={text}>
      {text.split(" ").map((w, wi) => (
        <span key={wi} className="inline-block whitespace-nowrap" aria-hidden="true">
          {w.split("").map((c, ci) => <span key={ci} className="letter" style={{ animationDelay: `${start + i++ * 28}ms` }}>{c}</span>)}
          {"\u00a0"}
        </span>
      ))}
    </span>
  );
}

export function PageHeader({ eyebrow, title, text }: { eyebrow: string; title: string; text?: string }) {
  return (
    <section className="bg-hero relative overflow-hidden pt-40 pb-20 text-center">
      <FloatingBooks />
      <div className="relative mx-auto max-w-3xl px-5">
        <p className="eyebrow animate-rise">{eyebrow}</p>
        <h1 className="mt-4 text-5xl font-semibold text-primary md:text-6xl"><AnimatedText text={title} start={150} /></h1>
        {text && <p className="animate-rise mx-auto mt-6 max-w-2xl text-lg text-muted-foreground" style={{ animationDelay: "500ms" }}>{text}</p>}
      </div>
    </section>
  );
}

function Book({ className, style, tone }: { className: string; style?: React.CSSProperties; tone: "gold" | "royal" }) {
  const main = tone === "gold" ? "var(--gold)" : "var(--primary)";
  const accent = tone === "gold" ? "var(--primary)" : "var(--gold)";
  return (
    <svg viewBox="0 0 60 80" className={`animate-float absolute ${className}`} style={style} aria-hidden="true">
      <rect x="6" y="4" width="48" height="72" rx="5" fill={main} opacity=".9" />
      <rect x="6" y="4" width="8" height="72" rx="3" fill={accent} opacity=".5" />
      <rect x="20" y="20" width="26" height="3" rx="1.5" fill={accent} opacity=".7" />
      <rect x="20" y="28" width="18" height="3" rx="1.5" fill={accent} opacity=".5" />
    </svg>
  );
}

export function FloatingBooks() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-60">
      <Book tone="gold" className="left-[6%] top-[22%] w-12" style={{ ["--r" as string]: "-14deg", animationDelay: "0s" }} />
      <Book tone="royal" className="right-[8%] top-[18%] w-10" style={{ ["--r" as string]: "12deg", animationDelay: "-3s" }} />
      <Book tone="royal" className="left-[42%] bottom-[8%] w-8" style={{ ["--r" as string]: "20deg", animationDelay: "-5s" }} />
      <Book tone="gold" className="right-[30%] bottom-[14%] w-9 hidden md:block" style={{ ["--r" as string]: "-8deg", animationDelay: "-2s" }} />
      <Book tone="gold" className="left-[20%] bottom-[30%] w-7 hidden md:block" style={{ ["--r" as string]: "30deg", animationDelay: "-7s" }} />
    </div>
  );
}

export function SectionTitle({ eyebrow, title, text, light = false }: { eyebrow: string; title: string; text?: string; light?: boolean }) {
  return (
    <Reveal className="mx-auto mb-14 max-w-2xl text-center">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className={`mt-3 text-4xl font-semibold md:text-5xl ${light ? "text-primary-foreground" : "text-primary"}`}>{title}</h2>
      <div className="bg-gold-grad mx-auto mt-5 h-0.5 w-20 rounded-full" />
      {text && <p className={`mt-5 text-lg ${light ? "text-primary-foreground/80" : "text-muted-foreground"}`}>{text}</p>}
    </Reveal>
  );
}
