import React from 'react'
import Navbar from "../components/Navbar"
import CompanyHeader from '../components/CompanyHeader'
import CompanyCulture from '../components/CompanyCulture'
import CompanyReviews from '../components/CompanyReviews'
import CompanyOverviews from '../components/CompanyOverviews'
import ArticleContainer from '../components/ArticleContainer'
import CompanySalaries from '../components/CompanySalaries'
import Footer from "../components/Footer"
import { instacartData } from '../data/instacartData'

const Instacart = () => {
  return (
    <div>
      <Navbar />
      <CompanyHeader data={instacartData} />
      <CompanyCulture data={instacartData} />
      <CompanyReviews data={instacartData} />
      <CompanyOverviews data={instacartData} />
      <ArticleContainer data={instacartData} />
      <CompanySalaries data={instacartData} />
      <Footer />
    </div>
  )
}

export default Instacart