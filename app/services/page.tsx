import Link from "next/link"
import Image from "next/image"
import { Truck, Ship, Plane, Package, ChevronRight, ArrowRight, BarChart3, Boxes, FileCheck, Headphones } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ServicesPage() {
  return (
    <>

      {/* Page Hero */}
      <section className="relative bg-gradient-to-br from-[#040957] via-[#040957]/90 to-[#040957] text-white py-16 md:py-24">
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
      <section className="py-16 md:py-20 bg-gradient-to-r from-[#040957] to-[#040957]/90 text-white">
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

    </>
  )
}
