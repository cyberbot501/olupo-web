import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../../assest/flat-design-farmers-market-logo_23-2149332945.avif';

export default function Nav() {
  const [scroll, setScroll] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div
      className={`fixed top-0 left-0 z-50 h-[100px] w-[100%] flex justify-between items-center px-[30px] transition-all duration-300 ${
        scroll ? 'bg-[#013a01]' : 'bg-transparent'
      }`}
    >
      <div className='flex flex-col justify-center items-center'>
        <img src={logo} alt="" className='w-[50px] h-[50px] md:w-[70px] md:h-[70px] rounded-[35px]' />
        <h1 className={`text-[18px] md:text-[20px] font-Cinzel font-bold ${scroll ? 'text-white' : 'text-black'}`}>
          Olupo Agric
        </h1>
      </div>

      <div className='md:hidden flex items-center'>
        <button onClick={toggleMenu}>
          {menuOpen ? <FaTimes size={30} className="text-red" /> : <FaBars size={30} className="text-red" />}
        </button>
      </div>

      <ul className='hidden md:flex flex-row gap-10'>
        <li><NavLink className={`text-[18px] font-Inter font-medium ${scroll ? 'text-white' : 'text-black'}`}>Home</NavLink></li>
        <li><NavLink className={`text-[18px] font-Inter font-medium ${scroll ? 'text-white' : 'text-black'}`}>About Us</NavLink></li>
        <li><NavLink className={`text-[18px] font-Inter font-medium ${scroll ? 'text-white' : 'text-black'}`}>Farming Calendar</NavLink></li>
        <li><NavLink className={`text-[18px] font-Inter font-medium ${scroll ? 'text-white' : 'text-black'}`}>Services</NavLink></li>
        <li><NavLink className={`text-[18px] font-Inter font-medium ${scroll ? 'text-white' : 'text-black'}`}>Contact Us</NavLink></li>
      </ul>

      {menuOpen && (
        <ul
          className={`fixed top-[100px] left-0 w-full bg-[#013a01] flex flex-col items-center gap-8 py-10 transition-all duration-300 md:hidden`}
        >
          <li><NavLink className='text-[18px] font-Inter font-medium text-white'>Home</NavLink></li>
          <li><NavLink className='text-[18px] font-Inter font-medium text-white'>About Us</NavLink></li>
          <li><NavLink className='text-[18px] font-Inter font-medium text-white'>Farming Calendar</NavLink></li>
          <li><NavLink className='text-[18px] font-Inter font-medium text-white'>Services</NavLink></li>
          <li><NavLink className='text-[18px] font-Inter font-medium text-white'>Contact Us</NavLink></li>
        </ul>
      )}
    </div>
  );
}