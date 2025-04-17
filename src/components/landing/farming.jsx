import React from 'react'
import calendar from '../../assest/cal.png'

export default function Farming() {
  return (
    <div className="mt-10 px-6 md:px-20">
      <div className="flex flex-col md:flex-row justify-between items-center gap-10">
        
        {/* Vertical line on large screens */}
        <hr className="hidden md:block h-[500px] w-[2px] bg-[#7a7777]" />

        <div className="flex flex-col-reverse md:flex-row justify-center items-center gap-10">
          
          {/* Text section */}
          <div className="flex flex-col items-center md:items-start gap-6 text-center md:text-left">
            {/* Mobile title */}
            <h1 className="block md:hidden font-Neko text-[#013a01] text-[24px]">Farming Calendar</h1>
            {/* Desktop title */}
            <h1 className="hidden md:block font-Neko text-[#013a01] text-[30px]">Farming Calendar</h1>

            <p className="text-[28px] md:text-[48px] font-Inter font-bold text-[#7a7777] leading-tight max-w-[500px]">
              Know The Best Time To Plant Your Crops.
            </p>
            <button className="w-[180px] h-[48px] bg-[#013a01] text-white rounded-[20px] text-[16px]">
              Learn More
            </button>
          </div>

          {/* Image */}
          <img
            src={calendar}
            alt="Farming calendar"
            className="w-full md:w-[600px] h-[300px] md:h-[500px] object-cover rounded-[20px]"
          />
        </div>
      </div>
    </div>
  )
}
