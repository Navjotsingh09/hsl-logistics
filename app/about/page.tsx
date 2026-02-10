import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Truck, MapPin, Phone, Mail, Clock, ArrowRight, Users, Shield, Globe, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import { MobileNav } from "@/components/mobile-nav"

export const metadata: Metadata = {
  title: "About Us - Our Story, Mission, and Leadership Team",
  description:
    "Learn about HSL Logistics, founded in 2009 with over 15 years of experience in global freight forwarding, warehousing, and supply chain management across 120+ countries.",
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/40 bg-card" role="banner">
        <div className="bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 py-2 flex items-center justify-between text-sm">
            <div className="flex items-center gap-6">
              <a href="tel:+14567890123" className="flex items-center gap-2 hover:text-primary-foreground/80 transition-colors" aria-label="Call HSL Logistics at +1 (456) 789-0123">
                <Phone className="h-4 w-4" aria-hidden="true" />
                <span>+1 (456) 789-0123</span>
              </a>
              <a href="mailto:info@hsllogistics.com" className="hidden sm:flex items-center gap-2 hover:text-primary-foreground/80 transition-colors" aria-label="Email HSL Logistics at info@hsllogistics.com">
                <Mail className="h-4 w-4" aria-hidden="true" />
                <span>info@hsllogistics.com</span>
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" aria-hidden="true" />
              <span className="hidden sm:inline">Mon - Fri: 8:00 AM - 6:00 PM</span>
              <span className="sm:hidden">8AM - 6PM</span>
            </div>
          </div>
        </div>

        <nav className="container mx-auto px-4 py-4 relative" aria-label="Main navigation">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3" aria-label="HSL Logistics - Go to homepage">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/70 rounded-lg flex items-center justify-center">
                <Truck className="h-7 w-7 text-primary-foreground" aria-hidden="true" />
              </div>
              <div>
                <span className="text-xl font-bold text-foreground">HSL</span>
                <span className="text-xl font-light text-muted-foreground ml-1">Logistics</span>
              </div>
            </Link>

            <div className="hidden md:flex items-center gap-8">
              <Link href="/" className="font-medium text-muted-foreground hover:text-primary transition-colors">Home</Link>
              <Link href="/about" className="font-medium text-foreground hover:text-primary transition-colors" aria-current="page">About</Link>
              <Link href="/services" className="font-medium text-muted-foreground hover:text-primary transition-colors">Services</Link>
              <Link href="/contact" className="font-medium text-muted-foreground hover:text-primary transition-colors">Contact</Link>
            </div>

            <div className="flex items-center gap-3">
              <Button asChild className="hidden sm:inline-flex">
                <Link href="/contact">
                  Get a Quote
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>
              <MobileNav />
            </div>
          </div>
        </nav>
      </header>

      <main id="main-content">
        {/* Page Hero */}
        <section className="relative bg-gradient-to-br from-[#3F3D56] via-[#3F3D56]/90 to-[#3F3D56] text-white py-16 md:py-24" aria-labelledby="about-hero-heading">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl">
              <h1 id="about-hero-heading" className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">About HSL Logistics</h1>
              <p className="text-[#EEEEEE] text-lg md:text-xl leading-relaxed">
                Over 15 years of delivering excellence in global freight forwarding, warehousing, and end-to-end supply chain solutions for businesses of every size.
              </p>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16 md:py-24 bg-background" aria-labelledby="story-heading">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Story</span>
                <h2 id="story-heading" className="text-3xl md:text-4xl font-bold mt-3 mb-6 text-foreground">
                  Built on Trust, Driven by Excellence
                </h2>
                <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                  Founded in 2009, HSL Logistics began as a small freight forwarding company with a big vision:
                  to make global logistics accessible, reliable, and efficient for businesses of all sizes.
                </p>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Today, we operate across 120+ countries with a team of dedicated logistics professionals who share a
                  passion for moving the world forward. Our commitment to innovation and customer service has
                  made us one of the most trusted names in the international freight and supply chain industry.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  We believe that every shipment tells a story — and we&apos;re honored to be part of yours.
                </p>
              </div>

              <div className="relative">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-border relative">
                  <Image src="/hero-delivery.jpg" alt="HSL Logistics delivery team loading freight at the company distribution center" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-xl shadow-lg">
                  <div className="text-3xl font-bold">2009</div>
                  <div className="text-sm text-primary-foreground/80">Year Founded</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16 md:py-24 bg-muted/30" aria-labelledby="values-heading">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Values</span>
              <h2 id="values-heading" className="text-3xl md:text-4xl font-bold mt-3 mb-4 text-foreground">
                What Sets HSL Logistics Apart
              </h2>
              <p className="text-muted-foreground text-lg">
                Our core values guide every decision we make and every shipment we handle, ensuring consistent quality for our clients.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: Shield,
                  title: "Reliability You Can Count On",
                  description: "We deliver on our promises with a proven 99% on-time delivery rate. Your cargo is always in safe and experienced hands.",
                },
                {
                  icon: Users,
                  title: "Customer-First Approach",
                  description: "Your success is our priority. We tailor freight and logistics solutions to fit your unique business needs and growth goals.",
                },
                {
                  icon: Globe,
                  title: "Global Reach, Local Expertise",
                  description: "With trusted partners in 120+ countries, we connect your business to international markets with local knowledge and support.",
                },
                {
                  icon: Award,
                  title: "Operational Excellence",
                  description: "We continuously improve our processes, technology, and training to deliver the highest quality logistics service in the industry.",
                },
              ].map((value) => (
                <article
                  key={value.title}
                  className="bg-card border border-border rounded-xl p-6 text-center"
                >
                  <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-5 mx-auto">
                    <value.icon className="h-7 w-7 text-primary" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="bg-primary text-primary-foreground py-12" aria-label="HSL Logistics key achievements">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { value: "15+", label: "Years of Industry Experience" },
                { value: "50K+", label: "Successful Deliveries Completed" },
                { value: "120+", label: "Countries Served Worldwide" },
                { value: "99%", label: "Customer Satisfaction Rate" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-3xl md:text-4xl font-bold mb-2">{stat.value}</div>
                  <div className="text-primary-foreground/80 text-sm md:text-base">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-16 md:py-24 bg-background" aria-labelledby="team-heading">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Leadership</span>
              <h2 id="team-heading" className="text-3xl md:text-4xl font-bold mt-3 mb-4 text-foreground">
                Meet the People Behind HSL Logistics
              </h2>
              <p className="text-muted-foreground text-lg">
                Our experienced leadership team brings decades of logistics, freight forwarding, and supply chain expertise to every client engagement.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { name: "James Mitchell", role: "Chief Executive Officer and Founder", initials: "JM" },
                { name: "Sarah Chen", role: "Chief Operating Officer", initials: "SC" },
                { name: "David Okafor", role: "Vice President of Operations", initials: "DO" },
              ].map((member) => (
                <article key={member.name} className="bg-card border border-border rounded-xl p-8 text-center">
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4" aria-hidden="true">
                    <span className="text-primary font-bold text-xl">{member.initials}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-1">{member.name}</h3>
                  <p className="text-muted-foreground">{member.role}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-20 bg-gradient-to-r from-[#3F3D56] to-[#3F3D56]/90 text-white" aria-labelledby="about-cta-heading">
          <div className="container mx-auto px-4 text-center">
            <h2 id="about-cta-heading" className="text-3xl md:text-4xl font-bold mb-4">Ready to Partner with HSL Logistics?</h2>
            <p className="text-[#EEEEEE] text-lg mb-8 max-w-2xl mx-auto">
              Let us show you why thousands of businesses trust HSL Logistics with their freight, warehousing, and supply chain needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="text-base bg-[#009DCA] text-white hover:bg-[#009DCA]/90">
                <Link href="/contact">
                  Contact Our Team
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="text-base border-white/30 text-white hover:bg-white/10">
                <Link href="/services">
                  View Our Services
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#3F3D56] text-[#EEEEEE] py-16" role="contentinfo">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-[#009DCA] rounded-lg flex items-center justify-center">
                  <Truck className="h-5 w-5 text-white" aria-hidden="true" />
                </div>
                <div>
                  <span className="text-lg font-bold text-white">HSL</span>
                  <span className="text-lg font-light text-[#EEEEEE] ml-1">Logistics</span>
                </div>
              </div>
              <p className="text-[#EEEEEE] mb-6">
                Professional freight forwarding and logistics solutions trusted by businesses across 120+ countries worldwide.
              </p>
            </div>

            <nav aria-label="Footer quick links">
              <h4 className="text-white font-semibold text-lg mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {[
                  { label: "Home", href: "/" },
                  { label: "About Us", href: "/about" },
                  { label: "Services", href: "/services" },
                  { label: "Contact", href: "/contact" },
                ].map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="hover:text-[#009DCA] transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <nav aria-label="Footer services links">
              <h4 className="text-white font-semibold text-lg mb-6">Services</h4>
              <ul className="space-y-3">
                {["Road Freight", "Ocean Freight", "Air Freight", "Warehousing"].map((service) => (
                  <li key={service}>
                    <Link href="/services" className="hover:text-[#009DCA] transition-colors">
                      {service}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div>
              <h4 className="text-white font-semibold text-lg mb-6">Contact Info</h4>
              <address className="not-italic">
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-[#009DCA] flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <span>123 Logistics Way, Suite 100, New York, NY 10001</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-[#009DCA] flex-shrink-0" aria-hidden="true" />
                    <a href="tel:+14567890123" className="hover:text-[#009DCA] transition-colors">+1 (456) 789-0123</a>
                  </li>
                  <li className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-[#009DCA] flex-shrink-0" aria-hidden="true" />
                    <a href="mailto:info@hsllogistics.com" className="hover:text-[#009DCA] transition-colors">info@hsllogistics.com</a>
                  </li>
                </ul>
              </address>
            </div>
          </div>

          <div className="border-t border-[#EEEEEE]/20 mt-12 pt-8 text-center text-[#EEEEEE]/70">
            <p>&copy; {new Date().getFullYear()} HSL Logistics. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
