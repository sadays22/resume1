"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Mail, Phone, Github, Linkedin, Download } from "lucide-react"

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up")
          }
        })
      },
      { threshold: 0.1 },
    )

    const elements = sectionRef.current?.querySelectorAll(".fade-in-element")
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section id="contact" ref={sectionRef} className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-primary font-[family-name:var(--font-heading)] fade-in-element">
          Get In Touch
        </h2>
        <p className="text-lg text-foreground mb-12 leading-relaxed fade-in-element">
          I am currently seeking internship opportunities related to{" "}
          <span className="text-secondary font-bold">robotics vision</span>,{" "}
          <span className="text-secondary font-bold">SLAM</span>, or{" "}
          <span className="text-secondary font-bold">automation control</span>. Looking forward to connecting with you.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-12 fade-in-element">
          <Card className="p-6 bg-card border-border hover:border-primary transition-all group">
            <a href="mailto:16961599@qq.com" className="flex items-center gap-4 text-left">
              <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Email</p>
                <p className="text-foreground font-mono">16961599@qq.com</p>
              </div>
            </a>
          </Card>

          <Card className="p-6 bg-card border-border hover:border-primary transition-all group">
            <a href="tel:15356093052" className="flex items-center gap-4 text-left">
              <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Phone</p>
                <p className="text-foreground font-mono">15356093052</p>
              </div>
            </a>
          </Card>

          <Card className="p-6 bg-card border-border hover:border-secondary transition-all group">
            <a
              href="https://github.com/sadays22"
              className="flex items-center gap-4 text-left"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="p-3 bg-secondary/10 rounded-lg group-hover:bg-secondary/20 transition-colors">
                <Github className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">GitHub</p>
                <p className="text-foreground">github.com/sadays22</p>
              </div>
            </a>
          </Card>

          <Card className="p-6 bg-card border-border hover:border-secondary transition-all group">
            <a
              href="https://www.linkedin.com/in/达-周-9434b2375/"
              className="flex items-center gap-4 text-left"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="p-3 bg-secondary/10 rounded-lg group-hover:bg-secondary/20 transition-colors">
                <Linkedin className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">LinkedIn</p>
                <p className="text-foreground">linkedin.com/in/达-周-9434b2375</p>
              </div>
            </a>
          </Card>
        </div>

        <Button
          size="lg"
          className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-8 py-6 text-lg animate-glow fade-in-element"
          onClick={() => {
            const link = document.createElement("a")
            link.href = "/documents/english%20resume.pdf"
            link.download = "english_resume.pdf"
            link.click()
          }}
        >
          <Download className="w-5 h-5 mr-2" />[ Download My English Resume ]
        </Button>
      </div>
    </section>
  )
}
