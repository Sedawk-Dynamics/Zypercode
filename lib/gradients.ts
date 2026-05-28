export const GRADIENTS = [
  "linear-gradient(135deg, #ec4899 0%, #a855f7 50%, #f97316 100%)",
  "linear-gradient(135deg, #06b6d4 0%, #3b82f6 50%, #6366f1 100%)",
  "linear-gradient(135deg, #10b981 0%, #14b8a6 50%, #06b6d4 100%)",
  "linear-gradient(135deg, #f59e0b 0%, #f97316 50%, #ef4444 100%)",
  "linear-gradient(135deg, #8b5cf6 0%, #d946ef 50%, #ec4899 100%)",
  "linear-gradient(135deg, #22c55e 0%, #14b8a6 50%, #0ea5e9 100%)",
  "linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #d946ef 100%)",
  "linear-gradient(135deg, #f43f5e 0%, #ec4899 50%, #a855f7 100%)",
]

export function pickGradient(seed: string | number) {
  if (typeof seed === "number") return GRADIENTS[Math.abs(seed) % GRADIENTS.length]
  let h = 0
  for (let i = 0; i < seed.length; i++) h = (h * 31 + seed.charCodeAt(i)) >>> 0
  return GRADIENTS[h % GRADIENTS.length]
}
