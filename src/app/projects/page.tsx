"use client"

import { useRef } from "react"
import Title from "../components/Title"
import { useScroll, useTransform, motion } from "framer-motion"
import Circle from "../components/Circle"
import { useDeviceType } from "../hook/use-device-type"

const projects = [
  {
    id: 1,
    number: "1",
    title: "Bookmyshow",
    heading: "Project1",
    descriptionLines: [
      "I built a BookMyShow clone project.",
      "JavaScript powers every feature you see.",
      "From movies to events, it works smoothly.",
      "Clean UI with real-world booking flow.",
      "Built for fun and learning.",
    ],
  },
  {
    id: 2,
    number: "2",
    title: "Project-2",
    heading: "Project2",
    descriptionLines: [
      "I built a crypto price tracker app.",
      "Charts and stats update every second live.",
      "Track Bitcoin, Ethereum, and many other coins.",
      "Responsive design with dark and light themes.",
      "Built using React, Tailwind, and CoinGecko API.",
    ],
  },
  {
    id: 3,
    number: "3",
    title: "Project-3",
    heading: "Project3",
    descriptionLines: [
      "I built an eCommerce website for gadgets.",
      "Add items, manage cart, and checkout easily.",
      "Fully functional product filters and category pages.",
      "Secure payments via Stripe and PayPal integrations.",
      "Smooth user flow with modern UI components.",
    ],
  },
  {
    id: 4,
    number: "4",
    title: "Project-4",
    heading: "Project4",
    descriptionLines: [
      "I built a portfolio site for creatives.",
      "Framer Motion brings the animations to life.",
      "Showcasing design, development, and case study sections.",
      "Contact form integrates directly with backend database.",
      "Minimalist layout built using Next.js framework.",
    ],
  },
]

const ProjectsPage = () => {
  const deviceType = useDeviceType()

  if (deviceType === "mobile") {
    return <MobileProjectsView />
  }

  return <AnimatedProjectsView />
}

const AnimatedProjectsView = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const deviceType = useDeviceType()
  const isTablet = deviceType === "tablet"

  const { scrollYProgress } = useScroll({
    target: scrollContainerRef,
    offset: ["start start", "end end"],
  })

  const y1 = useTransform(scrollYProgress, [0, 0.33], ["0%", "-100%"])
  const y2 = useTransform(scrollYProgress, [0.33, 0.66], ["0%", "-200%"])
  const y3 = useTransform(scrollYProgress, [0.66, 0.99], ["0%", "-300%"])

  const h1 = useTransform(
    scrollYProgress,
    [0.0, 0.25, 0.33, 0.63, 0.66, 0.98, 0.99],
    ["0%", "0%", "-25%", "-25%", "-52%", "-52%", "-80%"],
  )

  const circleProgress = useTransform(scrollYProgress, [0, 1], [0, 1])

  return (
    <div className="w-full h-full">
      <Title text="Projects" />
      <div ref={scrollContainerRef} className="relative w-full h-[400vh] bg-[#F8FFE5]">
        <div className="w-full sticky top-0 h-screen flex items-start justify-center overflow-hidden">
          <div className="flex w-full h-[100vh] items-center justify-center">
            <motion.div className="relative border-black w-1/2 h-full">
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  className={`w-full absolute top-[${index * 100}%] min-h-[100vh] flex items-center justify-center`}
                  style={{
                    y: index === 1 ? y1 : index === 2 ? y2 : index === 3 ? y3 : undefined,
                    backgroundColor: `hsl(${index * 30 + 0}, 80%, 80%)`,
                  }}
                >
                  <h1 className={`${isTablet ? "text-3xl" : "text-4xl"} text-[#0F3443] font-[600]`}>
                    {project.heading}
                  </h1>
                </motion.div>
              ))}
            </motion.div>
            <div className={`absolute ${isTablet ? "top-[30%] left-[42%]" : "top-[35%] left-[45%]"}`}>
              <div className={`absolute ${isTablet ? "top-[12%] -left-[8%]" : "top-[14%] -left-[5%]"}`}>
                <motion.svg
                  width={isTablet ? "160" : "200"}
                  height={isTablet ? "160" : "200"}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <motion.circle
                    cx={isTablet ? "80" : "100"}
                    cy={isTablet ? "80" : "100"}
                    r={isTablet ? "75" : "95"}
                    stroke="yellow"
                    strokeWidth="5"
                    fill="none"
                    initial={{ pathLength: 0 }}
                    style={{ pathLength: circleProgress }}
                  />
                </motion.svg>
              </div>
              <Circle big="#F8FFE5" small="#34E89E" text="Projects" />
            </div>
            <div className="flex flex-col p-4 justify-between border-black w-1/2 h-[100vh]">
              <div className="w-full h-[33%] gap-10 flex flex-col items-start justify-start">
                <div className="w-full h-[25%] overflow-hidden">
                  <motion.div className="w-full h-fit" style={{ y: h1 }}>
                    {projects.map((p) => (
                      <h1
                        key={p.id}
                        className={`${isTablet ? "text-5xl" : "text-6xl"} text-[#0F3443] font-[600] bg-[#F8FFE5]`}
                      >
                        {p.number}
                      </h1>
                    ))}
                  </motion.div>
                </div>
                <div className="w-full h-[50%] flex justify-start overflow-hidden">
                  <motion.div className="w-full h-fit flex flex-col gap-10" style={{ y: h1 }}>
                    {projects.map((p) => (
                      <h1 key={p.id} className={`${isTablet ? "text-6xl" : "text-8xl"} text-[#0F3443] font-[600]`}>
                        {p.title}
                      </h1>
                    ))}
                  </motion.div>
                </div>
              </div>

              <div className="w-full h-[50%] flex flex-col justify-end pb-4 items-center">
                {[0, 1, 2, 3, 4].map((lineIndex) => (
                  <div key={lineIndex} className="w-full h-[10%] flex justify-start overflow-hidden">
                    <motion.div className="w-full h-fit flex flex-col" style={{ y: h1 }}>
                      {projects.map((p) => (
                        <div
                          key={p.id}
                          className={`whitespace-nowrap ${isTablet ? "text-2xl" : "text-3xl"} w-full text-[#0F3443] font-[600]`}
                        >
                          {p.descriptionLines[lineIndex]}
                        </div>
                      ))}
                    </motion.div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const MobileProjectsView = () => {
  return (
    <div className="w-full min-h-screen bg-[#F8FFE5] px-4 py-6">
      <Title text="Projects" />

      <div className="mt-8 flex justify-center">
        <div className="relative">
          <Circle big="#F8FFE5" small="#34E89E" text="Projects"  />
        </div>
      </div>

      <div className="mt-12 space-y-12">
        {projects.map((project) => (
          <div key={project.id} className="rounded-lg overflow-hidden shadow-md">
            {/* Project Image Section */}
            <div
              className="h-48 w-full flex items-center justify-center"
              style={{
                backgroundColor: `hsl(${(Number.parseInt(project.number) - 1) * 30 + 0}, 80%, 80%)`,
              }}
            >
              <h2 className="text-3xl font-bold text-[#0F3443]">{project.heading}</h2>
            </div>

            {/* Project Info Section */}
            <div className="bg-white p-6">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-4xl font-bold text-[#0F3443]">{project.number}</span>
                <h3 className="text-2xl font-bold text-[#0F3443]">{project.title}</h3>
              </div>

              <div className="space-y-2">
                {project.descriptionLines.map((line, index) => (
                  <p key={index} className="text-lg text-[#0F3443]">
                    {line}
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProjectsPage
