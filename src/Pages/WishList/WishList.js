import React from "react";

const WishList = ({cartItems}) => {
  return (
    <div>
      {cartItems.map((cart)=>{
        return(
          <div>
            <img src={cart.imageName} alt={cart.name} />
          </div>
        )
      })}
    </div>
  );
};

export default WishList;
