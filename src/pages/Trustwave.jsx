import React from 'react'
import Navbar from "../components/Navbar"
import CompanyHeader from '../components/CompanyHeader'
import CompanyCulture from '../components/CompanyCulture'
import CompanyReviews from '../components/CompanyReviews'
import CompanyOverviews from '../components/CompanyOverviews'
import ArticleContainer from '../components/ArticleContainer'
import CompanySalaries from '../components/CompanySalaries'
import Footer from "../components/Footer"
import { trustwaveData } from '../data/trustwaveData'

const Trustwave = () => {
  return (
    <div>
      <Navbar />
      <CompanyHeader data={trustwaveData} />
      <CompanyCulture data={trustwaveData} />
      <CompanyReviews data={trustwaveData} />
      <CompanyOverviews data={trustwaveData} />
      <ArticleContainer data={trustwaveData} />
      <CompanySalaries data={trustwaveData} />
      <Footer />
    </div>
  )
}

export default Trustwave