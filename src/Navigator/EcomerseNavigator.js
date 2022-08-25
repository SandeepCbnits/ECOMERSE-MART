import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Route, Routes , Navigate} from "react-router-dom";
import Login from "../components/Auth/Login";
import Signup from "../components/Auth/Signup";
import Cart from "../components/Cart/Cart";
import DetailPage from "../components/DetailPage/DetailPage";
import HomeAndKitchen from "../components/Home/HomeAndKitchen/HomeAndKitchen";
import Profile from "../components/Profile/Profile";
import About from "../Pages/About/About";
import Category from "../Pages/Category/Category";
import Contact from "../Pages/Contact/Contact";
import HomePage from "../Pages/HomePage";
import WishList from "../Pages/WishList/WishList";

const EcomerseNavigator = ({
  addToCartHandler,
  wishLists,
  cartItems,
  products,
  isLogoutHandler,
  setProducts,
  addToWishListHandler,
  setSearchValue,
  setIsLogedIn,
}) => {
  const isLogin = useSelector((state) => state.ui.isLogedIn);
  return (
    <Routes>
      {isLogin && (
        <>
          <Route
            path="/home"
            element={
              <HomePage
                addToCartHandler={addToCartHandler}
                products={products}
                setProducts={setProducts}
                addToWishListHandler={addToWishListHandler}
              />
            }
          />
          <Route path="/home-kitchen" element={<HomeAndKitchen />} />
          <Route path="/chare" element={<DetailPage />} />
          <Route path="/category" element={<Category />} />
          <Route
            path="/wishlist"
            element={<WishList wishLists={wishLists} />}
          />
          <Route path="/about" element={<About />} />

          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart cartItems={cartItems} />} />
          <Route path="/profile" element={<Profile />} />
        </>
      )}
      <Route
        path="/"
        element={
          <Login
            isLogoutHandler={isLogoutHandler}
            setIsLogedIn={setIsLogedIn}
          />
        }
      />
      <Route path="/signup" element={<Signup />} />
     
      <Route
        path="*"
        element={<Navigate to="/" replace />}
    />
    </Routes>
  );
};

export default EcomerseNavigator;
