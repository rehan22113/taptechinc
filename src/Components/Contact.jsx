import React from 'react'
import { useMediaQuery} from 'use-media-size'
import {Link} from 'react-router-dom'

const Contact = () => {
  const isMobile = useMediaQuery('(max-width:680px)')

  return (
    <>
       <section className="text-gray-600 relative flex items-center justify-center">
       <div className='w-2/3'>
  <div className="text-center py-12 ">

  <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">Contact Us</h1>
      <div className="flex mt-6 justify-center">
        <div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex" />
      </div>
    </div>
  <div className="container px-5 py-16 mx-auto flex sm:flex-nowrap flex-wrap">
    {!isMobile?(<div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
      <iframe className="absolute inset-0" style={{filter: 'grayscale(1) contrast(1.2) opacity(0.4)'}} title="map" marginHeight={0} marginWidth={0} scrolling="no" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3319.005538311843!2d73.08546609999999!3d33.708805600000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbf8a12e19c3b%3A0x984e241594ec7809!2sStreet%20105%2C%20Islamabad%2C%20Islamabad%20Capital%20Territory!5e0!3m2!1sen!2s!4v1656432923546!5m2!1sen!2s" width="100%" height="100%" frameBorder={0} />
      <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
        <div className="lg:w-1/2 px-6">
          <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">Office address : </h2>
          <p className="mt-1">Street-105, G6-1/4, Islamabad</p>
        </div>
        <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
          <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">EMAIL</h2>
          <Link to="mailto:admin@taptechinc.com" className="text-indigo-500 leading-relaxed">admin@taptechinc.com</Link>
          <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">PHONE</h2>
          <p className="leading-relaxed">123-456-7890</p>
        </div>
      </div>
    </div>):""}
    
    <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
      <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Feedback</h2>
      <p className="leading-relaxed mb-5 text-gray-600">Post-ironic portland shabby chic echo park, banjo fashion axe</p>
      <div className="relative mb-4">
        <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name*</label>
        <input type="text" id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
      </div>
      <div className="relative mb-4">
        <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email*</label>
        <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
      </div>
      <div className="relative mb-4">
        <label htmlFor="email" className="leading-7 text-sm text-gray-600">What is your Question About*</label>
        <select className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
          <option value="empty">Select one</option>
          <option value="Place a new order (SALES)">Place a new order (SALES)</option>
          <option value="">Place a new order (SALES)</option>
          <option value="About my exiting order (Support)">About my exiting order (Support)</option>
          <option value="I need help with my card (support)">I need help with my card (support)</option>
          <option value="other">other</option>
        </select>
        
      </div>
      <div className="relative mb-4">
        <label htmlFor="message" className="leading-7 text-sm text-gray-600">How can we help?</label>
        <textarea id="message" name="message" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" defaultValue={""} />
      </div>
      <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">SUBMIT</button>
      <p className="text-xs text-gray-500 mt-3">Chicharrones blog helvetica normcore iceland tousled brook viral artisan.</p>
    </div>
  </div>
  </div>
</section>

    </>
  )
}

export default Contact