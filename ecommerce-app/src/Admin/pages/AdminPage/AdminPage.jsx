import React from "react";
import { Products } from "../ProductsPage/Products";
import { Dashboard } from "../DashboardPage/Dashboard";
import { Addproducts } from "../AddProductsPage/Addproducts";
import { Orders } from "../OrdersPage/Orders";
import { Route, Routes } from "react-router-dom";
import { Adminsidebar } from "../../Adminsidebar";
import AdminProfile from "../AdminProfilePage/AdminProfile";

export const AdminPage = () => {
  return (
    <div className="flex h-full ">
      {/* <CssBaseline /> */}
      <div className="w-[15%]">
        <Adminsidebar/>
      </div>
      <div className="w-[85%]">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="products" element={<Products />} />
          <Route path="orders" element={<Orders />} />
          <Route path="addproduct" element={<Addproducts />} />
          <Route path = "account" element = {<AdminProfile/>}/>
        </Routes>
      </div>
    </div>
  );
};
