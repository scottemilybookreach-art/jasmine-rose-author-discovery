import { Link } from "@tanstack/react-router";
import {
  BookOpen, BookMarked, Eye, MousePointerClick, Users, Star, TrendingUp, Search, Send, Sparkles, Compass, MessageCircleHeart,
  CheckCircle2, UserRound, Zap, ShieldCheck, Gem, Heart, Mail, Plus, ArrowRight, Quote,
} from "lucide-react";
import portrait from "@/assets/ebook_picture.png.asset.json";
import ranking from "@/assets/Delivery_project_2.png.asset.json";
import emailShot from "@/assets/testimonial.jpeg.asset.json";
import { AnimatedText, Counter, EMAIL, FloatingBooks, Reveal, SectionTitle } from "./site";

const wrap = "mx-auto max-w-7xl px-5 lg:px-8";

export function Hero() {
  return (
    <section className="bg-hero relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-28">
      <FloatingBooks />
      <div className={`${wrap} relative grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]`}>
        <div>
          <p className="eyebrow animate-rise">Goodreads Listopia Promotion</p>
          <h1 className="mt-5 text-5xl font-semibold leading-[1.05] text-primary sm:text-6xl lg:text-7xl">
            <AnimatedText text="Helping Authors Get Their Books Seen on" start={100} />
            <AnimatedText text="Goodreads Listopia" start={1200} className="text-gold-grad italic" />
          </h1>
          <p className="animate-rise mt-7 max-w-xl text-lg leading-relaxed text-muted-foreground" style={{ animationDelay: "1500ms" }}>
            I help authors increase their book's visibility by getting them featured on relevant Goodreads Listopia lists, helping readers discover their work organically.
          </p>
          <div className="animate-rise mt-9 flex flex-wrap gap-4" style={{ animationDelay: "1750ms" }}>
            <Link to="/contact" className="btn-gold">Get Started <ArrowRight className="h-4 w-4" /></Link>
            <Link to="/success-stories" className="btn-outline-royal">View Success Stories</Link>
          </div>
          <div className="animate-rise mt-12 grid max-w-md grid-cols-3 gap-6" style={{ animationDelay: "2000ms" }}>
            {[{ n: 150, s: "+", l: "Authors helped" }, { n: 1200, s: "+", l: "List placements" }, { n: 98, s: "%", l: "Happy clients" }].map((x) => (
              <div key={x.l}>
                <div className="font-display text-3xl font-semibold text-primary"><Counter to={x.n} suffix={x.s} /></div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">{x.l}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="animate-slide-right relative mx-auto w-full max-w-md">
          <div className="bg-royal absolute inset-6 rotate-6 rounded-[2.5rem] opacity-90" />
          <div className="bg-gold-grad absolute inset-6 -rotate-3 rounded-[2.5rem] opacity-70" />
          <div className="relative overflow-hidden rounded-[2.5rem] border-4 border-card bg-cream shadow-lux">
            <img src={portrait.url} alt="Jasmine Rose holding a stack of books" width={600} height={600} className="aspect-square w-full object-cover" fetchPriority="high" />
          </div>
          <div className="glass absolute -bottom-6 -left-4 flex items-center gap-3 rounded-2xl px-5 py-4 shadow-lux sm:-left-10">
            <div className="bg-gold-grad grid h-10 w-10 place-items-center rounded-full"><Star className="h-5 w-5 text-primary-deep" /></div>
            <div><div className="font-display text-lg font-semibold text-primary">Ranked #42</div><div className="text-xs text-muted-foreground">on a popular Listopia list</div></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function About() {
  return (
    <section className="py-24 lg:py-32">
      <div className={`${wrap} grid items-center gap-16 lg:grid-cols-2`}>
        <Reveal zoom className="relative mx-auto w-full max-w-md">
          <div className="absolute -inset-4 rounded-[2.5rem] border-2 border-gold/50" />
          <img src={portrait.url} alt="Portrait of Jasmine Rose" loading="lazy" width={600} height={600} className="relative aspect-[4/5] w-full rounded-[2rem] bg-cream object-cover object-top shadow-lux" />
        </Reveal>
        <Reveal>
          <p className="eyebrow">About Me</p>
          <h2 className="mt-3 text-4xl font-semibold text-primary md:text-5xl">Meet Jasmine Rose</h2>
          <div className="bg-gold-grad mt-5 h-0.5 w-20 rounded-full" />
          <div className="mt-7 space-y-5 text-lg leading-relaxed text-muted-foreground">
            <p className="font-display text-2xl italic text-foreground">Hi, I'm Jasmine Rose.</p>
            <p>I specialize in helping authors gain more exposure through Goodreads Listopia.</p>
            <p>Instead of relying only on ads or Amazon's algorithm, I help books appear on relevant Goodreads lists where real readers vote, browse, and discover new books every day.</p>
            <p>Whether you're an indie author or traditionally published, my goal is simple:</p>
          </div>
          <blockquote className="mt-6 rounded-2xl border-l-4 border-gold bg-cream p-6 font-display text-2xl font-semibold text-primary">Help more readers discover your book.</blockquote>
        </Reveal>
      </div>
    </section>
  );
}

const benefits = [
  { icon: Eye, t: "More visibility", d: "Appear where readers actively browse by genre." },
  { icon: MousePointerClick, t: "More clicks", d: "Higher list positions attract curious readers." },
  { icon: Users, t: "More readers", d: "Reach a global community of passionate book lovers." },
  { icon: Star, t: "More reviews", d: "New readers mean more ratings and reviews." },
  { icon: TrendingUp, t: "More book sales", d: "Organic discovery that turns into real sales." },
];

export function WhyListopia() {
  return (
    <section className="bg-cream py-24 lg:py-32">
      <div className={wrap}>
        <SectionTitle eyebrow="Why Goodreads Listopia?" title="Where Readers Go to Discover" text="Goodreads is one of the largest communities of readers in the world. Listopia lists are viewed by thousands of readers looking for books in specific genres — and books that receive votes climb higher in rankings." />
        <div className="mb-14 grid gap-6 md:grid-cols-3">
          {[{ n: 150, s: "M+", l: "Goodreads members" }, { n: 1000, s: "s", l: "of readers per list" }, { n: 24, s: "/7", l: "organic discovery" }].map((x, i) => (
            <Reveal key={x.l} delay={i * 120} className="glass rounded-3xl p-8 text-center shadow-soft">
              <div className="font-display text-5xl font-semibold text-gold-grad"><Counter to={x.n} suffix={x.s} /></div>
              <div className="mt-2 text-sm uppercase tracking-widest text-muted-foreground">{x.l}</div>
            </Reveal>
          ))}
        </div>
        <p className="mb-8 text-center font-display text-2xl italic text-primary">Higher rankings mean…</p>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {benefits.map((b, i) => (
            <Reveal key={b.t} delay={i * 100} className="card-lux group p-7 text-center">
              <div className="icon-spin bg-royal mx-auto grid h-14 w-14 place-items-center rounded-2xl shadow-soft transition-transform duration-500 group-hover:rotate-12">
                <b.icon className="h-6 w-6 text-gold" />
              </div>
              <h3 className="mt-5 text-2xl font-semibold text-primary">{b.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{b.d}</p>
              <BookOpen className="mx-auto mt-4 h-4 w-4 text-gold opacity-60" aria-hidden />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const services = [
  { icon: Search, t: "Goodreads List Research", d: "Find the most relevant Listopia lists for your book." },
  { icon: Send, t: "Book Submission", d: "Submit your book to multiple Goodreads Listopia lists.", featured: true },
  { icon: Sparkles, t: "Visibility Optimization", d: "Help your book gain more exposure inside Goodreads." },
  { icon: Compass, t: "Personalized Strategy", d: "Recommend the best lists for your genre and audience." },
  { icon: MessageCircleHeart, t: "Author Support", d: "Professional communication throughout the project." },
];

export function Services() {
  return (
    <section className="py-24 lg:py-32">
      <div className={wrap}>
        <SectionTitle eyebrow="My Services" title="Everything Your Book Needs to Be Found" />
        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.t} delay={(i % 3) * 120} className={`card-lux group relative overflow-hidden p-9 ${s.featured ? "bg-royal text-primary-foreground" : ""}`}>
              {s.featured && <span className="bg-gold-grad absolute right-6 top-6 rounded-full px-3 py-1 text-xs font-semibold text-gold-foreground">Most popular</span>}
              <div className={`icon-spin grid h-14 w-14 place-items-center rounded-2xl transition-transform duration-500 group-hover:-rotate-12 ${s.featured ? "bg-gold-grad" : "bg-accent"}`}>
                <s.icon className={`h-6 w-6 ${s.featured ? "text-primary-deep" : "text-primary"}`} />
              </div>
              <h3 className={`mt-6 text-3xl font-semibold ${s.featured ? "text-primary-foreground" : "text-primary"}`}>{s.t}</h3>
              <p className={`mt-3 ${s.featured ? "text-primary-foreground/85" : "text-muted-foreground"}`}>{s.d}</p>
              <Link to="/contact" className={`mt-7 inline-flex items-center gap-2 font-medium transition-all group-hover:gap-3 ${s.featured ? "text-gold" : "text-primary"}`}>Request a quote <ArrowRight className="h-4 w-4" /></Link>
            </Reveal>
          ))}
          <Reveal delay={240} className="bg-gold-grad flex flex-col justify-center rounded-3xl p-9 shadow-gold">
            <BookMarked className="h-10 w-10 text-primary-deep" />
            <h3 className="mt-5 text-3xl font-semibold text-primary-deep">Custom packages for every author</h3>
            <Link to="/contact" className="mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-primary-deep px-6 py-3 text-primary-foreground transition hover:-translate-y-1">Let's talk <ArrowRight className="h-4 w-4" /></Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

const reasons = [
  { icon: Search, t: "Personalized Research", d: "Every list hand-picked for your book's genre and themes." },
  { icon: UserRound, t: "Human Outreach", d: "Real, thoughtful work — no bots or shortcuts." },
  { icon: Zap, t: "Fast Delivery", d: "Efficient turnaround so your book gains momentum quickly." },
  { icon: ShieldCheck, t: "Honest Communication", d: "Clear expectations and transparent updates." },
  { icon: Gem, t: "Quality Service", d: "Care and precision in every submission." },
  { icon: Heart, t: "Author Focused", d: "Your goals and your readers always come first." },
];

export function WhyChoose() {
  return (
    <section className="bg-royal relative overflow-hidden py-24 lg:py-32">
      <div className="bg-gold-grad absolute -right-40 -top-40 h-96 w-96 rounded-full opacity-20 blur-3xl" />
      <div className={`${wrap} relative`}>
        <SectionTitle light eyebrow="Why Choose Me" title="A Partner Who Cares About Your Book" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((r, i) => (
            <Reveal key={r.t} delay={(i % 3) * 120} className="glass-dark group rounded-3xl p-8 transition duration-500 hover:-translate-y-2">
              <div className="flex items-center gap-4">
                <div className="icon-spin bg-gold-grad grid h-12 w-12 shrink-0 place-items-center rounded-xl transition-transform duration-500 group-hover:rotate-12"><r.icon className="h-5 w-5 text-primary-deep" /></div>
                <h3 className="flex items-center gap-2 text-2xl font-semibold text-primary-foreground"><CheckCircle2 className="h-5 w-5 text-gold" />{r.t}</h3>
              </div>
              <p className="mt-4 text-primary-foreground/75">{r.d}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SuccessStories() {
  return (
    <section className="py-24 lg:py-32">
      <div className={wrap}>
        <SectionTitle eyebrow="Proof of Results" title="Real Results from Real Authors" />
        <div className="grid gap-8 lg:grid-cols-2">
          <Reveal className="card-lux overflow-hidden">
            <div className="bg-royal flex items-center gap-3 px-7 py-5 text-primary-foreground">
              <Quote className="h-6 w-6 text-gold" /><span className="font-display text-xl">Author Feedback</span>
            </div>
            <div className="p-7">
              <blockquote className="font-display text-3xl leading-snug text-primary">
                "Excellent, Jasmine.<br />I found a load of Echoes listings!<br /><span className="text-gold-grad italic">Very cool.</span>"
              </blockquote>
              <p className="mt-4 text-sm text-muted-foreground">— Steve Gerkin, author of <em>Echoes of Light</em></p>
              <img src={emailShot.url} alt="Email from author Steve Gerkin thanking Jasmine for the Echoes listings" loading="lazy" className="mt-6 w-full rounded-2xl border shadow-soft transition duration-700 hover:scale-[1.02]" />
            </div>
          </Reveal>
          <Reveal delay={150} className="card-lux overflow-hidden">
            <div className="bg-gold-grad flex items-center gap-3 px-7 py-5 text-gold-foreground">
              <TrendingUp className="h-6 w-6" /><span className="font-display text-xl font-semibold">Goodreads Achievement</span>
            </div>
            <div className="p-7">
              <p className="font-display text-3xl text-primary"><em>Echoes of Light</em> ranked <span className="text-gold-grad font-semibold">#42</span> — alongside bestsellers</p>
              <p className="mt-3 text-muted-foreground">Listed beside titles like <em>Range</em>, <em>Pivot</em> and <em>Just Mercy</em> with a perfect 5.00 rating.</p>
              <img src={ranking.url} alt="Goodreads Listopia ranking showing Echoes of Light at position 42" loading="lazy" className="mt-6 w-full rounded-2xl border shadow-soft transition duration-700 hover:scale-[1.02]" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

const steps = [
  { icon: Mail, t: "Contact Me", d: "Send a quick email to start the conversation." },
  { icon: BookOpen, t: "Tell Me About Your Book", d: "Share your genre, audience and goals." },
  { icon: Search, t: "I Research Relevant Goodreads Lists", d: "Hand-picked lists that fit your book perfectly." },
  { icon: Send, t: "I Submit Your Book", d: "Your book is added to the best-matching lists." },
  { icon: TrendingUp, t: "Your Book Gains More Visibility", d: "Readers discover, vote and add your book." },
];

export function HowItWorks() {
  return (
    <section className="bg-cream py-24 lg:py-32">
      <div className="mx-auto max-w-4xl px-5">
        <SectionTitle eyebrow="How It Works" title="Five Simple Steps" />
        <ol className="relative">
          <div className="bg-gold-grad absolute bottom-6 left-7 top-6 w-0.5 md:left-1/2" aria-hidden />
          {steps.map((s, i) => (
            <Reveal as="li" key={s.t} delay={i * 80} className={`relative mb-10 flex items-start gap-6 md:w-1/2 ${i % 2 ? "md:ml-auto md:pl-12" : "md:flex-row-reverse md:pr-12 md:text-right"}`}>
              <div className={`icon-spin bg-royal relative z-10 grid h-14 w-14 shrink-0 place-items-center rounded-full border-4 border-cream shadow-lux md:absolute ${i % 2 ? "md:-left-7" : "md:-right-7"}`}>
                <s.icon className="h-5 w-5 text-gold" />
              </div>
              <div className="card-lux flex-1 p-6">
                <span className="eyebrow">Step {i + 1}</span>
                <h3 className="mt-1 text-2xl font-semibold text-primary">{s.t}</h3>
                <p className="mt-1 text-muted-foreground">{s.d}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

const faqs = [
  { q: "What is Goodreads Listopia?", a: "Listopia is Goodreads' collection of reader-created book lists organized by genre, theme and interest. Readers browse and vote on these lists every day to find their next read." },
  { q: "How long does the process take?", a: "Most projects are completed within a few days to a week, depending on your book and the number of lists. You'll get a clear timeline before we begin." },
  { q: "Can you help any genre?", a: "Yes — fiction, non-fiction, romance, fantasy, thriller, memoir, children's books and more. I research lists specifically matched to your genre and audience." },
  { q: "Do you guarantee rankings?", a: "No honest service can guarantee rankings, since positions depend on genuine reader votes. I guarantee careful research and placement on relevant lists where real readers can discover your book." },
  { q: "How many lists will my book be added to?", a: "It depends on your book and genre. I focus on quality and relevance — you'll receive a full report of every list your book was added to." },
];

export function FAQ() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-3xl px-5">
        <SectionTitle eyebrow="FAQ" title="Questions, Answered" />
        <div className="space-y-4">
          {faqs.map((f, i) => (
            <Reveal key={f.q} delay={i * 80}>
              <details className="card-lux group !translate-y-0 p-0">
                <summary className="flex cursor-pointer items-center justify-between gap-4 px-7 py-6 font-display text-2xl font-semibold text-primary">
                  {f.q}
                  <span className="faq-icon bg-gold-grad grid h-9 w-9 shrink-0 place-items-center rounded-full transition-transform duration-500"><Plus className="h-4 w-4 text-primary-deep" /></span>
                </summary>
                <p className="px-7 pb-7 leading-relaxed text-muted-foreground">{f.a}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CTA() {
  return (
    <section className="px-5 py-24">
      <Reveal zoom className="bg-royal relative mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] px-6 py-20 text-center shadow-lux md:px-16">
        <div className="bg-gold-grad absolute -left-24 -top-24 h-72 w-72 rounded-full opacity-25 blur-3xl" />
        <div className="bg-gold-grad absolute -bottom-24 -right-24 h-72 w-72 rounded-full opacity-25 blur-3xl" />
        <div className="relative">
          <BookOpen className="mx-auto h-12 w-12 text-gold" />
          <h2 className="mt-6 text-4xl font-semibold text-primary-foreground md:text-6xl">Ready to Get Your Book <span className="text-gold-grad italic">Discovered?</span></h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-primary-foreground/80">Let's help more readers find your book through Goodreads Listopia.</p>
          <a href={`mailto:${EMAIL}`} className="btn-gold mt-9">Contact Jasmine Rose <ArrowRight className="h-4 w-4" /></a>
          <a href={`mailto:${EMAIL}`} className="glass-dark mx-auto mt-8 flex w-fit max-w-full items-center gap-3 break-all rounded-full px-6 py-3 text-base text-primary-foreground transition hover:text-gold md:text-xl">
            <Mail className="h-5 w-5 shrink-0 text-gold" />{EMAIL}
          </a>
        </div>
      </Reveal>
    </section>
  );
}
