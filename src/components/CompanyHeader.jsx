import React from "react";

const CompanyHeader = () => {
  return (
    <div className="font-poppins">
      {/* Header Section */}
      <div className="relative bg-[url('https://cdn.comparably.com/27157874/p/25736_profile_adobe.png')] bg-cover bg-center w-full h-48">
        {/* Logo Section */}
        <div className="absolute left-8 bottom-[-15%] bg-white w-40 p-4 rounded border-2">
          <img
            src="https://cdn.comparably.com/27157874/l/25736_logo_adobe.png"
            alt="Adobe Logo"
          />
        </div>
      </div>

      {/* Content Section */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-center py-12 px-4 gap-6">
        {/* Company Description */}
        <div className="max-w-screen-md">
          <h3 className="text-xl font-semibold">Adobe</h3>
          <p className="text-xs text-gray-600">
            Adobe is everywhere you look—from movies to advertisements and
            mobile apps. Our products reach all corners of the world and so will
            your ideas. Adobe believes creativity empowers transformation.
            Founded 40 years ago on the simple idea of creating innovative
            products that change the world, Adobe's groundbreaking technology is
            empowering everyone, everywhere to imagine, create, and bring any
            digital experience to life. Our business strategy focuses on
            unleashing creativity, accelerating document productivity, and
            powering digital businesses through our three clouds - Adobe
            Creative Cloud, Document Cloud, and Experience Cloud. Our solutions
            give customers a real competitive advantage, enabling them to engage
            their constituents across every digital touch point. Underpinning
            our clouds, is Firefly and Sensei, our artificial intelligence
            platform.
          </p>
        </div>

        {/* Statistics Section */}
        <div className="flex flex-wrap gap-6">
          {/* Employee Participants */}
          <div className="flex flex-col border-l-4 pl-3">
            <p className="text-sm font-medium">1149</p>
            <p className="text-gray-500 text-sm font-semibold">
              EMPLOYEE PARTICIPANTS
            </p>
          </div>

          {/* Total Ratings */}
          <div className="flex flex-col border-l-4 pl-3">
            <p className="text-sm font-medium">28224</p>
            <p className="text-gray-500 text-sm font-semibold">TOTAL RATINGS</p>
          </div>

          {/* CEO Info */}
          <div className="flex items-center border-l-4 gap-3 pl-3">
            <img
              src="https://cdn.comparably.com/28718259/u/25736_exec_adobe711611602755442.png"
              alt="CEO"
              className="w-16 rounded-full"
            />
            <div>
              <p className="text-gray-500 text-xs font-semibold">CEO</p>
              <h5 className="text-sm font-medium">Shantanu Narayen</h5>
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
