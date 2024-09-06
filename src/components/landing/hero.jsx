import React from 'react'
import  heropic from '../../assest/livestock-collage-photo-farm-animals-breeding-farm-animals-pig-cow-goat-horse-duck-55054647.webp'

export default function hero() {
  return (
    <div>
        <img src={heropic} alt="" className='w-[100%] h-[70vh] brightness-75 relative top-[100px]'/>
        <div className='px-[30px] md:px-[0px] z-10 relative bottom-[250px] md:bottom-[230px] flex flex-col text-center items-center md:pr-[700px] '>
            <p className='text-center md:text-left text-[18px] md:text-[23px] font-Cinzel font-bold text-white'>"Family farming in Nigeria for Six Generations"</p>
            <h1 className='md:text-left text-center text-[40px] md:text-[58px] font-Neko text-white md:w-[600px]'>OLUPO AGRICULTURAL PRODUCT NIGERIA LIMITED</h1>
        </div>
    </div>
  )
}
