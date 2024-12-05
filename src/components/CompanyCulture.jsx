import React from "react";
import { UserIcon } from "@heroicons/react/24/outline";

const CompanyCulture = () => {
  return (
    <div className="bg-gray-100 px-6 py-10 flex justify-around items-center gap-y-5 flex-wrap">
      <div className="bg-white border-2 hover:shadow-lg cursor-pointer rounded-lg p-6 w-full max-w-sm">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-bold text-gray-800">Adobe Culture</h3>
          <div className="flex items-center space-x-1">
            <span className="text-xs text-gray-500 font-medium">
              Choice Employer
            </span>
            <UserIcon class="h-4 w-4 text-gray-500" />
          </div>
        </div>

        {/* Grade Section */}
        <div className="flex flex-col items-center gap-2">
          <div className="bg-green-500 text-white rounded-md w-24 h-24 flex items-center justify-center">
            <span className="text-3xl font-bold">A+</span>
          </div>
          <p className="text-gray-600 text-lg font-medium mt-2">4.8/5</p>

          {/* Star Rating */}
          <div className="flex items-center gap-1 mt-1">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-green-500 text-xl">
                ★
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-md w-full bg-white rounded-lg cursor-pointer border-2 hover:shadow-lg p-6 md:max-w-lg">
        {/* Header */}
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold text-gray-800">
            Adobe eNPS
            <span className="ml-2 text-blue-500 cursor-pointer" title="Net Promoter Score tracks your employees' overall score to this question: `On a scale from 0-10, how likely are you to recommend working at your company to a friend?`">
              ℹ️
            </span>
          </h2>
          <span className="px-3 py-1 text-sm font-medium text-white bg-green-500 rounded-full">
            Top 5%
          </span>
        </div>

        {/* Subheading */}
        <p className="text-sm text-gray-500 mt-2">Recommend to a Friend?</p>

        {/* Content */}
        <div className="flex flex-col md:flex-row items-center mt-4 gap-4">
          {/* Circular Progress (Placeholder with Tailwind styles) */}
          <div className="w-24 h-24 relative">
            <div className="absolute top-0 left-0 w-full h-full rounded-full border-8 border-gray-200"></div>
            <div
              className="absolute top-0 left-0 w-full h-full rounded-full border-8 border-green-500"
              style={{ clipPath: "inset(0 0 40% 0)" }}
            ></div>
            <div className="absolute inset-0 flex items-center justify-center font-bold text-xl">
              76
            </div>
          </div>

          {/* Text Content */}
          <div className="text-center md:text-left">
            <p className="text-gray-700">
              Adobe employees are 76% more likely to recommend Adobe as a great
              place to work.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="flex justify-between mt-6 border-t pt-4 text-sm">
          <div className="text-center">
            <p className="font-bold text-gray-800">82%</p>
            <p className="text-gray-500">Promoters</p>
          </div>
          <div className="text-center">
            <p className="font-bold text-gray-800">12%</p>
            <p className="text-gray-500">Passives</p>
          </div>
          <div className="text-center">
            <p className="font-bold text-red-500">6%</p>
            <p className="text-gray-500">Detractors</p>
          </div>
        </div>
      </div>

      <div className="bg-white border-2 hover:shadow-lg cursor-pointer rounded-lg p-6 w-full max-w-sm">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-bold text-gray-800">Adobe CEO</h3>
          <div className="bg-green-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
            Top 5%
          </div>
        </div>

        {/* CEO Details Section */}
        <div className="flex flex-col items-center">
          {/* Circular Image with Progress Ring */}
          <div className="relative w-28 h-28">
            <div className="absolute inset-0 rounded-full border-4 border-green-500"></div>
            <img
              src="https://cdn.comparably.com/28718259/u/25736_exec_adobe711611602755442.png"
              alt="Shantanu Narayen"
              className="w-full h-full rounded-full object-cover"
            />
          </div>

          {/* CEO Name */}
          <h4 className="text-sm font-medium mt-4">Shantanu Narayen</h4>

          {/* Score Section */}
          <p className="text-green-500 font-bold text-lg mt-2">
            93 <span className="text-gray-500 font-normal">/ 100</span>
          </p>
        </div>
      </div>

      <div className="bg-white border-2 hover:shadow-lg cursor-pointer rounded-lg p-6 max-w-md w-full md:max-w-lg">
        {/* Header */}
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-gray-800">
            Diversity at Adobe
          </h2>
          <span className="px-3 py-1 text-sm font-medium text-white bg-green-500 rounded-full">
            Top 5%
          </span>
        </div>

        {/* Content Section */}
        <div className="flex items-center mt-4">
          {/* Icon/Grade */}
          <div className="bg-green-500 text-white font-bold text-2xl flex items-center justify-center h-16 w-32 rounded-md">
            A+
          </div>

          {/* Description */}
          <p className="text-gray-700 text-sm ml-4">
            Diverse employees at Adobe have rated Perks And Benefits, CEO
            Rating, and Happiness as the highest categories they have scored.
          </p>
        </div>
      </div>

      <div className="bg-white border-2 hover:shadow-lg cursor-pointer rounded-lg p-6 max-w-md w-full md:max-w-lg">
        {/* Header */}
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-gray-800">
            Women at Adobe
          </h2>
          <span className="px-3 py-1 text-sm font-medium text-white bg-green-500 rounded-full">
            Top 5%
          </span>
        </div>

        {/* Content Section */}
        <div className="flex items-center mt-4">
          {/* Icon/Grade */}
          <div className="bg-green-500 text-white font-bold text-2xl flex items-center justify-center h-16 w-32 rounded-md">
            A+
          </div>

          {/* Description */}
          <p className="text-gray-700 text-sm ml-4">
            Women at Adobe have rated Perks And Benefits, CEO Rating, and
            Happiness as the highest categories they have scored.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CompanyCulture;
