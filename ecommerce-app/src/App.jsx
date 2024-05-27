import "./App.css";
import Footer from "./customer/components/Footer/Footer";
import NavBar from "./customer/components/Header/NavBar";
import OrderDetailsPage from "./customer/pages/OrderDetailsPage/OrderDetailsPage";
import Home from './customer/pages/HomePage/Home'
import { Toaster } from "react-hot-toast";
import CartPage from "./customer/pages/CartPage/CartPage";

import { Navigate, Route, Routes } from "react-router-dom";
import SearchPage from "./customer/pages/SearchPage/SearchPage";
import { useEffect, useState } from "react";
import CheckoutAddressPage from "./customer/pages/CheckoutAddressPage/CheckoutAddressPage";
import OrderSummaryPage from "./customer/pages/OrderSummaryPage/OrderSummaryPage";
import MyProfilePage from "./customer/pages/MyProfilePage/MyProfilePage";
import ProductDetailsPage from "./customer/pages/ProductDetailsPage/ProductDetailsPage";
import { useUserInfoContext } from "./context/UserInfoContext";
import useNavbar from "./hooks/useNavbar";
import { AdminPage } from "./Admin/pages/AdminPage/AdminPage";
import PaymentSuccessfullPage from "./customer/pages/PaymentSuccessfull/PaymentSuccessfullPage";

function App() {

  const {role, cartItemCount, categoriesDetails} = useUserInfoContext();
  const {getCategoriesDetails} = useNavbar();
  const [filters, setFilters] = useState({
    keyword: '',
    category: '',
    subcategory:'',
    sortByPrice: -1,
    sortByDate: -1,
  });

  useEffect(()=>{
    if(role!=="admin"){
      getCategoriesDetails();
    }
  },[]);




  return (
    <>

      {!(role==="admin") && (<div>
        <NavBar cartItemCount={role===null? 0: cartItemCount} categoriesDetails={categoriesDetails} filters={filters} setFilters={setFilters}/>
      </div>)}
      <div className={(role==="admin")? "pt-[2rem]":"pt-[6rem]"}>
      <Toaster/>
        <Routes>
            <Route path="/" element={(role==="admin") ? <Navigate to="/admin"/> : <Home/>}/>
            <Route path="/cart" element=<CartPage />/>
            <Route path="/checkoutAddress" element=<CheckoutAddressPage/>/>
            <Route path="/orderSummary" element=<OrderSummaryPage />/>
            <Route path="/profile" element=<MyProfilePage />/>
            {/* <Route path="/profileDetails" element=<ProfileDetailsPage />/>
            <Route path="/address" element=<SavedAddressPage />/>*/}
            <Route path="/orderDetails" element=<OrderDetailsPage />/> 
            <Route path="/search" element=<SearchPage/> filters={filters} setFilters={setFilters}/>
            <Route path="/productDetails/:productId" element=<ProductDetailsPage />/>
            <Route path="/paymentsuccessfull/:orderId" element=<PaymentSuccessfullPage/>/>
            <Route path="/admin/*" element={(role!=="admin") ? <Navigate to="/"/> : <AdminPage/>}/>
        </Routes>
        
      </div>
      {!(role==="admin")&& (<div>
        <Footer/>
      </div>)}
    </>
  );
}

export default App;
