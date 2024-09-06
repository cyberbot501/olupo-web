import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../assest/flat-design-farmers-market-logo_23-2149332945.avif'
import { CiFacebook } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";


export default function footer() {
  return (
    <div className='bg-[#013a01] flex flex-col justify-center items-center gap-10 pt-10 pb-6 px-[30px] w-[100%] overflow-hidden'>
        <div className='flex flex-col md:flex-row justify-center items-center gap-2 md:gap-10'>
            <h2 className='text-[18px] md:text-[20px] text-white font-bold font-Cinzel '>JOIN OUR NEWSLETTER</h2>
            <div className='flex flex-row w-[300] md:w-[360px] h-[36px] border-[1px] rounded-[20px] bg-white'>
                <input type="text" className='w-[200]md:w-[260px] h-[36px] bg-transparent text-[#7a7777] rounded-tl-[20px] rounded-bl-[20px]'/>
                <button className='bg-white text-[#013a01] w-[100px] h-[35px] rounded-[20px]'>Sign Up</button>
            </div>
        </div>

        <hr className='bg-white h-2 w-[80%] '/>

        <div className='grid grid-cols-2 md:grid-cols-4 gap-6  items-start md:pl-20'>

            <div className='flex flex-col gap-5'>
                <h1 className='font-Cinzel font-medium text-[16px] md:text-[20px] text-white'>ABOUT OLUPO AGRIC</h1>
                <p className='md:w-[300px] text-[#7a7777] text-[13px] md:text-[16px] font-Inter font-normal '>Felis eget nunc loborits mattis
                    aliquam facuiblus puru in
                    massa, aubic ornare viverra
                    tellus lorem sit.
                </p>
                <img src={logo} alt="" className='w-[50px] h-[50px] md:w-[70px] md:h-[70px] rounded-[35px]'/>
            </div>

            <div className='flex flex-col gap-5'>
                <h1 className='font-Cinzel font-medium text-[16px] md:text-[20px] text-white'>GET IN TOUCH</h1>
                <p className='md:w-[300px] text-[#7a7777] text-[13px] md:text-[16px] font-Inter font-normal '>Prinsengracht 250,<br/>
                    Amsterdam Nigeria
                    <br/> <br/>
                    +234 7675 8658 878
                    olupoagric@gmail.com

                </p>
                <NavLink className='w-[300px] text-[#7a7777] text-[13px] md:text-[16px] font-Inter font-normal underline'>Show Map</NavLink>
            </div>

            <div className='flex flex-col gap-5'>
                <h1 className='font-Cinzel font-medium text-[16px] md:text-[20px] text-white'>USEFUL LINKS</h1>
                <ul className='flex flex-col gap-3'>
                    <NavLink className='w-[300px] text-[#7a7777] text-[13px] md:text-[16px] font-Inter font-normal '>Home</NavLink>
                    <NavLink className='w-[300px] text-[#7a7777] text-[13px] md:text-[16px] font-Inter font-normal '>About Us</NavLink>
                    <NavLink className='w-[300px] text-[#7a7777] text-[13px] md:text-[16px] font-Inter font-normal '>Our Crops</NavLink>
                    <NavLink className='w-[300px] text-[#7a7777] text-[13px] md:text-[16px] font-Inter font-normal '>Feed Mill</NavLink>
                </ul>
            </div>

            <div className='flex flex-col gap-5'>
                <h1 className='font-Cinzel font-medium text-[16px] md:text-[20px] text-white'>FARM OPENING HOURS</h1>
                <ul className='flex flex-col gap-3'>
                    <NavLink className='w-[300px] text-[#7a7777] text-[13px] md:text-[16px] font-Inter font-normal '>Mon-Fri          09:00-20:00 hrs</NavLink>
                    <NavLink className='w-[300px] text-[#7a7777] text-[13px] md:text-[16px] font-Inter font-normal '>Saturday 09:00-20:00 hrs</NavLink>
                    <NavLink className='w-[300px] text-[#7a7777] text-[13px] md:text-[16px] font-Inter font-normal '>Sundays 09:00-20:00 hrs</NavLink>
                </ul>
            </div>
        </div>

        <hr className='bg-white h-2 w-[80%] '/>

        <div className='flex flex-row justify-center items-center gap-5'>
            <p className='font-Cinzel font-medium text-[16px] md:text-[20px] text-white'>Our Social Networks:</p>
            <div className='flex flex-row gap-4'>
                <CiFacebook className='text-white w-[20px] h-[20px]'/>
                <FaXTwitter className='text-white w-[20px] h-[20px]'/>
                <FaWhatsapp className='text-white w-[20px] h-[20px]'/>
                <FaInstagram className='text-white w-[20px] h-[20px]'/>
            </div>
        </div>
    </div>
  )
}
