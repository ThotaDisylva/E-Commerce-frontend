// const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:8080';
import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

export const addProductService = () => {
  const addProduct = async (product) => {
    const jwtToken = localStorage.getItem('jwtToken');
    // const jwtToken = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJzd2FzdGlrMS5wYWRoZWVAZW1haWwuY29tIiwiaWF0IjoxNzE2NzgzMTMyLCJleHAiOjE3MTY4Njk1MzJ9.dtDJARO5FX6MkLPMWQBOkZskDee6I9jaZcrMx_dffPHYyXu1Z7ZfGF33sFVResO8SN-qfEPjXIRtk9GtI4deIw'
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
  // console.log("Data",product);
  return { addProduct };
};




export default addProductService;