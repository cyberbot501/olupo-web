import React from 'react'
import fot from '../../assest/istockphoto-1167064447-612x612.jpg'
import juice from '../../assest/photo-1583577612013-4fecf7bf8f13.avif'

export default function About() {
  return (
    <div className='mt-[-70px] md:mt-0 px-6 md:px-20 space-y-16'>
      
      {/* About Section */}
      <div className='flex flex-col md:flex-row justify-between items-center gap-10'>
        <hr className='hidden md:block h-[600px] w-[2px] bg-[#7a7777]' />
        
        <div className='flex flex-col-reverse md:flex-row items-center gap-8'>
          <div className='flex flex-col gap-4 text-center md:text-left'>
            <h2 className='font-Cinzel font-medium text-[#013a01] text-[16px] md:text-[18px]'>About Us</h2>
            <h1 className='font-Neko text-[#013a01] text-[20px] md:text-[30px]'>Olupo Agriculture Is Established On</h1>
            <p className='text-[16px] text-[#7a7777] font-Inter leading-7 md:max-w-[500px]'>
              To engage in business of Agricultural services, produce and processing, marketing, distribution, wholesales and retails of kinds of Cocoa, Cashew nuts and all categories of fruit product.
              <br /><br />
              Also deal in the business of chemical (Agro-allied) services, importation of Agricultural equipment, raw materials and warehouse of all Agricultural produce, agricultural farming, mechanized farming, fish farming, fish mills, poultry farming, importation of farm inputs, livestock breeders, animal husbandry and Agricultural services, farm produce and all kind of Agricultural equipment, tools, marketing, importation of Agricultural raw material, warehouse of all Agricultural produce and products in all ramifications.
            </p>
          </div>
          <img src={fot} alt="About Us" className='w-full md:w-[600px] h-[300px] md:h-[500px] object-cover rounded-[20px]' />
        </div>
      </div>

      {/* Juice Section */}
      <div className='flex flex-col md:flex-row-reverse justify-between items-center gap-10'>
        <hr className='hidden md:block h-[600px] w-[3px] bg-[#7a7777]' />
        
        <div className='flex flex-col-reverse md:flex-row-reverse items-center gap-8'>
          <p className='text-[16px] text-[#7a7777] text-center md:text-left font-Inter leading-7 md:max-w-[500px]'>
            To engage in business of factory natural juice and carry on the production and packaging and sealing of natural juice. To carry on juice purification, treatment services, food production, food processing, foodstuffs, beverages, distribution, suppliers of all kinds of food items, process of fruit juice (Orange, Cashew, Mango, Guava, Apple, Pineapple, Strawberry, Grape, Watermelon, Coconut and Ginger juice).
          </p>
          <img src={juice} alt="Juice Section" className='w-full md:w-[600px] h-[300px] md:h-[500px] object-cover rounded-[20px]' />
        </div>
      </div>

    </div>
  )
}
