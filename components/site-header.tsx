import Link from "next/link"
import { ArrowRight, Clock, Mail, Phone, Truck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { MobileNav } from "@/components/mobile-nav"
import { companyInfo, navLinks } from "@/lib/site-data"

type SiteHeaderProps = {
  currentPath: string
}

export function SiteHeader({ currentPath }: SiteHeaderProps) {
  return (
    <header className="sticky top-0 z-50">
      <div className="hidden sm:block bg-[#2D2B45] text-white/90 text-sm">
        <div className="container mx-auto px-4 py-2.5 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <a href={`tel:${companyInfo.phone}`} className="flex items-center gap-2 hover:text-primary transition-colors">
              <Phone className="h-3.5 w-3.5 text-primary" />
              <span>{companyInfo.phone}</span>
            </a>
            <a href={`mailto:${companyInfo.email}`} className="hidden sm:flex items-center gap-2 hover:text-primary transition-colors">
              <Mail className="h-3.5 w-3.5 text-primary" />
              <span>{companyInfo.email}</span>
            </a>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-3.5 w-3.5 text-primary" />
            <span className="hidden sm:inline">{companyInfo.hours}</span>
            <span className="sm:hidden">8AM–6PM</span>
          </div>
        </div>
      </div>

      <nav className="bg-white/95 backdrop-blur border-b border-gray-100 shadow-sm">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-11 h-11 bg-primary rounded-xl flex items-center justify-center shadow">
                <Truck className="h-6 w-6 text-white" />
              </div>
              <div>
                <span className="text-xl font-bold text-[#2D2B45]">HSL</span>
                <span className="text-xl font-medium text-primary ml-1">Logistics</span>
              </div>
            </Link>

            <div className="hidden md:flex items-center gap-3 lg:gap-5">
              {navLinks.map((link) => {
                const isActive = currentPath === link.href

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                      isActive
                        ? "bg-primary/10 text-primary"
                        : "text-muted-foreground hover:text-primary hover:bg-primary/5"
                    }`}
                  >
                    {link.label}
                  </Link>
                )
              })}
            </div>

            <div className="flex items-center gap-2 sm:gap-3">
              <Button className="hidden lg:flex" asChild>
                <Link href="/contact">
                  Get a Quote
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <MobileNav />
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
