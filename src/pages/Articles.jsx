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

const Articles = () => {
  return (
    <div>
      <Navbar />
      <div className="font-poppins">
        <h2 className="text-4xl text-[#333] font-medium text-center py-16">
          Have look at our latest Articles
        </h2>

        <div className="max-w-screen-2xl flex flex-col md:flex-row flex-wrap mx-auto justify-center gap-7 px-5 pb-10">
          {adobeData.articles.map((item, index) => (
            <div key={index}>
              <ArticleCard article={item} />
            </div>
          ))}

          {adpData.articles.map((item, index) => (
            <div key={index}>
              <ArticleCard article={item} />
            </div>
          ))}

          {bcgData.articles.map((item, index) => (
            <div key={index}>
              <ArticleCard article={item} />
            </div>
          ))}

          {chewyData.articles.map((item, index) => (
            <div key={index}>
              <ArticleCard article={item} />
            </div>
          ))}

          {elsevierData.articles.map((item, index) => (
            <div key={index}>
              <ArticleCard article={item} />
            </div>
          ))}

          {informaticaData.articles.map((item, index) => (
            <div key={index}>
              <ArticleCard article={item} />
            </div>
          ))}

          {instacartData.articles.map((item, index) => (
            <div key={index}>
              <ArticleCard article={item} />
            </div>
          ))}

          {netflixData.articles.map((item, index) => (
            <div key={index}>
              <ArticleCard article={item} />
            </div>
          ))}

          {siecorpData.articles.map((item, index) => (
            <div key={index}>
              <ArticleCard article={item} />
            </div>
          ))}

          {trustwaveData.articles.map((item, index) => (
            <div key={index}>
              <ArticleCard article={item} />
            </div>
          ))}

          {uberData.articles.map((item, index) => (
            <div key={index}>
              <ArticleCard article={item} />
            </div>
          ))}
        </div>

        <DataLoader />
      </div>
      <Footer />
    </div>
  );
};

export default Articles;