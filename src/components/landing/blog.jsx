import React from 'react';
import feed1 from '../../assest/ftech.jpg';  
import feed2 from '../../assest/fbird.jpg';  
import feed3 from '../../assest/fsec.jpg';
import footimg from '../../assest/field.jpg';

export default function Blog() {

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
    <div className="pt-28 px-5 sm:px-10 md:px-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {products.map((product, index) => (
          <div key={index} className="flex flex-col items-center md:items-start text-center md:text-left">
            <img 
              src={product.image} 
              alt={product.title} 
              className="h-[250px] sm:h-[300px] md:h-[350px] w-full object-cover rounded-[20px]" 
            />
            <div className="mt-4 w-full">
              <h2 className="font-Cinzel font-bold text-[18px] sm:text-[20px]">
                {truncateText(product.title, 6)}
              </h2>
              <p className="font-Inter font-normal text-[14px] sm:text-[15px] md:text-[16px] text-[#7a7777] mt-2">
                {truncateText(product.description, 20)}
              </p>
              <h3 className="font-Cinzel font-semibold text-[16px] sm:text-[17px] mt-3 text-[#222]">{product.date}</h3>
            </div>
          </div>
        ))}
      </div>

      <img 
        src={footimg} 
        alt="Footer Background" 
        className="w-full h-[250px] sm:h-[350px] md:h-[400px] object-cover mt-10 rounded-xl"
      />
    </div>
  );
}
