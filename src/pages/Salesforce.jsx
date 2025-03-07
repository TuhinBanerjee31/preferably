import React from "react";
import Navbar from "../components/Navbar";
import CompanyHeader from "../components/CompanyHeader";
import CompanyCulture from "../components/CompanyCulture";
import CompanyReviews from "../components/CompanyReviews";
import CompanyOverviews from "../components/CompanyOverviews";
import ArticleContainer from "../components/ArticleContainer";
import CompanySalaries from "../components/CompanySalaries";
import Footer from "../components/Footer";
import { salesforceData } from "../data/salesforceData";

const Salesforce = () => {
  return (
    <div>
      <Navbar />
      <CompanyHeader data={salesforceData} />
      <CompanyCulture data={salesforceData} />
      <CompanyReviews data={salesforceData} />
      <CompanyOverviews data={salesforceData} />
      <ArticleContainer data={salesforceData} />
      <CompanySalaries data={salesforceData} />
      <Footer />
    </div>
  );
};

export default Salesforce;
