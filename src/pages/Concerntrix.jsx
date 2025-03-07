import React from "react";
import Navbar from "../components/Navbar";
import CompanyHeader from "../components/CompanyHeader";
import CompanyCulture from "../components/CompanyCulture";
import CompanyReviews from "../components/CompanyReviews";
import CompanyOverviews from "../components/CompanyOverviews";
import ArticleContainer from "../components/ArticleContainer";
import CompanySalaries from "../components/CompanySalaries";
import Footer from "../components/Footer";
import { concentrixData } from "../data/concentrixData";

const Concerntrix = () => {
  return (
    <div>
      <Navbar />
      <CompanyHeader data={concentrixData} />
      <CompanyCulture data={concentrixData} />
      <CompanyReviews data={concentrixData} />
      <CompanyOverviews data={concentrixData} />
      <ArticleContainer data={concentrixData} />
      <CompanySalaries data={concentrixData} />
      <Footer />
    </div>
  );
};

export default Concerntrix;
