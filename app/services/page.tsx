import type { Metadata } from "next"
import Link from "next/link"
import { Truck, Ship, Plane, Package, MapPin, Phone, Mail, Clock, ChevronRight, ArrowRight, BarChart3, Boxes, FileCheck, Headphones } from "lucide-react"
import { Button } from "@/components/ui/button"
import { MobileNav } from "@/components/mobile-nav"

export const metadata: Metadata = {
  title: "Freight and Logistics Services - Road, Ocean, Air Freight and Warehousing",
  description:
    "Explore HSL Logistics comprehensive freight services including road freight, ocean shipping, air cargo, warehousing, customs clearance, and supply chain consulting across 120+ countries.",
}

export default function ServicesPage() {
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
              <Link href="/about" className="font-medium text-muted-foreground hover:text-primary transition-colors">About</Link>
              <Link href="/services" className="font-medium text-foreground hover:text-primary transition-colors" aria-current="page">Services</Link>
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
        <section className="relative bg-gradient-to-br from-[#3F3D56] via-[#3F3D56]/90 to-[#3F3D56] text-white py-16 md:py-24" aria-labelledby="services-hero-heading">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl">
              <h1 id="services-hero-heading" className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Our Freight and Logistics Services</h1>
              <p className="text-[#EEEEEE] text-lg md:text-xl leading-relaxed">
                Comprehensive freight forwarding and supply chain solutions tailored to your business needs -- from road and ocean to air freight and warehousing across 120+ countries.
              </p>
            </div>
          </div>
        </section>

        {/* Core Services */}
        <section className="py-16 md:py-24 bg-background" aria-labelledby="core-services-heading">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">Core Services</span>
              <h2 id="core-services-heading" className="text-3xl md:text-4xl font-bold mt-3 mb-4 text-foreground">
                End-to-End Freight and Logistics Solutions
              </h2>
              <p className="text-muted-foreground text-lg">
                We handle every aspect of your supply chain -- from pickup to final delivery -- so you can focus on growing your business.
              </p>
            </div>

            <div className="space-y-16">
              {[
                {
                  icon: Truck,
                  title: "Road Freight Transportation",
                  description: "Our extensive road freight network covers local, regional, and cross-border transportation. We offer full truckload (FTL) and less-than-truckload (LTL) services with real-time GPS tracking on every shipment.",
                  features: ["Full and Partial Truckload Options", "Express Same-Day Delivery Service", "Temperature-Controlled Transport", "GPS Real-Time Shipment Tracking"],
                  reversed: false,
                },
                {
                  icon: Ship,
                  title: "Ocean Freight Shipping",
                  description: "Cost-effective and reliable ocean freight services for international shipping. We handle everything from documentation to customs clearance, offering both full container load and less-than-container load solutions.",
                  features: ["Full Container Load (FCL)", "Less-than-Container Load (LCL)", "Customs Brokerage Services", "Port-to-Door Delivery"],
                  reversed: true,
                },
                {
                  icon: Plane,
                  title: "Air Freight and Cargo",
                  description: "When speed matters most, our air freight services deliver. We partner with major airlines worldwide to provide express, standard, and charter air cargo solutions for time-sensitive shipments.",
                  features: ["Express and Standard Delivery Options", "Charter Cargo Services", "Dangerous Goods Handling", "Airport-to-Airport and Door-to-Door"],
                  reversed: false,
                },
                {
                  icon: Package,
                  title: "Warehousing and Distribution",
                  description: "State-of-the-art warehousing facilities with advanced inventory management systems. We provide secure storage, order fulfillment, and distribution services to streamline your entire supply chain.",
                  features: ["Secure Storage Facilities", "Inventory Management Systems", "Order Fulfillment Services", "Cross-Docking Distribution"],
                  reversed: true,
                },
              ].map((service) => (
                <article
                  key={service.title}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${service.reversed ? "lg:direction-rtl" : ""}`}
                >
                  <div className={service.reversed ? "lg:order-2" : ""}>
                    <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-5">
                      <service.icon className="h-7 w-7 text-primary" aria-hidden="true" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">{service.title}</h3>
                    <p className="text-muted-foreground text-lg mb-6 leading-relaxed">{service.description}</p>
                    <ul className="grid sm:grid-cols-2 gap-3 mb-6" aria-label={`${service.title} features`}>
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-3">
                          <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center flex-shrink-0" aria-hidden="true">
                            <ChevronRight className="h-3 w-3 text-primary-foreground" />
                          </div>
                          <span className="text-foreground font-medium text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button asChild>
                      <Link href="/contact">
                        Get a {service.title} Quote
                        <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                      </Link>
                    </Button>
                  </div>
                  <div className={`bg-muted/50 rounded-2xl p-8 md:p-12 flex items-center justify-center ${service.reversed ? "lg:order-1" : ""}`} aria-hidden="true">
                    <service.icon className="h-32 w-32 md:h-40 md:w-40 text-primary/20" />
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Services */}
        <section className="py-16 md:py-24 bg-muted/30" aria-labelledby="additional-services-heading">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">Additional Services</span>
              <h2 id="additional-services-heading" className="text-3xl md:text-4xl font-bold mt-3 mb-4 text-foreground">
                Value-Added Logistics Solutions
              </h2>
              <p className="text-muted-foreground text-lg">
                Beyond freight forwarding, we offer specialized services to support every aspect of your supply chain operations.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: FileCheck, title: "Customs Clearance", description: "Expert handling of import and export documentation, tariff classification, and regulatory compliance for smooth cross-border shipping." },
                { icon: BarChart3, title: "Supply Chain Consulting", description: "Strategic advice and data-driven insights to optimize your logistics operations, reduce costs, and improve delivery performance." },
                { icon: Boxes, title: "Packaging Solutions", description: "Custom packaging design, materials sourcing, and protective packing services for safe and secure cargo transport." },
                { icon: Headphones, title: "24/7 Customer Support", description: "Round-the-clock dedicated customer service, shipment monitoring, and real-time status updates on every delivery." },
              ].map((service) => (
                <article key={service.title} className="bg-card border border-border rounded-xl p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="h-6 w-6 text-primary" aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-foreground">{service.title}</h3>
                  <p className="text-muted-foreground text-sm">{service.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-20 bg-gradient-to-r from-[#3F3D56] to-[#3F3D56]/90 text-white" aria-labelledby="services-cta-heading">
          <div className="container mx-auto px-4 text-center">
            <h2 id="services-cta-heading" className="text-3xl md:text-4xl font-bold mb-4">Need a Custom Logistics Solution?</h2>
            <p className="text-[#EEEEEE] text-lg mb-8 max-w-2xl mx-auto">
              Every business is unique. Let our logistics experts design a freight and supply chain solution that fits your specific requirements and budget.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="text-base bg-[#009DCA] text-white hover:bg-[#009DCA]/90">
                <Link href="/contact">
                  Request a Free Quote
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="text-base border-white/30 text-white hover:bg-white/10">
                <Link href="/contact">
                  Contact Our Team
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
