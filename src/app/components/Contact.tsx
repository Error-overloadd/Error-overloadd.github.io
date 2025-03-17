"use client"
import React, { useState } from 'react'
import { MdAttachEmail } from "react-icons/md";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { FaMapLocationDot } from "react-icons/fa6";
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
const Contact = () => {

  const form = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e:any) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e:any) => {
    e.preventDefault();
    // Form submission logic here

    console.log(formData);
    
    if (form.current) {
      emailjs
        .sendForm('service_nfnczfa', 'template_41q8iyi', form.current, {
          publicKey: 'IM1AVtY_6aw8cemVG', // 这里需要替换为你的实际公钥
        })
        .then(
          () => {
            console.log('SUCCESS!');
            alert('Message sent successfully!');
            setFormData({ name: '', email: '', message: '' });
          },
          (error) => {
            console.log('FAILED...', error.text);
            alert('Failed to send message. Please try again.');
          },
        );
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Contact Me</h2>
          <div className="mt-2 w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">Feel free to reach out to me for any questions or opportunities. I will get back to you as soon as possible.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Contact Information</h3>
            <div className="space-y-6">
              {/* Email Contact */}
              <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-xl hover:bg-blue-50 transition-colors duration-300">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <MdAttachEmail className="text-blue-600 text-xl" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-500 uppercase tracking-wider">Email</h4>
                  <p className="text-lg font-semibold text-gray-800">liudongjie1119@gmail.com</p>
                  <p className="text-xs text-gray-500 mt-1">I will respond within 24 hours</p>
                </div>
              </div>
              
              {/* Phone Contact */}
              <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-xl hover:bg-blue-50 transition-colors duration-300">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <FaPhoneSquareAlt className="text-blue-600 text-xl" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-500 uppercase tracking-wider">Phone</h4>
                  <p className="text-lg font-semibold text-gray-800">+1 587-889-9547</p>
                  <p className="text-xs text-gray-500 mt-1">Available Mon-Fri, 9AM-5PM EST</p>
                </div>
              </div>
              
              {/* Location Contact */}
              <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-xl hover:bg-blue-50 transition-colors duration-300">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <FaMapLocationDot className="text-blue-600 text-xl" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-500 uppercase tracking-wider">Location</h4>
                  <p className="text-lg font-semibold text-gray-800">Calgary</p>
                  <p className="text-xs text-gray-500 mt-1">Open to remote opportunities</p>
                </div>
              </div>
            </div>
            
            {/* Social Media Links */}
          
          </div>
          
          <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Send Message</h3>
            <form onSubmit={handleSubmit} ref={form}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                  placeholder="Your name"
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                  placeholder="Your message here..."
                ></textarea>
              </div>
              
              <button 
              
                type="submit" 
                className="w-full px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg flex items-center justify-center"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
