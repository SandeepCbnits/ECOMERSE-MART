import React from "react";
import "./SideBar.css";
import { NavLink } from "react-router-dom";
const SideBar = ({ openClass, onCloseHandler }) => {
   
  return (
    <nav className={openClass === "open" ? "opneSidebar" : ""}>
        <div className="close">
      <button   onClick={onCloseHandler}>
        <i class="fa fa-close"></i>
      </button>

        </div>
      <ul>
        <li onClick={onCloseHandler}>
          <NavLink to="/">Home</NavLink>
        </li>
        <li onClick={onCloseHandler}>
          <NavLink to="/about">About</NavLink>
        </li>
        <li onClick={onCloseHandler}>
          <NavLink to="/category">Category</NavLink>
        </li>
        <li onClick={onCloseHandler}>
          <NavLink to="/wishlist">WishList</NavLink>
        </li>
        <li onClick={onCloseHandler}>
          <NavLink to="/contact">Contact Us</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default SideBar;
