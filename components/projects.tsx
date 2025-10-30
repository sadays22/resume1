"use client"

import { useState, useEffect, useRef } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Download } from "lucide-react"
import Image from "next/image"

const projects = [
  {
    id: 1,
    title: "Intelligent Document Processing & Seal Recognition",
    role: "Backend Developer (Python)",
    tags: ["PyTorch", "PaddleOCR", "OpenCV", "Contract Comparison"],
    company: "Hangzhou Huidian Information Co., Ltd.",
    period: "June 2024 - September 2024",
    responsibilities: [
      "Developed deep learning document processing system: Implemented seal recognition using PyTorch + PaddleOCR, integrated TesseractOCR to build text recognition pipeline",
      "Designed contract comparison engine: Applied OpenCV template matching + text similarity algorithms (Cosine Similarity) to achieve automatic annotation of contract clause differences",
    ],
  },
  {
    id: 2,
    title: "National College Intelligent Robot Competition (Combat Division)",
    role: "Image Processing & Motion Control Algorithms",
    tags: ["Python", "LIDAR", "Motion Control", "Provincial Third Prize"],
    company: "National College Intelligent Robot Competition",
    period: "2023 - 2024",
    responsibilities: [
      "In Python environment, utilized cameras, single-line LIDAR and other sensors to write algorithm code, completing underlying servo steering and motor motion control",
      "Proficient in system decomposition, using breakpoint testing and other methods to fix critical bugs and optimize system operation",
      "According to competition requirements, refined, analyzed and archived team technical documentation",
    ],
    downloadUrl: "/documents/%E8%BD%AE%E5%BC%8F%E6%A0%BC%E6%96%97--%E9%9B%AA%E9%9F%B3.pdf",
    downloadLabel: "下载轮式格斗-雪音 技术文档",
  },
  {
    id: 3,
    title: "Intelligent Robotic Arm Car",
    role: "System Integration & Control Development",
    tags: ["ROS", "Computer Vision", "Motion Planning", "Embedded Systems"],
    company: "Personal Project",
    period: "2023 - 2024",
    responsibilities: [
      "Designed and implemented an intelligent mobile robot platform with a 6-DOF robotic arm for object manipulation tasks",
      "Developed computer vision algorithms for object detection and tracking using OpenCV and deep learning models",
      "Implemented motion planning and control algorithms for coordinated movement between the mobile base and robotic arm",
      "Integrated multiple sensors (cameras, encoders, IMU) for autonomous navigation and precise manipulation",
    ],
  },
  {
    id: 4,
    title: "Solar Panel Obscuration Detection System",
    role: "Python Development Intern",
    tags: ["Python", "OpenCV", "YOLO", "U-Net", "Deep Learning"],
    company: "Hangzhou Wonder-Light Smart Energy Co., Ltd.",
    period: "Jun 2025 - Sep 2025",
    responsibilities: [
      "Engineered an intelligent obscuration detection system for solar panels utilizing Python and OpenCV for image preprocessing and augmentation",
      "Trained and fine-tuned custom deep learning models using YOLO for object detection and U-Net (or similar) for semantic segmentation to accurately identify and locate obstructions like bird droppings, dust, and leaves",
      "Developed an image processing module to perform pixel-level analysis on detected regions, precisely calculating the percentage of obscuration area to assess impact on power generation efficiency",
      "Improved the model's mean Average Precision (mAP) on the test set by optimizing hyperparameters and applying data augmentation techniques, effectively supporting the O&M team's cleaning decisions",
    ],
    imageUrl: "/images/solar-panel-detection.jpg",
  },
]

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null)
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
    <section id="projects" ref={sectionRef} className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-primary font-[family-name:var(--font-heading)] fade-in-element">
          Project Experience
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <Card
              key={project.id}
              className="p-6 bg-card border-border hover:border-secondary hover:-translate-y-2 transition-all cursor-pointer group fade-in-element hover:shadow-xl hover:shadow-secondary/20"
              style={{ animationDelay: `${idx * 0.1}s` }}
              onClick={() => setSelectedProject(project)}
            >
              <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors font-[family-name:var(--font-heading)]">
                {project.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-4">{project.role}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 bg-primary/10 text-primary text-xs rounded border border-primary/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <Button
                variant="outline"
                size="sm"
                className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
              >
                [ View Details ]
              </Button>
            </Card>
          ))}
        </div>

        {/* Project Modal */}
        <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
          <DialogContent className="max-w-3xl bg-card border-border max-h-[80vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold text-primary font-[family-name:var(--font-heading)] pr-8">
                {selectedProject?.title}
              </DialogTitle>
            </DialogHeader>
            {selectedProject && (
              <div className="space-y-6">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">
                    {selectedProject.company} | {selectedProject.period}
                  </p>
                  <p className="text-foreground font-semibold">{selectedProject.role}</p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {selectedProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-primary/10 text-primary text-sm rounded border border-primary/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div>
                  <h4 className="text-lg font-bold mb-4 text-secondary font-[family-name:var(--font-heading)]">
                    Key Responsibilities
                  </h4>
                  <ul className="space-y-3">
                    {selectedProject.responsibilities.map((resp, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-foreground">
                        <span className="text-primary mt-1 flex-shrink-0">▹</span>
                        <span className="leading-relaxed">{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {selectedProject.imageUrl && (
                  <div className="border border-border rounded-lg overflow-hidden">
                    <Image
                      src={selectedProject.imageUrl || "/placeholder.svg"}
                      alt={selectedProject.title}
                      width={800}
                      height={400}
                      className="w-full h-auto"
                    />
                  </div>
                )}

                {selectedProject.downloadUrl && (
                  <div className="pt-4 border-t border-border">
                    <a
                      href={selectedProject.downloadUrl}
                      download
                      className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded hover:bg-primary/90 transition-colors"
                    >
                      <Download className="w-4 h-4" />
                      {selectedProject.downloadLabel}
                    </a>
                  </div>
                )}
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  )
}
