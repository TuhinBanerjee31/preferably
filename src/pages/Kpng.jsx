import React from "react";
import Navbar from "../components/Navbar";
import CompanyHeader from "../components/CompanyHeader";
import CompanyCulture from "../components/CompanyCulture";
import CompanyReviews from "../components/CompanyReviews";
import CompanyOverviews from "../components/CompanyOverviews";
import ArticleContainer from "../components/ArticleContainer";
import CompanySalaries from "../components/CompanySalaries";
import Footer from "../components/Footer";
import { kpngData } from "../data/kpngData";

const Kpng = () => {
  return (
    <div>
      <Navbar />
      <CompanyHeader data={kpngData} />
      <CompanyCulture data={kpngData} />
      <CompanyReviews data={kpngData} />
      <CompanyOverviews data={kpngData} />
      <ArticleContainer data={kpngData} />
      <CompanySalaries data={kpngData} />
      <Footer />
    </div>
  );
};

export default Kpng;
