import { Route, Routes, useLocation } from "react-router-dom";
import ListProduct from "../../components/Product/ListProduct";
// import AddProduct from "../../components/Product/AddProduct";

import AddCategory from "../../components/Category/AddCategory";
import ListCategory from "../../components/Category/ListCategory";
import Dashboard from "../Dashboard";
import Sidebar from "../../components/Cards/Sidebar";
import AdminNavbar from "../../components/AdminNavbar";
import HeaderStats from "../../components/HeaderStats";
import Tables from "../Tables";
import Add from "../AddProduct";
import Messages from "../Messages";
import EditCategory from "../../components/Category/EditCategory";
import EditProduct from "../../components/Product/EditProduct";
import ListCoupon from "../../components/Coupon/ListCoupon";
import AddCoupon from "../../components/Coupon/AddCoupon";
import Login from "../Login";

const Admin = () => {
  const location = useLocation();

  const isRootPath = location.pathname === "/";

  return (
    <>

      {/* <Sidebar /> */}
      {!isRootPath && <Sidebar />}

      

      <Routes>
        <Route path="/all-products" element={<ListProduct/>} />
        <Route path="/addproduct" element={<Add/>} />
        <Route path="all-products/edit-product" element={<EditProduct/>} />
        <Route path="/add-categories" element={<AddCategory />} />
        <Route path="/all-categories" element={<ListCategory />} />
        <Route path="/edit-category" element={<EditCategory />} />
        <Route path="/add-coupon" element={<AddCoupon />} />
        <Route path="/all-coupons" element={<ListCoupon/>} />
        <Route path="/" element={<Login />} />
        <Route path="/orders" element={<Tables/>} />
        <Route path="/messages" element={<Messages/>} />




      </Routes>
    </>
  );
};

export default Admin;