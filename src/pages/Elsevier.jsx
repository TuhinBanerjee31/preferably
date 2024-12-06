import React from 'react'
import Navbar from "../components/Navbar"
import CompanyHeader from '../components/CompanyHeader'
import CompanyCulture from '../components/CompanyCulture'
import CompanyReviews from '../components/CompanyReviews'
import CompanyOverviews from '../components/CompanyOverviews'
import ArticleContainer from '../components/ArticleContainer'
import CompanySalaries from '../components/CompanySalaries'
import Footer from "../components/Footer"
import { elsevierData } from '../data/elsevierData'

const Elsevier = () => {
  return (
    <div>
      <Navbar />
      <CompanyHeader data={elsevierData} />
      <CompanyCulture data={elsevierData} />
      <CompanyReviews data={elsevierData} />
      <CompanyOverviews data={elsevierData} />
      <ArticleContainer data={elsevierData} />
      <CompanySalaries data={elsevierData} />
      <Footer />
    </div>
  )
}

export default Elsevier