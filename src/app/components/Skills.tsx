"use client"
import React from 'react'

const frontendSkills = [
  { name: "HTML & CSS", percentage: 90 },
  { name: "JavaScript", percentage: 85 },
  { name: "React", percentage: 80 },
  { name: "Next.js", percentage: 75 },
  { name: "Tailwind CSS", percentage: 85 },
  { name: "UI/UX Design", percentage: 70 }
];

const backendSkills = [
  { name: "Node.js", percentage: 85 },
  { name: "Express", percentage: 80 },
  { name: "Python", percentage: 75 },
  { name: "MongoDB", percentage: 78 },
  { name: "SQL", percentage: 82 },
  { name: "AWS", percentage: 70 }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">My Skills</h2>
          <div className="mt-2 w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10">
          <div className="bg-gray-50 rounded-3xl p-8 shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Frontend Skills</h3>
            <div className="space-y-6">
              {frontendSkills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-gray-900">{skill.name}</span>
                    <span className="text-gray-600">{skill.percentage}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div 
                      className="bg-blue-600 h-2.5 rounded-full" 
                      style={{ width: `${skill.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-gray-50 rounded-3xl p-8 shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Backend Skills</h3>
            <div className="space-y-6">
              {backendSkills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-gray-900">{skill.name}</span>
                    <span className="text-gray-600">{skill.percentage}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div 
                      className="bg-green-600 h-2.5 rounded-full" 
                      style={{ width: `${skill.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="bg-gray-50 rounded-3xl p-8 shadow-lg">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6">Other Abilities</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white p-6 rounded-2xl shadow-md text-center">
              <div className="text-blue-600 text-4xl mb-2">🎨</div>
              <h4 className="font-medium text-gray-900">Design Thinking</h4>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-md text-center">
              <div className="text-blue-600 text-4xl mb-2">🚀</div>
              <h4 className="font-medium text-gray-900">Fast Learner</h4>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-md text-center">
              <div className="text-blue-600 text-4xl mb-2">👥</div>
              <h4 className="font-medium text-gray-900">Team Collaboration</h4>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-md text-center">
              <div className="text-blue-600 text-4xl mb-2">💡</div>
              <h4 className="font-medium text-gray-900">Problem Solving</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills