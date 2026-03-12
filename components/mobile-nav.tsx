"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export function MobileNav() {
  const [open, setOpen] = useState(false)

  return (
    <div className="md:hidden">
      <button
        onClick={() => setOpen(!open)}
        className="p-2 text-foreground hover:text-primary transition-colors"
        aria-label="Toggle menu"
      >
        {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {open && (
        <div className="absolute top-full left-0 right-0 bg-card border-b border-border shadow-lg z-50">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
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
          </nav>
        </div>
      )}
    </div>
  )
}
