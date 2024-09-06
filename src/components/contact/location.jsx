import React from 'react'
import locate from '../../assest/officemap.png'
import { NavLink } from 'react-router-dom'


export default function location() {
  return (
    <div>
         <div className='flex flex-col md:flex-row justify-center items-center px-[30px] place-items-center pt-36'>
             <h1 className='block md:hidden md:text-[60px] text-[40px] text-[#013a01] text-center md:text-left md:w-[500px] font-Neko font-bold'>OUR OFFICE</h1>
            <div className='flex flex-col-reverse md:flex-row justify-center items-center gap-10 md:gap-36  mt-10'>
                <div className='flex flex-col gap-10 items-center md:items-start'>
                    <h1 className='hidden md:block md:text-[80px] text-[40px] text-[#013a01] text-center md:text-left md:w-[300px] font-Neko font-bold'>OUR OFFICE</h1>
                    <p className='w-[300px] font-Inter text-[#7a7777] text-center md:text-left text-[18px] md:text-[20px]'>232, ogbomoso/ilorin express road, Ogbomoso, Oyo state, Nigeria.</p>
                    <p className='w-[300px] font-Inter text-[#7a7777] text-center md:text-left text-[18px] md:text-[20px]'>find us on<NavLink className='text-black underline'> Google Map</NavLink></p>
                </div>
                <img src={locate} alt="" className='md:w-[600px] w-[300px] h-[300px] md:h-[500px] rounded-[20px]  '/>
            </div>
        </div>
    </div>
  )
}
