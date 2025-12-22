"use client"

import { Calendar, Bell, Info, AlertTriangle } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

type Announcement = {
  id: string
  title: string
  date: string
  type: "info" | "warning" | "urgent" | "event"
  message: string
  active: boolean
}

const announcementsData: Announcement[] = [
  {
    id: "1",
    title: "Libur Natal dan Cuti Bersama",
    date: "25 - 26 Desember 2025",
    type: "event",
    message: "Kantor akan libur operasional.",
    active: true,
  },
  {
    id: "2",
    title: "Deadline Laporan Bulanan",
    date: "25 Maret 2024",
    type: "urgent",
    message: "Laporan dikumpulkan maksimal jam 5 sore.",
    active: false, 
  },
  {
    id: "3",
    title: "Update Sistem Absensi",
    date: "20 Maret 2024",
    type: "info",
    message: "Maintenance server jam 12 siang.",
    active: false,
  },
]

export function Announcements() {
  const activeAnnouncements = announcementsData.filter((item) => item.active === true)

  if (activeAnnouncements.length === 0) {
    return null
  }

  let gridColsClass = "grid-cols-1"
  if (activeAnnouncements.length === 2) {
    gridColsClass = "grid-cols-1 md:grid-cols-2"
  } else if (activeAnnouncements.length >= 3) {
    gridColsClass = "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
  }

  const getIcon = (type: string) => {
    switch (type) {
      case "urgent": return <AlertTriangle className="h-5 w-5 text-red-500" />
      case "warning": return <Bell className="h-5 w-5 text-yellow-500" />
      case "event": return <Calendar className="h-5 w-5 text-blue-500" />
      default: return <Info className="h-5 w-5 text-gray-500" />
    }
  }

  const getBorderColor = (type: string) => {
    switch (type) {
      case "urgent": return "border-l-4 border-l-red-500"
      case "warning": return "border-l-4 border-l-yellow-500"
      case "event": return "border-l-4 border-l-blue-500"
      default: return "border-l-4 border-l-gray-300"
    }
  }

  return (
    <section className="container mx-auto px-4 py-8 pb-0">
      <Card className="shadow-sm border-border bg-card">
        <CardHeader className="pb-3">
          <div className="flex items-center gap-2">
            <Bell className="h-5 w-5 text-primary" />
            <CardTitle className="text-xl font-bold">Papan Pengumuman</CardTitle>
          </div>
        </CardHeader>
        
        <CardContent className={`grid gap-4 ${gridColsClass}`}>
          {activeAnnouncements.map((item) => (
            <div
              key={item.id}
              className={`relative flex flex-col gap-2 rounded-lg border p-4 shadow-sm transition-all hover:bg-accent/50 ${getBorderColor(
                item.type
              )}`}
            >
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-2">
                  {getIcon(item.type)}
                  <span className="font-semibold text-sm text-foreground">{item.title}</span>
                </div>
                <span className="text-xs text-muted-foreground whitespace-nowrap bg-muted px-2 py-1 rounded-full">
                  {item.date}
                </span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.message}
              </p>
            </div>
          ))}
        </CardContent>
      </Card>
    </section>
  )
}