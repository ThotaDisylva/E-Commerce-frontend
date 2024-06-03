import React from "react";
import { useNavigate } from "react-router-dom";
import useCartPageInfo from "../../../hooks/useCartPageInfo";
import toast from "react-hot-toast";
import { useUserInfoContext } from "../../../context/UserInfoContext";

const ProductCard = ({ product }) => {
  const {
    productId,
    imageUrl,
    title,
    brand,
    discountPercent,
    price,
    subtitle,
    productQuantity
  } = product;

  const navigate = useNavigate();
  const { loading, addCartItem } = useCartPageInfo();

  const handleProductClick = () => {
    navigate(`/productDetails/${product.productId}`);
  };

  const { role } = useUserInfoContext();

  const handleAddToCart = (e) => {
    if (role !== null) {
      e.stopPropagation();
      addCartItem(productId,productQuantity);
      if (!loading) {
        toast.success("Added to Cart");
      }
    } else {
      toast.error("Sign in to add items to cart");
    }
  };

  return (
    <div
      className="product-card w-64 max-w-sm h-100 p-4 border rounded-lg shadow-md"
      
    >
      <div className="brand text-xs bg-gray-200 px-2 py-1 rounded-full" onClick={handleProductClick}>
        {brand}
      </div>
      <div className="relative w-full h-40" onClick={handleProductClick}>
        <img
          src={imageUrl}
          alt={title}
          className="absolute inset-0 object-contain rounded-lg"
          style={{ height: "100%", width: "100%" }}
        />
      </div>
      <div className="product-details mt-4" onClick={handleProductClick}>
        <div className="product-name text-base font-bold text-center">
          {title}
        </div>
        <div className="product-subtitle text-gray-600 text-center">
          {subtitle}
        </div>
        <div className="product-price mt-2 text-center">
          {discountPercent === 0 && (
            <span className="price-discount text-base font-bold text-gray-800">
              ₹{Math.floor(price - (discountPercent / 100) * price)}{" "}
            </span>
          )}
          {discountPercent !== 0 && (
            <div>
              <span className="price-discount text-base font-bold text-gray-800">
                ₹{Math.floor(price - (discountPercent / 100) * price)}{" "}
              </span>
              <span className="price-discount text-base font-bold text-gray-800 line-through opacity-50">
                ₹{price}
              </span>
              <span className="discount text-base text-green-600 ml-2">
                {discountPercent}% off
              </span>
            </div>
          )}

        </div>
      </div>
      <div className="mt-4 text-center">
        <button
          onClick={handleAddToCart}
          className="add-to-cart-button w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
