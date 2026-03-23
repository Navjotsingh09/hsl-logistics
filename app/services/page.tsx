import Link from "next/link"
import { Truck, Clock, MapPin, Package, ChevronRight, ArrowRight, Boxes, Headphones, Shield, Zap } from "lucide-react"
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
              Professional van delivery and courier services tailored to your business needs across the UK.
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
              Van Delivery Solutions
            </h2>
            <p className="text-muted-foreground text-lg">
              We handle every delivery so you can focus on growing your business.
            </p>
          </div>

          <div className="space-y-16">
            {[
              {
                icon: Truck,
                title: "Same-Day Delivery",
                description: "Need it there today? Our same-day courier service ensures your parcels and goods are collected and delivered on the same day, anywhere in the UK. Ideal for urgent documents, parts, and time-critical items.",
                features: ["Collection within 60 minutes", "Real-time GPS tracking", "Proof of delivery", "UK-wide coverage"],
                reversed: false,
              },
              {
                icon: Clock,
                title: "Next-Day Delivery",
                description: "Our next-day delivery service offers a cost-effective solution for non-urgent consignments. We collect in the evening and deliver by the next morning, providing reliable overnight logistics for businesses of all sizes.",
                features: ["Evening collection available", "Before 10am delivery option", "Signed delivery confirmation", "Competitive pricing"],
                reversed: true,
              },
              {
                icon: MapPin,
                title: "Multi-Drop Delivery",
                description: "Perfect for businesses with multiple delivery points. Our multi-drop service efficiently routes deliveries across multiple locations, saving you time and money compared to individual shipments.",
                features: ["Route-optimised scheduling", "Up to 20+ drops per round", "Regular or one-off runs", "Live delivery updates"],
                reversed: false,
              },
              {
                icon: Package,
                title: "Dedicated Van Hire",
                description: "Need a van and driver for a full day or longer? Our dedicated van hire service gives you exclusive use of a vehicle and professional driver for moves, events, ongoing contracts, or any large-scale delivery requirement.",
                features: ["Full-day or half-day hire", "Professional uniformed drivers", "Various van sizes available", "Flexible contract terms"],
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
              { icon: Zap, title: "Express Courier", description: "Priority express delivery for urgent last-minute parcels and documents." },
              { icon: Shield, title: "Secure Transport", description: "Safe handling of fragile, high-value, and sensitive goods with full insurance." },
              { icon: Boxes, title: "Light Removals", description: "Small office and home moves handled quickly and carefully by our team." },
              { icon: Headphones, title: "24/7 Support", description: "Round-the-clock customer service and live delivery monitoring." },
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
            Every business is unique. Let us design a delivery solution that fits your specific requirements.
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
