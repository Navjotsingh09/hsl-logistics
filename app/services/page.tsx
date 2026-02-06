import type { Metadata } from "next"
import Link from "next/link"
import { Truck, Ship, Plane, Package, MapPin, Phone, Mail, Clock, ChevronRight, ArrowRight, BarChart3, Boxes, FileCheck, Headphones } from "lucide-react"
import { Button } from "@/components/ui/button"
import { MobileNav } from "@/components/mobile-nav"

export const metadata: Metadata = {
  title: "Two Man Delivery & Logistics Services Birmingham",
  description: "High Speed Logistics Birmingham offers two man delivery, road freight, same-day courier, and warehousing services across the West Midlands and UK-wide. Get a free quote today.",
}

export default function ServicesPage() {
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
              <Link href="/about" className="font-medium text-muted-foreground hover:text-primary transition-colors">About</Link>
              <Link href="/services" className="font-medium text-foreground hover:text-primary transition-colors">Services</Link>
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
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Delivery &amp; Logistics Services in Birmingham</h1>
            <p className="text-[#EEEEEE] text-lg md:text-xl leading-relaxed">
              From two man deliveries to full freight haulage, High Speed Logistics serves Birmingham, the West Midlands, and UK-wide.
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
              Birmingham&apos;s Complete Logistics Solutions
            </h2>
            <p className="text-muted-foreground text-lg">
              From our Birmingham base, we handle every aspect of your supply chain — two man deliveries, road freight, same-day courier, and warehousing.
            </p>
          </div>

          <div className="space-y-16">
            {[
              {
                icon: Truck,
                title: "Two Man Delivery Birmingham",
                description: "Our professional two man delivery service is perfect for heavy, bulky, or high-value items across Birmingham and the West Midlands. We deliver furniture, appliances, commercial equipment, and more — right to the room of choice.",
                features: ["Heavy & Bulky Item Delivery", "Room of Choice Service", "Assembly Available", "GPS Real-Time Tracking"],
                reversed: false,
              },
              {
                icon: Ship,
                title: "Road Freight & Haulage",
                description: "Reliable road freight and haulage services from Birmingham to anywhere in the UK. Whether you need full truckload or part-load services, our fleet operates daily from our West Midlands base.",
                features: ["Full & Partial Truckload", "Birmingham to UK-Wide", "Palletised Freight", "Next-Day Haulage"],
                reversed: true,
              },
              {
                icon: Plane,
                title: "Same-Day Courier Birmingham",
                description: "Urgent same-day and next-day courier services from Birmingham. We handle time-critical deliveries across the West Midlands and nationwide, with real-time tracking on every parcel.",
                features: ["Same-Day Birmingham Delivery", "Next-Day UK-Wide", "Parcel & Document Courier", "Real-Time Tracking"],
                reversed: false,
              },
              {
                icon: Package,
                title: "Warehousing Birmingham",
                description: "Secure warehousing and distribution facilities in Birmingham. Our warehouse offers inventory management, pick and pack, order fulfillment, and distribution services for businesses of all sizes.",
                features: ["Birmingham Warehouse Facility", "Inventory Management", "Pick & Pack Fulfillment", "Cross-Docking Services"],
                reversed: true,
              },
            ].map((service) => (
              <div
                key={service.title}
                className="grid lg:grid-cols-2 gap-12 items-center"
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
                  <Link href="/contact">
                    <Button>
                      Get a Quote
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Need a Delivery in Birmingham?</h2>
          <p className="text-[#EEEEEE] text-lg mb-8 max-w-2xl mx-auto">
            Get a free quote for two man delivery, road freight, courier, or warehousing services in Birmingham and the West Midlands.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="text-base bg-[#009DCA] text-white hover:bg-[#009DCA]/90">
                Request a Quote
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="text-base border-white/30 text-white hover:bg-white/10">
                Contact Us
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
