import React, { useEffect } from "react";
import OrderCard from "../../../components/MyOrder/OrderCard";
import useMyOrderPage from "../../../../hooks/useMyOrderPage";
import { Link } from "react-router-dom";
function MyOrderPage(){

    const { orders, loadOrderPage } = useMyOrderPage();
    console.log(orders);


    useEffect(() => {
        const load = async()=>{
           await loadOrderPage();
        }
        load(); 
    }, []);

    return(
    <div className="lg:px-60 ">
    {
        orders?.map((order)=>(
            <Link to={"/orderDetails"} state={{ fromOrder: { orderId: order.orderId } }}>
                <OrderCard orderInfo={order} />
            </Link>
        ))
    }
    </div>
    );
}
export default MyOrderPage;