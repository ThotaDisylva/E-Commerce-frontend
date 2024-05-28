
import { useEffect, useState } from 'react'
import Caroussel from '../../components/ProductDetails/Caroussel'
import useProductDetails from '../../../hooks/useProductDetails';
import useCartPageInfo from '../../../hooks/useCartPageInfo';
import { useParams } from 'react-router-dom';
import useHomePageInfo from '../../../hooks/useHomePageInfo';
import HomeSectionCarousel from '../../components/HomeCarosel/HomeSectionCarousel/HomeSectionCarousel';


export default function ProductDetailsPage() {
  const { productId } = useParams();
  console.log(productId);
  const {categoryInfo, loadHomePageInfo} = useHomePageInfo();
  useEffect(() => {
    const fetchData=async()=>{
      await loadHomePageInfo();
    }
    fetchData();
  }, []);
  
  console.log(categoryInfo);
  const {productInfo, productPageInfo} = useProductDetails();
  
  const {addCartItem}= useCartPageInfo();


  const handleAddToCart =()=>{
    addCartItem(productId);
  }

  useEffect(() => {
    const fetchData=async()=>{
      await productPageInfo(productId);
    }
    fetchData();
    console.log(productInfo);
  }, []);
  return (
    <div>
      <div className="pt-6">
        
        <div className="mx-auto my-auto mt-6 bg-white pt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
          <div className="aspect-h-5 aspect-w-4 col-span-1 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg">
            <img
              src={productInfo.imageUrl}
              alt={productInfo.title}
              className="h-full w-full object-cover object-center"
            />       
          </div>
          <div className="lg:mt-0 h-full content-center sm:pl-5">
          <div className="lg:border-gray-200 lg:pr-8">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{productInfo.title}</h1>
            <p className="text-2xl tracking-tight text-gray-900 opacity-50">{productInfo.brand}</p>
          </div>
          <div className='flex space-x-3 items-baseline'>
            <p className="text-3xl font-bold tracking-tight text-gray-900">₹{Math.floor(productInfo.price-(productInfo.discountPercent/100)*productInfo.price)}</p>
            <p className="text-2xl tracking-tight text-gray-900 opacity-50 line-through">₹{productInfo.price}</p>
            <p className="text-green-600 text-2xl font-semibold">({productInfo.discountPercent}% Off)</p>
            </div>
            <p className="text-green-600 font-semibold">Inclusive of all taxes</p>
            <form className="mt-10" >
              <button
                type="submit"
                className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-blue-500 px-8 py-3 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-offset-2"
                onClick={handleAddToCart}
                >
                Add to cart
              </button>
              {/* <button
                type="submit"
                className=" mt-3 flex w-full items-center justify-center rounded-md border border-transparent bg-blue-500 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-offset-2">
                Buy Now
              </button> */}
            </form>
          </div>
        </div>
        <div className="mx-auto bg-white max-w-2xl px-4 sm:px-6 lg:grid lg:max-w-7xl lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24">   
          <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
            <div>
              <div className="space-y-6">
                <p className="text-base text-gray-900">{productInfo.description}</p>
              </div>
            </div>
            <div className="mt-5">
              <h3 className="text-sm font-medium text-gray-900">Highlights</h3>

              <div className="mt-4">
                {productInfo.productHighlights}
              </div>
            </div>
          </div>
          
        </div>
        <div className="mx-auto my-auto mt-6 h-fit bg-white pt-6 max-w-2xl sm:px-6 pb-12 lg:max-w-7xl lg:gap-x-8 lg:px-8">
        {categoryInfo?.map((subCategory) => (
          <Caroussel
            key={subCategory.subCategoryId}
            subCategory={subCategory.subCategoryName}
            productsData={subCategory.products}
          />
        ))}
        </div>
      </div>
      
    </div>
  )
}