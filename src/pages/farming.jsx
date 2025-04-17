import React, { useState } from 'react';
import Nav from '../layout/nav/nav';
import Footer from '../layout/footer/footer';

// Define activities for each day of the month
const farmingActivities = {
  1: 'Soil preparation 🌱',
  2: 'Planting maize 🌽',
  3: 'Water crops 💧',
  4: 'Fertilizer application 🌿',
  5: 'Weeding 🔪',
  6: 'Pest control 🐛',
  7: 'Harvest tomatoes 🍅',
  8: 'Replanting 🌱',
  9: 'Water crops 💧',
  10: 'Weeding 🔪',
  11: 'Soil testing 🌾',
  12: 'Planting beans 🌱',
  13: 'Fertilizer application 🌿',
  14: 'Check irrigation system 💧',
  15: 'Pest control 🐜',
  16: 'Prepare new plots for planting 🧑‍🌾',
  17: 'Planting maize 🌽',
  18: 'Water crops 💧',
  19: 'Check for pests 🐞',
  20: 'Weeding 🔪',
  21: 'Harvest carrots 🥕',
  22: 'Water crops 💧',
  23: 'Fertilizer application 🌿',
  24: 'Replanting 🌱',
  25: 'Pest control 🐜',
  26: 'Check irrigation system 💧',
  27: 'Harvest potatoes 🥔',
  28: 'Soil preparation 🌱',
  29: 'Planting beans 🌱',
  30: 'Water crops 💧',
  31: 'Review farming progress 📈',
};

const months = [
  { name: 'January', days: 31 },
  { name: 'February', days: 28 },
  { name: 'March', days: 31 },
  { name: 'April', days: 30 },
  { name: 'May', days: 31 },
  { name: 'June', days: 30 },
  { name: 'July', days: 31 },
  { name: 'August', days: 31 },
  { name: 'September', days: 30 },
  { name: 'October', days: 31 },
  { name: 'November', days: 30 },
  { name: 'December', days: 31 },
];

const FarmingCalendar = () => {
  const [selectedMonth, setSelectedMonth] = useState(3); // Default to April
  const currentMonth = months[selectedMonth];

  const handlePrevMonth = () => {
    setSelectedMonth((prev) => (prev === 0 ? 11 : prev - 1));
  };

  const handleNextMonth = () => {
    setSelectedMonth((prev) => (prev === 11 ? 0 : prev + 1));
  };

  return (
    <>
    <Nav />
    <div className="p-6 max-w-full mx-auto">
      {/* Calendar Header */}
      <div className="flex justify-between items-center mb-6">
        <button
          onClick={handlePrevMonth}
          className="text-xl text-white bg-[#013a01] p-2 rounded-full hover:bg-green-700 transition"
        >
          ❮
        </button>
        <h2 className="text-3xl font-bold text-center">{currentMonth.name} Farming Calendar</h2>
        <button
          onClick={handleNextMonth}
          className="text-xl text-white bg-[#013a01] p-2 rounded-full hover:bg-green-700 transition"
        >
          ❯
        </button>
      </div>

      {/* Calendar Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-4">
        {[...Array(currentMonth.days)].map((_, i) => {
          const day = i + 1;
          const activity = farmingActivities[day];

          return (
            <div
              key={day}
              className="border border-gray-300 rounded-lg p-4 shadow-lg hover:shadow-xl transition duration-300 bg-white"
            >
              <div className="text-xl font-semibold text-green-700">Day {day}</div>
              {activity ? (
                <div className="text-sm mt-2 text-gray-700">{activity}</div>
              ) : (
                <div className="text-sm mt-2 text-gray-400 italic">No activity</div>
              )}
            </div>
          );
        })}
      </div>
    </div>
    <Footer />
    </>
  );
};

export default FarmingCalendar;
