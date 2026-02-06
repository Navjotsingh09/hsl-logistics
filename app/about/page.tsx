import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Truck, MapPin, Phone, Mail, Clock, ArrowRight, Users, Shield, Globe, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import { MobileNav } from "@/components/mobile-nav"

export const metadata: Metadata = {
  title: "About Us - Two Man Delivery Company Birmingham",
  description: "Learn about High Speed Logistics, Birmingham's trusted two man delivery and logistics company. Serving the West Midlands with reliable freight, courier, and warehousing solutions.",
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/40 bg-card">
        <div className="bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 py-2 flex items-center justify-between text-sm">
            <div className="flex items-center gap-6">
              <a href="tel:+442031502602" className="flex items-center gap-2 hover:text-primary-foreground/80 transition-colors">
                <Phone className="h-4 w-4" />
                <span>0203 150 2602</span>
              </a>
              <a href="mailto:info@highspeedlogistics.co.uk" className="hidden sm:flex items-center gap-2 hover:text-primary-foreground/80 transition-colors">
                <Mail className="h-4 w-4" />
                <span>info@highspeedlogistics.co.uk</span>
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span className="hidden sm:inline">Mon - Fri: 8:00 AM - 6:00 PM</span>
              <span className="sm:hidden">8AM - 6PM</span>
            </div>
          </div>
        </div>

        <nav className="container mx-auto px-4 py-4 relative">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/70 rounded-lg flex items-center justify-center">
                <Truck className="h-7 w-7 text-primary-foreground" />
              </div>
              <div>
                <span className="text-xl font-bold text-foreground">High Speed</span>
                <span className="text-xl font-light text-muted-foreground ml-1">Logistics</span>
              </div>
            </Link>

            <div className="hidden md:flex items-center gap-8">
              <Link href="/" className="font-medium text-muted-foreground hover:text-primary transition-colors">Home</Link>
              <Link href="/about" className="font-medium text-foreground hover:text-primary transition-colors">About</Link>
              <Link href="/services" className="font-medium text-muted-foreground hover:text-primary transition-colors">Services</Link>
              <Link href="/contact" className="font-medium text-muted-foreground hover:text-primary transition-colors">Contact</Link>
            </div>

            <div className="flex items-center gap-3">
              <Link href="/contact">
                <Button className="hidden sm:flex">
                  Get a Quote
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <MobileNav />
            </div>
          </div>
        </nav>
      </header>

      {/* Page Hero */}
      <section className="relative bg-gradient-to-br from-[#3F3D56] via-[#3F3D56]/90 to-[#3F3D56] text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">About High Speed Logistics</h1>
            <p className="text-[#EEEEEE] text-lg md:text-xl leading-relaxed">
              Birmingham&apos;s leading two man delivery and logistics company. Delivering success through logistics and expertise across the West Midlands and UK-wide.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Story</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-6 text-foreground">
                Delivering Success Through Logistics And Expertise
              </h2>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                Founded in Birmingham, High Speed Logistics began with a clear mission: to provide the West Midlands
                with fast, reliable, and affordable logistics solutions. Whether its domestic transport, specialized
                logistics or urgent same day delivery — we handle it all.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Today, we are one of Birmingham&apos;s most trusted delivery companies, serving hundreds of local
                businesses with two man deliveries, road freight, same-day courier services, and warehousing
                solutions across the West Midlands and UK-wide.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                From our Birmingham base at 91 Soho Hill, we handle everything from bulky furniture deliveries to full
                freight haulage — always with the precision and care our customers expect.
              </p>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-border relative">
                <Image src="/hero-delivery.jpg" alt="High Speed Logistics delivery team" fill className="object-cover" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-xl shadow-lg">
                <div className="text-3xl font-bold">15+</div>
                <div className="text-sm text-primary-foreground/80">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Values</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4 text-foreground">
              What Sets Us Apart
            </h2>
            <p className="text-muted-foreground text-lg">
              Our core values guide every decision we make and every shipment we handle.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Shield,
                title: "Reliability",
                description: "We deliver on our promises. Your cargo is in safe hands with our proven track record of on-time deliveries.",
              },
              {
                icon: Users,
                title: "Customer First",
                description: "Your success is our priority. We tailor solutions to fit your unique business needs and challenges.",
              },
              {
                icon: Globe,
                title: "Nationwide Reach",
                description: "From Birmingham to anywhere in the UK, we connect your business to markets across the country.",
              },
              {
                icon: Award,
                title: "Excellence",
                description: "We continuously improve our processes and technology to deliver the highest quality service.",
              },
            ].map((value) => (
              <div
                key={value.title}
                className="bg-card border border-border rounded-xl p-6 text-center"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-5 mx-auto">
                  <value.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "15+", label: "Years in Birmingham" },
              { value: "50K+", label: "Deliveries Completed" },
              { value: "500+", label: "Birmingham Businesses Served" },
              { value: "99%", label: "Customer Satisfaction" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl md:text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-primary-foreground/80 text-sm md:text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-[#3F3D56] to-[#3F3D56]/90 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Need a Delivery in Birmingham?</h2>
          <p className="text-[#EEEEEE] text-lg mb-8 max-w-2xl mx-auto">
            Get a free quote today. Two man delivery, same-day courier, and freight services across Birmingham and the West Midlands.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="text-base bg-[#009DCA] text-white hover:bg-[#009DCA]/90">
                Contact Us
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/services">
              <Button size="lg" variant="outline" className="text-base border-white/30 text-white hover:bg-white/10">
                View Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#3F3D56] text-[#EEEEEE] py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-[#009DCA] rounded-lg flex items-center justify-center">
                  <Truck className="h-5 w-5 text-white" />
                </div>
                <div>
                  <span className="text-lg font-bold text-white">High Speed</span>
                  <span className="text-lg font-light text-[#EEEEEE] ml-1">Logistics</span>
                </div>
              </div>
              <p className="text-[#EEEEEE] mb-4">
                Birmingham&apos;s trusted two man delivery and logistics company. Serving the West Midlands and UK-wide.
              </p>
              <p className="text-[#EEEEEE]/60 text-sm">
                HIGH SPEED LOGISTICS LIMITED<br />
                Company number 12755346
              </p>
            </div>

            <div>
              <h4 className="text-white font-semibold text-lg mb-6">Quick Links</h4>
              <ul className="space-y-3">
                <li><Link href="/" className="hover:text-[#009DCA] transition-colors">Home</Link></li>
                <li><Link href="/about" className="hover:text-[#009DCA] transition-colors">About Us</Link></li>
                <li><Link href="/services" className="hover:text-[#009DCA] transition-colors">Services</Link></li>
                <li><Link href="/contact" className="hover:text-[#009DCA] transition-colors">Contact</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold text-lg mb-6">Services</h4>
              <ul className="space-y-3">
                <li><Link href="/services" className="hover:text-[#009DCA] transition-colors">Two Man Delivery</Link></li>
                <li><Link href="/services" className="hover:text-[#009DCA] transition-colors">Road Freight</Link></li>
                <li><Link href="/services" className="hover:text-[#009DCA] transition-colors">Same-Day Courier</Link></li>
                <li><Link href="/services" className="hover:text-[#009DCA] transition-colors">Warehousing</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold text-lg mb-6">Contact Info</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-[#009DCA] flex-shrink-0 mt-0.5" />
                  <span>91 Soho Hill, Birmingham, England, B19 1AY</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-[#009DCA] flex-shrink-0" />
                  <span>0203 150 2602</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-[#009DCA] flex-shrink-0" />
                  <span>info@highspeedlogistics.co.uk</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-[#EEEEEE]/20 mt-12 pt-8 text-center text-[#EEEEEE]/70">
            <p>&copy; {new Date().getFullYear()} High Speed Logistics Limited. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
