import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CompanyCard from "../components/CompanyCard";
import { companyCardData } from "../data/companyCardData";
import DataLoader from "../components/DataLoader"

const Companies = () => {
  return (
    <div>
      <Navbar />
      <div className="font-poppins">
        <h2 className="text-4xl text-[#333] font-medium text-center py-10">
          Find Your Workplace
        </h2>

        <div className="py-10 flex flex-wrap justify-center gap-10 px-5">
          {companyCardData.map((item) => (
            <div key={item.id}>
              <CompanyCard data={item} />
            </div>
          ))}
        </div>

        <DataLoader />
      </div>
      <Footer />
    </div>
  );
};

export default Companies;
