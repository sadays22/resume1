"use client"

import { useEffect, useRef } from "react"

const skillCategories = [
  {
    title: "AI & Vision",
    color: "primary",
    skills: [
      "PyTorch",
      "PaddlePaddle",
      "Deep Learning",
      "Machine Vision",
      "PaddleOCR",
      "YOLO",
      "OpenCV",
      "TesseractOCR",
    ],
  },
  {
    title: "Backend & Data",
    color: "secondary",
    skills: [
      "Python",
      "Java (Familiar)",
      "Spring Boot",
      "Spring MVC",
      "MyBatis",
      "MySQL",
      "MongoDB",
      "Text Similarity Algorithms",
    ],
  },
  {
    title: "Robotics & Tools",
    color: "primary",
    skills: ["ROS (Familiar)", "Motion Control", "Single-line LIDAR", "Docker", "GitLab", "Git", "PyCharm", "Anaconda"],
  },
  {
    title: "Core Theory",
    color: "secondary",
    skills: ["Automatic Control Theory", "Analog Circuit Technology", "Computer Networks"],
  },
]

export default function Skills() {
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
    <section id="skills" ref={sectionRef} className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-primary font-[family-name:var(--font-heading)] fade-in-element">
          Professional Skills
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, idx) => (
            <div key={category.title} className="fade-in-element" style={{ animationDelay: `${idx * 0.1}s` }}>
              <h3 className={`text-2xl font-bold mb-6 text-${category.color} font-[family-name:var(--font-heading)]`}>
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className={`px-4 py-2 bg-card border border-border rounded-lg text-sm hover:border-${category.color} hover:scale-110 transition-all cursor-default hover:shadow-lg hover:shadow-${category.color}/20`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
