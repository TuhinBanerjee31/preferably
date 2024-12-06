import React from 'react'
import Navbar from "../components/Navbar"
import CompanyHeader from '../components/CompanyHeader'
import CompanyCulture from '../components/CompanyCulture'
import CompanyReviews from '../components/CompanyReviews'
import CompanyOverviews from '../components/CompanyOverviews'
import ArticleContainer from '../components/ArticleContainer'
import CompanySalaries from '../components/CompanySalaries'
import Footer from "../components/Footer"
import { informaticaData } from '../data/informaticaData'

const Informatica = () => {
  return (
    <div>
      <Navbar />
      <CompanyHeader data={informaticaData} />
      <CompanyCulture data={informaticaData} />
      <CompanyReviews data={informaticaData} />
      <CompanyOverviews data={informaticaData} />
      <ArticleContainer data={informaticaData} />
      <CompanySalaries data={informaticaData} />
      <Footer />
    </div>
  )
}

export default Informatica