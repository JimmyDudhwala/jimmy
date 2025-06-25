"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"

const tools = [
  { id: 1, name: "React", src: "https://www.svgrepo.com/show/303157/react-logo.svg" },
  { id: 2, name: "Next.js", src: "https://www.svgrepo.com/show/354113/nextjs-icon.svg" },
  { id: 3, name: "Tailwind CSS", src: "https://www.svgrepo.com/show/374118/tailwind.svg" },
  { id: 4, name: "Node.js", src: "https://www.svgrepo.com/show/376337/node-js.svg" },
  { id: 5, name: "TypeScript", src: "https://www.svgrepo.com/show/349540/typescript.svg" },
  { id: 6, name: "JavaScript", src: "https://www.svgrepo.com/show/349419/javascript.svg" },
  { id: 7, name: "MongoDB", src: "https://www.svgrepo.com/show/373845/mongo.svg" },
  { id: 8, name: "Firebase", src: "https://www.svgrepo.com/show/373595/firebase.svg" },
  { id: 9, name: "Git", src: "https://www.svgrepo.com/show/373623/git.svg" },
  { id: 10, name: "GitHub", src: "https://www.svgrepo.com/show/512317/github-142.svg" },
  { id: 11, name: "VS Code", src: "https://www.svgrepo.com/show/374171/vscode.svg" },
  { id: 12, name: "Figma", src: "https://www.svgrepo.com/show/452202/figma.svg" },
  { id: 13, name: "Postman", src: "https://www.svgrepo.com/show/354202/postman-icon.svg" },
  { id: 14, name: "Docker", src: "https://www.svgrepo.com/show/452192/docker.svg" },
  { id: 15, name: "AWS", src: "https://www.svgrepo.com/show/373458/aws.svg" },
  { id: 16, name: "Redux", src: "https://www.svgrepo.com/show/452093/redux.svg" },
  { id: 17, name: "GraphQL", src: "https://www.svgrepo.com/show/373644/graphql.svg" },
  { id: 18, name: "React Native", src: "https://www.svgrepo.com/show/374034/reacttemplate.svg" },
  { id: 19, name: "Framer Motion", src: "https://www.svgrepo.com/show/452207/framer.svg" },
  { id: 22, name: "Vercel", src: "https://www.svgrepo.com/show/361653/vercel-logo.svg" },
  { id: 26, name: "Drizzle ORM", src: "https://avatars.githubusercontent.com/u/108468352?s=200&v=4" },
  { id: 27, name: "PostgreSQL", src: "https://www.svgrepo.com/show/354200/postgresql.svg" },
  { id: 29, name: "Mysql", src: "https://www.svgrepo.com/show/473731/mysql.svg" },
  { id: 31, name: "Prisma", src: "https://www.svgrepo.com/show/354210/prisma.svg" },
  { id: 32, name: "Linux", src: "https://www.svgrepo.com/show/448236/linux.svg" },
  { id: 33, name: "Nginx", src: "https://www.svgrepo.com/show/354115/nginx.svg" },
  { id: 35, name: "Python", src: "https://www.svgrepo.com/show/452091/python.svg" },
  { id: 36, name: "Django", src: "https://www.svgrepo.com/show/353657/django-icon.svg" },
]



const ICON_SIZE = 60
const spacing = 10

const RandomTools = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true }) // animation triggers once on entering viewport
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 })

  useEffect(() => {
    const updateSize = () => {
      if (containerRef.current) {
        setContainerSize({
          width: containerRef.current.clientWidth,
          height: containerRef.current.clientHeight
        })
      }
    }

    updateSize()
    window.addEventListener('resize', updateSize)
    return () => window.removeEventListener('resize', updateSize)
  }, [])

  const getFinalPositions = () => {
    const positions = []
    const cols = Math.floor(containerSize.width / ICON_SIZE) || 1
    const xOffset = (containerSize.width - (cols * ICON_SIZE + (cols - 1) * spacing)) / 2

    for (let i = 0; i < tools.length; i++) {
      const col = i % cols
      const row = Math.floor(i / cols)

      const x = xOffset + col * (ICON_SIZE + spacing)
      const y = row * (ICON_SIZE + spacing)

      positions.push({
        x,
        y,
        rotate: Math.random() * 10 - 5,
        scale: 0.9 + Math.random() * 0.1,
        zIndex: 1
      })
    }

    return positions
  }

  const finalPositions = getFinalPositions()

  return (
    <div ref={containerRef} className="relative w-full h-full min-h-[150px]">
      {containerSize.width > 0 && tools.map((tool, index) => {
        const startX = Math.random() * (containerSize.width - ICON_SIZE)
        const startY = -ICON_SIZE * (2 + (index % 3)) // simulate higher drop

        const finalPos = finalPositions[index] || {
          x: startX,
          y: containerSize.height - ICON_SIZE,
          rotate: Math.random() * 30 - 15,
          scale: 0.8 + Math.random() * 0.2,
          zIndex: Math.floor(Math.random() * 5) + 1
        }

        return (
          <motion.div
            key={tool.id}
            className="absolute bg-white rounded-2xl p-2 shadow-md"
            style={{ zIndex: finalPos.zIndex }}
            initial={{ 
              x: startX, 
              y: startY, 
              opacity: 0, 
              scale: 0.5, 
              rotate: 0 
            }}
            animate={isInView ? {
              x: finalPos.x,
              y: finalPos.y,
              opacity: 1,
              scale: finalPos.scale,
              rotate: finalPos.rotate
            } : {}}
            transition={{
              type: "spring",
              stiffness: 60,
              damping: 12,
              mass: 1.2,
              delay: index * 0.1
            }}
            whileHover={{
              scale: finalPos.scale * 1.1,
              zIndex: 20,
              transition: { duration: 0.2 }
            }}
          >
            <Image 
              src={tool.src || "/placeholder.svg"} 
              alt={tool.name} 
              width={50} 
              height={50} 
            /> </motion.div>
        )
      })}
    </div>
  )
}

export default RandomTools
