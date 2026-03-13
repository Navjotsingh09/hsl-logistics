"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, Phone, X } from "lucide-react"
import { companyInfo, navLinks } from "@/lib/site-data"

export function MobileNav() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  const isLinkActive = (href: string) => {
    if (href === "/") return pathname === "/"
    return pathname === href || pathname.startsWith(`${href}/`)
  }

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  useEffect(() => {
    if (!open) {
      document.body.style.overflow = ""
      return
    }

    document.body.style.overflow = "hidden"
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false)
    }

    window.addEventListener("keydown", handleEscape)
    return () => {
      document.body.style.overflow = ""
      window.removeEventListener("keydown", handleEscape)
    }
  }, [open])

  return (
    <div className="relative md:hidden">
      <button
        onClick={() => setOpen(!open)}
        aria-controls="mobile-site-nav"
        className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
        aria-label="Toggle menu"
      >
        {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>

      {open && (
        <>
          <button
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            className="fixed inset-0 z-40 bg-black/20"
          />
          <div className="fixed left-0 right-0 top-16 z-50 border-b border-slate-200 bg-white shadow-lg sm:absolute sm:left-auto sm:right-0 sm:top-[calc(100%+8px)] sm:w-72 sm:rounded-xl sm:border">
            <nav id="mobile-site-nav" className="flex flex-col p-2">
              {navLinks.map((link) => {
                const isActive = isLinkActive(link.href)
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    aria-current={isActive ? "page" : undefined}
                    className={`rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                      isActive
                        ? "bg-slate-100 text-slate-900"
                        : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                    }`}
                  >
                    {link.label}
                  </Link>
                )
              })}

              <div className="mt-1 border-t border-slate-100 pt-2">
                <a
                  href={`tel:${companyInfo.phone}`}
                  className="flex items-center gap-2 rounded-lg px-3 py-2.5 text-sm font-medium text-slate-600 hover:bg-slate-50"
                >
                  <Phone className="h-4 w-4" />
                  Call Us
                </a>
                <Link
                  href="/contact"
                  className="mt-1 flex items-center justify-center rounded-lg bg-[#1E293B] px-3 py-2.5 text-sm font-semibold text-white"
                >
                  Get a Quote
                </Link>
              </div>
            </nav>
          </div>
        </>
      )}
    </div>
  )
}
