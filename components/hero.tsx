import { Github, Linkedin, Mail, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 h-full w-full bg-background bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-primary/20 opacity-20 blur-[100px]" />
      </div>

      <div className="max-w-3xl mx-auto text-center space-y-8">
        <div className="inline-block animate-in fade-in zoom-in duration-700">
          <div className="relative w-24 h-24 mx-auto mb-6">
            <div className="absolute inset-0 rounded-full bg-primary/20 blur-xl animate-pulse" />
            <Image
              className="relative rounded-full border-2 border-background shadow-xl"
              width={500}
              height={500}
              src="/meow.png"
              alt="Picture of the author"
            />
          </div>
        </div>

        <div className="space-y-4">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-balance animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150">
            Rahul Aswin
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground text-balance animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
            Full-Stack Developer & <span className="text-primary">Software Engineer</span>
          </p>
        </div>

        <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-700 delay-500">
          Building robust, scalable systems with modern web technologies. Specialized in full-stack development, from
          database architecture to responsive frontends.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-4 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-700">
          <a href="mailto:aswinzero2@gmail.com">
            <Button
              size="lg"
              className="gap-2 rounded-full shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all"
            >
              <Mail className="w-4 h-4" />
              Get in touch
              <ArrowRight className="w-4 h-4 ml-1 opacity-50" />
            </Button>
          </a>
          <a href="https://github.com/ashzero2/" target="_blank">
            <Button
              size="lg"
              variant="outline"
              className="gap-2 bg-background/50 backdrop-blur-sm rounded-full hover:text-teal-500"
            >
              <Github className="w-4 h-4" />
              GitHub
            </Button>
          </a>
          <a href="https://in.linkedin.com/in/rahul-aswin-r-106050295" target="_blank">
            <Button
              size="lg"
              variant="outline"
              className="gap-2 bg-background/50 backdrop-blur-sm rounded-full hover:text-teal-500"
            >
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </Button>
          </a>
        </div>
      </div>
    </section>
  )
}