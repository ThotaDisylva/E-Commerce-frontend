import React from 'react'
import HomeSectionCarosel from '../../components/HomeCarosel/HomeSectionCarousel/HomeSectionCarousel'
import MainCarosel from '../../components/HomeCarosel/MainCarousel/MainCarosel'

const Home = () => {
  return (
    <div>
    <div className=''>
      <MainCarosel/>
    </div>
      
      <div className='space-y-10 pb-20 pt-10 flex flex-col justify-center px-5 lg:px-10'>
        <HomeSectionCarosel/>
        <HomeSectionCarosel/>
        <HomeSectionCarosel/>
        <HomeSectionCarosel/>
        <HomeSectionCarosel/>
      </div>
    </div>
  )
}

export default Home
