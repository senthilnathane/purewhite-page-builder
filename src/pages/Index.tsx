import { Mail, MapPin, Linkedin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const services = [
  "Partnerships",
  "Management Consulting",
  "Corporate Services",
  "Business Site",
  "Accounting & Financial Services",
  "Financial Planning & Investor Services",
  "Technology Consulting",
];

const companyLinks = [
  "Who We Are",
  "Technology Startup",
  "Retail Business",
  "Contact",
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <nav className="border-b border-border px-6 py-4 flex items-center justify-between max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold tracking-tight">
            <span className="text-primary">cb</span> Dillon & Bird
          </span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <a href="#services" className="hover:text-foreground transition-colors">Services</a>
          <a href="#about" className="hover:text-foreground transition-colors">Who We Are</a>
          <a href="#contact" className="hover:text-foreground transition-colors">Contact</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 py-24 md:py-36">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight max-w-2xl">
          Strategy consulting for the <span className="text-primary">GCC market</span>
        </h1>
        <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">
          Advising founders and enterprises on business strategy, market entry, structuring, and scalable growth across the GCC.
        </p>
        <Button className="mt-8 px-8 py-3 text-base" size="lg">
          Get in Touch
        </Button>
      </section>

      {/* Services */}
      <section id="services" className="bg-secondary py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12">Our Services</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <div key={s} className="bg-card p-6 rounded-lg border border-border hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-lg">{s}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-6">Who We Are</h2>
        <p className="text-muted-foreground max-w-2xl leading-relaxed text-lg">
          Dillon & Bird Partners is a UAE-based strategy consulting firm advising founders and enterprises on business strategy, market entry, structuring, and scalable growth across the GCC.
        </p>
        <div className="mt-8 flex items-start gap-2 text-muted-foreground">
          <MapPin className="w-5 h-5 mt-0.5 text-primary flex-shrink-0" />
          <p className="font-medium">Meydan Hotel, Grandstand Building, 6th Floor, Al Meydan Road, Nad Al Sheba 1, Dubai, UAE</p>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="border-t border-border py-16">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12">
          <div>
            <h3 className="text-xl font-bold mb-3">
              <span className="text-primary">cb</span> Dillon & Bird
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              UAE-based strategy consulting firm advising founders and enterprises across the GCC.
            </p>
            <div className="flex gap-3 mt-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {services.map((s) => (
                <li key={s}><a href="#services" className="hover:text-primary transition-colors">{s}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {companyLinks.map((c) => (
                <li key={c}><a href="#" className="hover:text-primary transition-colors">{c}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Newsletter</h4>
            <div className="flex gap-2">
              <Input placeholder="Subscribe to our newsletter" className="text-sm" />
              <Button size="sm">Subscribe</Button>
            </div>
            <p className="text-sm text-muted-foreground mt-3">
              Stay updated with the latest insights and opportunities from our team.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
