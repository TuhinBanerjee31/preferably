import React from 'react'
import Navbar from "../components/Navbar"
import CompanyHeader from '../components/CompanyHeader'
import CompanyCulture from '../components/CompanyCulture'
import CompanyReviews from '../components/CompanyReviews'
import CompanyOverviews from '../components/CompanyOverviews'
import ArticleContainer from '../components/ArticleContainer'
import CompanySalaries from '../components/CompanySalaries'
import Footer from "../components/Footer"
import { siecorpData } from '../data/siecorpData'

const Siecorp = () => {
  return (
    <div>
      <Navbar />
      <CompanyHeader data={siecorpData} />
      <CompanyCulture data={siecorpData} />
      <CompanyReviews data={siecorpData} />
      <CompanyOverviews data={siecorpData} />
      <ArticleContainer data={siecorpData} />
      <CompanySalaries data={siecorpData} />
      <Footer />
    </div>
  )
}

export default Siecorp