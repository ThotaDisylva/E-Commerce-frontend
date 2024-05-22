import "./App.css";
import Footer from "./customer/components/Footer/Footer";
import NavBar from "./customer/components/Header/NavBar";
import OrderDetailsPage from "./customer/pages/OrderDetailsPage/OrderDetailsPage";
import Home from './customer/pages/HomePage/Home'
import { Toaster } from "react-hot-toast";
import CartPage from "./customer/pages/CartPage/CartPage";

import { Route, Routes } from "react-router-dom";
import SearchPage from "./customer/pages/SearchPage/SearchPage";
import { useEffect, useState } from "react";
import CheckoutAddressPage from "./customer/pages/CheckoutAddressPage/CheckoutAddressPage";
import OrderSummaryPage from "./customer/pages/OrderSummaryPage/OrderSummaryPage";
import MyProfilePage from "./customer/pages/MyProfilePage/MyProfilePage";
import ProductDetailsPage from "./customer/pages/ProductDetailsPage/ProductDetailsPage";
import AdminPage from "./Admin/pages/AdminPage/AdminPage";

function App() {

  const [admin, setAdmin] = useState(false);

  useEffect(()=>{
    const temp = localStorage.getItem("ecommerce-app");
    if(localStorage.getItem("role") === "admin"){
      setAdmin(true)
    }
  },[])

  
  return (
    <>

      {!admin && (<div>
        <NavBar/>
      </div>)}
      <div className={admin? "pt-[2rem]":"pt-[6rem]"}>
      <Toaster/>
        <Routes>
            <Route path="/" element=<Home />/>
            <Route path="/cart" element=<CartPage />/>
            <Route path="/checkoutAddress" element=<CheckoutAddressPage/>/>
            <Route path="/orderSummary" element=<OrderSummaryPage />/>
            <Route path="/profile" element=<MyProfilePage />/>
            {/* <Route path="/profileDetails" element=<ProfileDetailsPage />/>
            <Route path="/address" element=<SavedAddressPage />/>*/}
            <Route path="/orderDetails" element=<OrderDetailsPage />/> 
            <Route path="/search" element=<SearchPage/>/>
            <Route path="/productDetails" element=<ProductDetailsPage />/>
            {admin && (<Route path="/admin" element=<AdminPage/>/>)}
        </Routes>
        
      </div>
      {!admin && (<div>
        <Footer/>
      </div>)}
    </>
  );
}

export default App;
