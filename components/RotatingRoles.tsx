"use client"

import { useEffect, useState } from "react"

const roles = [
  "Software Engineer",
  "Linux Enthusiast",
  "TypeScript Enjoyer",
  "Cat-Powered Coder",
  "Svelte Lover"
]

export function RotatingRoles() {
    const [idx, setIdx] = useState(0)
    const [visible, setVisible] = useState(true)

    useEffect(() => {
        const interval = setInterval(() => {
            setVisible(false)
            setTimeout(() => {
                setIdx((prev) => (prev + 1) % roles.length)
                setVisible(true)
            }, 500)
        }, 2500)

        return () => clearInterval(interval);
    }, [])

    return (
    <span
      className={`transition-opacity duration-500 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    >
      {roles[idx]}
    </span>
  )
}