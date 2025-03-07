import React from "react";
import { UserIcon } from "@heroicons/react/24/outline";

const CompanyCulture = (props) => {
  return (
    <div className="bg-gray-100 px-6 py-10 flex justify-around items-center gap-y-5 flex-wrap">
      <div className="bg-white border-2 hover:shadow-lg cursor-pointer rounded-lg p-6 w-full max-w-sm">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-bold text-gray-800">
            {props.data.title} Culture
          </h3>
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
            <span className="text-3xl font-bold">{props.data.cultureGrade}</span>
          </div>
          <p className="text-gray-600 text-lg font-medium mt-2">{props.data.culturePoint}/5</p>

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
            {props.data.title} eNPS
            <span
              className="ml-2 text-blue-500 cursor-pointer"
              title="Net Promoter Score tracks your employees' overall score to this question: `On a scale from 0-10, how likely are you to recommend working at your company to a friend?`"
            >
              ℹ️
            </span>
          </h2>
          <span className="px-3 py-1 text-sm font-medium text-white bg-green-500 rounded-full">
            Top {props.data.topPercentage}
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
            {props.data.recommendRate}
            </div>
          </div>

          {/* Text Content */}
          <div className="text-center md:text-left">
            <p className="text-gray-700">
            {props.data.title} employees are {props.data.recommendRate}% more likely to recommend {props.data.title} as a great
              place to work.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="flex justify-between mt-6 border-t pt-4 text-sm">
          <div className="text-center">
            <p className="font-bold text-gray-800">{props.data.promoters}%</p>
            <p className="text-gray-500">Promoters</p>
          </div>
          <div className="text-center">
            <p className="font-bold text-gray-800">{props.data.passives}%</p>
            <p className="text-gray-500">Passives</p>
          </div>
          <div className="text-center">
            <p className="font-bold text-red-500">{props.data.detractors}%</p>
            <p className="text-gray-500">Detractors</p>
          </div>
        </div>
      </div>

      <div className="bg-white border-2 hover:shadow-lg cursor-pointer rounded-lg p-6 w-full max-w-sm">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-bold text-gray-800">{props.data.title} CEO</h3>
          <div className="bg-green-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
            Top {props.data.topPercentage}
          </div>
        </div>

        {/* CEO Details Section */}
        <div className="flex flex-col items-center">
          {/* Circular Image with Progress Ring */}
          <div className="relative w-28 h-28">
            <div className="absolute inset-0 rounded-full border-4 border-green-500"></div>
            <img
              src="https://www.freeiconspng.com/thumbs/profile-icon-png/profile-icon-9.png"
              alt={props.data.ceo}
              className="w-full h-full rounded-full object-cover p-5"
            />
          </div>

          {/* CEO Name */}
          <h4 className="text-sm font-medium mt-4">{props.data.ceo}</h4>

          {/* Score Section */}
          <p className="text-green-500 font-bold text-lg mt-2">
          {props.data.ceoRate} <span className="text-gray-500 font-normal">/ 100</span>
          </p>
        </div>
      </div>

      <div className="bg-white border-2 hover:shadow-lg cursor-pointer rounded-lg p-6 max-w-md w-full md:max-w-lg">
        {/* Header */}
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-gray-800">
            Diversity at {props.data.title}
          </h2>
          <span className="px-3 py-1 text-sm font-medium text-white bg-green-500 rounded-full">
            Top {props.data.topPercentage}
          </span>
        </div>

        {/* Content Section */}
        <div className="flex items-center mt-4">
          {/* Icon/Grade */}
          <div className="bg-green-500 text-white font-bold text-2xl flex items-center justify-center h-16 w-32 rounded-md">
          {props.data.diversityGrade}
          </div>

          {/* Description */}
          <p className="text-gray-700 text-sm ml-4">
          {props.data.diversityBio}
          </p>
        </div>
      </div>

      <div className="bg-white border-2 hover:shadow-lg cursor-pointer rounded-lg p-6 max-w-md w-full md:max-w-lg">
        {/* Header */}
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-gray-800">
            Women at {props.data.title}
          </h2>
          <span className="px-3 py-1 text-sm font-medium text-white bg-green-500 rounded-full">
            Top {props.data.topPercentage}
          </span>
        </div>

        {/* Content Section */}
        <div className="flex items-center mt-4">
          {/* Icon/Grade */}
          <div className="bg-green-500 text-white font-bold text-2xl flex items-center justify-center h-16 w-32 rounded-md">
          {props.data.womenGrade}
          </div>

          {/* Description */}
          <p className="text-gray-700 text-sm ml-4">{props.data.womenBio}</p>
        </div>
      </div>
    </div>
  );
};

export default CompanyCulture;
