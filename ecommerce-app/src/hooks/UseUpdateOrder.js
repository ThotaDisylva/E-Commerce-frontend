import axios from 'axios';

export const updateOrderService = () => {
    // const jwtToken = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJzd2FzdGlrMS5wYWRoZWVAZW1haWwuY29tIiwiaWF0IjoxNzE2NzgzMTMyLCJleHAiOjE3MTY4Njk1MzJ9.dtDJARO5FX6MkLPMWQBOkZskDee6I9jaZcrMx_dffPHYyXu1Z7ZfGF33sFVResO8SN-qfEPjXIRtk9GtI4deIw'
  const jwtToken = localStorage.getItem('jwtToken');
    const updateOrder = async(order,orderId) => {
    if (jwtToken){
        try {
            const response = await axios.put(`http://localhost:8080/api/admin/orders/status/${orderId}`,order,{
                headers: {
                    Authorization: `Bearer ${jwtToken}`,
                  //   'Content-Type': 'application/json',
                  },
            }); 
            console.log("Order status updated")
            return orderId;
        }
       catch (error) {
        console.log(error)
    //   return rejectWithValue(error.message);
      }
    }
}
return {updateOrder}
}
export default updateOrderService
  