import React from "react";
import Navbar from "../components/Navbar";
import CompanyHeader from "../components/CompanyHeader";
import CompanyCulture from "../components/CompanyCulture";
import CompanyReviews from "../components/CompanyReviews";
import CompanyOverviews from "../components/CompanyOverviews";
import ArticleContainer from "../components/ArticleContainer";
import CompanySalaries from "../components/CompanySalaries";
import Footer from "../components/Footer";
import { tinderData } from "../data/tinderData";

const Tinder = () => {
  return (
    <div>
      <Navbar />
      <CompanyHeader data={tinderData} />
      <CompanyCulture data={tinderData} />
      <CompanyReviews data={tinderData} />
      <CompanyOverviews data={tinderData} />
      <ArticleContainer data={tinderData} />
      <CompanySalaries data={tinderData} />
      <Footer />
    </div>
  );
};

export default Tinder;
