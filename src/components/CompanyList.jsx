import React from "react";
import CompanyCard from "./CompanyCard";
import { companyCardData } from "../data/companyCardData";

const CompanyList = () => {
  return (
    <div className="font-poppins py-10 min-h-screen">
      <h2 className="text-4xl text-[#333] font-medium text-center">
        Best Places to Work For
      </h2>
      <div className="pt-20 pb-10 flex flex-wrap justify-center gap-10 px-5">
        {companyCardData.map((item) => (
          <div key={item.id}>
            <CompanyCard data={item} />
          </div>
        ))}
      </div>
      <div className="flex justify-center">
        <button className="button-89">Show More</button>
      </div>
    </div>
  );
};

export default CompanyList;
