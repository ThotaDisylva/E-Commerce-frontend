import React, { useEffect } from "react";
import OrderCard from "../../../components/MyOrder/OrderCard";
import useMyOrderPage from "../../../../hooks/useMyOrderPage";
function MyOrderPage(){

    const { orders } = useMyOrderPage();
    console.log(orders);

    return(
    <div className="lg:px-60">
    {
        orders?.map((order)=>(
            <OrderCard orderInfo={order}/>
        ))
    }
    </div>
    );
}
export default MyOrderPage;