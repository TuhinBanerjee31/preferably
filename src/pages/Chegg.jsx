import React from "react";
import Navbar from "../components/Navbar";
import CompanyHeader from "../components/CompanyHeader";
import CompanyCulture from "../components/CompanyCulture";
import CompanyReviews from "../components/CompanyReviews";
import CompanyOverviews from "../components/CompanyOverviews";
import ArticleContainer from "../components/ArticleContainer";
import CompanySalaries from "../components/CompanySalaries";
import Footer from "../components/Footer";
import { cheggData } from "../data/cheggData";

const Chegg = () => {
  return (
    <div>
      <Navbar />
      <CompanyHeader data={cheggData} />
      <CompanyCulture data={cheggData} />
      <CompanyReviews data={cheggData} />
      <CompanyOverviews data={cheggData} />
      <ArticleContainer data={cheggData} />
      <CompanySalaries data={cheggData} />
      <Footer />
    </div>
  );
};

export default Chegg;
