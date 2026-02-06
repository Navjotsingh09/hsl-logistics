import Link from "next/link"
import Image from "next/image"
import { Truck, Ship, Plane, Package, MapPin, Phone, Mail, Clock, ChevronRight, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { MobileNav } from "@/components/mobile-nav"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/40 bg-card">
        {/* Top Bar */}
        <div className="bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 py-2 flex items-center justify-between text-sm">
            <div className="flex items-center gap-6">
              <a href="tel:+441211234567" className="flex items-center gap-2 hover:text-primary-foreground/80 transition-colors">
                <Phone className="h-4 w-4" />
                <span>0121 123 4567</span>
              </a>
              <a href="mailto:info@hsllogistics.co.uk" className="hidden sm:flex items-center gap-2 hover:text-primary-foreground/80 transition-colors">
                <Mail className="h-4 w-4" />
                <span>info@hsllogistics.co.uk</span>
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span className="hidden sm:inline">Mon - Fri: 8:00 AM - 6:00 PM</span>
              <span className="sm:hidden">8AM - 6PM</span>
            </div>
          </div>
        </div>
        
        {/* Main Navigation */}
        <nav className="container mx-auto px-4 py-4 relative">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/70 rounded-lg flex items-center justify-center">
                <Truck className="h-7 w-7 text-primary-foreground" />
              </div>
              <div>
                <span className="text-xl font-bold text-foreground">HSL</span>
                <span className="text-xl font-light text-muted-foreground ml-1">Logistics</span>
              </div>
            </Link>

            <div className="hidden md:flex items-center gap-8">
              <Link href="/" className="font-medium text-foreground hover:text-primary transition-colors">Home</Link>
              <Link href="/about" className="font-medium text-muted-foreground hover:text-primary transition-colors">About</Link>
              <Link href="/services" className="font-medium text-muted-foreground hover:text-primary transition-colors">Services</Link>
              <Link href="/contact" className="font-medium text-muted-foreground hover:text-primary transition-colors">Contact</Link>
            </div>

            <div className="flex items-center gap-3">
              <Button className="hidden sm:flex">
                Get a Quote
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <MobileNav />
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#3F3D56] via-[#3F3D56]/90 to-[#3F3D56] text-white overflow-hidden">
        <Image src="/hero-delivery.jpg" alt="Two man delivery service Birmingham - HSL Logistics van team" fill className="object-cover opacity-30" priority />
        <div className="absolute inset-0 bg-gradient-to-r from-[#3F3D56]/95 via-[#3F3D56]/70 to-transparent" />
        
        <div className="container mx-auto px-4 py-24 md:py-32 relative">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-white/10 text-white px-4 py-2 rounded-full text-sm font-medium mb-6 border border-white/20">
              <Truck className="h-4 w-4" />
              Birmingham&apos;s Trusted Two Man Delivery Service
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-balance">
              Two Man Delivery &amp; <span className="text-[#009DCA]">Logistics in Birmingham</span>
            </h1>
            <p className="text-lg md:text-xl text-[#EEEEEE] mb-8 leading-relaxed text-pretty">
              Professional two man delivery service, road freight, and logistics solutions across
              Birmingham, the West Midlands, and UK-wide. Same-day and next-day delivery available.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button size="lg" className="text-base bg-[#009DCA] text-white hover:bg-[#009DCA]/90">
                  Get a Free Quote
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/services">
                <Button size="lg" variant="outline" className="text-base border-white/30 text-white hover:bg-white/10">
                  Our Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
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

      {/* Services Section */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Services</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4 text-foreground">
              Logistics &amp; Delivery Services in Birmingham
            </h2>
            <p className="text-muted-foreground text-lg">
              From two man deliveries to full freight solutions, we cover Birmingham, the West Midlands, and nationwide.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Truck,
                title: "Two Man Delivery",
                description: "Professional two man delivery service across Birmingham and the West Midlands for heavy, bulky, or high-value items.",
              },
              {
                icon: Ship,
                title: "Road Freight",
                description: "Reliable road freight and haulage from Birmingham to anywhere in the UK. FTL and LTL available.",
              },
              {
                icon: Plane,
                title: "Same-Day Courier",
                description: "Urgent same-day and next-day courier services from our Birmingham depot to any UK destination.",
              },
              {
                icon: Package,
                title: "Warehousing",
                description: "Secure warehousing and distribution facilities in Birmingham with inventory management services.",
              },
            ].map((service) => (
              <div
                key={service.title}
                className="group bg-card border border-border rounded-xl p-6 hover:border-primary/50 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">{service.title}</h3>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <Link
                  href="/services"
                  className="inline-flex items-center text-primary font-medium hover:gap-2 transition-all"
                >
                  Learn More <ChevronRight className="h-4 w-4 ml-1" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 md:py-28 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">About Us</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-6 text-foreground">
                Birmingham&apos;s Trusted Delivery &amp; Logistics Partner
              </h2>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                Based in the heart of Birmingham, HSL Logistics has been providing reliable two man delivery
                services and freight solutions to businesses across the West Midlands for over 15 years.
              </p>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                From our Birmingham depot, we serve the entire UK with same-day courier services,
                road freight, and professional two man deliveries for heavy and bulky items.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {[
                  "24/7 Customer Support",
                  "Real-time Tracking",
                  "Secure Handling",
                  "Competitive Pricing",
                ].map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <ChevronRight className="h-3 w-3 text-primary-foreground" />
                    </div>
                    <span className="text-foreground font-medium">{feature}</span>
                  </div>
                ))}
              </div>
              
              <Button size="lg">
                Learn More About Us
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-border relative">
                <Image src="/delivery-team.jpg" alt="Two man delivery team Birmingham unloading packages from HSL Logistics van" fill className="object-cover" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-xl shadow-lg">
                <div className="text-3xl font-bold">15+</div>
                <div className="text-sm text-primary-foreground/80">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#3F3D56] to-[#3F3D56]/90 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Need a Delivery in Birmingham?</h2>
          <p className="text-[#EEEEEE] text-lg mb-8 max-w-2xl mx-auto">
            Get a free quote today. Same-day and next-day delivery available across Birmingham, the West Midlands, and UK-wide.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="text-base bg-[#009DCA] text-white hover:bg-[#009DCA]/90">
                Get a Free Quote
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="tel:+441211234567">
              <Button size="lg" variant="outline" className="text-base border-white/30 text-white hover:bg-white/10">
                Call 0121 123 4567
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
                  <span className="text-lg font-bold text-white">HSL</span>
                  <span className="text-lg font-light text-[#EEEEEE] ml-1">Logistics</span>
                </div>
              </div>
              <p className="text-[#EEEEEE] mb-6">
                Birmingham&apos;s trusted two man delivery and logistics company. Serving the West Midlands and UK-wide.
              </p>
              <div className="flex gap-4">
                {["facebook", "twitter", "linkedin", "instagram"].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="w-10 h-10 bg-[#EEEEEE]/10 rounded-lg flex items-center justify-center hover:bg-[#009DCA] transition-colors"
                  >
                    <span className="sr-only">{social}</span>
                    <div className="w-4 h-4 bg-[#EEEEEE] rounded-sm" />
                  </a>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="text-white font-semibold text-lg mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {["Home", "About Us", "Services", "Contact"].map((link) => (
                  <li key={link}>
                    <Link href="#" className="hover:text-[#009DCA] transition-colors">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold text-lg mb-6">Services</h4>
              <ul className="space-y-3">
                {["Road Freight", "Ocean Freight", "Air Freight", "Warehousing"].map((service) => (
                  <li key={service}>
                    <Link href="#" className="hover:text-[#009DCA] transition-colors">
                      {service}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-semibold text-lg mb-6">Contact Info</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-[#009DCA] flex-shrink-0 mt-0.5" />
                  <span>Unit 12, Aston Business Park, Birmingham, B6 4RN</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-[#009DCA] flex-shrink-0" />
                  <span>0121 123 4567</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-[#009DCA] flex-shrink-0" />
                  <span>info@hsllogistics.co.uk</span>
                </li>
              </ul>
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
