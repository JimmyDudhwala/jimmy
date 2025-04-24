"use client"
import WaveScroll from "../components/Wavescroll"

export default function Home() {
  return (
    <main className="relative bg-[#F8FFE5] text-white">
      {/* Initial content before the wave */}
      <div className="flex h-screen items-center justify-center">
        <h1 className="text-4xl font-bold">Scroll Down to See the Wave</h1>
      </div>

      {/* Wave section */}
      <WaveScroll />

      {/* Content after the wave to allow scrolling to continue */}
      <div className="flex h-screen items-center justify-center">
        <h2 className="text-3xl font-bold">Continue Scrolling to Explore More</h2>
      </div>
      <div className="flex h-screen items-center justify-center">
        <h2 className="text-3xl font-bold">End of Content</h2>
      </div>
    </main>
  )
}
