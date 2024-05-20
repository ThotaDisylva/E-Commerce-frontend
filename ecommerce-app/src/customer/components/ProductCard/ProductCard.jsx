import React from "react";

const ProductCard = ({ product }) => {
  const { brand, name, subtitle, image, price, discount } = product;

  return (
    <div className="product-card w-56 max-w-sm p-4 border rounded-lg shadow-md bg-white">
      <div className="brand text-xs bg-gray-200 px-2 py-1 rounded-full">
        {brand}
      </div>
      <div className="relative w-full h-40">
        <img src={image} alt={name} className="absolute inset-0 object-contain rounded-lg" style={{ height: '100%', width: '100%' }} />
      </div>
      <div className="product-details mt-4">
        <div className="product-name text-lg font-bold text-center">{name}</div>
        <div className="product-subtitle text-gray-600 text-center">{subtitle}</div>
        <div className="product-price mt-2 text-center">
          <span className="price-discount text-xl font-bold text-gray-800">₹{Math.floor(price-((discount/100)*price))}    </span>
          <span className="price-discount text-xl font-bold text-gray-500 line-through">₹{price}</span>
          <span className="discount text-green-600 ml-2">{discount}% off</span>
        </div>
        <div className="mt-4 text-center">
          <button className="add-to-cart-button w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;