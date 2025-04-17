import React from "react";
import { FaLeaf, FaFish, FaTruck, FaAppleAlt, FaSeedling, FaHome } from "react-icons/fa";
import Nav from "../layout/nav/nav"; // Update path if necessary
import Footer from "../layout/footer/footer"; // Update path if necessary

const OurServices = () => {
  return (
    <>
      <Nav />
      <section className="py-12 px-4 sm:px-10 lg:px-20 bg-[#f4f8f5] text-gray-800">
        {/* Hero Section */}
        <div className="bg-green-700 text-white py-20 text-center rounded-lg mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-xl md:text-2xl">
            Explore the diverse range of services we provide to meet your agricultural and food production needs.
          </p>
        </div>

        {/* Services Section */}
        <h2 className="text-3xl font-semibold text-green-800 mt-12 mb-6 text-center">
          What We Do
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Agricultural Services */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <FaLeaf className="text-4xl text-green-700 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Agricultural Services</h3>
            <p>
              We offer a full range of agricultural services, from produce processing to distribution and farm management.
            </p>
          </div>

          {/* Fish Farming */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <FaFish className="text-4xl text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Fish Farming</h3>
            <p>
              Specializing in fish farming and aquaculture, we ensure sustainable practices for healthy and profitable yields.
            </p>
          </div>

          {/* Livestock Distribution */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <FaTruck className="text-4xl text-yellow-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Livestock Distribution</h3>
            <p>
              We breed, raise, and distribute livestock, ensuring the highest standards for cattle, poultry, and more.
            </p>
          </div>

          {/* Fruit Juice Production */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <FaAppleAlt className="text-4xl text-red-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Fruit Juice Production</h3>
            <p>
              Our natural juices, made from the finest fruits, are packaged and distributed for healthy consumption.
            </p>
          </div>

          {/* Home Delivery */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <FaHome className="text-4xl text-indigo-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Home Delivery</h3>
            <p>
              Enjoy the convenience of having fresh farm products delivered straight to your doorstep. We offer reliable and timely delivery.
            </p>
          </div>
        </div>

        {/* Featured Products */}
        <div className="mt-12">
          <h2 className="text-3xl font-semibold text-green-800 mb-6 text-center">Featured Products</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <FaSeedling className="text-4xl text-green-500 mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Poultry Products</h3>
              <p>
                We supply eggs, chicken, and turkey, ensuring quality from farm to table.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <FaSeedling className="text-4xl text-orange-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Cocoa & Cashew</h3>
              <p>
                We process and distribute premium cocoa and cashew nuts, sourced from sustainable farms.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <FaSeedling className="text-4xl text-yellow-700 mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Livestock Feed Milling</h3>
              <p>
                Providing high-quality feed for poultry, fish, and livestock to ensure optimal growth.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <FaSeedling className="text-4xl text-purple-700 mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Aquaculture Feed</h3>
              <p>
                Specializing in aquaculture feed, we cater to the nutritional needs of fish farming.
              </p>
            </div>
          </div>
        </div>

        {/* Vision & Mission */}
        <div className="mt-12 text-center">
          <h2 className="text-3xl font-semibold text-green-800 mb-4">Our Vision</h2>
          <p className="text-lg leading-relaxed mx-auto w-4/5">
            To become a leading force in Nigeria's agricultural sector, delivering quality, innovation, and sustainability in every facet of our business.
          </p>
        </div>

        {/* Contact Us Section */}
        <div className="mt-12 bg-green-700 text-white py-12 rounded-lg text-center">
          <h2 className="text-3xl font-semibold mb-4">Get in Touch</h2>
          <p className="text-lg mb-6">
            Have any questions or need more information? We’d love to hear from you. Reach out to us today!
          </p>
          <a
            href="mailto:info@olupoagric.com"
            className="inline-block px-8 py-3 bg-yellow-600 text-white text-lg font-semibold rounded-lg hover:bg-yellow-500 transition-colors"
          >
            Contact Us
          </a>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default OurServices;
