import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Route, Routes, Navigate } from "react-router-dom";
import ForgotPassword from "../components/Auth/ForgotPassword";
import Login from "../components/Auth/Login";
import ResetMessage from "../components/Auth/Otp";
import ResetPassword from "../components/Auth/NewPassword";
import Signup from "../components/Auth/Signup";
import Cart from "../components/Cart/Cart";
import CheckOut from "../components/CheckOut/CheckOut";
import DetailPage from "../components/DetailPage/DetailPage";
import HomeAndKitchen from "../components/Home/HomeAndKitchen/HomeAndKitchen";
import Profile from "../components/Profile/Profile";
import About from "../Pages/About/About";
import Category from "../Pages/Category/Category";
import CategoryList from "../Pages/Category/CategoryList";
import Contact from "../Pages/Contact/Contact";
import HomePage from "../Pages/HomePage";
import WishList from "../Pages/WishList/WishList";
import EditForm from "../components/Profile/EditForm";
import ImageForm from "../components/Profile/ImageForm";

const EcomerseNavigator = ({
  count,
  addToCartHandler,
  wishLists,
  cartItems,
  products,
  isLogoutHandler,
  setProducts,
  addToWishListHandler,
  setSearchValue,
  setIsLogedIn,
  profile,
  setProfile,
  items,
  removeToCartHandler,
  orderListHandler,
  orderLists,
  dataToProfile,
  gettingToken
 
  
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
                items={items}
                orderListHandler={orderListHandler}
                count={count}
                dataToProfile={dataToProfile} 
                removeToCartHandler={removeToCartHandler}
                
                
              />
            }
          />
           <Route path="/category-lists" element={<CategoryList />} /> 
          <Route path="/chare" element={<DetailPage />} />
          <Route path="/category" element={<Category />} />
         
          <Route
            path="/wishlist"
            element={<WishList wishLists={wishLists} />}
          />
          <Route path="/about" element={<About />} />

          <Route path="/contact" element={<Contact />} />
          <Route
            path="/cart"
            element={
              <Cart
                cartItems={cartItems}
                removeToCartHandler ={removeToCartHandler }
                count={count}
                addToCartHandler={addToCartHandler}
              />
            }
          />
          <Route path="/profile"  element={<Profile  gettingToken={gettingToken}  />} >
          </Route>
          <Route path="/editform" element={<EditForm/>} />
          <Route path="/image" element={<ImageForm/>} />
          
          <Route path="/checkout" element={<CheckOut   orderLists={orderLists} />} />
        </>
      )}

      <Route
        path="/"
        element={
          <Login
            isLogoutHandler={isLogoutHandler}
            setIsLogedIn={setIsLogedIn}
            gettingToken={gettingToken}
          />
        }
      />
   
      <Route path="/reset" element={<ResetMessage />} />
      <Route path="/passwordReset" element={<ResetPassword />} />
      <Route path="/forgotPassword" element={<ForgotPassword />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default EcomerseNavigator;
