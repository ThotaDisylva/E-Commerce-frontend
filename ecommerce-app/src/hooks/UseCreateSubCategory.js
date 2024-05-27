// categoryService.js
import axios from 'axios';

const addSubCategory = async (category,subCategory) => {
        const jwtToken = localStorage.getItem('jwtToken');
    // const jwtToken = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJzd2FzdGlrMS5wYWRoZWVAZW1haWwuY29tIiwiaWF0IjoxNzE2NzgzMTMyLCJleHAiOjE3MTY4Njk1MzJ9.dtDJARO5FX6MkLPMWQBOkZskDee6I9jaZcrMx_dffPHYyXu1Z7ZfGF33sFVResO8SN-qfEPjXIRtk9GtI4deIw'

    if (jwtToken) {
    try {
        const response = await axios.post(`http://localhost:8080/api/admin/subcategories`,{ subCategoryName:subCategory,categoryName:category },
            {
                headers: {
                    Authorization: `Bearer ${jwtToken}`,
                    'Content-Type': 'application/json',
                },
            }
        );
        return response.data;
    } catch (error) {
        console.error('Error adding category:', error);
        throw error;
    }}
};

export default addSubCategory;
