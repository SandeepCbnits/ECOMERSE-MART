import React, { useEffect, useState } from "react";
import style from "./Profile.module.css";
const Profile = () => {
  return (
    <div className={style.container}>
      <h3>Manage your Profiles</h3>
      <img src="https://st.depositphotos.com/1898481/5087/i/450/depositphotos_50878063-stock-photo-people.jpg" alt="avator" />
      <div >
        <h3 contentEditable="true"> Sandeep Yadav </h3>
        <p>Recive importent alerts for your profile hear.</p>
        <h4 contentEditable="true">Mobile number</h4>
      </div>
      
    </div>
  );
};

export default Profile;
