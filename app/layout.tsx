import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import "./globals.css"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: {
    default: "HSL Logistics Birmingham | Two Man Delivery & Freight Services",
    template: "%s | HSL Logistics Birmingham",
  },
  description: "Birmingham's trusted logistics partner. Two man delivery service, same-day courier, road freight, warehousing & distribution across the West Midlands and UK-wide. Get a free quote today.",
  keywords: [
    "logistics Birmingham",
    "two man delivery Birmingham",
    "delivery service Birmingham",
    "freight company Birmingham",
    "courier service West Midlands",
    "same day delivery Birmingham",
    "two man courier Birmingham",
    "warehousing Birmingham",
    "road freight West Midlands",
    "logistics company near me",
    "man and van Birmingham",
    "parcel delivery Birmingham",
    "HSL Logistics",
    "Birmingham delivery company",
    "West Midlands logistics",
    "UK freight services",
  ],
  openGraph: {
    title: "HSL Logistics Birmingham | Two Man Delivery & Freight Services",
    description: "Birmingham's trusted logistics partner. Two man delivery, same-day courier, road freight & warehousing across the West Midlands and UK-wide.",
    type: "website",
    locale: "en_GB",
    siteName: "HSL Logistics",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://hsl-logistics.vercel.app",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
