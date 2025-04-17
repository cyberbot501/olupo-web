import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../../assest/flat-design-farmers-market-logo_23-2149332945.avif';

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="w-full bg-[#013a01] py-4 px-[30px] flex justify-between items-center">
      {/* Logo Section */}
      <div className="flex flex-col justify-center items-center">
        <img
          src={logo}
          alt="Olupo Agric Logo"
          className="w-[50px] h-[50px] md:w-[70px] md:h-[70px] rounded-full"
        />
        <h1 className="text-[18px] md:text-[20px] font-Cinzel font-bold text-white">
          Olupo Agric
        </h1>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu}>
          {menuOpen ? (
            <FaTimes size={30} className="text-white" />
          ) : (
            <FaBars size={30} className="text-white" />
          )}
        </button>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex flex-row gap-10">
        <li><NavLink to="/" className="text-white text-[18px] font-Inter font-medium">Home</NavLink></li>
        <li><NavLink to='/aboutus' className="text-white text-[18px] font-Inter font-medium">About Us</NavLink></li>
        <li><NavLink to='/farming' className="text-white text-[18px] font-Inter font-medium">Farming Calendar</NavLink></li>
        <li><NavLink to='/ourservices' className="text-white text-[18px] font-Inter font-medium">Services</NavLink></li>
        <li><NavLink to="/products" className="text-white text-[18px] font-Inter font-medium">Products</NavLink></li>
      </ul>

      {/* Desktop Contact Button */}
      <NavLink to="/contact">
        <button className="hidden md:flex w-[200px] place-content-center place-items-center h-[48px] bg-white text-[#013a01] font-bold rounded-[20px]">
          Contact
        </button>
      </NavLink>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="absolute top-[100px] left-0 w-full bg-[#013a01] flex flex-col items-center gap-8 py-10 md:hidden z-40">
          <li><NavLink to="/" className="text-[18px] font-Inter font-medium text-white">Home</NavLink></li>
          <li><NavLink to='/aboutus' className="text-[18px] font-Inter font-medium text-white">About Us</NavLink></li>
          <li><NavLink to='/farming' className="text-[18px] font-Inter font-medium text-white">Farming Calendar</NavLink></li>
          <li><NavLink to='/ourservices' className="text-[18px] font-Inter font-medium text-white">Services</NavLink></li>
          <li><NavLink to="/products" className="text-[18px] font-Inter font-medium text-white">Products</NavLink></li>
          <li><NavLink to="/contact" className="text-[18px] font-Inter font-medium text-white">Contact</NavLink></li>
        </ul>
      )}
    </div>
  );
}
