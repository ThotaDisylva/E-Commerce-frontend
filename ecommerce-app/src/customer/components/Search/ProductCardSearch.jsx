import React from "react";
import { useSnackbar } from 'notistack';
import { Link } from "react-router-dom";
import useCartPageInfo from "../../../hooks/useCartPageInfo";
import toast from "react-hot-toast";
import { useUserInfoContext } from "../../../context/UserInfoContext";
import { CircularProgress } from "@mui/material";
function ProductCardSearch({ product }) {
  const {addCartItem, loading}= useCartPageInfo();

  const { role } = useUserInfoContext();
  const handleAddToBag = async(e) => {
    if (role !== null) {
      e.stopPropagation();
      await addCartItem(product.productId);
      if (!loading) {
        toast.success("Added to Cart");
      }
    } else {
      toast.error("Sign in to add items to cart");
    }
  };
  return (
    
    <div className="sm:flex sm:items-center p-2 sm:p-4 bg-white rounded shadow-md w-full">
      
      <div className="flex items-center sm:w-[75%]">
        <img
          src={product.imageUrl}
          alt={product.title}
          className="w-1/4 px-2 h-48 object-contain rounded-t"
        />
        <Link to={`/productDetails/${product.productId}`}>
        <div className="flex flex-col p-4">
          <h2 className="text-lg sm:text-2xl font-bold">{product.title}</h2>
          <p className="text-sm sm:text-lg text-gray-600">{product.subtitle}</p>
          <p className="text-sm sm:text-lg text-gray-600">{product.brand}</p>
          <div className="flex items-center space-x-3">
          {(product.discountPercent!=0) && (
              <>
            <span className="text-lg sm:text-2xl font-bold">₹{(product.price-product.price*(product.discountPercent/100)).toFixed(2)}</span>
            
                <span className="text-sm sm:text-lg text-gray-600 line-through">₹{product.price}</span>
                <span className="text-sm sm:text-lg text-red-600">{`(${(product.discountPercent)}% off)`}</span>
              </>
            )}
            {(product.discountPercent===0) && (
              <>
            <span className="text-lg sm:text-2xl font-bold">₹{product.price.toFixed(2)}</span>
              </>
            )}
          </div>
          {(product.discountPercent!=0) && (
            <p className="text-sm sm:text-lg text-gray-600">
              Discount: <span className="font-bold">₹{(product.price*(product.discountPercent/100)).toFixed(2)}</span>
            </p>
          )}
        </div>
        </Link>
      </div>
      
      <div className="flex justify-between sm:flex-col sm:space-y-4 sm:flex-1">
        <button
          type="button"
          className="sm:w-[10rem] w-[49%] rounded-md border border-transparent bg-blue-500 px-8 py-3 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-offset-2"
          onClick={handleAddToBag}
          disabled={loading}
        >
          {loading ? <CircularProgress size={"20px"}/> : "Add to cart"}
        </button>
        
      </div>
    </div>
  );
}
export default ProductCardSearch;





