import type { Metadata } from "next"
import Link from "next/link"
import { Truck, MapPin, Phone, Mail, Clock, ArrowRight, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { MobileNav } from "@/components/mobile-nav"

export const metadata: Metadata = {
  title: "Contact High Speed Logistics Birmingham - Get a Free Quote",
  description: "Contact High Speed Logistics for two man delivery, courier, freight, and warehousing services in Birmingham. Call 0203 150 2602 or request a free quote online.",
}

export default function ContactPage() {
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
              <Link href="/services" className="font-medium text-muted-foreground hover:text-primary transition-colors">Services</Link>
              <Link href="/contact" className="font-medium text-foreground hover:text-primary transition-colors">Contact</Link>
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
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Contact High Speed Logistics</h1>
            <p className="text-[#EEEEEE] text-lg md:text-xl leading-relaxed">
              Get a free quote for two man delivery, courier, freight, or warehousing in Birmingham and the West Midlands.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info Cards */}
            <div className="space-y-6">
              <div>
                <span className="text-primary font-semibold text-sm uppercase tracking-wider">Get in Touch</span>
                <h2 className="text-2xl md:text-3xl font-bold mt-3 mb-6 text-foreground">
                  We&apos;d Love to Hear From You
                </h2>
              </div>

              <div className="bg-card border border-border rounded-xl p-6 flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Our Birmingham Office</h3>
                  <p className="text-muted-foreground text-sm">91 Soho Hill<br />Birmingham, England, B19 1AY</p>
                </div>
              </div>

              <div className="bg-card border border-border rounded-xl p-6 flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                  <p className="text-muted-foreground text-sm">0203 150 2602</p>
                  <p className="text-muted-foreground text-sm">WhatsApp: 07903 304 544</p>
                </div>
              </div>

              <div className="bg-card border border-border rounded-xl p-6 flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Email</h3>
                  <p className="text-muted-foreground text-sm">info@highspeedlogistics.co.uk</p>
                </div>
              </div>

              <div className="bg-card border border-border rounded-xl p-6 flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="h-6 w-6 text-primary" />
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
                <p className="text-muted-foreground mb-8">Fill out the form below and we&apos;ll get back to you within 24 hours.</p>

                <form className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-foreground mb-2">
                        First Name
                      </label>
                      <input
                        type="text"
                        id="firstName"
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
                        className="w-full h-11 px-4 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                        placeholder="0203 150 2602"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-foreground mb-2">
                      Service Required
                    </label>
                    <select
                      id="service"
                      className="w-full h-11 px-4 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    >
                      <option value="">Select a service</option>
                      <option value="two-man">Two Man Delivery</option>
                      <option value="road-freight">Road Freight</option>
                      <option value="same-day">Same-Day Courier</option>
                      <option value="warehousing">Warehousing</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                      placeholder="Tell us about your delivery or logistics needs..."
                    />
                  </div>

                  <Button size="lg" className="w-full sm:w-auto">
                    Send Message
                    <Send className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps Embed */}
      <section className="bg-muted/30">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">Find Us</h2>
            <p className="text-muted-foreground mt-2">91 Soho Hill, Birmingham, England, B19 1AY</p>
          </div>
          <div className="rounded-2xl overflow-hidden border border-border h-64 md:h-96">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2430.123456789!2d-1.8986!3d52.4977!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4870bc8a5a6c5c1d%3A0x0!2s91+Soho+Hill%2C+Birmingham+B19+1AY!5e0!3m2!1sen!2suk!4v1700000000000!5m2!1sen!2suk"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="High Speed Logistics Birmingham - 91 Soho Hill, B19 1AY"
            />
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
