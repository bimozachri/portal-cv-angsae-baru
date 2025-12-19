"use client"

import { useEffect, useRef } from "react"

const InteractiveBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number
    let particlesArray: Particle[] = []

    const handleResize = () => {
      if (canvas.parentElement) {
        canvas.width = canvas.parentElement.clientWidth
        canvas.height = canvas.parentElement.clientHeight
      }
      init()
    }

    const mouse = {
      x: null as number | null,
      y: null as number | null,
      radius: 120,
    }

    const handleMouseMove = (event: MouseEvent) => {
        const rect = canvas.getBoundingClientRect();
        mouse.x = event.clientX - rect.left;
        mouse.y = event.clientY - rect.top;
    }

    const handleMouseLeave = () => {
      mouse.x = null
      mouse.y = null
    }

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("mouseleave", handleMouseLeave)
    window.addEventListener("resize", handleResize)

    class Particle {
      x: number
      y: number
      directionX: number
      directionY: number
      size: number
      color: string
      density: number

      constructor(x: number, y: number, directionX: number, directionY: number, size: number, color: string) {
        this.x = x
        this.y = y
        this.directionX = directionX
        this.directionY = directionY
        this.size = size
        this.color = color
        this.density = (Math.random() * 30) + 1
      }

      draw() {
        if (!ctx) return
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false)
        ctx.fillStyle = this.color
        ctx.fill()
      }

      update() {
        // 1. LOGIKA GERAKAN KONSTAN (Agar tidak statis)
        this.x += this.directionX
        this.y += this.directionY

        // 2. PANTULAN DINDING (Agar tidak hilang dari layar)
        if (canvas) {
            if (this.x > canvas.width || this.x < 0) {
                this.directionX = -this.directionX
            }
            if (this.y > canvas.height || this.y < 0) {
                this.directionY = -this.directionY
            }
        }

        // 3. INTERAKSI MOUSE (Menghindar saat di-hover)
        if (mouse.x != null && mouse.y != null) {
          let dx = mouse.x - this.x
          let dy = mouse.y - this.y
          let distance = Math.sqrt(dx * dx + dy * dy)
          
          if (distance < mouse.radius) {
            // Logika menghindar
            const forceDirectionX = dx / distance
            const forceDirectionY = dy / distance
            const maxDistance = mouse.radius
            const force = (maxDistance - distance) / maxDistance
            const directionX = forceDirectionX * force * this.density
            const directionY = forceDirectionY * force * this.density
            
            this.x -= directionX
            this.y -= directionY
          }
        }
        
        this.draw()
      }
    }

    function init() {
      particlesArray = []
      const numberOfParticles = (canvas!.width * canvas!.height) / 9000
      
      for (let i = 0; i < numberOfParticles; i++) {
        const size = (Math.random() * 2) + 1 // Ukuran partikel
        const x = Math.random() * canvas!.width
        const y = Math.random() * canvas!.height
        
        // Kecepatan gerak (range -0.5 sampai 0.5 agar pelan & smooth)
        const directionX = (Math.random() * 1) - 0.5 
        const directionY = (Math.random() * 1) - 0.5 
        
        // Warna Soft Blue (#4A90E2) dengan opacity
        const color = 'rgba(74, 144, 226, 0.5)'

        particlesArray.push(new Particle(x, y, directionX, directionY, size, color))
      }
    }

    function connect() {
      if (!ctx) return
      let opacityValue = 1
      for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a; b < particlesArray.length; b++) {
          // Hitung jarak
          let distance = ((particlesArray[a].x - particlesArray[b].x) * (particlesArray[a].x - particlesArray[b].x))
            + ((particlesArray[a].y - particlesArray[b].y) * (particlesArray[a].y - particlesArray[b].y))
          
          // Jika jarak dekat, gambar garis penghubung
          if (distance < (canvas!.width / 7) * (canvas!.height / 7)) {
            opacityValue = 1 - (distance / 20000)
            ctx.strokeStyle = 'rgba(74, 144, 226,' + opacityValue * 0.2 + ')' // Garis lebih tipis
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(particlesArray[a].x, particlesArray[a].y)
            ctx.lineTo(particlesArray[b].x, particlesArray[b].y)
            ctx.stroke()
          }
        }
      }
    }

    function animate() {
      animationFrameId = requestAnimationFrame(animate)
      if (!ctx || !canvas) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update()
      }
      connect()
    }

    handleResize()
    animate()

    return () => {
      window.removeEventListener("resize", handleResize)
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("mouseleave", handleMouseLeave)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none mix-blend-multiply"
    />
  )
}

export default InteractiveBackground