import Link from "next/link"
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ContactPage() {
  return (
    <>

      {/* Page Hero */}
      <section className="relative bg-gradient-to-br from-[#3F3D56] via-[#3F3D56]/90 to-[#3F3D56] text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-white/80 text-lg md:text-xl leading-relaxed">
              Have a question or need a quote? Our team is here to help you with all your logistics needs.
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
                  <h3 className="font-semibold text-foreground mb-1">Our Office</h3>
                  <p className="text-muted-foreground text-sm">91 Soho Hill, Birmingham<br />England, B19 1AY</p>
                </div>
              </div>

              <div className="bg-card border border-border rounded-xl p-6 flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                  <p className="text-muted-foreground text-sm">02031502602</p>
                  <p className="text-muted-foreground text-sm">02031502602</p>
                </div>
              </div>

              <div className="bg-card border border-border rounded-xl p-6 flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Email</h3>
                  <p className="text-muted-foreground text-sm">info@highspeedlogistics.co.uk</p>
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
                        placeholder="02031502602"
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
                      <option value="road">Road Freight</option>
                      <option value="ocean">Ocean Freight</option>
                      <option value="air">Air Freight</option>
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
                      placeholder="Tell us about your shipping needs..."
                    />
                  </div>

                  <Button size="lg" className="w-full sm:w-auto">
                    Send Message
                    <Send className="ml-2 h-3.5 w-3.5 text-primary" />
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="bg-muted/30">
        <div className="container mx-auto px-4 py-16">
          <div className="bg-card border border-border rounded-2xl overflow-hidden h-64 md:h-96 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="h-16 w-16 text-primary/30 mx-auto mb-4" />
              <p className="text-muted-foreground text-lg font-medium">91 Soho Hill, Birmingham</p>
              <p className="text-muted-foreground">England, B19 1AY</p>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}
