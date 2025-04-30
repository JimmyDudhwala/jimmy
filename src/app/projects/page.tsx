"use client"

import { useRef, useState } from "react"
import Title from "../components/Title"
import { useScroll, useTransform, motion, AnimatePresence } from "framer-motion"
import Circle from "../components/Circle"
import { useDeviceType } from "../hook/use-device-type"
import ProjectContainer from "../components/ProjectContainer"
import Quote from "../components/Quote"
import Footer from "../components/Footer"
import Image from "next/image"
import Link from "next/link"
import Loading from "../components/Loding"

const projects = [
  {
    id: 1,
    number: "1",
    Link:"https://jimmydudhwala.github.io/BookMyShow/",
    src:"/BMSproject.jpg",
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
  Link:"https://jimmyportfolio.vercel.app/",
  title: "ProTemplate",
  src: "/Portfolio.jpg",
  heading: "Project3",
  descriptionLines: [
    "Built a clean and modern portfolio template.",
    "Showcase projects, skills, and experience effortlessly.",
    "Responsive design for all screen sizes.",
    "Customizable sections for personal branding.",
    "Easy-to-use layout with smooth animations."
  ]
},
{
  id: 3,
  number: "3",
  src: "/Shopping.jpg",
  title: "ShopCart",
  Link:"https://jimmydudhwala.github.io/shoppingCart/",
  heading: "Project4",
  descriptionLines: [
    "eCommerce app with Redux Toolkit.",
    "Real-time cart updates.",
    "Secure checkout integration.",
    "Dynamic cart functionality.",
    "Responsive with React.js and Tailwind."
  ]
},
  {
  id: 4,
  number: "4",
  src: "/Bloodbank.jpg",
  Link:"https://github.com/JimmyDudhwala/redpluse",
  title: "RED +",
  heading: "Project2",
  descriptionLines: [
    "Built a blood donation platform.",
    "Find nearby blood banks & Events easily.",
    "BloodBank Dashboard with blood stocks updates",
    "from Event Management to Donor Registration.",
    "Made with Nextjs and Mongo.",
  ],
},
]

  const MoreProject = [
    {id:"1",Link:"https://jimmydudhwala.github.io/ExpenseTracker/", title: "Expense Tracker ",src: "/MoreProjects/ExpenseTrack.jpg"},
    {id:"2",Link:"https://tastezy-services.vercel.app/", title: "SAAS template",src: "/MoreProjects/Saas.png"},
    {id:"3",Link:"https://codepen.io/JimmyDudhwala/pen/mdgXNxr", title: "Music Palyer",src: "/MoreProjects/Music.jpg"},
    {id:"4",Link:"https://codepen.io/JimmyDudhwala/pen/xxepVOd", title: "Guess the Number",src: "/MoreProjects/Guess.png"},
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

  const y1 = useTransform(scrollYProgress, [0.15, 0.33], ["0%", "-100%"])
  const y2 = useTransform(scrollYProgress, [0.33, 0.66], ["0%", "-200%"])
  const y3 = useTransform(scrollYProgress, [0.66, 0.99], ["0%", "-300%"])

  const h1 = useTransform(
    scrollYProgress,
    [0.0, 0.25, 0.33, 0.63, 0.66, 0.98, 0.99],
    ["0%", "0%", "-25%", "-25%", "-52%", "-52%", "-80%"],
  )

  const circleProgress = useTransform(scrollYProgress, [0, 1], [0, 1])

  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className={`relative h-full ${isLoading ? 'overflow-hidden h-screen' : ''}`}>
       {/* <Loading /> */}
        {isLoading && <Loading onFinish={() => setIsLoading(false)} />}
      <Title text="Projects" />
      <div ref={scrollContainerRef} className="relative w-full h-[400vh] bg-[#F8FFE5]">
        <div className="w-full sticky top-0 h-screen flex items-start justify-center overflow-hidden">
          <div className="flex w-full h-[100vh] items-center justify-center">
            <motion.div className={`relative border-black w-1/2 h-full`}>
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  className="w-full absolute  min-h-[100vh]  flex items-center justify-center"
                  style={{
                    top: `${index * 100}%`,
                    y: index === 1 ? y1 : index === 2 ? y2 : index === 3 ? y3 : undefined,
                    backgroundColor: `hsl(${index * 30}, 80%, 80%)`,
                  }}
                > 
                <Link href={project.Link} className="min-w-[90vh] min-h-[80vh] p-10 ">
                  <Image src={project.src} fill alt="project image" className="cursor-[url('/ProjectCurser.svg'), auto]" />
                </Link>
                </motion.div>
              ))}
            </motion.div>
            <div className={`absolute ${isTablet ? "top-[30%] left-[42%]" : "top-[35%] left-[45%]"}`}>
              <div className={`absolute ${isTablet ? "top-[12%] -left-[8%] opacity-0" : "top-[14%] -left-[5%]"}`}>
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
                <div className="w-full lg:h-[25%] md:h-[18%] overflow-hidden">
                  <motion.div className="w-full h-fit" style={{ y: h1 }}>
                    {projects.map((p) => (
                      <h1
                        key={p.id}
                        className={`text-6xl text-[#0F3443] font-[600] bg-[#F8FFE5]`}
                      >
                        {p.number}
                      </h1>
                    ))}
                  </motion.div>
                </div>
                <div className="w-full lg:h-[50%] md:h-[25%] flex justify-start overflow-hidden">
                  <motion.div className="w-full h-fit flex flex-col gap-10" style={{ y: h1 }}>
                    {projects.map((p) => (
                      <h1 key={p.id} className={`${isTablet ? "text-6xl" : "text-8xl"} whitespace-nowrap text-[#0F3443] font-[600]`}>
                        {p.title}
                      </h1>
                    ))}
                  </motion.div>
                </div>
              </div>

              <div className="w-full h-[50%] flex flex-col justify-end pb-4 items-center">
                {[0, 1, 2, 3, 4].map((lineIndex) => (
                  <div key={lineIndex} className="w-full lg:h-[10%] md:h-[5%] flex justify-start overflow-hidden">
                    <motion.div className="w-full h-fit flex flex-col" style={{ y: h1 }}>
                      {projects.map((p) => (
                        <div
                          key={p.id}
                          className={`whitespace-nowrap ${isTablet ? "text-xl" : "text-3xl"} w-full text-[#0F3443] font-[600]`}
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
      <div className="w-full min-h-[110vh] pt-30 bg-[#F8FFE5] flex flex-col items-center justify-start">
        <div className="w-[70%] h-full grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Title */}
          <div className="col-span-1 md:col-span-2 text-4xl font-extrabold text-[#0F3443] w-full mb-8">
            <Quote quote="More Projects . . ." highlights={["More Projects"]} />
          </div>

          {/* Projects with View More/Less functionality */}
          <DesktopMoreProjectsSection />
        </div>
      </div>
      <Footer />
    </div>
  )
}

const MobileProjectsView = () => {
  const [showAllProjects, setShowAllProjects] = useState(false)
  const initialProjectCount = 3
  const displayedProjects = showAllProjects ? projects : projects.slice(0, initialProjectCount)

  return (
    <>
      <div className="w-full min-h-screen bg-[#F8FFE5]">
        <Title text="Projects" />

        <div className="mt-8 flex justify-center">
          <div className="relative">
            <Circle big="#F8FFE5" small="#34E89E" text="Projects" />
          </div>
        </div>

        <div className="mt-12 space-y-12">
          <AnimatePresence initial={false}>
            {displayedProjects.map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="rounded-lg overflow-hidden shadow-md"
              >
                <Link href={project.Link}>
                {/* Project Image Section */}
                <div
                  className="h-48 w-full flex items-center justify-center bg-center bg-cover"
                  style={{ backgroundImage: `url(${project.src})` }}
                >
                  <div
                    className="text-3xl font-bold text-[#0F3443]"
                  
                  >
                  </div>
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
            </Link>
              </motion.div>
            ))}
          </AnimatePresence>

          {/* View More/Less Button */}
          <div className="flex justify-center mt-8">
            <motion.button
              onClick={() => setShowAllProjects(!showAllProjects)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-[#34E89E] text-[#0F3443] rounded-lg font-bold hover:bg-opacity-80 transition-all"
            >
              {showAllProjects ? "View Less" : "View More"}
            </motion.button>
          </div>

          {/* More Projects Section */}
          <div className="mt-16">
            <div className="text-3xl font-extrabold text-[#0F3443] w-full mb-8">
              <Quote quote="More Projects . . ." highlights={["More Projects"]} />
            </div>

            <div className="grid grid-cols-1 gap-5">
              {/* Add useState for more projects section */}
              <MoreProjectsSection />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full">
        <Footer />
      </div>
    </>
  )
}

const MoreProjectsSection = () => {
  const [showAllMoreProjects, setShowAllMoreProjects] = useState(false)
  const initialMoreProjectsCount = 2

  return (
    <>
      {/* Display initial or all ProjectContainers based on state */}
      <AnimatePresence initial={false}>
        {(showAllMoreProjects ? MoreProject : MoreProject.slice(0, initialMoreProjectsCount)).map(({ id, title, src,Link }, index: number) => (
          <motion.div
            key={id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <ProjectContainer link={Link} src={src} title={title} />
          </motion.div>
        ))}
      </AnimatePresence>

      {/* View More/Less Button for More Projects section */}
      <div className="flex justify-center m-8">
        <motion.button
          onClick={() => setShowAllMoreProjects(!showAllMoreProjects)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-3 bg-[#34E89E] text-[#0F3443] rounded-lg font-bold hover:bg-opacity-80 transition-all"
        >
          {showAllMoreProjects ? "View Less" : "View More"}
        </motion.button>
      </div>
    </>
  )
}

const DesktopMoreProjectsSection = () => {
  const [showAllMoreProjects, setShowAllMoreProjects] = useState(false)
   const initialMoreProjectsCount = 2
   
  return (
    <>
      {/* Display initial or all ProjectContainers based on state */}
      <AnimatePresence initial={false}>
          {(showAllMoreProjects ? MoreProject : MoreProject.slice(0, initialMoreProjectsCount)).map(({ id, title, src, Link }, index: number) => (
       <motion.div
            key={id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
          >
            <ProjectContainer link={Link} src={src} title={title} />
          </motion.div>
        ))}
      </AnimatePresence>

      {/* View More/Less Button for More Projects section */}
      <div className="col-span-1 md:col-span-2 flex justify-center m-8">
        <motion.button
          onClick={() => setShowAllMoreProjects(!showAllMoreProjects)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-3 bg-[#34E89E] text-[#0F3443] rounded-lg font-bold hover:bg-opacity-80 transition-all"
        >
          {showAllMoreProjects ? "View Less" : "View More"}
        </motion.button>
      </div>
    </>
  )
}

export default ProjectsPage
