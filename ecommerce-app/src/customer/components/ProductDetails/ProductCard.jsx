import React from "react";

const ProductCard = ({ product }) => {
  console.log(product);
  const { productId,imageUrl,title,brand,discountPercent,price,subtitle} = product;

  return (
    <div className="product-card w-64 max-w-sm h-100 p-4 border rounded-lg shadow-md">
      <div className="brand text-xs bg-gray-200 px-2 py-1 rounded-full">
        {brand}
      </div>
      <div className="relative w-full h-40">
        <img src={imageUrl} alt={title} className="absolute inset-0 object-contain rounded-lg" style={{ height: '100%', width: '100%' }} />
      </div>
      <div className="product-details mt-4">
        <div className="product-name text-base font-bold text-center">{title}</div>
        <div className="product-subtitle text-gray-600 text-center">{subtitle}</div>
        <div className="product-price mt-2 text-center">
          {
            (discountPercent===0)  && (<span className="price-discount text-base font-bold text-gray-800">₹{Math.floor(price-((discountPercent/100)*price))}    </span>) 
          }
          {
            (discountPercent!==0)  && (<div><span className="price-discount text-base font-bold text-gray-800">₹{Math.floor(price-((discountPercent/100)*price))}    </span>
            <span className="price-discount text-base font-bold text-gray-800 line-through opacity-50">₹{price}</span>
            <span className="discount text-base text-green-600 ml-2">{discountPercent}% off</span></div>)
          }
          {/* <span className="price-discount text-base font-bold text-gray-800">₹{Math.floor(price-((discount/100)*price))}    </span>
          <span className="price-discount text-base font-bold text-gray-800 line-through opacity-50">₹{price}</span>
          <span className="discount text-base text-green-600 ml-2">{discount}% off</span> */}
        </div>
        <div className="mt-4 text-center">
          <button className="add-to-cart-button w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;