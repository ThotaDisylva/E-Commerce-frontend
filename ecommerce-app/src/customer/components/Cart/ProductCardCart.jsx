import React, { useState } from "react";
import { Button, IconButton } from "@mui/material";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import useCartPageInfo from "../../../hooks/useCartPageInfo";
const ProductCardCart = ({ cartItem }) => {
  const {
    cartId,
    productId,
    brand,
    title,
    subTitle,
    imageUrl,
    price,
    discountPercent,
    quantity,
  } = cartItem;

  const { reduceCartItem, addCartItem, removeCartItem, loading } =
    useCartPageInfo();
    const [showRemovePopup, setShowRemovePopup] = useState(false);

  const incrementCount = () => {
    addCartItem(productId);
  };
  const decrementCount = () => {
    reduceCartItem(cartId);
  };

  const handleRemove = () => {
    setShowRemovePopup(true);
  };

  const confirmRemove = () => {
    setShowRemovePopup(false);
    removeCartItem(cartId, quantity);
  };

  const cancelRemove = () => {
    setShowRemovePopup(false);
  };

  return (
    <div className="p-5 shadow-lg border rounded-md mb-3 bg-white">
      <div className="flex items-center">
        <div className="w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]">
          <img
            className="object-fill w-full h-full object-top"
            src={imageUrl}
            alt={title}
          />
        </div>
        <div className="ml-5 space-y-1">
          <p className="font-semibold">{title}</p>
          <p className="opacity-70">{subTitle}</p>
          <p className="opacity-70 mt-2">{brand}</p>
          <div className="flex space-x-5 items-center text-gray-900 pt-6">
            <p className="font-semibold">
              ₹{Math.floor(price - (discountPercent / 100) * price)}
            </p>
            <p className="opacity-50 line-through">₹{price}</p>
            <p className="text-green-600 font-semibold">
              {discountPercent}% OFF
            </p>
          </div>
        </div>
      </div>
      <div className="lg:flex items-center lg:space-x-10 pt-4">
        <div className="flex items-center space-x-2">
          <IconButton
            className="hover:text-blue-700"
            disabled={loading || quantity === 1}
            onClick={decrementCount}
          >
            <RemoveCircleOutlineIcon />
          </IconButton>
          <span className="py-1 px-7 border rounded-sm">{quantity}</span>
          <IconButton
            onClick={incrementCount}
            disabled={loading}
            className="hover:text-blue-700"
          >
            <AddCircleOutlineIcon />
          </IconButton>
          <div className="w-5" />
          <Button
            onClick={handleRemove}
            sx={{
              color: "black",
              fontWeight: "bold",
              "&:hover": { color: "#4a90e2" },
            }}
          >
            remove
          </Button>
        </div>
      </div>
      {showRemovePopup && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <p className="mb-4">Are you sure you want to remove this item?</p>
            <div className="flex space-x-4">
              <button
                onClick={confirmRemove}
                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-700"
              >
                Remove
              </button>
              <button
                onClick={cancelRemove}
                className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-700"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default ProductCardCart;
