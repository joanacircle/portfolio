import React from "react"
import Image from "next/image"

const skills = [
  {skill: "React"},
  {skill: "JavaScript"},
  {skill: "TypeScript"},
  {skill: "HTML"},
  {skill: "CSS"},
  {skill: "SCSS"},
  {skill: "Tailwind"},
  {skill: "Node.js"},
  {skill: "PHP"},
  {skill: "MySQL"},
  {skill: "Git"},
  {skill: "GitHub"},
]

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:flex-row md:text-left md:p-4 md:space-y-0 md:space-x-10">
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-6">My Skills</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
                {skills.map((v,i) => 
                <p key={i} className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold">
                  {v.skill}
                </p>)}
              </div>
          </div>

          <div className="md:w-1/2">
            <Image 
              className="hidden md:block md:relative md:bottom-4 md:left-32 md:z-0"
              src="/hero-image.png" 
              alt="" 
              width={325} 
              height={325} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
