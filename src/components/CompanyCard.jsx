import React from 'react';
import { Link } from 'react-router-dom';

const CompanyCard = (props) => {
  return (
    <Link reloadDocument to={props.data.redirectLink} className="flex items-center justify-center">
      {/* CompanyCard container */}
      <div className="relative bg-white border-2 hover:shadow-md transition-all cursor-pointer rounded-lg p-6 flex flex-col items-center w-96">
        {/* Hexagon badge */}
        <div className="absolute left-8 -top-6 bg-gradient-to-r from-pink-500 to-purple-500 w-12 h-12 flex items-center justify-center rounded-full shadow-md">
          <span className="text-white font-bold text-lg">{props.data.id}</span>
        </div>

        {/* Logo */}
        <div className="mt-6">
          <img
            src={props.data.logo}
            alt={props.data.title}
            className="w-16 h-16"
          />
        </div>

        {/* Company name */}
        <h2 className="mt-4 text-xl font-semibold text-gray-800">{props.data.title}</h2>

        {/* Location */}
        <p className="mt-2 text-gray-600 flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 text-gray-500 mr-1"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 2a6 6 0 00-6 6c0 4.3 6 10 6 10s6-5.7 6-10a6 6 0 00-6-6zm0 8a2 2 0 110-4 2 2 0 010 4z"
              clipRule="evenodd"
            />
          </svg>
          {props.data.location}
        </p>
      </div>
    </Link>
  );
};

export default CompanyCard;

