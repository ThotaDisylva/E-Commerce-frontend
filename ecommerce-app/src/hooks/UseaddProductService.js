import axios from 'axios';
import toast from 'react-hot-toast';

const API_URL = import.meta.env.VITE_API_URL;

export const addProductService = () => {
  const addProduct = async ({ product }) => {
    const jwtToken = localStorage.getItem('jwtToken');
    const success = handleInputErrors({ product });
    if (!success) return;
    if (jwtToken) {
      try {
        const response = await axios.post('http://localhost:8080/api/admin/products/addProduct', product, {
          headers: {
            Authorization: `Bearer ${jwtToken}`,
            'Content-Type': 'application/json',
          },
        });
        console.log("Product creating");
        return response.data;
      } catch (error) {
        console.error('Error adding product:', error);
        throw error;
      }
    } else {
      throw new Error('JWT token is missing');
    }
  };
  return { addProduct };
};


export default addProductService;

function handleInputErrors({ product }) {
  if (!product.imageUrl || !product.title || !product.subtitle || !product.brand || !product.quantityAvailable || !product.price || !product.discountPercent || !product.deliveryCharges ||
    !product.category || !product.subCategory || !product.description || !product.productHighlights) {
    toast.error('Please fill in all fields');
    return false;
  }
  return true;
}