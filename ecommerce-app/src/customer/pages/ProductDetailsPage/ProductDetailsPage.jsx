
import { useState } from 'react'
import Caroussel from '../../components/ProductDetails/Caroussel'

const product = {
  name: 'Basic Tee 6-Pack Shirts XXXL Size Combo UCB Slim Fit',
  brand:'United Colors of Benetton',
  price: 192,
  discount:30,
  href: '#',
  breadcrumbs: [
    { id: 1, name: 'Men', href: '#' },
    { id: 2, name: 'Clothing', href: '#' },
  ],
  image: [
    {
      src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg',
      alt: 'Two each of gray, white, and black shirts laying flat.',
    }
  ],
  description:
    'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
  highlights: [
    'Hand cut and sewn locally',
    'Dyed with our proprietary colors',
    'Pre-washed & pre-shrunk',
    'Ultra-soft 100% cotton',
  ],
  }

export default function ProductDetailsPage() {
  return (
    <div>
      <div className="pt-6">
        
        <div className="mx-auto my-auto mt-6 bg-white pt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
          <div className="aspect-h-5 aspect-w-4 col-span-1 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg">
            <img
              src={product.image[0].src}
              alt={product.image[0].alt}
              className="h-full w-full object-cover object-center"
            />       
          </div>
          <div className="lg:mt-0 h-full content-center sm:pl-5">
          <div className="lg:border-gray-200 lg:pr-8">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{product.name}</h1>
            <p className="text-2xl tracking-tight text-gray-900 opacity-50">{product.brand}</p>
          </div>
          <div className='flex space-x-3 items-baseline'>
            <p className="text-3xl font-bold tracking-tight text-gray-900">₹{Math.floor(product.price-(product.discount/100)*product.price)}</p>
            <p className="text-2xl tracking-tight text-gray-900 opacity-50 line-through">₹{product.price}</p>
            <p className="text-green-600 text-2xl font-semibold">({product.discount}% Off)</p>
            </div>
            <p className="text-green-600 font-semibold">Inclusive of all taxes</p>
            <form className="mt-10">
              <button
                type="submit"
                className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-blue-500 px-8 py-3 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-offset-2">
                Add to bag
              </button>
              <button
                type="submit"
                className=" mt-3 flex w-full items-center justify-center rounded-md border border-transparent bg-blue-500 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-offset-2">
                Buy Now
              </button>
            </form>
          </div>
        </div>
        <div className="mx-auto bg-white max-w-2xl px-4 sm:px-6 lg:grid lg:max-w-7xl lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24">   
          <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
            <div>
              <div className="space-y-6">
                <p className="text-base text-gray-900">{product.description}</p>
              </div>
            </div>
            <div className="mt-5">
              <h3 className="text-sm font-medium text-gray-900">Highlights</h3>

              <div className="mt-4">
                <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                  {product.highlights.map((highlight) => (
                    <li key={highlight} className="text-gray-400">
                      <span className="text-gray-600">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          
        </div>
        <div className="mx-auto my-auto mt-6 h-fit bg-white pt-6 max-w-2xl sm:px-6 pb-12 lg:max-w-7xl lg:gap-x-8 lg:px-8">
        <Caroussel />
        </div>
      </div>
      
    </div>
  )
}