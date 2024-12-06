import React from "react";

const CompanyOverviews = (props) => {
  return (
    <div className="font-poppins bg-[#F3F4F6] py-10">
      <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row items-center gap-5">
        <div className="max-w-screen-md px-3">
          <h2 className="text-xl font-semibold pb-5">Overview</h2>
          <p className="text-sm tracking-wider">{props.data.overviewBody}</p>
          <h5 className="text-sm tracking-wider text-gray-600 py-5">{props.data.highlightLine}</h5>

          <h4 className="text-base font-semibold">Mission</h4>
          <h5 className="text-sm tracking-wider pb-5">{props.data.mission}</h5>

          <h4 className="text-base font-semibold">Vision</h4>
          <h5 className="text-sm tracking-wider pb-5">{props.data.vision}</h5>

          <h4 className="text-base font-semibold">Values</h4>
          <h5 className="text-sm tracking-wider pb-5">{props.data.values}</h5>
        </div>

        <div className="p-2">
          <img src={props.data.overviewPic} />
        </div>
      </div>
    </div>
  );
};

export default CompanyOverviews;
