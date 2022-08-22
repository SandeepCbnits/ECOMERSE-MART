import React, { useState } from "react";
import style from "./Header.module.css";
import { NavLink } from "react-router-dom";
import SideBar from "../SideBar/SideBar";

const Header = ({cartItems}) => {
  const [isOpen, setIsOpen] = useState(false);

  const isOpenHandler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className={style.header}>
        <div className={style.header_cart}>
          <span className={style.logo}>Shoping Mart</span>
          <input type="text" />
          <span className={style.search_icon}>
            <i class="fa fa-search"></i>
          </span>
        </div>
        <div className={style.header__login}>
          <div className={style.header___login}>
            <NavLink to="/login">Login</NavLink>
          </div>
          <NavLink to="/cart" className={style.header__cart} >
            <i class="fa fa-shopping-cart">
            {cartItems.length === 0 ? "" : cartItems.length }
            </i>
          </NavLink>
        </div>
      </div>
      <header className={style.second_header}>
        <div className={style.header__nav}>
          <div className={style.side_menu}>
            <aside className={isOpen ? "to-right" : ""}>
              <NavLink to="/" onClick={isOpenHandler}>
                <i class="fa fa-bars"></i>
              </NavLink>
            </aside>
            {isOpen && (
              <SideBar openClass="open" onCloseHandler={isOpenHandler} />
            )}
          </div>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/category">Category</NavLink>
          <NavLink to="/wishlist">WishList</NavLink>
          <NavLink to="/contact">Contact Us</NavLink>
        </div>
      </header>
    </div>
  );
};

export default Header;
