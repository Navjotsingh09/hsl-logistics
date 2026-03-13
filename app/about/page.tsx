import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Users, Shield, Globe, Award } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <>

      {/* Page Hero */}
      <section className="relative bg-gradient-to-br from-[#3F3D56] via-[#3F3D56]/90 to-[#3F3D56] text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">About HSL Logistics</h1>
            <p className="text-white/80 text-lg md:text-xl leading-relaxed">
              Over 15 years of delivering excellence in global freight and supply chain solutions.
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
                Built on Trust, Driven by Excellence
              </h2>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                Founded in 2009, HSL Logistics began as a small freight forwarding company with a big vision:
                to make global logistics accessible, reliable, and efficient for businesses of all sizes.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Today, we operate across 120+ countries with a team of dedicated professionals who share a
                passion for moving the world forward. Our commitment to innovation and customer service has
                made us one of the most trusted names in the logistics industry.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We believe that every shipment tells a story — and we&apos;re honored to be part of yours.
              </p>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-border relative">
                <Image src="/hero-delivery.jpg" alt="HSL Logistics delivery team" fill className="object-cover" />
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
                title: "Global Reach",
                description: "With partners in 120+ countries, we connect your business to markets worldwide seamlessly.",
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
              { value: "15+", label: "Years Experience" },
              { value: "50K+", label: "Deliveries Made" },
              { value: "120+", label: "Countries Served" },
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

      {/* Team */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Team</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4 text-foreground">
              Meet the People Behind HSL
            </h2>
            <p className="text-muted-foreground text-lg">
              Our experienced leadership team brings decades of logistics expertise to your business.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "James Mitchell", role: "CEO & Founder", initials: "JM" },
              { name: "Sarah Chen", role: "COO", initials: "SC" },
              { name: "David Okafor", role: "VP of Operations", initials: "DO" },
            ].map((member) => (
              <div key={member.name} className="bg-card border border-border rounded-xl p-8 text-center">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary font-bold text-xl">{member.initials}</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-1">{member.name}</h3>
                <p className="text-muted-foreground">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-[#3F3D56] to-[#3F3D56]/90 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Work Together?</h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Let us show you why thousands of businesses trust HSL Logistics with their shipping needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-base bg-primary text-white hover:bg-primary/90" asChild>
              <Link href="/contact">
                Contact Us
                <ArrowRight className="ml-2 h-3.5 w-3.5" />
              </Link>
            </Button>
            <Button size="lg" className="text-base bg-white/15 border-2 border-white text-white hover:bg-white/25" asChild>
              <Link href="/services">
                View Services
              </Link>
            </Button>
          </div>
        </div>
      </section>

    </>
  )
}
