import React, { Fragment } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import ForgotPassword from "../components/Auth/ForgotPassword";
import Login from "../components/Auth/Login";
import Signup from "../components/Auth/Signup";
import Cart from "../components/Cart/Cart";
import CheckOut from "../components/CheckOut/CheckOut";
import DetailPage from "../components/DetailPage/DetailPage";
import Profile from "../components/Profile/Profile";
import About from "../Pages/About/About";
import Category from "../Pages/Category/Category";
import CategoryList from "../Pages/Category/CategoryList";
import Contact from "../Pages/Contact/Contact";
import HomePage from "../Pages/HomePage";
import WishList from "../Pages/WishList/WishList";
import Otp from "../components/Auth/Otp";
import NewPassword from "../components/Auth/NewPassword";
import AddToCart from "../components/Cart/AddToCart";
import ProductDetailPage from "../components/Cart/ProductDetailPage";
import EditProfile from "../components/Profile/EditProfile";

const EcomerseNavigator = ({
  count,
  addToCartHandler,
  wishLists,
  cartItems,
  products,
  isLogoutHandler,
  setProducts,
  addToWishListHandler,  
  setIsLogedIn, 
  items,
  removeToCartHandler,
  orderListHandler,
  orderLists,
  dataToProfile,
  gettingToken,
  shopByCategory  
}) => {  
  const isLogin = localStorage.getItem("TOKEN") ? true : false;
  
  return (
    <Routes>
      {isLogin && (
        <Fragment>
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
           <Route path="/category-lists" element={<CategoryList shopByCategory={shopByCategory}/>} /> 
          <Route path="/chare" element={<DetailPage />} />
          <Route path="/category" element={<Category shopByCategory={shopByCategory}/>} />         
          <Route
            path="/wishlist"
            element={<WishList />}
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
          <Route path="/productDetail" element={<ProductDetailPage/>} />
          <Route path="/addToCart" element={<AddToCart/> }/>
          <Route path="/profile" element={<Profile  gettingToken={gettingToken}  />} />
          <Route path="/edits" element={<EditProfile />} />
          <Route path="/checkout" element={<CheckOut   orderLists={orderLists} />} />
        </Fragment>
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
      <Route path="/otp" element={<Otp />} />
      <Route path="/passwordReset" element={<NewPassword/>} />
      <Route path="/forgotPassword" element={<ForgotPassword />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default EcomerseNavigator;
