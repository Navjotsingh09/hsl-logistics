import type { Metadata } from "next"
import Link from "next/link"
import { Truck, MapPin, Phone, Mail, Clock, ArrowRight, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { MobileNav } from "@/components/mobile-nav"

export const metadata: Metadata = {
  title: "Contact Us - Get a Free Freight Quote and Shipping Consultation",
  description:
    "Contact HSL Logistics for a free freight quote, shipping consultation, or to discuss your supply chain needs. Reach our team by phone, email, or fill out our online inquiry form.",
}

export default function ContactPage() {
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
              <Link href="/services" className="font-medium text-muted-foreground hover:text-primary transition-colors">Services</Link>
              <Link href="/contact" className="font-medium text-foreground hover:text-primary transition-colors" aria-current="page">Contact</Link>
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
        <section className="relative bg-gradient-to-br from-[#3F3D56] via-[#3F3D56]/90 to-[#3F3D56] text-white py-16 md:py-24" aria-labelledby="contact-hero-heading">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl">
              <h1 id="contact-hero-heading" className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Contact HSL Logistics</h1>
              <p className="text-[#EEEEEE] text-lg md:text-xl leading-relaxed">
                Have a question, need a freight quote, or want to discuss your supply chain needs? Our logistics experts are here to help you find the right shipping solution.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 md:py-24 bg-background" aria-labelledby="contact-form-heading">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Contact Info Cards */}
              <div className="space-y-6">
                <div>
                  <span className="text-primary font-semibold text-sm uppercase tracking-wider">Get in Touch</span>
                  <h2 id="contact-form-heading" className="text-2xl md:text-3xl font-bold mt-3 mb-6 text-foreground">
                    We&apos;d Love to Hear From You
                  </h2>
                </div>

                <div className="bg-card border border-border rounded-xl p-6 flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-primary" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Our Office Location</h3>
                    <address className="text-muted-foreground text-sm not-italic">123 Logistics Way, Suite 100<br />New York, NY 10001</address>
                  </div>
                </div>

                <div className="bg-card border border-border rounded-xl p-6 flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-primary" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Phone Numbers</h3>
                    <p className="text-muted-foreground text-sm"><a href="tel:+14567890123" className="hover:text-primary transition-colors">+1 (456) 789-0123</a></p>
                    <p className="text-muted-foreground text-sm"><a href="tel:+14567890124" className="hover:text-primary transition-colors">+1 (456) 789-0124</a></p>
                  </div>
                </div>

                <div className="bg-card border border-border rounded-xl p-6 flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-primary" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Email Addresses</h3>
                    <p className="text-muted-foreground text-sm"><a href="mailto:info@hsllogistics.com" className="hover:text-primary transition-colors">info@hsllogistics.com</a></p>
                    <p className="text-muted-foreground text-sm"><a href="mailto:support@hsllogistics.com" className="hover:text-primary transition-colors">support@hsllogistics.com</a></p>
                  </div>
                </div>

                <div className="bg-card border border-border rounded-xl p-6 flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-primary" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Business Hours</h3>
                    <p className="text-muted-foreground text-sm">Monday - Friday: 8:00 AM - 6:00 PM</p>
                    <p className="text-muted-foreground text-sm">Saturday: 9:00 AM - 1:00 PM</p>
                    <p className="text-muted-foreground text-sm">Sunday: Closed</p>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2">
                <div className="bg-card border border-border rounded-2xl p-6 md:p-10">
                  <h3 className="text-2xl font-bold text-foreground mb-2">Send Us a Message</h3>
                  <p className="text-muted-foreground mb-8">Fill out the form below and our logistics team will get back to you within 24 hours with a personalized response.</p>

                  <form className="space-y-6" aria-label="Contact inquiry form">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-medium text-foreground mb-2">
                          First Name
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          autoComplete="given-name"
                          required
                          className="w-full h-11 px-4 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                          placeholder="John"
                        />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block text-sm font-medium text-foreground mb-2">
                          Last Name
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          name="lastName"
                          autoComplete="family-name"
                          required
                          className="w-full h-11 px-4 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                          placeholder="Doe"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          autoComplete="email"
                          required
                          className="w-full h-11 px-4 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                          placeholder="john@example.com"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          autoComplete="tel"
                          className="w-full h-11 px-4 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                          placeholder="+1 (456) 789-0123"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-foreground mb-2">
                        Service Required
                      </label>
                      <select
                        id="service"
                        name="service"
                        required
                        className="w-full h-11 px-4 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                      >
                        <option value="">Select a service</option>
                        <option value="road">Road Freight</option>
                        <option value="ocean">Ocean Freight</option>
                        <option value="air">Air Freight</option>
                        <option value="warehousing">Warehousing and Distribution</option>
                        <option value="customs">Customs Clearance</option>
                        <option value="consulting">Supply Chain Consulting</option>
                        <option value="other">Other Service</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                        placeholder="Tell us about your shipping needs, cargo type, estimated volume, and preferred timeline..."
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full sm:w-auto">
                      Send Your Message
                      <Send className="ml-2 h-4 w-4" aria-hidden="true" />
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Placeholder */}
        <section className="bg-muted/30" aria-label="HSL Logistics office location">
          <div className="container mx-auto px-4 py-16">
            <div className="bg-card border border-border rounded-2xl overflow-hidden h-64 md:h-96 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-16 w-16 text-primary/30 mx-auto mb-4" aria-hidden="true" />
                <p className="text-muted-foreground text-lg font-medium">HSL Logistics Headquarters</p>
                <p className="text-muted-foreground">123 Logistics Way, Suite 100, New York, NY 10001</p>
              </div>
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
