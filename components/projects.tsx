import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ExternalLink } from "lucide-react"
import { redirect } from "next/navigation";

const projects = [
  {
    title: "Yurei - (WIP)",
    description: "Real-time monitoring daemon for servers, collects metrics, and alerts you when things start to break ",
    tech: ["Typescript", "Hono.js", "Redis"],
    link: "https://github.com/ashzero2/yurei",
  },
  {
    title: "Tenshi Bot - (WIP)",
    description: "Personal Telegram bot for managing groups, server, users and fun interactions, etc.",
    tech: ["Typescript", "Gram.IO"],
    link: "https://github.com/ashzero2/tenshi-bot",
  },
  {
    title: "Personal Portfolio",
    description: "My personal portfolio showcasing my skills and projects. Built with Next.js and Tailwind CSS.",
    tech: ["Next.js", "Tailwind CSS", "TypeScript"],
    link: "https://github.com/ashzero2/portfolio",
  },
]

export function Projects() {
  return (
    <section className="px-4 py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Personal Works</h2>
          <p className="text-muted-foreground text-lg">Recent projects that showcase my skills</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Card key={project.title} className="group hover:border-primary transition-colors">
              <CardHeader>
                <div className="flex items-start justify-between gap-2">
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </a>
                </div>
                <CardDescription className="text-base leading-relaxed">{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span key={tech} className="text-xs font-medium px-3 py-1 rounded-full bg-primary/10 text-primary">
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
