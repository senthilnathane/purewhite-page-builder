import { Mail, MapPin, Linkedin, Phone, ArrowRight, Globe, TrendingUp, Shield, Building2, BarChart3, Cpu, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SocialMediaBar } from "@/components/SocialMediaBar";

const services = [
  { name: "Partnerships", icon: Users, desc: "Strategic alliance structuring and joint ventures across the GCC" },
  { name: "Management Consulting", icon: TrendingUp, desc: "C-suite advisory on growth strategy and operational excellence" },
  { name: "Corporate Services", icon: Building2, desc: "End-to-end company formation, licensing, and compliance" },
  { name: "Business Site", icon: Globe, desc: "Physical and virtual office solutions across UAE free zones" },
  { name: "Accounting & Financial Services", icon: BarChart3, desc: "Bookkeeping, audit-readiness, and financial reporting" },
  { name: "Financial Planning & Investor Services", icon: Shield, desc: "Capital raising, investor decks, and financial modelling" },
  { name: "Technology Consulting", icon: Cpu, desc: "Digital transformation, MarTech, and AI-driven solutions" },
];

const companyLinks = ["Who We Are", "Technology Startup", "Retail Business", "Contact"];

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      {/* Ambient glow orbs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[-200px] left-[-100px] w-[600px] h-[600px] rounded-full bg-primary/10 animate-glow" />
        <div className="absolute bottom-[-300px] right-[-150px] w-[700px] h-[700px] rounded-full bg-accent/8 animate-glow delay-2000" />
        <div className="absolute top-[40%] left-[60%] w-[400px] h-[400px] rounded-full bg-primary/5 animate-glow delay-3000" />
      </div>

      {/* Grid overlay */}
      <div
        className="fixed inset-0 pointer-events-none z-0 animate-grid-pulse"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--primary) / 0.06) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary) / 0.06) 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
        }}
      />

      {/* Nav */}
      <nav className="relative z-10 border-b border-border/50 px-6 py-5 backdrop-blur-xl bg-background/60">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-md bg-primary/20 border border-primary/30 flex items-center justify-center">
              <span className="text-primary font-bold text-sm">cb</span>
            </div>
            <span className="text-xl font-bold tracking-tight text-foreground">
              Dillon & Bird
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            <a href="#services" className="hover:text-primary transition-colors duration-300">Services</a>
            <a href="#about" className="hover:text-primary transition-colors duration-300">Who We Are</a>
            <a href="#contact" className="hover:text-primary transition-colors duration-300">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 py-28 md:py-40">
        <div className="animate-slide-up">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 mb-8">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-semibold tracking-widest uppercase text-primary">GCC Strategy Advisors</span>
          </div>
        </div>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.05] max-w-3xl animate-slide-up delay-100">
          Strategy consulting for the{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
            GCC market
          </span>
        </h1>
        <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed animate-slide-up delay-200">
          Advising founders and enterprises on business strategy, market entry, structuring, and scalable growth across the GCC.
        </p>
        <div className="mt-10 flex items-center gap-4 flex-wrap animate-slide-up delay-300">
          <Button className="px-8 py-3 text-base bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/25" size="lg">
            Get in Touch
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
          <Button variant="outline" className="px-8 py-3 text-base border-border hover:border-primary/50 hover:text-primary" size="lg">
            Our Services
          </Button>
        </div>

        {/* Floating stats */}
        <div className="mt-16 grid grid-cols-3 gap-4 max-w-md animate-slide-up delay-500">
          {[
            { n: "50+", l: "Clients" },
            { n: "GCC", l: "Coverage" },
            { n: "7+", l: "Services" },
          ].map((s) => (
            <div key={s.l} className="text-center p-4 rounded-lg border border-border/50 bg-card/50 backdrop-blur-sm">
              <div className="text-2xl font-bold text-primary">{s.n}</div>
              <div className="text-xs text-muted-foreground uppercase tracking-wider mt-1">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section id="services" className="relative z-10 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-primary">What We Do</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3 text-foreground">Our Services</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent mt-4 rounded-full" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s, i) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.name}
                  className="group relative p-6 rounded-xl border border-border/50 bg-card/40 backdrop-blur-sm hover:border-primary/40 hover:bg-card/70 transition-all duration-500 animate-slide-up animate-border-glow"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg text-foreground mb-2">{s.name}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="relative z-10 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-primary">About Us</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-6 text-foreground">Who We Are</h2>
              <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent mb-8 rounded-full" />
              <p className="text-muted-foreground max-w-xl leading-relaxed text-lg">
                Dillon & Bird Partners is a UAE-based strategy consulting firm advising founders and enterprises on business strategy, market entry, structuring, and scalable growth across the GCC.
              </p>
              <div className="mt-8 flex items-start gap-3 p-4 rounded-lg border border-border/50 bg-card/40">
                <MapPin className="w-5 h-5 mt-0.5 text-primary flex-shrink-0" />
                <p className="text-sm text-muted-foreground">Meydan Hotel, Grandstand Building, 6th Floor, Al Meydan Road, Nad Al Sheba 1, Dubai, UAE</p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl border border-border/30 bg-card/30 backdrop-blur-sm p-8 flex flex-col justify-center items-center relative overflow-hidden">
                {/* Decorative grid inside */}
                <div
                  className="absolute inset-0 opacity-[0.04]"
                  style={{
                    backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
                    backgroundSize: '40px 40px',
                  }}
                />
                <div className="relative z-10 text-center">
                  <div className="w-20 h-20 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-6">
                    <Globe className="w-10 h-10 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">GCC Focused</h3>
                  <p className="text-muted-foreground text-sm max-w-xs">Deep expertise across UAE, Saudi Arabia, Qatar, Bahrain, Kuwait, and Oman markets</p>
                </div>
                {/* Corner accents */}
                <div className="absolute top-0 left-0 w-16 h-16 border-t border-l border-primary/20 rounded-tl-2xl" />
                <div className="absolute bottom-0 right-0 w-16 h-16 border-b border-r border-primary/20 rounded-br-2xl" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="relative z-10 border-t border-border/50 py-16 bg-card/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-7 h-7 rounded-md bg-primary/20 border border-primary/30 flex items-center justify-center">
                <span className="text-primary font-bold text-xs">cb</span>
              </div>
              <span className="text-lg font-bold text-foreground">Dillon & Bird</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              UAE-based strategy consulting firm advising founders and enterprises across the GCC.
            </p>
            <div className="flex gap-3 mt-4">
              <a href="#" className="w-8 h-8 rounded-md border border-border/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 transition-all duration-300">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-md border border-border/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 transition-all duration-300">
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-foreground">Our Services</h4>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              {services.map((s) => (
                <li key={s.name}><a href="#services" className="hover:text-primary transition-colors duration-300">{s.name}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-foreground">Company</h4>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              {companyLinks.map((c) => (
                <li key={c}><a href="#" className="hover:text-primary transition-colors duration-300">{c}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-foreground">Newsletter</h4>
            <div className="flex gap-2">
              <Input placeholder="Your email" className="text-sm bg-card/50 border-border/50 focus:border-primary/50" />
              <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">Subscribe</Button>
            </div>
            <p className="text-xs text-muted-foreground mt-3 leading-relaxed">
              Stay updated with the latest insights and opportunities from our team.
            </p>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-border/30 text-center">
          <p className="text-xs text-muted-foreground">© 2024 Dillon & Bird Partners. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
