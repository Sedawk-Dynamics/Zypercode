"use client"

import { ReactNode } from "react"
import { pickGradient } from "@/lib/gradients"

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
