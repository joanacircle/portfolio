"use client" // this is a client component
import React from "react"
import Image from "next/image"
import { Link } from "react-scroll/modules"
import { HiArrowDown } from "react-icons/hi"

const HeroSection = () => {
  return (
    <section id="home">
      <div className="flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 my-10 py-16 sm:py-32 md:py-48 md:flex-row md:space-x-4 md:text-left">
        <div className="md:w-1/2 md:mt-2">
          <Image className="rounded-full shadow-2xl" src="/headshot.jpg" alt="" width={300} height={300}></Image>
        </div>
        <div className="md:mt-2 md:w-3/5">
          <h1 className="font-bold text-4xl mt-6 md:text-7xl md:mt-0">Hi, I&#39;m Joana!</h1>
          <p className="text-lg mt-4 mb-6 md:text-2xl">
          I am a {" "}
          <span className="font-semibold text-teal-600">
            frontend developer{" "}
          </span>
           with proficiency in HTML, CSS, and JavaScript. I have hands-on experience using the React framework and have a solid understanding of Node.js for back-end development.

          Driven by my expertise in web development and my passion for creating intuitive and engaging applications, I bring a unique perspective to every project I undertake.
          </p>
          <Link
            to="projects"
            className="text-neutral-100 font-semibold px-6 py-3 bg-teal-600 rounded shadow hover:bg-teal-700"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            Projects
          </Link>
        </div>
      </div>

      <div className="flex flex-row justify-center">
        <Link
        to="about"
        activeClass="active"
        spy={true}
        smooth={true}
        offset={-100}
        duration={500}
        >
          <HiArrowDown size={35} className="animate-bounce"/>
        </Link>
      </div>
    </section>
  )
}

export default HeroSection
