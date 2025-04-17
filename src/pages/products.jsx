import React, { useState } from "react";
import Nav from "../layout/nav/nav";
import Footer from "../layout/footer/footer";

const products = [
  {
    name: "Eggs",
    emoji: "🥚",
    short: "Farm-fresh eggs.",
    more: "Sourced directly from healthy layers, our eggs are packed with protein and essential nutrients. Ideal for home and commercial use.",
    price: "₦1,800 per crate",
  },
  {
    name: "Chicken",
    emoji: "🐓",
    short: "Healthy chickens.",
    more: "We offer well-bred broiler chickens suitable for meat. Perfectly raised under hygienic and organic feeding systems.",
    price: "₦3,500 per kg",
  },
  {
    name: "Turkey",
    emoji: "🦃",
    short: "Large farm turkeys.",
    more: "Our turkeys are big, meaty, and perfect for festivities. Raised in a natural environment and fed with nutrient-rich feeds.",
    price: "₦6,000 per kg",
  },
  {
    name: "Catfish",
    emoji: "🦈",
    short: "Fresh/live catfish.",
    more: "Available in both live and processed options. Ideal for grilling, smoking, and local soups.",
    price: "₦2,000 per kg",
  },
  {
    name: "Cattle",
    emoji: "🐂",
    short: "Beef cattle.",
    more: "We breed and sell cattle for beef production. Available for events, ceremonies, or butchery use.",
    price: "Contact for pricing",
  },
  {
    name: "Sheep",
    emoji: "🐃",
    short: "Well-fed sheep.",
    more: "Our sheep are grass-fed and suitable for meat or cultural occasions. Healthy and affordable.",
    price: "₦25,000 - ₦60,000",
  },
  {
    name: "Goat",
    emoji: "🐐",
    short: "Healthy goats.",
    more: "Raised in clean conditions, our goats are strong, agile, and ideal for meat or ceremonial purposes.",
    price: "₦20,000 - ₦50,000",
  },
  {
    name: "Feed Milling",
    emoji: "🌾",
    short: "Custom livestock feed.",
    more: "We offer feed milling services tailored to different animal nutritional needs including poultry, fish, and ruminants.",
    price: "Contact for quote",
  },
  {
    name: "Feed Ingredients",
    emoji: "🥬",
    short: "Raw materials for feed.",
    more: "We supply high-quality feed ingredients such as maize, soya, fishmeal, bone meal, and more.",
    price: "Contact for quote",
  },
  {
    name: "Aquaculture Feed & Drugs",
    emoji: "💊",
    short: "Fish feed & medication.",
    more: "Medicated and non-medicated fish feed, as well as water treatment and antibiotics for healthy aquaculture systems.",
    price: "Contact for quote",
  },
  {
    name: "Green Pepper",
    emoji: "🫑",
    short: "Fresh green pepper.",
    more: "Locally grown and freshly harvested green peppers. Great for cooking and commercial food prep.",
    price: "₦1,000 per kg",
  },
  {
    name: "Habanero Pepper",
    emoji: "🌶️",
    short: "Spicy habanero.",
    more: "Add spice and flavor to your meals with our hot habanero peppers. Perfect for stew, sauce, and seasoning.",
    price: "₦1,200 per kg",
  },
];

const whatsappNumber = "2348036226669";

const Products = () => {
  

  return (
    <>
    <Nav />
    <div className="min-h-screen bg-gray-100 px-4 py-12">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-10 text-green-700">
          Our Agricultural Products
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md p-6 flex flex-col hover:shadow-green-400 transition-all duration-300 hover:scale-105"
            >
              <div className="text-5xl mb-3 text-center">{product.emoji}</div>
              <h2 className="text-xl font-bold text-green-800 text-center mb-1">
                {product.name}
              </h2>

              <button

                className="text-sm text-green-600 hover:underline text-center focus:outline-none"
              >
                {product.short}
              </button>

              <div
                className="mt-2 text-sm text-gray-600 text-center overflow-hidden max-h-40"
              >
                <p className="mt-1">{product.more}</p>
              </div>

              <p className="text-lg font-semibold text-center text-gray-900 mt-4 mb-4">
                {product.price}
              </p>

              <a
                href={`https://wa.me/${+2348036226669}?text=Hello%2C%20I'm%20interested%20in%20buying%20${encodeURIComponent(
                  product.name
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-block bg-green-600 hover:bg-green-700 text-white text-center rounded-xl px-4 py-2 font-medium transition"
              >
                Buy
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default Products;
