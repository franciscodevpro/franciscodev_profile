'use client'

import Image from "next/image";
import { AiFillLinkedin, AiFillGithub, AiOutlineGithub } from "react-icons/ai";
import { BsChevronLeft, BsChevronRight, BsCodeSlash } from "react-icons/bs";
import { PiBracketsCurlyBold } from "react-icons/pi";
import ProfileImage from "../../public/profile.png"
import { AmazonwebservicesOriginalWordmark, BitbucketOriginal, Css3Original, GitOriginal, GitlabOriginal, Html5Original, JavascriptOriginal, JenkinsOriginal, JestPlain, NodejsOriginal, ReactOriginal, TailwindcssOriginal, TypescriptOriginal } from "devicons-react";
import React, { useState } from "react"

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const projects = [
    {
      img: <Image src="" alt="No projects currently" height={150} width={64}/>,
      title: ""
    }
  ];
  
  const showNextSlide = () => {
    const currSlide = (currentSlide < projects.length - 1)? currentSlide+1 : 0;
    setCurrentSlide(currSlide)
  }

  const showPreviousSlide = () => {
    const currSlide = currentSlide > 0? currentSlide-1 : projects.length -1;
    setCurrentSlide(currSlide)
  }

  return (
    <main className="flex flex-col items-center min-h-screen bg-gradient-to-br from-zinc-950 from-30% to-zinc-700 text-zinc-100">
      <header className="w-[100%] box-border flex flex-col gap-8 lg:gap-0 lg:flex-row justify-between items-center py-6 px-12">
        <a href="/"><strong className="text-3xl font-bold">FRANCISCO<span className="opacity-40">DEV</span></strong></a>
        <nav className="flex gap-10 font-semibold">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
        </nav>
        <ul className="flex gap-10 items-center font-semibold">
          <li><a className="flex gap-1" href="https://www.linkedin.com/in/franciscop2s/"><AiFillLinkedin size={24}/> Linkedin</a></li>
          <li><a className="flex gap-1" href="https://github.com/franciscodevpro"><AiFillGithub size={24}/> Github</a></li>
          {/* <li className="flex gap-1"><button className="flex gap-1 border-zinc-100 border-2 rounded-md px-4 py-1 text-xs"><AiOutlineMail size={18}/> Contact me</button></li> */}
        </ul>
      </header>
      <main className="flex flex-col lg:mt-48 items-center w-[100%]">
        <section className="flex max-w-[1524px] w-[100%] mx-36 lg:flex-row flex-col-reverse lg:mb-56 p-10">
          <article className="flex-1 flex flex-col gap-10 lg:items-baseline items-center">
            <p className="text-2xl font-semibold">Hello, I am</p>
            <h1 className="text-5xl lg:text-6xl text-center font-semibold text-lime-600"> &lt; Francisco <br />Dev /&gt;</h1>
            <p className="text-3xl lg:text-4xl font-semibold">Fullstack Developer</p>
            <div className="text-zinc-500 flex flex-col lg:flex-row gap-10">
              <p className="flex gap-2">
                <strong className="text-5xl">5</strong>
                <span className="text-lg leading-5 translate-y-1 uppercase">years of <br />experience</span>
              </p>
              <p className="flex gap-2">
                <strong className="text-5xl">3</strong>
                <span className="text-lg leading-5 translate-y-1 uppercase">Years Focused <br />on Backend</span>
              </p>
            </div>
          </article>
          <aside className="flex-1 flex justify-center">
            <Image src={ProfileImage} alt="Image of dev profile" className="max-h-96 max-w-96" />
          </aside>
        </section>

        <section id="about" className="flex-1 flex lg:flex-row lg:items-baseline lg:gap-0 lg:mb-56 flex-col items-center gap-10 max-w-[1524px] w-[100%] p-10">
            <article className="flex-[1] flex flex-col gap-4 w-full">
              <h2 className="text-4xl font-semibold"><span className="text-lime-600">aboutMe</span>( )</h2>
              <p className="lg:max-w-[28rem]">
              Graduated as an Analyst and Developer of Systems, I have worked in the development area since I graduated, in 2019. I really love programming and I&apos;m constantly searching for new challenges and troubles to solve. Currently, I am working for a financial cooperative system, developing new ways for them to do their work better.
              </p>
            </article>
            <aside className="flex-[1] flex flex-col gap-2 items-center pt-5">
              <div className="flex w-96 bg-zinc-700 rounded-sm py-5 px-6 justify-between items-center shadow-md shadow-zinc-900">
                <p className="flex flex-col gap-3">
                  <strong className="font-semibold text-xl">Fullstack Developer</strong>
                  <a href="#" className="text-lime-600 underline">Projects</a>
                </p>
                <BsCodeSlash size={32} className="text-lime-600" />
              </div>
              <div className="flex w-96 bg-zinc-700 rounded-sm py-5 px-6 justify-between items-center shadow-md shadow-zinc-900">
                <p className="flex flex-col gap-3">
                  <strong className="font-semibold text-xl">Backend Developer</strong>
                  <a href="#" className="text-lime-600 underline">Rest APIs</a>
                </p>
                <PiBracketsCurlyBold size={32} className="text-lime-600" />
              </div>
            </aside>
        </section>
        <section id="skills" className="flex-1 flex w-[100%] flex-col items-center gap-10 lg:mb-16 bg-zinc-950 p-10">
            <h2 className="text-4xl font-semibold max-w-[1524px] w-[100%] "><span className="text-lime-600">skills</span>( )</h2>
            <ul className="flex max-w-[1524px] w-[100%] gap-8 flex-wrap justify-center">
              <li><JavascriptOriginal size={94} /></li>
              <li><TypescriptOriginal size={94} /></li>
              <li><Html5Original size={94} /></li>
              <li><Css3Original size={94} /></li>
              <li><ReactOriginal size={94} /></li>
              <li><TailwindcssOriginal size={94} /></li>
              <li><NodejsOriginal size={94} /></li>
              <li><AmazonwebservicesOriginalWordmark size={94} /></li>
              <li><GitOriginal size={94} /></li>
              <li><JenkinsOriginal size={94} /></li>
              <li><JestPlain size={94} /></li>
              <li><GitlabOriginal size={94} /></li>
              <li><BitbucketOriginal size={94} /></li>
              <li><AiOutlineGithub size={94} /></li>
            </ul>
        </section>
        <section id="projects" className="flex-1 flex w-[100%] flex-col items-center gap-10 lg:mb-32 p-10">
            <h2 className="text-4xl font-semibold max-w-[1524px] w-[100%] "><span className="text-lime-600">projects</span>( )</h2>
            <aside className="overflow-hidden w-[100%] h-80 relative">
              <ul className={"flex gap-7 overflow-visible absolute min-w-[100%] h-auto py-4 text-nowrap transition-all duration-[1s]"} style={{ transform: `translateX(-${Math.floor((currentSlide/projects.length) * 100)}%)` }}>
                {(
                  projects.map((elm, key) => (
                    <li key={key} className={"box-border w-64 h-auto rounded-md overflow-hidden block relative border-2 hover:border-lime-600 hover:px-1 hover:cursor-pointer transition-all "}>
                      <aside>{elm.img}</aside>
                      <article className="-translate-y-10 p-2 bg-zinc-700/40 absolute w-[100%]">{elm.title}</article>
                    </li>
                  ))
                )}
              </ul>
              <div className="absolute bottom-0 flex justify-center w-screen gap-8">
                <button type="button" className="p-2 rounded-full bg-zinc-700/50 hover:bg-zinc-700" onClick={showPreviousSlide}>
                  <BsChevronLeft />
                </button>
                <button type="button" className="p-2 rounded-full bg-zinc-700/50 hover:bg-zinc-700" onClick={showNextSlide}>
                  <BsChevronRight />
                </button>
              </div>
            </aside>
        </section>
        <section className="flex-1 flex w-[100%] flex-col items-center gap-10 bg-zinc-950 p-10">
            <h2 className="text-4xl font-semibold max-w-[1524px] w-[100%] "><span className="text-lime-600">professional</span>( )</h2>
            <ul className="flex flex-col max-w-[1524px] w-[100%] gap-0">
              <li className="flex flex-row justify-between flex-nowrap gap-8 lg:gap-32 w-full">
                <div className="lg:flex-1 w-1 flex-[0]"></div>
                <span className="w-1 bg-lime-500 relative">
                  <i className="absolute w-6 h-6 rounded-full border-lime-500 bg-zinc-950 border-2 -translate-x-[40%] top-6"></i>
                </span>
                <article className="flex-1 flex flex-col justify-center items-center gap-3 py-8">
                  <h3 className="text-2xl font-semibold text-lime-600">2016 - Analyse and Development of Systems </h3>
                  <p className="max-w-[500px]">
                  I was a student at IFPI, in the course of Analyse and Development of Systems. There, I learned about programming, and I did some projects using technologies that helped me to understand the programming world.
                  </p>
                  <a href="https://www.ifpi.edu.br/" className="px-8 py-2 border-2 rounded-lg">Go to website</a>
                </article>
              </li>
              <li className="flex flex-row justify-between flex-nowrap lg:flex-row-reverse gap-8 lg:gap-32 w-full">
                <div className="lg:flex-1 w-1 flex-[0]"></div>
                <span className="w-1 bg-lime-500 relative">
                  <i className="absolute w-6 h-6 rounded-full border-lime-500 bg-zinc-950 border-2 -translate-x-[40%] top-6"></i>
                </span>
                <article className="flex-1 flex flex-col justify-center items-center gap-3 py-8">
                  <h3 className="text-2xl font-semibold text-lime-600">2019 - Veloso&apos;s enterprise</h3>
                  <p className="max-w-[500px]">
                  As soon as I graduated, I started working in the IT area, for Veloso&apos;s enterprise. There I worked on developing and implementing up a system that helps the enterprise director. It generates some reports for important decisions and strategies to take.
                  </p>
                  <a href="https://velosoeletromoveis.com.br/" className="px-8 py-2 border-2 rounded-lg">Go to website</a>
                </article>
              </li>
              <li className="flex flex-row justify-between flex-nowrap gap-8 lg:gap-32 w-full">
                <div className="lg:flex-1 w-1 flex-[0]"></div>
                <span className="w-1 bg-lime-500 relative">
                  <i className="absolute w-6 h-6 rounded-full border-lime-500 bg-zinc-950 border-2 -translate-x-[40%] top-6"></i>
                </span>
                <article className="flex-1 flex flex-col justify-center items-center gap-3 py-8">
                  <h3 className="text-2xl font-semibold text-lime-600">2021 - ACT (working for Sodexo)</h3>
                  <p className="max-w-[500px]">
                  Once I felt my work was done in my first job, I decided to search for new challenges and I started working for ACT outsourced in Sodexo company, where I could work on a project for expansion of a big system, to more countries than it supported.
                  </p>
                  <a href="https://actdigital.com/" className="px-8 py-2 border-2 rounded-lg">Go to website</a>
                </article>
              </li>
              <li className="flex flex-row justify-between flex-nowrap lg:flex-row-reverse gap-8 lg:gap-32 w-full">
                <div className="lg:flex-1 w-1 flex-[0]"></div>
                <span className="w-1 bg-lime-500 relative">
                  <i className="absolute w-6 h-6 rounded-full border-lime-500 bg-zinc-950 border-2 -translate-x-[40%] top-6"></i>
                </span>
                <article className="flex-1 flex flex-col justify-center items-center gap-3 py-8">
                  <h3 className="text-2xl font-semibold text-lime-600">2022 - ACT (working for Sicoob)</h3>
                  <p className="max-w-[500px]">
                  After finishing Sodexo&apos;s project, I was relocated to work for Sicoob, where I am currently working. Here I can develop some new ways for the cooperatives to work, so they can securely make financial transactions.
                  </p>
                  <a href="https://actdigital.com/" className="px-8 py-2 border-2 rounded-lg">Go to website</a>
                </article>
              </li>
            </ul>
        </section>
      </main>  
    </main>
  );
}
