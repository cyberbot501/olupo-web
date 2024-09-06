import React from 'react'
import feed1 from '../../assest/ftech.jpg';  
import feed2 from '../../assest/fbird.jpg';  
import feed3 from '../../assest/fsec.jpg'
import footimg from '../../assest/field.jpg'

export default function blog() {

    const truncateText = (text, wordLimit) => {
        const words = text.split(" ");
        return words.length > wordLimit ? words.slice(0, wordLimit).join(" ") + "..." : text;
      };
    
     
      const products = [
        {
          image: feed1,
          title: 'Farm tech depends on broadband access',
          description: 'Farmers and ranchers in the 21st century are increasingly turning to soil sensors, online data hubs and other advanced technologies designed to help them develop more precise uses of water and other inputs, and keep up with the paperwork.',
          date: 'June 14, 2021'
        },
        {
          image: feed2,
          title: 'How Bowles Farming Company Supports People and Birds - Even During a Pandemic',
          description: 'Bowles Farming Company (BFCo) is located next to Grasslands Ecological Area and San Luis National Wildlife Refuge outside of Los Banos, California,',
          date: 'August 14, 2021'
        },
        {
          image: feed3,
          title: 'Is protecting farmworkers a national security issue? Fresno-area farmers say yes',
          description: 'Protecting farmworkers during a health crisis is an issue of national security, according to farmers, industry advocates and public health professors who say outbreaks on the industry’s front lines could jeopardize the nation’s food supply chain.',
          date: 'June 14, 2021'
        },
      ];
    
  return (
    <div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-44 p-4 pt-32  px-[30px]">
      {products.map((product, index) => (
        <div key={index} className="flex flex-col justify-center items-center">
          <img src={product.image} alt={product.title} className="h-[300px] w-[300px] rounded-[20px]" />
          <div className="flex flex-col items-center md:items-start mt-4">
            <h2  className="font-Cinzel font-bold text-[20px] text-center md:text-left">{truncateText(product.title, 6)}</h2>
            <p className="font-Inter font-normal text-[17px] w-[300px] text-[#7a7777] text-center md:text-left">
              {truncateText(product.description, 20)}
            </p>
            <h2 className='font-Cinzel font-bold text-[20px] text-center md:text-left'>{product.date}</h2>
          </div>
        </div>
      ))}
    </div>

    <img src={footimg} alt="" className='w-[100%] h-[400px]'/>
    </div>
  )
}
