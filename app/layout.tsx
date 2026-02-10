import type { Metadata, Viewport } from "next"
import { Poppins } from "next/font/google"
import "./globals.css"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: {
    default: "HSL Logistics - Professional Freight & Shipping Solutions",
    template: "%s | HSL Logistics",
  },
  description:
    "HSL Logistics provides comprehensive freight and logistics solutions including road, ocean, and air freight services. Trusted by businesses across 120+ countries for reliable, on-time shipping and supply chain management.",
  keywords: [
    "freight shipping",
    "logistics solutions",
    "road freight",
    "ocean freight",
    "air freight",
    "warehousing",
    "supply chain management",
    "international shipping",
    "cargo transport",
    "HSL Logistics",
  ],
  authors: [{ name: "HSL Logistics" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "HSL Logistics",
    title: "HSL Logistics - Professional Freight & Shipping Solutions",
    description:
      "Comprehensive freight and logistics solutions including road, ocean, and air freight services. Trusted by businesses across 120+ countries.",
  },
  twitter: {
    card: "summary_large_image",
    title: "HSL Logistics - Professional Freight & Shipping Solutions",
    description:
      "Comprehensive freight and logistics solutions including road, ocean, and air freight services.",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  themeColor: "#3F3D56",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} font-sans antialiased`}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:top-4 focus:left-4 focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-lg focus:outline-none"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  )
}
