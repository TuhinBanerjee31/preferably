import React from 'react'
import Navbar from "../components/Navbar"
import CompanyHeader from '../components/CompanyHeader'
import CompanyCulture from '../components/CompanyCulture'
import CompanyReviews from '../components/CompanyReviews'
import CompanyOverviews from '../components/CompanyOverviews'
import ArticleContainer from '../components/ArticleContainer'
import CompanySalaries from '../components/CompanySalaries'
import Footer from "../components/Footer"
import { adobeData } from '../data/adobeData'

const Adobe = () => {
  return (
    <div>
      <Navbar />
      <CompanyHeader data={adobeData} />
      <CompanyCulture data={adobeData} />
      <CompanyReviews data={adobeData} />
      <CompanyOverviews data={adobeData} />
      <ArticleContainer data={adobeData} />
      <CompanySalaries data={adobeData} />
      <Footer />
    </div>
  )
}

export default Adobe
