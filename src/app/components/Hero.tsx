"use client"
import React from 'react'
import Image from 'next/image'
import derekphoto from "/public/images/derek.png" // 修改图片导入路径
import { GrLinkedin } from "react-icons/gr";

const Hero = () => {
  const handleDownloadCV = () => {
    // 创建一个隐藏的 a 标签
    const link = document.createElement('a');
    link.href = '/DerekLiu.pdf';
    link.download = 'DerekLiu.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-100 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 tracking-tight">
              <span className="block">Hello, </span>
              <span className="block text-blue-600 mt-2">Derek</span>
            </h1>
            <p className="mt-6 text-xl text-gray-600 max-w-3xl">
              Full stack developer && Software development engineer
            </p>
            <div className="mt-10 flex space-x-4">
              <a href='https://www.linkedin.com/in/dongjie-liu/' className="px-8 py-3 rounded-full bg-white text-gray-900 font-medium border border-gray-200 hover:bg-gray-50 transition-colors shadow-md hover:shadow-lg">
                Linkedin
              </a>
              {/* <a 
                  href="/DerekLiu.pdf"
                  download="DerekLiu.pdf"
                  className="px-8 py-3 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl cursor-pointer text-center"
                >Download resume
                </a> */}
            <button
              onClick={() => window.open('/DerekLiu.pdf', '_blank')}
              className="px-8 py-3 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
            >
              View resume
            </button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 bg-blue-100 rounded-full blur-3xl opacity-30"></div>
              <Image 
                src={derekphoto}
                alt="Derek's profile" 
                width={320} 
                height={320}
                className="relative z-10 rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero