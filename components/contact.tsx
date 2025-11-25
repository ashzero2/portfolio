import { Button } from "@/components/ui/button"
import { Mail } from "lucide-react"

export function Contact() {
  return (
    <section className="px-4 py-20 bg-muted/30">
      <div className="max-w-2xl mx-auto text-center space-y-8">
        <div className="space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">Let&apos;s work together</h2>
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
            Feel free to reach out!
          </p>
        </div>

        <Button size="lg" className="gap-2">
          <Mail className="w-4 h-4" />
          aswinzero2@gmail.com
        </Button>
      </div>
    </section>
  )
}
