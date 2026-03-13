import Link from "next/link"
import { ArrowRight, Clock, Mail, Phone, Truck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { MobileNav } from "@/components/mobile-nav"
import { companyInfo, navLinks } from "@/lib/site-data"

type SiteHeaderProps = {
  currentPath: string
}

export function SiteHeader({ currentPath }: SiteHeaderProps) {
  const isLinkActive = (href: string) => {
    if (href === "/") return currentPath === "/"
    return currentPath === href || currentPath.startsWith(`${href}/`)
  }

  return (
    <header className="sticky top-0 z-50">
      {/* Utility bar */}
      <div className="hidden sm:block bg-[#1E293B] text-slate-300 text-xs">
        <div className="container mx-auto px-4 py-2 flex items-center justify-between">
          <div className="flex items-center gap-5">
            <a
              href={`tel:${companyInfo.phone}`}
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Phone className="h-3 w-3" />
              <span>{companyInfo.phone}</span>
            </a>
            <a
              href={`mailto:${companyInfo.email}`}
              className="hidden md:flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Mail className="h-3 w-3" />
              <span>{companyInfo.email}</span>
            </a>
          </div>
          <div className="flex items-center gap-1.5 text-slate-400">
            <Clock className="h-3 w-3" />
            <span>{companyInfo.hours}</span>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="bg-white border-b border-slate-200 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-lg bg-[#1E293B] flex items-center justify-center">
                <Truck className="h-5 w-5 text-white" />
              </div>
              <span className="text-lg font-bold tracking-tight text-slate-900">HSL Logistics</span>
            </Link>

            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive = isLinkActive(link.href)
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    aria-current={isActive ? "page" : undefined}
                    className={`relative px-4 py-2 text-sm font-medium transition-colors ${
                      isActive
                        ? "text-slate-900"
                        : "text-slate-500 hover:text-slate-900"
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute inset-x-1 -bottom-[19px] h-0.5 rounded-full bg-[#1E293B]" />
                    )}
                  </Link>
                )
              })}
            </div>

            <div className="flex items-center gap-3">
              <a
                href={`tel:${companyInfo.phone}`}
                className="hidden lg:inline-flex items-center gap-1.5 text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
              >
                <Phone className="h-3.5 w-3.5" />
                Call Us
              </a>
              <Button
                className="hidden sm:inline-flex rounded-lg h-10 px-5 bg-[#1E293B] text-white text-sm font-semibold shadow-sm hover:bg-[#334155]"
                asChild
              >
                <Link href="/contact">
                  Get a Quote
                  <ArrowRight className="ml-1.5 h-4 w-4" />
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
