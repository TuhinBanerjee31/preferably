import React from "react";

const Category = () => {
  return (
    <div className="bg-[#DEECFF] w-full min-h-96 font-poppins pt-5">
      <div className="max-w-screen-xl mx-auto flex flex-col justify-center h-full gap-4 p-5">
        <div>
          <h3 className="text-xl font-semibold">
            Best Places to Work by Category
          </h3>
          <h5 className="text-base max-w-screen-md">
            Discover top companies, rated by their employees for outstanding
            performance in categories like career growth, work-life balance, and
            company culture.
          </h5>
        </div>
        <ul className="w-full border-2 bg-white rounded-md flex justify-between flex-wrap gap-10 p-8">
          <div className="flex flex-col gap-4">
            <li className="list-disc cursor-pointer">Best Company Outlook</li>
            <li className="list-disc cursor-pointer">Best Product Teams</li>
            <li className="list-disc cursor-pointer">Best Global Culture</li>
          </div>

          <div className="flex flex-col gap-4">
            <li className="list-disc cursor-pointer">Happiest Employees</li>
            <li className="list-disc cursor-pointer">Best HR Teams</li>
            <li className="list-disc cursor-pointer">Best Company Perks & Benefits</li>
          </div>

          <div className="flex flex-col gap-4">
            <li className="list-disc cursor-pointer">Best Career Growth</li>
            <li className="list-disc cursor-pointer">Best Engineering Teams</li>
            <li className="list-disc cursor-pointer">Best Sales Teams</li>
          </div>

          <div className="flex flex-col gap-4">
            <li className="list-disc cursor-pointer">Best Company Work-Life Balance</li>
            <li className="list-disc cursor-pointer">Best Leadership Teams</li>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Category;
