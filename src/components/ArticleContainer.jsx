import React from 'react'
import ArticleCard from './ArticleCard'
import { Link } from 'react-router-dom'

const ArticleContainer = (props) => {
  return (
    <div className='font-poppins py-20'>
      <h1 className='text-lg font-semibold max-w-screen-xl mx-auto py-2 px-4'>{props.data.title} Article</h1>

      <div className='max-w-screen-xl flex flex-col md:flex-row mx-auto gap-7 px-5'>
        {props.data.articles.map((item, index) => (
          <Link reloadDocument to={item.articleLink} key= {index}>
            <ArticleCard article={item} />
          </Link>
        ))}
      </div>
    </div>
  )
}

export default ArticleContainer
