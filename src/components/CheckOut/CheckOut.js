import React from "react";
import style from "./Checkout.module.css";
const CheckOut = () => {
  return (
    <div className={style.container}>
      <div className={style.address}>
        <h3> Delivery Address</h3>
        <div>
          <span>name : Sandeep Yadav</span> <br />
          <span>Address: CBNITS OFFICE</span>
        </div>
      </div>
      <div className={style.totalPrice}>
        <h3>PRODUCT DETAILS</h3>
        <div>
          <span>Price:RS. 40 </span> <br />
          <span>Delivery Charge: 10</span> <br />
          <span>Total Price:Rs. 50 </span>
        </div>
        <button>Payout</button>
      </div>
    </div>
  );
};

export default CheckOut;
