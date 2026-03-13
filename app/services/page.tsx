import Link from "next/link"
import Image from "next/image"
import { Truck, Ship, Plane, Package, MapPin, Phone, Mail, Clock, ChevronRight, ArrowRight, BarChart3, Boxes, FileCheck, Headphones } from "lucide-react"
import { Button } from "@/components/ui/button"
import { MobileNav } from "@/components/mobile-nav"

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50">
        <div className="bg-[#2D2B45] text-white/90 text-sm">
          <div className="container mx-auto px-4 py-2.5 flex items-center justify-between">
            <div className="flex items-center gap-6">
              <a href="tel:02031502602" className="flex items-center gap-2 hover:text-primary-foreground/80 transition-colors">
                <Phone className="h-3.5 w-3.5 text-primary" />
                <span>02031502602</span>
              </a>
              <a href="mailto:info@highspeedlogistics.co.uk" className="hidden sm:flex items-center gap-2 hover:text-primary-foreground/80 transition-colors">
                <Mail className="h-3.5 w-3.5 text-primary" />
                <span>info@highspeedlogistics.co.uk</span>
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-3.5 w-3.5 text-primary" />
              <span className="hidden sm:inline">Mon – Fri: 8:00 AM – 6:00 PM</span>
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
                <span className="text-xl font-bold text-foreground">HSL</span>
                <span className="text-xl font-light text-muted-foreground ml-1">Logistics</span>
              </div>
            </Link>

            <div className="hidden md:flex items-center gap-8">
              <Link href="/" className="font-medium text-muted-foreground hover:text-primary transition-colors">Home</Link>
              <Link href="/about" className="font-medium text-muted-foreground hover:text-primary transition-colors">About</Link>
              <Link href="/services" className="font-medium text-foreground hover:text-primary transition-colors">Services</Link>
              <Link href="/contact" className="font-medium text-muted-foreground hover:text-primary transition-colors">Contact</Link>
            </div>

            <div className="flex items-center gap-3">
              <Button className="hidden sm:flex" asChild>
                <Link href="/contact">
                  Get a Quote
                  <ArrowRight className="ml-2 h-3.5 w-3.5" />
                </Link>
              </Button>
              <MobileNav />
            </div>
          </div>
        </nav>
      </header>

      {/* Page Hero */}
      <section className="relative bg-gradient-to-br from-[#3F3D56] via-[#3F3D56]/90 to-[#3F3D56] text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Our Services</h1>
            <p className="text-white/80 text-lg md:text-xl leading-relaxed">
              Comprehensive logistics solutions tailored to your business needs, from road to air and sea.
            </p>
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Core Services</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4 text-foreground">
              End-to-End Logistics Solutions
            </h2>
            <p className="text-muted-foreground text-lg">
              We handle every aspect of your supply chain so you can focus on growing your business.
            </p>
          </div>

          <div className="space-y-16">
            {[
              {
                icon: Truck,
                title: "Road Freight",
                description: "Our extensive road freight network covers local, regional, and cross-border transportation. We offer full truckload (FTL) and less-than-truckload (LTL) services with real-time GPS tracking on every shipment.",
                features: ["Full & Partial Truckload", "Express Same-Day Delivery", "Temperature-Controlled Transport", "GPS Real-Time Tracking"],
                reversed: false,
              },
              {
                icon: Ship,
                title: "Ocean Freight",
                description: "Cost-effective and reliable ocean freight services for international shipping. We handle everything from documentation to customs clearance, offering both FCL and LCL container solutions.",
                features: ["Full Container Load (FCL)", "Less Container Load (LCL)", "Customs Brokerage", "Port-to-Door Delivery"],
                reversed: true,
              },
              {
                icon: Plane,
                title: "Air Freight",
                description: "When speed matters most, our air freight services deliver. We partner with major airlines worldwide to provide express, standard, and charter air cargo solutions for time-sensitive shipments.",
                features: ["Express & Standard Options", "Charter Services", "Dangerous Goods Handling", "Airport-to-Airport & Door-to-Door"],
                reversed: false,
              },
              {
                icon: Package,
                title: "Warehousing & Distribution",
                description: "State-of-the-art warehousing facilities with advanced inventory management systems. We provide secure storage, order fulfillment, and distribution services to streamline your supply chain.",
                features: ["Secure Storage Facilities", "Inventory Management", "Order Fulfillment", "Cross-Docking Services"],
                reversed: true,
              },
            ].map((service, index) => (
              <div
                key={service.title}
                className={`grid lg:grid-cols-2 gap-12 items-center ${service.reversed ? "lg:direction-rtl" : ""}`}
              >
                <div className={service.reversed ? "lg:order-2" : ""}>
                  <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-5">
                    <service.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">{service.title}</h3>
                  <p className="text-muted-foreground text-lg mb-6 leading-relaxed">{service.description}</p>
                  <div className="grid sm:grid-cols-2 gap-3 mb-6">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-3">
                        <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                          <ChevronRight className="h-3 w-3 text-primary-foreground" />
                        </div>
                        <span className="text-foreground font-medium text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button asChild>
                    <Link href="/contact">
                      Get a Quote
                      <ArrowRight className="ml-2 h-3.5 w-3.5" />
                    </Link>
                  </Button>
                </div>
                <div className={`bg-muted/50 rounded-2xl p-8 md:p-12 flex items-center justify-center ${service.reversed ? "lg:order-1" : ""}`}>
                  <service.icon className="h-32 w-32 md:h-40 md:w-40 text-primary/20" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Additional Services</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4 text-foreground">
              Value-Added Solutions
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: FileCheck, title: "Customs Clearance", description: "Expert handling of import/export documentation and regulatory compliance." },
              { icon: BarChart3, title: "Supply Chain Consulting", description: "Strategic advice to optimize your logistics operations and reduce costs." },
              { icon: Boxes, title: "Packaging Solutions", description: "Custom packaging design and materials for safe, secure transport." },
              { icon: Headphones, title: "24/7 Support", description: "Round-the-clock customer service and shipment monitoring." },
            ].map((service) => (
              <div key={service.title} className="bg-card border border-border rounded-xl p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-foreground">{service.title}</h3>
                <p className="text-muted-foreground text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-[#3F3D56] to-[#3F3D56]/90 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Need a Custom Solution?</h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Every business is unique. Let us design a logistics solution that fits your specific requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-base bg-primary text-white hover:bg-primary/90" asChild>
              <Link href="/contact">
                Request a Quote
                <ArrowRight className="ml-2 h-3.5 w-3.5" />
              </Link>
            </Button>
            <Button size="lg" className="text-base bg-white/15 border-2 border-white text-white hover:bg-white/25" asChild>
              <Link href="/contact">
                Contact Us
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2D2B45] text-white/80 py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                  <Truck className="h-5 w-5 text-white" />
                </div>
                <div>
                  <span className="text-lg font-bold text-white">HSL</span>
                  <span className="text-lg font-light text-white/80 ml-1">Logistics</span>
                </div>
              </div>
              <p className="text-white/80 mb-6">
                Professional freight and logistics solutions for businesses worldwide.
              </p>
            </div>

            <div>
              <h4 className="text-white font-semibold text-lg mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {[
                    { label: "Home", href: "/" },
                    { label: "About Us", href: "/about" },
                    { label: "Services", href: "/services" },
                    { label: "Contact", href: "/contact" },
                  ].map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="hover:text-primary transition-colors">
                      {link.label}
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
                    <Link href="/services" className="hover:text-primary transition-colors">
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
                  <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>91 Soho Hill, Birmingham, England, B19 1AY</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                  <span>02031502602</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                  <span>info@highspeedlogistics.co.uk</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/20 mt-12 pt-8 text-center text-white/80/70">
            <p>&copy; {new Date().getFullYear()} HIGH SPEED LOGISTICS LIMITED. All rights reserved.</p>
            <p className="text-sm mt-1">Company number: 12755346</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
