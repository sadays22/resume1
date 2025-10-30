"use client"

import { useEffect, useRef } from "react"
import { Card } from "@/components/ui/card"
import { GraduationCap, Award } from "lucide-react"
import Image from "next/image"

export default function About() {
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
    <section id="about" ref={sectionRef} className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-primary font-[family-name:var(--font-heading)] fade-in-element">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Left: Info Cards */}
          <div className="space-y-6 fade-in-element">
            <div className="flex justify-center mb-6">
              <div className="relative w-48 h-48 rounded-lg overflow-hidden border-4 border-primary/20 hover:border-primary transition-colors">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-NkXqVlqvCEhEgqY7zEtBN61htQjTJe.png"
                  alt="Zhou Da Profile Photo"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            <Card className="p-6 bg-card border-border hover:border-primary transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <GraduationCap className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-bold text-primary font-[family-name:var(--font-heading)]">Education</h3>
              </div>
              <div className="space-y-4 text-sm">
                <div>
                  <p className="font-bold text-foreground">University of Manchester</p>
                  <p className="text-muted-foreground">MSc Robotics | Sep 2025 – Jul 2026</p>
                </div>
                <div>
                  <p className="font-bold text-foreground">Hangzhou Dianzi University</p>
                  <p className="text-muted-foreground">BEng Automation | Sep 2021 – Jul 2025</p>
                </div>
                <div>
                  <p className="font-bold text-foreground">Yuyao High School</p>
                  <p className="text-muted-foreground">Sep 2018 - Jun 2021</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card border-border hover:border-primary transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <Award className="w-6 h-6 text-secondary" />
                <h3 className="text-xl font-bold text-secondary font-[family-name:var(--font-heading)]">
                  Honors & Achievements
                </h3>
              </div>
              <ul className="space-y-2 text-sm text-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">▹</span>
                  <span>Undergraduate GPA: 4.1/5.0</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">▹</span>
                  <span>IELTS 7.0, CET-6 Passed</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">▹</span>
                  <span>National College Intelligent Robot Competition (Combat Division) - Provincial Third Prize</span>
                </li>
              </ul>
            </Card>
          </div>

          {/* Right: Description */}
          <div className="fade-in-element">
            <div className="prose prose-invert max-w-none">
              <p className="text-lg leading-relaxed text-foreground mb-6">
                I am an undergraduate student majoring in Automation at{" "}
                <span className="text-primary font-bold">Hangzhou Dianzi University</span>, and will be pursuing a{" "}
                <span className="text-primary font-bold">
                  Master's degree in Robotics at the University of Manchester
                </span>
                .
              </p>
              <p className="text-lg leading-relaxed text-foreground mb-6">
                I have a strong interest in <span className="text-secondary">machine vision</span>,{" "}
                <span className="text-secondary">deep learning</span>, and{" "}
                <span className="text-secondary">automation control</span>.
              </p>
              <p className="text-lg leading-relaxed text-foreground">
                I enjoy the process of solving problems from scratch and am passionate about transforming code into
                efficient physical implementations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
