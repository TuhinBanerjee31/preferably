import React from 'react'
import ArticleCard from './ArticleCard'

const ArticleContainer = () => {
  return (
    <div className='font-poppins py-20'>
      <h1 className='text-lg font-semibold max-w-screen-xl mx-auto py-2 px-4'>Adobe Article</h1>

      <div className='max-w-screen-xl flex mx-auto gap-7 px-5'>
        <ArticleCard />
        <ArticleCard />
      </div>
    </div>
  )
}

export default ArticleContainer
