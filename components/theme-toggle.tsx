"use client"
import { Moon, Sun } from "lucide-react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"

export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}

export function ThemeToggle() {
  const { setTheme, theme } = useTheme()

  return (
    <Button
      variant="outline"
      size="icon"
      className="fixed bottom-6 right-6 z-50 h-12 w-12 rounded-full border-border/40 bg-background/80 shadow-lg backdrop-blur-sm transition-all hover:scale-110 hover:bg-accent hover:text-accent-foreground"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      <Sun className="h-[1.5rem] w-[1.5rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-[1.5rem] w-[1.5rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
