import React from 'react'

const CartItem = ({ProductsData}) => {
    const { brand, name, subtitle, image, price, discount } = ProductsData;
  return (
      <div className="p-5 shadow-lg border rounded-md mb-3 bg-white " style={{backgroundColor:"white"}}>
            <div className="flex items-center w-full">
                <div className="w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]">
                    <img className='object-fill w-full h-full object-top' src={image} alt={name} />
                </div>
                <div className="ml-5 space-y-1 w-full">
                    <div className="flex items-center justify-between w-full">
                    <div>
                        <p className="font-semibold float-right">{name}</p>
                        
                    </div>
                    <div>
                        <p className="py-1 px-7 border font-semibold rounded-sm">x1</p>
                    </div>
                    </div>
                      
                    <div className="flex space-x-5 items-center text-gray-900 pt-6">
                        {(discount===0) && (<p className="font-semibold">₹{price}</p>)}
                        {(discount!==0) && (<div><p className="font-semibold">₹{Math.floor(price-((discount/100)*price))}</p>
                        <p className="opacity-50 line-through">₹{price}</p>
                        <p className="text-green-600 font-semibold" >{discount}% OFF</p></div>)}
                        
                    </div>
                </div>
            </div>
    </div>
    
  )
}

export default CartItem
