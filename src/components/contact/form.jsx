import React from 'react'

export default function form() {
  return (
    <div className='flex flex-col md:flex-row justify-center items-center gap-20 px-[30px] py-20'>
             <div className='flex flex-col-reverse md:flex-row justify-center items-center gap-10 md:gap-36  mt-10'>
                <div className='flex flex-col gap-10 items-center md:items-start'>
                    <h1 className=' md:text-[80px] text-[40px] text-[#013a01] text-center md:text-left md:w-[300px] font-Neko font-bold'>Contact Us</h1>
                    <p className='w-[300px] font-Inter text-[#7a7777] text-center md:text-left text-[18px] md:text-[20px]'>Please feel free to contact us using this form</p>
                   
                </div>
            </div>

        <form className=' flex flex-col gap-8  '>
         <div className='flex flex-col md:flex-row gap-10'>
         <div className='flex flex-col gap-2'>
            <label className='text-sm'>FirstName</label>
            <input type='text' className='w-[300px] px-4 py-2 rounded-md border-2 border-gray-300 focus:outline-none focus:border-primary-500' />
          </div>

          <div className='flex flex-col gap-2'>
            <label className='text-sm'>LastName</label>
            <input type='text' className='w-[300px] px-4 py-2 rounded-md border-2 border-gray-300 focus:outline-none focus:border-primary-500' />
          </div>
         </div>
          <div className='flex flex-col gap-2'>
            <label className='text-sm'>Email</label>
            <input type='email' className='w-[300px] md:w-[630px] px-4 py-2 rounded-md border-2 border-gray-300 focus:outline-none focus:border-primary-500' />
          </div>

          <div className='flex flex-col gap-2'>
            <label className='text-sm'>Subject</label>
            <input type='email' className='w-[300px] md:w-[630px] px-4 py-2 rounded-md border-2 border-gray-300 focus:outline-none focus:border-primary-500' />
          </div>
          <div className='flex flex-col gap-2'>
          <label className='text-sm'>Message</label>
          <textarea
        className="w-[300px] md:w-[630px] px-4 py-2 rounded-md border-2 border-gray-300 focus:outline-none focus:border-primary-500' h-[150px]"
        placeholder="Enter product description..."
      />
      </div>

      <button className="w-[300px] md:w-[200px] h-[60px] text-[20px] border-[#ff3300a6] text-[#ff3300a6] border-[2px] mt-4">Submit</button>

        </form>
    </div>
  )
}
