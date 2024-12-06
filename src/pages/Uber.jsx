import React from 'react'
import Navbar from "../components/Navbar"
import CompanyHeader from '../components/CompanyHeader'
import CompanyCulture from '../components/CompanyCulture'
import CompanyReviews from '../components/CompanyReviews'
import CompanyOverviews from '../components/CompanyOverviews'
import ArticleContainer from '../components/ArticleContainer'
import CompanySalaries from '../components/CompanySalaries'
import Footer from "../components/Footer"
import { uberData } from '../data/uberData'

const Uber = () => {
  return (
    <div>
      <Navbar />
      <CompanyHeader data={uberData} />
      <CompanyCulture data={uberData} />
      <CompanyReviews data={uberData} />
      <CompanyOverviews data={uberData} />
      <ArticleContainer data={uberData} />
      <CompanySalaries data={uberData} />
      <Footer />
    </div>
  )
}

export default Uber