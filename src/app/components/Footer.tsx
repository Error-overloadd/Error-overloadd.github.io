"use client"
import React from 'react'

const Footer = () => {
  return (
    <footer className="mb-10 px-4 text-center text-gray-500">
      <small className="mb-2 block text-xs">
        @ Derek Liu
      </small>
      <p className="text-xs">
        <span className=" font ">About this website:</span> built with
        React & Next.js (App Router & Server Actions), TypeScript, Tailwind CSS,
      React Email & Resend, Vercel hosting,  Framer Motion
      </p>
    </footer>
  )
}

export default Footer