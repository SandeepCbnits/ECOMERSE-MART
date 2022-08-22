import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../components/Auth/Login";
import Signup from "../components/Auth/Signup";
import Cart from "../components/Cart/Cart";
import DetailPage from "../components/DetailPage/DetailPage";
import HomeAndKitchen from "../components/Home/HomeAndKitchen/HomeAndKitchen";
import About from "../Pages/About/About";
import Category from "../Pages/Category/Category";
import Contact from "../Pages/Contact/Contact";
import HomePage from "../Pages/HomePage";
import WishList from "../Pages/WishList/WishList";

const EcomerseNavigator = ({addToCartHandler, cartItems, items}) => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/" element={<HomePage addToCartHandler={addToCartHandler} items={items} />} />
      <Route path="/home-kitchen" element={<HomeAndKitchen />} />
      <Route path="/chare" element={<DetailPage />} />
      <Route path="/category" element={<Category />} />
      <Route path="/wishlist" element={<WishList />} />
      <Route path="/about" element={<About />} />
      
      <Route path="/contact" element={<Contact />} />
      <Route path="/cart" element={<Cart  cartItems={cartItems} />} />
    </Routes>
  );
};

export default EcomerseNavigator;
