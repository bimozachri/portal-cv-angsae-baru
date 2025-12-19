"use client"

import { type LucideIcon, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

interface ServiceCardProps {
  title: string
  description: string
  icon: LucideIcon
  buttonText: string
  href: string
  color: "primary" | "secondary" | "accent"
}

export function ServiceCard({ title, description, icon: Icon, buttonText, href, color }: ServiceCardProps) {
  const colorClasses = {
    primary: {
      bg: "bg-primary/10",
      // GANTI DISINI: Tambahkan dark:text-blue-400 agar terang di mode gelap
      text: "text-primary dark:text-blue-400", 
      button: "bg-primary hover:bg-primary/90",
      border: "group-hover:border-primary/30",
    },
    secondary: {
      bg: "bg-secondary/10",
      // GANTI DISINI: Tambahkan dark:text-blue-300
      text: "text-secondary dark:text-blue-300",
      button: "bg-secondary hover:bg-secondary/90",
      border: "group-hover:border-secondary/30",
    },
    accent: {
      bg: "bg-accent/10",
      // GANTI DISINI: Tambahkan dark:text-teal-300
      text: "text-accent dark:text-teal-300",
      button: "bg-accent hover:bg-accent/90",
      border: "group-hover:border-accent/30",
    },
  }

  const colors = colorClasses[color]

  return (
    <Card
      className={`group relative overflow-hidden border border-border transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${colors.border} bg-card h-full flex flex-col`}
    >
      <CardHeader className="pb-4">
        {/* Icon */}
        <div
          className={`inline-flex h-14 w-14 items-center justify-center rounded-xl ${colors.bg} mb-4 transition-transform duration-300 group-hover:scale-110`}
        >
          <Icon className={`h-7 w-7 ${colors.text}`} />
        </div>

        {/* Title */}
        <h3 className="text-lg font-semibold text-card-foreground">{title}</h3>
      </CardHeader>

      <CardContent className="pt-0 flex-1 flex flex-col">
        {/* Description */}
        <p className="text-sm text-muted-foreground mb-6 leading-relaxed flex-1">{description}</p>

        {/* Button - always at bottom */}
        <Button
          asChild
          className={`w-full ${colors.button} text-white font-medium transition-all duration-300 group-hover:gap-3 mt-auto`}
        >
          <a href={href}>
            <span>{buttonText}</span>
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </Button>
      </CardContent>
    </Card>
  )
}