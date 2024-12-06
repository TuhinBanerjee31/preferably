import React from 'react'
import Navbar from "../components/Navbar"
import CompanyHeader from '../components/CompanyHeader'
import CompanyCulture from '../components/CompanyCulture'
import CompanyReviews from '../components/CompanyReviews'
import CompanyOverviews from '../components/CompanyOverviews'
import ArticleContainer from '../components/ArticleContainer'
import CompanySalaries from '../components/CompanySalaries'
import Footer from "../components/Footer"
import { attData } from '../data/attData'

const Att = () => {
  return (
    <div>
      <Navbar />
      <CompanyHeader data={attData} />
      <CompanyCulture data={attData} />
      <CompanyReviews data={attData} />
      <CompanyOverviews data={attData} />
      <ArticleContainer data={attData} />
      <CompanySalaries data={attData} />
      <Footer />
    </div>
  )
}

export default Att