import React from "react"
import Image from "next/image"
import Link from "next/link"
import SlideUp from "./SlideUp"
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs"

const projects = [
  {
    name: "Circular Journeys Website",
    description:
      "Circular Journeys Website https://github.com/joanacircle/circular-journeys-frontend",
    image: "/circular-journeys-blog.png",
    github: "https://github.com/joanacircle/circular-journeys-frontend",
    link: "https://github.com/joanacircle/circular-journeys-frontend",
  },
  {
    name: "Online Shop",
    description: "Online Shop https://github.com/joanacircle/online-shop",
    image: "/online-shop.png",
    github: "https://github.com/joanacircle/online-shop",
    link: "https://github.com/joanacircle/online-shop",
  },
]

const ProjectsSection = () => {
  return (
    <section id="projects">
      <h1 className="text-center font-bold text-4xl">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col spcae-y-28">
        {projects.map((v,i) => 
        <div key={v.name}>
          <SlideUp offset="-300px 0px -300px 0px">
            <div className="flex flex-col animate-slideUpCubiBzier animation-delay-2 md:flex-row md:space-x-12">
              <div className="mt-8 md:w-1/2">
                <Link href={v.github} target="_blank">
                  <Image
                    src={v.image}
                    alt=""
                    width={1000}
                    height={1000}
                    className="rounded-xl shadow-xl hover:opacity-70"
                  />
                </Link>
              </div>
              <div className="mt-12 md:w-1/2">
                <h1 className="text-4xl font-bold mb-6">{v.name}</h1>
                <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">{v.description}</p>
                <div>
                  <Link href={v.github} target="_blank">
                    <BsGithub
                      size={30}
                      className="inline-block hover:-translate-y-1 transition-transform cursor-pointer"
                    />
                  </Link>
                  <Link href={v.link}></Link>
                </div>
              </div>
            </div>
          </SlideUp>
        </div>)}
      </div>
    </section>
  )
}

export default ProjectsSection
