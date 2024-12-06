import React from "react";
import secImg from "../assets/salariesPic.svg"

const CompanySalaries = (props) => {
  return (
    <div className="font-poppins bg-[#F3F4F6] py-10">
      <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row items-center gap-5">
        <div className="max-w-screen-md px-3">
          <h2 className="text-xl font-semibold pb-5">Salaries</h2>

          <h5 className="text-sm tracking-wider pb-5">{props.data.salariesp1}</h5>

          <h5 className="text-sm tracking-wider pb-5">{props.data.salariesp2}</h5>

          <h5 className="text-sm tracking-wider pb-5">{props.data.salariesp3}</h5>

          <h5 className="text-sm tracking-wider text-gray-600 py-5">{props.data.salariesDate}</h5>
        </div>

        <div className="p-2 w-96 h-auto">
          <img src={secImg} />
        </div>
      </div>
    </div>
  );
};

export default CompanySalaries;
