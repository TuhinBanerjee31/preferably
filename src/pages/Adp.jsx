import React from 'react'
import Navbar from "../components/Navbar"
import CompanyHeader from '../components/CompanyHeader'
import CompanyCulture from '../components/CompanyCulture'
import CompanyReviews from '../components/CompanyReviews'
import CompanyOverviews from '../components/CompanyOverviews'
import ArticleContainer from '../components/ArticleContainer'
import CompanySalaries from '../components/CompanySalaries'
import Footer from "../components/Footer"
import { adpData } from '../data/adpData'

const Adp = () => {
  return (
    <div>
      <Navbar />
      <CompanyHeader data={adpData} />
      <CompanyCulture data={adpData} />
      <CompanyReviews data={adpData} />
      <CompanyOverviews data={adpData} />
      <ArticleContainer data={adpData} />
      <CompanySalaries data={adpData} />
      <Footer />
    </div>
  )
}

export default Adp