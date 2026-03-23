import { NextResponse } from "next/server"
import { z } from "zod"

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  service: z.enum(["shipping", "warehousing", "customs", "tracking"]),
  message: z.string().min(10, "Message must be at least 10 characters").max(5000),
  companyWebsite: z.string().optional(),
})

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const parsed = contactSchema.safeParse(body)

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Validation failed", details: parsed.error.flatten() },
        { status: 400 }
      )
    }

    if (parsed.data.companyWebsite) {
      return NextResponse.json({ error: "Invalid submission" }, { status: 400 })
    }

    const payload = new URLSearchParams({
      name: parsed.data.name,
      email: parsed.data.email,
      phone: parsed.data.phone ?? "",
      service: parsed.data.service,
      message: parsed.data.message,
      _subject: "New Contact Form Submission - HSL Logistics",
      _template: "table",
      _captcha: "false",
    })

    const formSubmitResponse = await fetch("https://formsubmit.co/ajax/navjot.singh@5rv.digital", {
      method: "POST",
      headers: {
        Accept: "application/json",
        Origin: "https://highspeedlogistics.co.uk",
        Referer: "https://highspeedlogistics.co.uk/contact",
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: payload.toString(),
      cache: "no-store",
    })

    if (!formSubmitResponse.ok) {
      console.error("FormSubmit error status:", formSubmitResponse.status)
      return NextResponse.json({ error: "Failed to forward message" }, { status: 502 })
    }

    return NextResponse.json(
      { success: true, message: "Contact form submitted successfully" },
      { status: 200 }
    )
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
