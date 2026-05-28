"use client"

import { ReactNode } from "react"

const GRADIENTS = [
  "linear-gradient(135deg, #ec4899 0%, #a855f7 50%, #f97316 100%)",
  "linear-gradient(135deg, #06b6d4 0%, #3b82f6 50%, #6366f1 100%)",
  "linear-gradient(135deg, #10b981 0%, #14b8a6 50%, #06b6d4 100%)",
  "linear-gradient(135deg, #f59e0b 0%, #f97316 50%, #ef4444 100%)",
  "linear-gradient(135deg, #8b5cf6 0%, #d946ef 50%, #ec4899 100%)",
  "linear-gradient(135deg, #22c55e 0%, #14b8a6 50%, #0ea5e9 100%)",
  "linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #d946ef 100%)",
  "linear-gradient(135deg, #f43f5e 0%, #ec4899 50%, #a855f7 100%)",
]

function pickGradient(seed: string | number) {
  if (typeof seed === "number") return GRADIENTS[Math.abs(seed) % GRADIENTS.length]
  let h = 0
  for (let i = 0; i < seed.length; i++) h = (h * 31 + seed.charCodeAt(i)) >>> 0
  return GRADIENTS[h % GRADIENTS.length]
}

interface FlipCardProps {
  front: ReactNode
  back: ReactNode
  seed: string | number
  id?: string
  className?: string
  innerClassName?: string
  flipLeft?: boolean
  rounded?: string
}

export function FlipCard({
  front,
  back,
  seed,
  id,
  className = "",
  innerClassName = "",
  flipLeft = false,
  rounded = "rounded-xl",
}: FlipCardProps) {
  const gradient = pickGradient(seed)
  return (
    <div
      id={id}
      tabIndex={0}
      className={`flip-3d scroll-mt-28 ${flipLeft ? "flip-left" : ""} ${rounded} ${className} outline-none focus-visible:ring-2 focus-visible:ring-[#22c55e]/60`}
    >
      <div className={`flip-3d-inner ${innerClassName}`}>
        <div className={`flip-3d-face flip-3d-front ${rounded}`}>{front}</div>
        <div
          className={`flip-3d-face flip-3d-back ${rounded}`}
          style={{ background: gradient }}
        >
          <div className="relative z-10 w-full h-full">{back}</div>
        </div>
      </div>
    </div>
  )
}
