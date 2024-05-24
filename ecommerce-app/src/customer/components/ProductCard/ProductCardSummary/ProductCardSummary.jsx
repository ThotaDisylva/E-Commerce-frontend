import React from "react";
const ProductCardSummary=({product})=>{
    const { brand, title, subtitle, imgURL, discountedPrice, quantity } = product;

    return(
        <div className="p-5 shadow-lg border rounded-md mb-3 bg-white">
            <div className="flex items-center w-full">
                <div className="w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]">
                    <img className='object-fill w-full h-full object-top' src={imgURL} alt={title} />
                </div>
                <div className="ml-5 space-y-1 w-full">
                    <div className="flex items-center justify-between w-full">
                    <div>
                        <p className="font-semibold float-right">{title}</p>
                    </div>
                    <div>
                        <p className="py-1 px-7 border font-semibold rounded-sm">x1</p>
                    </div>
                    </div>
                    <p className="opacity-70">{subtitle}</p>
                    <p className="opacity-70 mt-2">{brand}</p>
                    <div className="flex space-x-5 items-center text-gray-900 pt-6">
                        <p className="font-semibold">Price: ₹{discountedPrice}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ProductCardSummary;