import { Code2, Database, Globe, Server, Terminal, Zap, Cpu, Coffee, Layers, Palette, FileCode } from "lucide-react"
import { ReactTS, Svelte, Typescript, NodeJS, Tailwind, ElysiaJS, Java, Cpp, Redis, Mysql, EmberJS } from "@/lib/icons"
// const skills = [
//   { name: "React", icon: Code2, category: "Frontend" },
//   { name: "Next.js", icon: Globe, category: "Frontend" },
//   { name: "TypeScript", icon: FileCode, category: "Language" },
//   { name: "Node.js", icon: Server, category: "Backend" },
//   { name: "MySQL", icon: Database, category: "Database" },
//   { name: "Tailwind CSS", icon: Palette, category: "Styling" },
//   { name: "REST APIs", icon: Globe, category: "Backend" },
//   { name: "HonoJS", icon: Zap, category: "Backend" },
//   { name: "ElysiaJS", icon: Zap, category: "Backend" },
//   { name: "Java", icon: Coffee, category: "Language" },
//   { name: "C++", icon: Cpu, category: "Language" },
//   { name: "Redis", icon: Database, category: "Database" },
//   { name: "Bash", icon: Terminal, category: "Tools" },
//   { name: "Svelte/Kit", icon: Code2, category: "Frontend" },
//   { name: "Ember.js", icon: Layers, category: "Frontend" },
// ]

const skills = [
  { name: "React", icon: ReactTS },
  { name: "Svelte/Kit", icon: Svelte },
  { name: "TypeScript", icon: Typescript },
  { name: "Node.js", icon: NodeJS },
  { name: "ElysiaJS", icon: ElysiaJS },
  { name: "Tailwind CSS", icon: Tailwind },
  { name: "Java", icon: Java },
  { name: "C++", icon: Cpp },
  { name: "MySQL", icon: Mysql },
  { name: "Redis", icon: Redis },
  { name: "Ember.js", icon: EmberJS }
]

export function Skills() {
  return (
    <section className="px-4 py-20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Tech Stack</h2>
          <p className="text-muted-foreground text-lg">Technologies I work with</p>
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          {skills.map((skill) => {
            const Icon = skill.icon
            return (
              <div
                key={skill.name}
                className="group flex items-center gap-2 px-5 py-3 bg-card border border-border rounded-full text-card-foreground font-medium hover:border-primary hover:bg-primary/5 transition-all duration-300 hover:scale-105"
              >
                <Icon className="w-4 h-4 text-primary group-hover:rotate-12 transition-transform duration-300" />
                <span>{skill.name}</span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
