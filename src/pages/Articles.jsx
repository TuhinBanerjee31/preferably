import React from "react";
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
import ArticleCard from "../components/ArticleCard";
import DataLoader from "../components/DataLoader";
import { kpngData } from "../data/kpngData";
import { concentrixData } from "../data/concentrixData";
import { cheggData } from "../data/cheggData";
import { salesforceData } from "../data/salesforceData";
import { kubraData } from "../data/kubraData";
import { tinderData } from "../data/tinderData";

const Articles = () => {
  return (
    <div>
      <Navbar />
      <div className="font-poppins">
        <h2 className="text-4xl text-[#333] font-medium text-center py-16">
          Have look at our latest Articles
        </h2>

        <div className="max-w-screen-2xl flex flex-col md:flex-row flex-wrap mx-auto justify-center gap-7 px-5 pb-10">
          <div className="grid grid-cols-2 gap-4">
            {adobeData.articles.map((item, index) => (
              <ArticleCard article={item} key={index} />
            ))}
          </div>

          <div className="grid grid-cols-2 gap-4">
            {adpData.articles.map((item, index) => (
              <ArticleCard article={item} key={index} />
            ))}
          </div>

          <div className="grid grid-cols-2 gap-4">
            {bcgData.articles.map((item, index) => (
              <ArticleCard article={item} key={index} />
            ))}
          </div>

          <div className="grid grid-cols-2 gap-4">
            {chewyData.articles.map((item, index) => (
              <ArticleCard article={item} key={index} />
            ))}{" "}
          </div>

          <div className="grid grid-cols-2 gap-4">
            {concentrixData.articles.map((item, index) => (
              <ArticleCard article={item} key={index} />
            ))}
          </div>

          <div className="grid grid-cols-2 gap-4">
            {cheggData.articles.map((item, index) => (
              <ArticleCard article={item} key={index} />
            ))}
          </div>

          <div className="grid grid-cols-2 gap-4">
            {elsevierData.articles.map((item, index) => (
              <ArticleCard article={item} key={index} />
            ))}
          </div>

          <div className="grid grid-cols-2 gap-4">
            {informaticaData.articles.map((item, index) => (
              <ArticleCard article={item} key={index} />
            ))}
          </div>

          <div className="grid grid-cols-2 gap-4">
            {instacartData.articles.map((item, index) => (
              <ArticleCard article={item} key={index} />
            ))}
          </div>

          <div className="grid grid-cols-2 gap-4">
            {kpngData.articles.map((item, index) => (
              <ArticleCard article={item} key={index} />
            ))}
          </div>

          <div className="grid grid-cols-2 gap-4">
            {kubraData.articles.map((item, index) => (
              <ArticleCard article={item} key={index} />
            ))}
          </div>

          <div className="grid grid-cols-2 gap-4">
            {netflixData.articles.map((item, index) => (
              <ArticleCard article={item} key={index} />
            ))}
          </div>

          {/* <div className="grid grid-cols-2 gap-4">
            {siecorpData.articles.map((item, index) => (
              <ArticleCard article={item} key={index} />
            ))}
          </div> */}

          <div className="grid grid-cols-2 gap-4">
            {salesforceData.articles.map((item, index) => (
              <ArticleCard article={item} key={index} />
            ))}
          </div>

          <div className="grid grid-cols-2 gap-4">
            {tinderData.articles.map((item, index) => (
              <ArticleCard article={item} key={index} />
            ))}
          </div>

          <div className="grid grid-cols-2 gap-4">
            {trustwaveData.articles.map((item, index) => (
              <ArticleCard article={item} key={index} />
            ))}
          </div>

          <div className="grid grid-cols-2 gap-4">
            {uberData.articles.map((item, index) => (
              <ArticleCard article={item} key={index} />
            ))}
          </div>
        </div>

        <DataLoader />
      </div>
      <Footer />
    </div>
  );
};

export default Articles;
