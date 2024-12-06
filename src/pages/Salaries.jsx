import React, {useState} from "react";
import { adobeData } from "../data/adobeData";
import { adpData } from "../data/adpData";
import { bcgData } from "../data/bcgData";
import { chewyData } from "../data/chewyData";
import { elsevierData } from "../data/elsevierData";
import { informaticaData } from "../data/informaticaData";
import { instacartData } from "../data/instacartData";
import { netflixData } from "../data/netflixData";
import { siecorpData } from "../data/siecorpData";
import { trustwaveData } from "../data/trustwaveData";
import { uberData } from "../data/uberData";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Salaries = () => {
    const [salaryData1, setSalaryData1] = useState(adobeData.salariesp1)
    const [salaryData2, setSalaryData2] = useState(adobeData.salariesp2)
    const [salaryData3, setSalaryData3] = useState(adobeData.salariesp3)

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="font-poppins">
        <h2 className="text-4xl text-[#333] font-medium text-center py-16">
          Get a idea about salaries
        </h2>

        <div className="flex gap-3 flex-wrap justify-center">
            <p className="p-2 cursor-pointer transition-colors hover:bg-slate-100" onClick={() => {setSalaryData1(adobeData.salariesp1); setSalaryData2(adobeData.salariesp2); setSalaryData3(adobeData.salariesp3)}}>Adobe</p>
            <p className="p-2 cursor-pointer transition-colors hover:bg-slate-100" onClick={() => {setSalaryData1(adpData.salariesp1); setSalaryData2(adpData.salariesp2); setSalaryData3(adpData.salariesp3)}}>ADP</p>
            <p className="p-2 cursor-pointer transition-colors hover:bg-slate-100" onClick={() => {setSalaryData1(bcgData.salariesp1); setSalaryData2(bcgData.salariesp2); setSalaryData3(bcgData.salariesp3)}}>Boston Consulting Group</p>
            <p className="p-2 cursor-pointer transition-colors hover:bg-slate-100" onClick={() => {setSalaryData1(chewyData.salariesp1); setSalaryData2(chewyData.salariesp2); setSalaryData3(chewyData.salariesp3)}}>Chewy</p>
            <p className="p-2 cursor-pointer transition-colors hover:bg-slate-100" onClick={() => {setSalaryData1(elsevierData.salariesp1); setSalaryData2(elsevierData.salariesp2); setSalaryData3(elsevierData.salariesp3)}}>Elsevier</p>
            <p className="p-2 cursor-pointer transition-colors hover:bg-slate-100" onClick={() => {setSalaryData1(informaticaData.salariesp1); setSalaryData2(informaticaData.salariesp2); setSalaryData3(informaticaData.salariesp3) }}>Informatica</p>
            <p className="p-2 cursor-pointer transition-colors hover:bg-slate-100" onClick={() => {setSalaryData1(instacartData.salariesp1); setSalaryData2(instacartData.salariesp2); setSalaryData3(instacartData.salariesp3)}}>Instacart</p>
            <p className="p-2 cursor-pointer transition-colors hover:bg-slate-100" onClick={() => {setSalaryData1(netflixData.salariesp1); setSalaryData2(netflixData.salariesp2); setSalaryData3(netflixData.salariesp3)}}>Netflix</p>
            <p className="p-2 cursor-pointer transition-colors hover:bg-slate-100" onClick={() => {setSalaryData1(siecorpData.salariesp1); setSalaryData2(siecorpData.salariesp2); setSalaryData3(siecorpData.salariesp3);}}>Siecorp</p>
            <p className="p-2 cursor-pointer transition-colors hover:bg-slate-100" onClick={() => {setSalaryData1(trustwaveData.salariesp1); setSalaryData2(trustwaveData.salariesp2); setSalaryData3(trustwaveData.salariesp3)}}>Trustwave</p>
            <p className="p-2 cursor-pointer transition-colors hover:bg-slate-100" onClick={() => {setSalaryData1(uberData.salariesp1); setSalaryData2(uberData.salariesp2); setSalaryData3(uberData.salariesp3)}}>Uber</p>
        </div>

        <div className="max-w-screen-lg mx-auto px-5 py-6">
        <h2 className="text-lg tracking-wider">{salaryData1}</h2>
        <h2 className="text-lg tracking-wider">{salaryData2}</h2>
        <h2 className="text-lg tracking-wider">{salaryData3}</h2>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Salaries;