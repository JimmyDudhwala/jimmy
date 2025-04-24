"use client"

interface GridBackgroundProps {
  cols?: number
  rows?: number
  className?: string
  lineColor?: string
  fadeEdges?: boolean
}

export default function GridBackground({
  cols = 20,
  rows = 20,
  className = "",
  lineColor = "rgba(255, 255, 255, 0.1)",
  fadeEdges = true,
}: GridBackgroundProps) {
  return (
    <div
      className={`absolute  inset-0 w-full h-full overflow-hidden ${className}`}
      style={{
        backgroundImage: `
          linear-gradient(to right, ${lineColor} 1px, transparent 1px),
          linear-gradient(to bottom, ${lineColor} 1px, transparent 1px)
        `,
        backgroundSize: `calc(100% / ${cols}) calc(100% / ${rows})`,
        mask: fadeEdges
          ? `
            linear-gradient(to right, 
              transparent 0%, 
              black 20%, 
              black 80%, 
              transparent 100%
            ),
            linear-gradient(to bottom, 
              transparent 0%,   /* More top fade */
              black 40%,        /* Start solid earlier */
              black 80%, 
              transparent 100%
            )`
          : "none",
        WebkitMask: fadeEdges
          ? `
            linear-gradient(to right, 
              transparent 0%, 
              black 20%, 
              black 80%, 
              transparent 100%
            ),
            linear-gradient(to bottom, 
              transparent 0%, 
              black 40%, 
              black 80%, 
              transparent 100%
            )`
          : "none",
      }}
    />
  )
}
