import React from 'react';
import feed1 from '../../assest/feed milling.jpg';  
import feed2 from '../../assest/fr.jpg';  
import feed3 from '../../assest/ch.jpeg';  
import feed4 from '../../assest/trac.jpg';  
import feed5 from '../../assest/livestock e.jpg';  
import feed6 from '../../assest/breaeding-478287121-612x612.jpg';  

export default function Products() {

  const truncateText = (text, wordLimit) => {
    const words = text.split(" ");
    return words.length > wordLimit ? words.slice(0, wordLimit).join(" ") + "..." : text;
  };

 
  const products = [
    {
      image: feed1,
      title: 'FEED MILLING ',
      description: 'Feed milling involves the production of high-quality animal feed from raw materials. This helps ensure optimal nutrition and performance for your livestock.'
    },
    {
      image: feed2,
      title: 'FRUIT PRODUCTION',
      description: 'Our feed milling process uses modern techniques to produce nutritious animal feed, supporting animal health and productivity.'
    },
    {
      image: feed3,
      title: 'CHEMICAL (AGRO-ALLIED)',
      description: 'Feed milling is essential for producing high-quality animal feed. We ensure each product supports livestock growth and health.'
    },
    {
      image: feed4,
      title: 'FARMING TOOLS',
      description: 'Using high-grade ingredients, our feed milling ensures optimal growth for livestock, delivering the nutrition they need.'
    },
    {
      image: feed5,
      title: 'LIVESTOCKS FEEDS',
      description: 'Expert feed milling to enhance livestock health and productivity. Each batch is carefully formulated for maximum nutritional value.'
    },
    {
      image: feed6,
      title: 'STOCKS BREEDING',
      description: 'Our state-of-the-art feed milling process ensures consistency and quality in animal feed for improved livestock performance.'
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-44 p-4 pt-32  px-[30px]">
      {products.map((product, index) => (
        <div key={index} className="flex flex-col justify-center items-center">
          <img src={product.image} alt={product.title} className="h-[300px] w-[300px] rounded-[20px]" />
          <div className="flex flex-col items-center md:items-start mt-4">
            <h2 className="font-Cinzel font-bold text-[20px] text-center md:text-left">{product.title}</h2>
            <p className="font-Inter font-normal text-[17px] w-[300px] text-[#7a7777] text-center md:text-left">
              {truncateText(product.description, 20)}
            </p>
          </div>
          <button className="w-[200px] h-[48px] bg-[#013a01] text-white rounded-[20px] mt-4">
            Learn More
          </button>
        </div>
      ))}
    </div>
  );
}