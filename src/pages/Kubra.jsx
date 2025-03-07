import React from 'react'
import Navbar from "../components/Navbar"
import CompanyHeader from '../components/CompanyHeader'
import CompanyCulture from '../components/CompanyCulture'
import CompanyReviews from '../components/CompanyReviews'
import CompanyOverviews from '../components/CompanyOverviews'
import ArticleContainer from '../components/ArticleContainer'
import CompanySalaries from '../components/CompanySalaries'
import Footer from "../components/Footer"
import { kubraData } from '../data/kubraData'

const Kubra = () => {
  return (
    <div>
            <Navbar />
      <CompanyHeader data={kubraData} />
      <CompanyCulture data={kubraData} />
      <CompanyReviews data={kubraData} />
      <CompanyOverviews data={kubraData} />
      <ArticleContainer data={kubraData} />
      <CompanySalaries data={kubraData} />
      <Footer />
    </div>
  )
}

export default Kubra
