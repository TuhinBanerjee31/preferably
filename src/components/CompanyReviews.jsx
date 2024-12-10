import React from "react";
import { Link } from "react-router-dom";

const CompanyReviews = (props) => {
  const reviews = [
    {
      question:
        "What is most positive about the culture and environment at your company?",
      answer:
        "We have the culture of a fun family environment. We all come to work, work hard and do the best we can and have fun while we do it.",
      department: "Customer Support Dept",
    },
    {
      question:
        "What is most positive about the culture and environment at your company?",
      answer:
        "They make you feel like you are a part of a family! They make coming to work fun!",
      department: "Customer Support Dept",
    },
    {
      question: "What do you like best about the leadership team?",
      answer:
        "An amazing vision for the company, and transparent about where we are going. I have confidence every day I step into work. I don't know of many tech companies where the leadership team is always available to talk to, especially our CEO who will take the time to stop and say hi.",
      department: "Sales Dept",
    },
  ];

  return (
    <div className="px-6 py-10 max-w-4xl mx-auto font-poppins">
      <div className="p-6 bg-gray-50 gap-5 shadow-md rounded-lg flex flex-col lg:flex-row items-center justify-between max-w-5xl mx-auto">
        {/* Text Section */}
        <div className="text-center lg:text-left">
          <h1 className="text-xl font-semibold text-gray-800">
            {props.data.title} Employee Reviews
          </h1>
          <p className="mt-2 text-sm text-gray-600">
            Out of {props.data.totalReviews} {props.data.title} employee reviews,{" "}
            <span className="font-semibold">{props.data.positiveRate}%</span> were positive. The
            remaining <span className="font-semibold">{props.data.negativeRate}%</span> were
            constructive reviews with the goal of helping {props.data.title} improve their
            work culture.
          </p>
        </div>

        {/* Progress Bar Section */}
        <div className="mt-4 lg:mt-0 flex items-center space-x-2 w-full lg:w-auto">
          <div className="flex items-center">
            <span className="text-green-600 text-xl mr-2">😊</span>
          </div>
          <div className="relative w-full lg:w-72 h-6 rounded-full bg-gray-200">
            <div
              className="absolute top-0 left-0 h-full bg-green-500 rounded-l-full"
              style={{ width: `${props.data.positiveRate}%` }}
            ></div>
            <div
              className="absolute top-0 right-0 h-full bg-red-500 rounded-r-full"
              style={{ width: `${props.data.negativeRate}%` }}
            ></div>
            {/* Percentage Labels */}
            <span className="absolute left-[45%] top-1/2 transform -translate-y-1/2 text-white text-sm font-semibold">
            {props.data.positiveRate}%
            </span>
          </div>
          <div className="flex items-center">
            <span className="text-red-600 text-xl ml-2">😔</span>
          </div>
        </div>
      </div>

      <div className="p-6 bg-white shadow-md rounded-lg max-w-5xl mx-auto space-y-6 mt-4 border-t-4 border-[#22C55E]">
        <h2 className="text-xl font-semibold text-gray-800">
          Positive Reviews From {props.data.title} Employees
        </h2>

        {props.data.employeesReviews.map((review, index) => (
          <div
            key={index}
            className="border-b border-gray-200 pb-4 mb-4 last:border-none last:pb-0 last:mb-0"
          >
            <h3 className="text-gray-800 font-medium text-base">{review.question}</h3>
            <p className="text-gray-600 mt-2 text-base">{`“${review.answer}”`}</p>
            <p className="text-sm text-gray-500 mt-2">
              Review from {review.dept} - {review.reviewer}
            </p>
          </div>
        ))}

        <div className="text-center">
          <div className="text-blue-500 font-medium hover:underline cursor-wait">
            Read More Positive Reviews
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyReviews;
