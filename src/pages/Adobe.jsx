import React from 'react'
import Navbar from "../components/Navbar"
import CompanyHeader from '../components/CompanyHeader'
import CompanyCulture from '../components/CompanyCulture'
import CompanyReviews from '../components/CompanyReviews'
import CompanyOverviews from '../components/CompanyOverviews'
import ArticleContainer from '../components/ArticleContainer'
import CompanySalaries from '../components/CompanySalaries'
import Footer from "../components/Footer"

const Adobe = () => {
  return (
    <div>
      <Navbar />
      <CompanyHeader />
      <CompanyCulture />
      <CompanyReviews />
      <CompanyOverviews />
      <ArticleContainer />
      <CompanySalaries />
      <Footer />
    </div>
  )
}

export default Adobe
