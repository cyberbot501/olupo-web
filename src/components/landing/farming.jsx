import React from 'react'
import calendar from '../../assest/cal.png'

export default function farming() {
  return (
    <div>
           <div className='flex flex-col md:flex-row justify-between items-center px-[30px] place-items-center mt-20'>
             <hr className='h-[600px] w-[2px] bg-[#7a7777] hidden md:block'/>
             <h1 className='block md:hidden font-Neko text-[#013a01] text-center md:text-left text-[20px] md:text-[30px]'>Framing Calendar</h1>
            <div className='flex flex-col-reverse md:flex-row justify-center items-center gap-10 md:gap-32  mt-10'>
                <div className='flex flex-col gap-10 items-center md:items-start'>
                    <h1 className='hidden md:block font-Neko text-[#013a01] text-center md:text-left text-[20px] md:text-[30px]'>Framing Calendar</h1>
                    <p className='md:text-[60px] text-[40px] text-[#7a7777] text-center md:text-left md:w-[500px] font-Inter font-bold'>Know The Best Time To Plant Your Crops.</p>
                    <button className='w-[200px] h-[48px] bg-[#013a01] text-white rounded-[20px]'>Learn More</button>
                </div>
                <img src={calendar} alt="" className='md:w-[600px] w-[300px] h-[300px] md:h-[500px] rounded-[20px]  '/>
            </div>
        </div>
    </div>
  )
}
