import React from 'react'
import Navbar from "../components/Navbar"
import CompanyHeader from '../components/CompanyHeader'
import CompanyCulture from '../components/CompanyCulture'
import CompanyReviews from '../components/CompanyReviews'
import CompanyOverviews from '../components/CompanyOverviews'
import ArticleContainer from '../components/ArticleContainer'
import CompanySalaries from '../components/CompanySalaries'
import Footer from "../components/Footer"
import { bcgData } from '../data/bcgData'

const Bcg = () => {
  return (
    <div>
      <Navbar />
      <CompanyHeader data={bcgData} />
      <CompanyCulture data={bcgData} />
      <CompanyReviews data={bcgData} />
      <CompanyOverviews data={bcgData} />
      <ArticleContainer data={bcgData} />
      <CompanySalaries data={bcgData} />
      <Footer />
    </div>
  )
}

export default Bcg