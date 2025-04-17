import React from "react";
import { FaLeaf, FaFish, FaTruck, FaAppleAlt, FaSeedling } from "react-icons/fa";
import Nav from "../layout/nav/nav";
import Footer from "../layout/footer/footer";

import company1 from "../assest/temp_image_20250417_124121_e01adcdf-9977-4128-95c9-2a00be5ccb4f.jpg";
import company2 from "../assest/temp_image_20250417_124134_93700251-f907-475d-a972-c79f7eafddef.jpg";

const About = () => {
  return (
    <>
      <Nav />
      <section className="py-12 px-4 sm:px-10 lg:px-20 bg-[#f4f8f5] text-gray-800">
        {/* Hero Section */}
        <div className="bg-green-700 text-white py-20 text-center rounded-lg mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About OLUPO AGRIC</h1>
          <p className="text-xl md:text-2xl">
            Your trusted partner in agriculture, providing quality produce, livestock, and more.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Company Overview */}
          <div className="space-y-6">
            <p className="text-lg leading-relaxed mb-8">
              <strong>OLUPO AGRICULTURAL PRODUCTS NIGERIA LIMITED</strong> (RC: 1353325) is a forward-thinking agribusiness
              enterprise located in{" "}
              <strong>
                232, Ogbomoso/Ilorin Express Road, Ogbomoso, Oyo State, Nigeria.
              </strong>{" "}
              We specialize in various agricultural services and strive to impact Nigeria's farming sector with quality, sustainability, and innovation.
            </p>

            {/* First Company Image */}
            <img
              src={company1}
              alt="Olupo Agric facility"
              className="w-full h-[250px] sm:h-[300px] md:h-[350px] object-cover rounded-xl"
            />
          </div>

          {/* Our Services */}
          <h2 className="text-3xl font-semibold text-green-800 mt-12 mb-6 text-center">
            What We Do
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {/* Services Cards */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <FaLeaf className="text-4xl text-green-700 mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Agricultural Services</h3>
              <p>
                We offer a full range of agricultural services, from produce processing to distribution and farm management.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <FaFish className="text-4xl text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Fish Farming</h3>
              <p>
                Specializing in fish farming and aquaculture, we ensure sustainable practices for healthy and profitable yields.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <FaTruck className="text-4xl text-yellow-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Livestock Distribution</h3>
              <p>
                We breed, raise, and distribute livestock, ensuring the highest standards for cattle, poultry, and more.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <FaAppleAlt className="text-4xl text-red-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Fruit Juice Production</h3>
              <p>
                Our natural juices, made from the finest fruits, are packaged and distributed for healthy consumption.
              </p>
            </div>
          </div>

          {/* Our Product Range */}
          <h2 className="text-3xl font-semibold text-green-800 mt-12 mb-6 text-center">
            Our Product Range
          </h2>

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

          {/* Vision */}
          <div className="mt-12">
            <h2 className="text-3xl font-semibold text-green-800 mb-4 text-center">Our Vision</h2>
            <p className="text-lg leading-relaxed text-center">
              To become a leading force in Nigeria's agricultural sector, delivering quality, innovation, and sustainability in every facet of our business.
            </p>
          </div>

          {/* Second Company Image */}
          <div className="mt-10">
            <img
              src={company2}
              alt="Inside Olupo Agric operations"
              className="w-full h-[250px] sm:h-[300px] md:h-[350px] object-cover rounded-xl"
            />
          </div>

          {/* Location */}
          <div className="mt-12 text-center">
            <h2 className="text-3xl font-semibold text-green-800 mb-4">Our Location</h2>
            <p className="text-lg leading-relaxed">
              We are located at <strong>232, Ogbomoso/Ilorin Express Road, Ogbomoso, Oyo State, Nigeria</strong>. Our
              strategic location allows us to serve both local and international markets efficiently.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default About;
