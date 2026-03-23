import Link from "next/link"
import { Mail, MapPin, Phone, Truck } from "lucide-react"
import { companyInfo, quickLinks, serviceLinks } from "@/lib/site-data"

export function SiteFooter() {
  return (
    <footer className="bg-[#040957] text-white/80 py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <Truck className="h-5 w-5 text-white" />
              </div>
              <div>
                <span className="text-lg font-bold text-white">HSL</span>
                <span className="text-lg font-medium text-primary ml-1">Logistics</span>
              </div>
            </div>
            <p className="text-white/70 mb-6">
              Professional van delivery and courier services across the UK.
            </p>
          </div>

          <div>
            <h3 className="text-white font-bold text-xs uppercase tracking-widest mb-5">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-xs uppercase tracking-widest mb-5">Services</h3>
            <ul className="space-y-3">
              {serviceLinks.map((service) => (
                <li key={service.label}>
                  <Link href={service.href} className="hover:text-primary transition-colors">
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-xs uppercase tracking-widest mb-5">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span>
                  {companyInfo.addressLine1}, {companyInfo.addressLine2}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <span>{companyInfo.phone}</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <span>{companyInfo.email}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center text-white/60 text-sm">
          <p>&copy; {new Date().getFullYear()} {companyInfo.name}. All rights reserved.</p>
          <p className="text-sm mt-1">Company number: {companyInfo.companyNumber}</p>
        </div>
      </div>
    </footer>
  )
}
