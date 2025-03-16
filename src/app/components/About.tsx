"use client"
import React from 'react'

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">About me</h2>
          <div className="mt-2 w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>
        
        <div className="bg-gray-50 rounded-3xl p-8 md:p-12 shadow-lg backdrop-blur-sm bg-opacity-80">
          <div className="grid grid-cols-1 md:grid-cols-1 gap-10">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">My stroy</h3>
              <p className="text-gray-600 leading-relaxed">
                I am someone who thrives on staying active, whether it is through my passion for fitness or my love for badminton. 
              </p>
              <p className="text-gray-600 leading-relaxed mt-1">
              These activities keep me energized and focused, which I channel into my enthusiasm for coding. Writing code has always been an exciting challenge for me—it's a space where I can continuously learn and grow, while solving complex problems. Whether working on full-stack development projects or exploring new technologies, I enjoy every moment of the coding process and love bringing creative ideas to life through my technical skills.
              </p>
            </div>
            
            {/* <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Information</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <span className="w-24 font-medium text-gray-900">Name:</span>
                  <span className="text-gray-600">Derek</span>
                </li>
                <li className="flex items-center">
                  <span className="w-24 font-medium text-gray-900">Gmail:</span>
                  <span className="text-gray-600">Liudongjie1119@gmail.com</span>
                </li>
                <li className="flex items-center">
                  <span className="w-24 font-medium text-gray-900">City:</span>
                  <span className="text-gray-600">Calgary, Canada</span>
                </li>
                <li className="flex items-center">
                  <span className="w-24 font-medium text-gray-900">Education:</span>
                  <span className="text-gray-600">Bachelor of Computer Science</span>
               
                </li>
              </ul>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About