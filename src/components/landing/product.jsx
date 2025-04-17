import React from 'react';
import { NavLink } from 'react-router-dom';
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
      title: 'FEED MILLING',
      description: 'Feed milling involves the production of high-quality animal feed from raw materials. This helps ensure optimal nutrition and performance for your livestock.',
      link: '/products/feed-milling'
    },
    {
      image: feed2,
      title: 'FRUIT PRODUCTION',
      description: 'Our feed milling process uses modern techniques to produce nutritious animal feed, supporting animal health and productivity.',
      link: '/products/fruit-production'
    },
    {
      image: feed3,
      title: 'CHEMICAL (AGRO-ALLIED)',
      description: 'Feed milling is essential for producing high-quality animal feed. We ensure each product supports livestock growth and health.',
      link: '/products/chemical-agro-allied'
    },
    {
      image: feed4,
      title: 'FARMING TOOLS',
      description: 'Using high-grade ingredients, our feed milling ensures optimal growth for livestock, delivering the nutrition they need.',
      link: '/products/farming-tools'
    },
    {
      image: feed5,
      title: 'LIVESTOCKS FEEDS',
      description: 'Expert feed milling to enhance livestock health and productivity. Each batch is carefully formulated for maximum nutritional value.',
      link: '/products/livestock-feeds'
    },
    {
      image: feed6,
      title: 'STOCKS BREEDING',
      description: 'Our state-of-the-art feed milling process ensures consistency and quality in animal feed for improved livestock performance.',
      link: '/products/stocks-breeding'
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-5 md:px-20 py-10">
      {products.map((product, index) => (
        <div key={index} className="flex flex-col justify-center items-center bg-white shadow-lg rounded-xl p-5">
          <img src={product.image} alt={product.title} className="h-[250px] w-[250px] md:h-[350px] md:w-[350px] object-cover rounded-[20px]" />
          <div className="flex flex-col items-center md:items-start mt-4">
            <h2 className="font-Cinzel font-bold text-[18px] sm:text-[20px] text-center md:text-left">{product.title}</h2>
            <p className="font-Inter font-normal text-[14px] sm:text-[16px] md:text-[17px] text-[#7a7777] text-center md:text-left mt-2">
              {truncateText(product.description, 20)}
            </p>
          </div>
          <NavLink to={product.link}>
            <button className="w-full sm:w-[200px] h-[48px] bg-[#013a01] text-white rounded-[20px] mt-4">
              Learn More
            </button>
          </NavLink>
        </div>
      ))}
    </div>
  );
}
