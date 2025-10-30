import type React from "react"
import type { Metadata } from "next"
import { Exo_2, Roboto_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const exo2 = Exo_2({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
})

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
})

export const metadata: Metadata = {
  title: "周达 (Zhou Da) - 机器人与自动化技术作品集",
  description: "机器人视觉工程师 | 自动化控制工程师 | Python开发者",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="zh-CN" className="dark">
      <body className={`${robotoMono.variable} ${exo2.variable} font-mono antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
