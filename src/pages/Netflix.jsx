import React from 'react'
import Navbar from "../components/Navbar"
import CompanyHeader from '../components/CompanyHeader'
import CompanyCulture from '../components/CompanyCulture'
import CompanyReviews from '../components/CompanyReviews'
import CompanyOverviews from '../components/CompanyOverviews'
import ArticleContainer from '../components/ArticleContainer'
import CompanySalaries from '../components/CompanySalaries'
import Footer from "../components/Footer"
import { netflixData } from '../data/netflixData'

const Netflix = () => {
  return (
    <div>
      <Navbar />
      <CompanyHeader data={netflixData} />
      <CompanyCulture data={netflixData} />
      <CompanyReviews data={netflixData} />
      <CompanyOverviews data={netflixData} />
      <ArticleContainer data={netflixData} />
      <CompanySalaries data={netflixData} />
      <Footer />
    </div>
  )
}

export default Netflix