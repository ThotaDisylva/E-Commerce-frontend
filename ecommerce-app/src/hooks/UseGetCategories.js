// src/Services/categoryService.js
import axios from 'axios';

const getCategories = async () => {
      const jwtToken = localStorage.getItem('jwtToken');
  // const jwtToken = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJzd2FzdGlrMS5wYWRoZWVAZW1haWwuY29tIiwiaWF0IjoxNzE2NzgzMTMyLCJleHAiOjE3MTY4Njk1MzJ9.dtDJARO5FX6MkLPMWQBOkZskDee6I9jaZcrMx_dffPHYyXu1Z7ZfGF33sFVResO8SN-qfEPjXIRtk9GtI4deIw'
  console.log("Inside getCategory");
  if (jwtToken) {
    try {
      const response = await axios.get('http://localhost:8080/api/admin/categories' ,{
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        //   'Content-Type': 'application/json',
        },
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching categories:', error);
      throw error;
    }
  }};
  
  export default getCategories;