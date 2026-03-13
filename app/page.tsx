import Link from "next/link"
import Image from "next/image"
import { Truck, Ship, Plane, Package, ChevronRight, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function HomePage() {
  return (
    <>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#040957] via-[#040957]/90 to-[#040957] text-white overflow-hidden">
        <Image src="/hero-delivery.jpg" alt="Delivery team loading van" fill className="object-cover opacity-30" priority />
        <div className="absolute inset-0 bg-gradient-to-r from-[#040957]/95 via-[#040957]/70 to-transparent" />
        
        <div className="container mx-auto px-4 py-24 md:py-32 relative">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-white/10 text-white px-4 py-2 rounded-full text-sm font-medium mb-6 border border-white/20">
              <Truck className="h-3.5 w-3.5 text-primary" />
              Trusted Logistics Partner
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-balance">
              Delivering Excellence in <span className="text-primary">Global Logistics</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-8 leading-relaxed text-pretty">
              Professional freight and logistics solutions tailored to your business needs. 
              Fast, reliable, and secure shipping services worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-base bg-primary text-white hover:bg-primary/90" asChild>
                <Link href="/services">
                  Our Services
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" className="text-base bg-white/15 border-2 border-white text-white hover:bg-white/25" asChild>
                <Link href="/contact">
                  Track Shipment
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "15+", label: "Years Experience" },
              { value: "50K+", label: "Deliveries Made" },
              { value: "120+", label: "Countries Served" },
              { value: "99%", label: "Customer Satisfaction" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl md:text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-primary-foreground text-sm md:text-base">{stat.label}</div>
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
              Comprehensive Logistics Solutions
            </h2>
            <p className="text-muted-foreground text-lg">
              We offer a full range of logistics services to meet all your transportation and supply chain needs.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Truck,
                title: "Road Freight",
                description: "Reliable ground transportation for local and long-distance deliveries across continents.",
              },
              {
                icon: Ship,
                title: "Ocean Freight",
                description: "Cost-effective sea shipping solutions for large cargo and international trade.",
              },
              {
                icon: Plane,
                title: "Air Freight",
                description: "Express air cargo services for time-sensitive shipments worldwide.",
              },
              {
                icon: Package,
                title: "Warehousing",
                description: "Secure storage facilities with inventory management and distribution services.",
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
                Your Trusted Partner in Global Logistics
              </h2>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                With over 15 years of experience in the logistics industry, HSL Logistics has established 
                itself as a leader in providing comprehensive freight and supply chain solutions.
              </p>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Our commitment to excellence, combined with cutting-edge technology and a global network 
                of partners, enables us to deliver exceptional service to businesses of all sizes.
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
              
              <Button size="lg" asChild>
                <Link href="/about">
                  Learn More About Us
                  <ArrowRight className="ml-2 h-3.5 w-3.5" />
                </Link>
              </Button>
            </div>
            
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-border relative">
                <Image src="/delivery-team.jpg" alt="Two-man delivery team unloading packages from van" fill className="object-cover" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-xl shadow-lg">
                <div className="text-3xl font-bold">15+</div>
                <div className="text-sm text-primary-foreground">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#040957] to-[#040957]/90 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Ship?</h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Get a free quote today and experience the difference of working with a trusted logistics partner.
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
