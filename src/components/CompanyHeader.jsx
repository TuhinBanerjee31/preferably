import React from "react";

const CompanyHeader = (props) => {
  return (
    <div className="font-poppins">
      {/* Header Section */}
      <div className={`relative bg-cover bg-center w-full h-48`} style={{ backgroundImage: `url(${props.data.coverPic})` }}>
        {/* Logo Section */}
        <div className="absolute left-8 bottom-[-15%] bg-white w-40 p-4 rounded border-2">
          <img
            src={props.data.logo}
            alt={props.data.title}
          />
        </div>
      </div>

      {/* Content Section */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-center py-12 px-4 gap-6">
        {/* Company Description */}
        <div className="max-w-screen-md">
          <h3 className="text-xl font-semibold">{props.data.title}</h3>
          <p className="text-xs text-gray-600">{props.data.bio}</p>
        </div>

        {/* Statistics Section */}
        <div className="flex flex-wrap gap-6">
          {/* Employee Participants */}
          <div className="flex flex-col border-l-4 pl-3">
            <p className="text-sm font-medium">{props.data.employees}</p>
            <p className="text-gray-500 text-sm font-semibold">
              EMPLOYEE PARTICIPANTS
            </p>
          </div>

          {/* Total Ratings */}
          <div className="flex flex-col border-l-4 pl-3">
            <p className="text-sm font-medium">{props.data.ratings}</p>
            <p className="text-gray-500 text-sm font-semibold">TOTAL RATINGS</p>
          </div>

          {/* CEO Info */}
          <div className="flex items-center border-l-4 gap-3 pl-3">
            <img
              src={props.data.ceoImg}
              alt="CEO"
              className="w-16 rounded-full"
            />
            <div>
              <p className="text-gray-500 text-xs font-semibold">CEO</p>
              <h5 className="text-sm font-medium">{props.data.ceo}</h5>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t-2 border-b-2 shadow-md">
        <div className="max-w-screen-sm flex justify-between mx-auto">
          <span className="text-gray-500 text-sm font-medium p-3 cursor-pointer transition-colors hover:bg-slate-100">
            Stats
          </span>
          <span className="text-gray-500 text-sm font-medium p-3 cursor-pointer transition-colors hover:bg-slate-100">
          Reviews
          </span>
          <span className="text-gray-500 text-sm font-medium p-3 cursor-pointer transition-colors hover:bg-slate-100">
            Overview
          </span>
          <span className="text-gray-500 text-sm font-medium p-3 cursor-pointer transition-colors hover:bg-slate-100">
            Articles
          </span>
          <span className="text-gray-500 text-sm font-medium p-3 cursor-pointer transition-colors hover:bg-slate-100">
            Salaries
          </span>
        </div>
      </div>
    </div>
  );
};

export default CompanyHeader;
