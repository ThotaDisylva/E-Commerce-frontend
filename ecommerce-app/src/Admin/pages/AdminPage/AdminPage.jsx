import React from "react";
import { Products } from "../ProductsPage/Products";
// import { AdminSidebar } from "../../Admin/AdminSidebar";
import { Dashboard } from "../DashboardPage/Dashboard";
import { CssBaseline } from "@mui/material";
import { Addproducts } from "../AddProductsPage/Addproducts";
import { Orders } from "../OrdersPage/Orders";
import { Route, Routes } from "react-router-dom";
import { Adminsidebar } from "../../Adminsidebar";

const AdminPage = () => {
  return (
    <div className="flex ">
      <CssBaseline />
      <div className="w-[15%]  border border-r-grey-300 h-full">
        <Adminsidebar/>
      </div>
      <div className="w-[85%]">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/products" element={<Products />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/addproduct" element={<Addproducts />} />
        </Routes>
      </div>
    </div>
  );
};

export default AdminPage;
