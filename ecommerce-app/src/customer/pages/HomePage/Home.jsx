import React from 'react'
import HomeSectionCarosel from '../../components/HomeCarosel/HomeSectionCarousel/HomeSectionCarousel'
import MainCarosel from '../../components/HomeCarosel/MainCarousel/MainCarosel'
import { useEffect } from 'react'
import useHomePageInfo from '../../../hooks/useHomePageInfo'
import { useUserInfoContext } from '../../../context/UserInfoContext'

const Home = () => {

  const {categoryInfo, loadHomePageInfo} = useHomePageInfo();

  

  useEffect(() => {
    const fetchData=async()=>{
      await loadHomePageInfo();
    }
    fetchData();
  }, []);

  return (
    <div>
      <div className=''>
        <MainCarosel/>
      </div>
      
      <div className='space-y-10 pb-20 pt-10 flex flex-col justify-center px-5 lg:px-10'>

      {categoryInfo?.map((subCategory) => (
          <HomeSectionCarosel
            key={subCategory.subCategoryId}
            subCategory={subCategory.subCategoryName}
            productsData={subCategory.products}
          />
        ))}
      </div>
    </div>
  )
}

export default Home
