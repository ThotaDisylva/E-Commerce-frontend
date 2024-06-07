// src/Services/categoryService.js
import axios from 'axios';

const useAnalytics = async () => {
      const jwtToken = localStorage.getItem('jwtToken');
  if (jwtToken) {
    try {
      const response = await axios.get('http://localhost:8080/api/admin/salesdata' ,{
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
      });
    //   console.log(response.data);
      return response.data;
    } catch (error) {
      console.error('Error fetching categories:', error);
      throw error;
    }
  }};
  
  export default useAnalytics;