"use client"

import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export function MobileNav() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  return (
    <div className="md:hidden">
      <button
        onClick={() => setOpen(!open)}
        className="inline-flex items-center gap-2 p-2 text-foreground hover:text-primary transition-colors rounded-lg"
        aria-expanded={open}
        aria-controls="mobile-nav-menu"
        aria-label={open ? "Close navigation menu" : "Open navigation menu"}
      >
        {open ? (
          <>
            <X className="h-5 w-5" aria-hidden="true" />
            <span className="text-sm font-medium">Close</span>
          </>
        ) : (
          <>
            <Menu className="h-5 w-5" aria-hidden="true" />
            <span className="text-sm font-medium">Menu</span>
          </>
        )}
      </button>

      {open && (
        <div
          id="mobile-nav-menu"
          className="absolute top-full left-0 right-0 bg-card border-b border-border shadow-lg z-50"
          role="dialog"
          aria-label="Mobile navigation menu"
        >
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-4" aria-label="Mobile navigation">
            <Link href="/" onClick={() => setOpen(false)} className="font-medium text-foreground hover:text-primary transition-colors py-2">
              Home
            </Link>
            <Link href="/about" onClick={() => setOpen(false)} className="font-medium text-muted-foreground hover:text-primary transition-colors py-2">
              About
            </Link>
            <Link href="/services" onClick={() => setOpen(false)} className="font-medium text-muted-foreground hover:text-primary transition-colors py-2">
              Services
            </Link>
            <Link href="/contact" onClick={() => setOpen(false)} className="font-medium text-muted-foreground hover:text-primary transition-colors py-2">
              Contact
            </Link>
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="inline-flex items-center justify-center font-medium bg-primary text-primary-foreground hover:bg-primary/90 transition-colors py-3 px-4 rounded-lg mt-2"
            >
              Get a Free Quote
            </Link>
          </nav>
        </div>
      )}
    </div>
  )
}
