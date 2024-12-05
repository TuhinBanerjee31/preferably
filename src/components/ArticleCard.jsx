import React from 'react'

const ArticleCard = () => {
  return (
    <div className='max-w-screen-sm border-2 py-3 px-5 rounded-md cursor-pointer'>
      <div className='flex gap-4 items-center'>
        <div className='w-12 p-2 border-2 rounded-md'><img src='https://cdn.comparably.com/27157874/l/25736_logo_adobe.png' /></div>

        <div>
            <h5 className='text-sm font-semibold'>Think you know Adobe?</h5>
            <p className='text-sm'>January 26th, 2021</p>
        </div>
      </div>

      <p className='text-xs tracking-wider py-3'>There's more than meets the eye when it comes to Adobe. Take the quiz and see how well you know us!</p>

      <div>
        <img src='https://s3-us-west-1.amazonaws.com/companies.comparably.com/25736/25736-1611677472418.png' />
      </div>
    </div>
  )
}

export default ArticleCard
