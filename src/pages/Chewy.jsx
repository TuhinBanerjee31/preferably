import React from 'react'
import Navbar from "../components/Navbar"
import CompanyHeader from '../components/CompanyHeader'
import CompanyCulture from '../components/CompanyCulture'
import CompanyReviews from '../components/CompanyReviews'
import CompanyOverviews from '../components/CompanyOverviews'
import ArticleContainer from '../components/ArticleContainer'
import CompanySalaries from '../components/CompanySalaries'
import Footer from "../components/Footer"
import { chewyData } from '../data/chewyData'

const Chewy = () => {
  return (
    <div>
      <Navbar />
      <CompanyHeader data={chewyData} />
      <CompanyCulture data={chewyData} />
      <CompanyReviews data={chewyData} />
      <CompanyOverviews data={chewyData} />
      <ArticleContainer data={chewyData} />
      <CompanySalaries data={chewyData} />
      <Footer />
    </div>
  )
}

export default Chewy