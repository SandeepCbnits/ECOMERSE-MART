import React, { useState } from "react";
import style from "./Header.module.css";
import { NavLink, useNavigate } from "react-router-dom";

const Header = ({ cartItems }) => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const isLogedIn = localStorage.getItem("TOKEN") ? true : false;

  const onLogoutHandler = () => {
    localStorage.removeItem("USERNAME");
    localStorage.removeItem("TOKEN");
    navigate("/login", { replace: true });
  };

  const showNavBar = () => {
    setIsOpen(!isOpen);
  };

  const closeHandler = () => {
    setIsOpen(isOpen);    
  };

  return (
    <div>
      <div className={style.header}>
        <div className={style.header_cart}>
          <span className={style.logo}>Shoping Mart</span>
          <input type="text" name="search" />
          <span className={style.search_icon}>
            <i class="fa fa-search"></i>
          </span>
        </div>
        <div className={style.header__signup}>
          <div className={style.header___login}>
            {!isLogedIn && <NavLink to="/">Login</NavLink>}
            {isLogedIn && (
              <NavLink to="/profile" title="PROFILE">
                {localStorage.getItem("USERNAME")}
                <i class="fa fa-user"></i>{" "}
              </NavLink>
            )}
            {isLogedIn && (
              <NavLink to="/login" onClick={onLogoutHandler}>
                Logout
              </NavLink>
            )}
          </div>
          <NavLink to="/addToCart" className={style.header__cart}>
            <i class="fa fa-shopping-cart">
              {cartItems.length === 0 ? "" : cartItems.length}
            </i>
          </NavLink>
        </div>
      </div>
      <div className={style.footer}>
        <header className={style.second_header}>
          <div  className={style.header__nav}>
            <div showNavBar={showNavBar} className={style.close_btn}>
            <button onClick={closeHandler}
             className={isOpen ? style.nav__close_btn : style.nav_btn}>
              <i class="fa fa-remove"></i>
            </button>
            </div>
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/category">Category</NavLink>
            <NavLink to="/wishlist">WishList</NavLink>
            <NavLink to="/contact">Contact Us</NavLink>
          </div>
          <button className={style.nav_btn} onClick={showNavBar}>
            {" "}
            &#9776;
          </button>
        </header>
      </div>
    </div>
  );
};

export default Header;
