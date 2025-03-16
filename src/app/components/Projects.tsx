"use client"
import React from 'react'
import Image from 'next/image'
import callmentor from "/public/images/callmentor.png" 
import rrsp from "/public/images/rrsp.png"
import education from "/public/images/education.png"
const projects = [
  {
    id: 1,
    title: "Callmentor",
    description: "CallMentor is a mentorship platform connecting industry professionals with students and junior developers, helping them book mock interviews and resume review sessions with online payment",
    image: callmentor,
    tags: ["React", "Next.js", "Tailwind CSS"],
    link: "/https://call-mentor.com/"
  },
  {
    id: 2,
    title: "RRSP Comparison Platform ",
    description: "Developed a React.js application using Next.js with a Node.js and MongoDB backend, enabling automate tax savings calculations for RRSP vs. non-RRSP scenarios",
    image: rrsp,
    tags: ["React", "Firebase", "Styled Components"],
    link: "#"
  },
  {
    id: 3,
    title: "Education Management Platform",
    description: "Developed an online education platform allowing students to access courses, watch lectures, complete assignments nd earn certificates.",
    image: education,
    tags: ["Next.js", "SequlizeORM", "Tailwind CSS", "Nest.js"],
    link: "#"
  }

];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Experiences</h2>
          <div className="mt-2 w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-48">
                <Image 
                  src={project.image} 
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <a 
                  href={project.link} 
                  className="inline-block px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-full hover:bg-blue-700 transition-colors"
                >
                 Link
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects