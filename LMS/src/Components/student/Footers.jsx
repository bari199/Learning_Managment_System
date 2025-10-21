import React from 'react'
import { assets } from '../../assets/assets'

const Footers = () => {
  return (
    <footer className="bg-gray-900 text-left w-full mt-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 px-6 md:px-10 py-6 border-b border-white/30">
        
        {/* First col - Left section */}
        <div className="flex flex-col items-start">
          <img src={assets.logo_dark} alt="logo" className="w-28" />
          <p className="mt-3 text-left text-sm text-white/80">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, doloribus.
          </p>
        </div>

        {/* Second col - Middle section */}
        <div className="flex flex-col items-start">
          <h2 className="font-semibold text-white mb-3">Company</h2>
          <ul className="space-y-2 text-sm text-white/80">
            <li><a href="#">Home</a></li>
            <li><a href="#">About us</a></li>
            <li><a href="#">Contact us</a></li>
            <li><a href="#">Privacy and policy</a></li>
          </ul>
        </div>

        {/* Third col - Right section */}
        <div className="flex flex-col items-start">
          <h2 className="font-semibold text-white mb-3">
            Subscribe to our newsletter
          </h2>
          <p className="text-sm text-white/80">
            The latest news, articles, and resources, sent to your inbox weekly.
          </p>
          <div className='flex items-center gap-2 pt-4'>
            <input type="email" placeholder='Enter your email' className='border border-gray-500/30 bg-gray-800 text-gray-500
            placeholder-gray-500 outline-none w-64 h-9 rounded px-2 text-sm' />
            <button className='bg-blue-600
             w-24 h-9 text-white rounded' >Subscribe</button>
          </div>
        </div>

      </div>

      <p className="py-3 text-center text-xs md:text-sm text-white/60">
        Copyright 2025 © GreatStack. All Rights Reserved.
      </p>
    </footer>
  )
}

export default Footers
