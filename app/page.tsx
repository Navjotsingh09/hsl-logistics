import Link from "next/link"
import { Truck, Ship, Plane, Package, MapPin, Phone, Mail, ChevronRight, ArrowRight, Check } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
                <Truck className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-semibold text-foreground">HSL Logistics</span>
            </Link>
            
            <div className="hidden md:flex items-center gap-8">
              <Link href="/" className="text-sm font-medium text-foreground hover:text-primary transition-colors">Home</Link>
              <Link href="/about" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">About</Link>
              <Link href="/services" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Services</Link>
              <Link href="/contact" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Contact</Link>
            </div>
            
            <div className="flex items-center gap-3">
              <Link href="tel:+14567890123" className="hidden sm:flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                <Phone className="h-4 w-4" />
                <span>+1 (456) 789-0123</span>
              </Link>
              <Button size="sm">Get a Quote</Button>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section - Apple Style */}
      <section className="py-24 md:py-32 lg:py-40 bg-background">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold text-foreground leading-[1.1] mb-6 text-balance">
            Delivering Excellence.<br />
            <span className="text-primary">Worldwide.</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-10 text-pretty leading-relaxed">
            Professional freight and logistics solutions tailored to your business. Fast, reliable, and secure shipping services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-base px-8 h-12 rounded-full">
              Explore Services
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="text-base px-8 h-12 rounded-full">
              Track Shipment
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {[
              { value: "15+", label: "Years Experience" },
              { value: "50K+", label: "Deliveries Made" },
              { value: "120+", label: "Countries Served" },
              { value: "99%", label: "Satisfaction Rate" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl md:text-5xl font-semibold text-foreground mb-2">{stat.value}</div>
                <div className="text-muted-foreground text-sm md:text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 md:py-32 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-semibold text-foreground mb-4">
              Comprehensive Solutions
            </h2>
            <p className="text-lg text-muted-foreground">
              Everything you need for seamless global logistics.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Truck,
                title: "Road Freight",
                description: "Reliable ground transportation for local and long-distance deliveries.",
              },
              {
                icon: Ship,
                title: "Ocean Freight",
                description: "Cost-effective sea shipping for large cargo and international trade.",
              },
              {
                icon: Plane,
                title: "Air Freight",
                description: "Express air cargo services for time-sensitive shipments.",
              },
              {
                icon: Package,
                title: "Warehousing",
                description: "Secure storage with inventory management and distribution.",
              },
            ].map((service) => (
              <div
                key={service.title}
                className="group p-8 bg-secondary rounded-2xl hover:bg-secondary/80 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-5 leading-relaxed">{service.description}</p>
                <Link
                  href="/services"
                  className="inline-flex items-center text-primary text-sm font-medium hover:underline"
                >
                  Learn More <ChevronRight className="h-4 w-4 ml-1" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 md:py-32 bg-secondary">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-semibold text-foreground mb-6">
                Your Trusted Partner in Global Logistics
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                With over 15 years of experience, HSL Logistics has established itself as a leader 
                in providing comprehensive freight and supply chain solutions. Our commitment to 
                excellence enables us to deliver exceptional service to businesses of all sizes.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-4 mb-10">
                {[
                  "24/7 Customer Support",
                  "Real-time Tracking",
                  "Secure Handling",
                  "Competitive Pricing",
                ].map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="h-3.5 w-3.5 text-primary-foreground" />
                    </div>
                    <span className="text-foreground font-medium">{feature}</span>
                  </div>
                ))}
              </div>
              
              <Button size="lg" className="rounded-full px-8">
                Learn More About Us
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-primary/10 via-primary/5 to-transparent rounded-3xl flex items-center justify-center">
                <div className="text-center p-12">
                  <div className="w-32 h-32 bg-primary/10 rounded-3xl flex items-center justify-center mx-auto mb-6">
                    <Truck className="h-16 w-16 text-primary" />
                  </div>
                  <p className="text-2xl font-semibold text-foreground mb-2">15+ Years</p>
                  <p className="text-muted-foreground">of Excellence</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32 bg-foreground">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-semibold text-background mb-6">
            Ready to Ship?
          </h2>
          <p className="text-xl text-background/70 mb-10 max-w-xl mx-auto">
            Get a free quote today and experience the difference of working with a trusted logistics partner.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-base px-8 h-12 rounded-full bg-background text-foreground hover:bg-background/90">
              Request a Quote
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="text-base px-8 h-12 rounded-full border-background/30 text-background hover:bg-background/10">
              Contact Us
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background/80 py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
                  <Truck className="h-5 w-5 text-primary-foreground" />
                </div>
                <span className="text-lg font-semibold text-background">HSL Logistics</span>
              </div>
              <p className="text-background/60 leading-relaxed">
                Professional freight and logistics solutions for businesses worldwide.
              </p>
            </div>
            
            <div>
              <h4 className="text-background font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {["Home", "About Us", "Services", "Contact"].map((link) => (
                  <li key={link}>
                    <Link href="#" className="text-background/60 hover:text-primary transition-colors">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-background font-semibold mb-6">Services</h4>
              <ul className="space-y-3">
                {["Road Freight", "Ocean Freight", "Air Freight", "Warehousing"].map((service) => (
                  <li key={service}>
                    <Link href="#" className="text-background/60 hover:text-primary transition-colors">
                      {service}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-background font-semibold mb-6">Contact</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-background/60">123 Logistics Way, Suite 100, New York, NY 10001</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-background/60">+1 (456) 789-0123</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-background/60">info@hsllogistics.com</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-background/10 mt-12 pt-8 text-center text-background/40 text-sm">
            <p>&copy; {new Date().getFullYear()} HSL Logistics. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
