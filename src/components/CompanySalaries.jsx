import React from "react";
import secImg from "../assets/salariesPic.svg"

const CompanySalaries = () => {
  return (
    <div className="font-poppins bg-[#F3F4F6] py-10">
      <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row items-center gap-5">
        <div className="max-w-screen-md px-3">
          <h2 className="text-xl font-semibold pb-5">Salaries</h2>
          <p className="text-sm tracking-wider">
            How much do people at Adobe get paid? See the latest salaries by
            department and job title. The average estimated annual salary,
            including base and bonus, at Adobe is $125,912, or $60 per hour,
            while the estimated median salary is $134,676, or $64 per hour.
          </p>

          <h5 className="text-sm tracking-wider pb-5">
            At Adobe, the highest paid job is a Director of Engineering at
            $301,250 annually and the lowest is an Office Manager at $58,944
            annually. Average Adobe salaries by department include: Design at
            $155,238, Customer Support at $119,955, IT at $142,627, and
            Communications at $232,995. Half of Adobe salaries are above
            $134,676.
          </h5>

          <h5 className="text-sm tracking-wider pb-5">
            1108 employees at Adobe rank their Compensation in the Top 5% of
            similar sized companies in the US (based on 2988 ratings) while 1089
            employees at Adobe rank their Perks And Benefits in the Top 5% of
            similar sized companies in the US (based on 1735 ratings).
          </h5>

          <h5 className="text-sm tracking-wider pb-5">
            Salaries contributed from Adobe employees include job titles like
            Director of Engineering, Senior Developer, Developer, and Sales
            Engineer. Comparably data has a total of 135 salary records from
            Adobe employees.
          </h5>

          <h5 className="text-sm tracking-wider text-gray-600 py-5">
            Last updated 23 days ago.
          </h5>
        </div>

        <div className="p-2 w-96 h-auto">
          <img src={secImg} />
        </div>
      </div>
    </div>
  );
};

export default CompanySalaries;
