import React from 'react'

const ArticleCard = (props) => {
  return (
    <div className='w-[25rem] md:w-[35rem] border-2 mx-auto py-3 px-5 col-span-2 lg:col-span-1 rounded-md cursor-pointer'>
      <div className='flex gap-4 items-center'>
        <div className='w-12 p-2 border-2 rounded-md'><img src={props.article.logo} /></div>

        <div>
            <h5 className='text-sm font-semibold'>{props.article.articleTitle}</h5>
            <p className='text-sm'>{props.article.articleDate}</p>
        </div>
      </div>

      <p className='text-xs tracking-wider py-3'>{props.article.articleBio}</p>

      {/* <div>
        <img src={props.article.articleImg} />
      </div> */}
    </div>
  )
}

export default ArticleCard
