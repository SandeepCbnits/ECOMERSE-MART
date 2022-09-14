import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Profile.css";

const Profile = () => {

const [user, setUser]=useState({})
const navigate=useNavigate()

const token=localStorage.getItem("TOKEN")

const userGet =async()=>{
  const userFetch =await fetch(`http://localhost:9092/getUserByToken/${token}`)
  const response =await userFetch.json();  
  setUser(response)
  
}
useEffect(()=>{
  userGet()
},[])
{/* <----------------------NAVIGATE TO EDITS PAGAES---------------> */}
const editsProfile=()=>{
  navigate("/edits", {replace: true})
}
  return (
    <div className="container">
      {/* <----------------------Left Container---------------> */}
      <div className="profile-container">
        <div className="profile">          
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRViCck0-66zUhbxsjl0iMB_LS6YiH31_PyWA&usqp=CAU"
            alt="Profile-pic"
          />
          <br />
          <div className="profile-name-edits">           
            <h4 > Name: {user.username}</h4>{" "}
            <h3>Manage Address</h3>
          </div>
        </div>

        {/* <----------------------Right Container---------------> */}
        <div className="right-profile">
          <div>
            <h1>My Profile </h1>
          </div>
          <div className="profile-form">
            <div className="name-profile">
              <div className="profile-first-name">
                <div className="profile-action">
                <label>Personal Information</label> 
                <button  onClick={editsProfile}>Edits</button>                      
                  </div>          
                <input type="text" value={user.fname} disabled placeholder="Enter your first name" />
              </div>
              <div className="profile-last-name">     <br/>           
                <input value={user.lname} disabled type="text" placeholder="Last Name" />
              </div>
            </div>
            <div className="email-profile">
              <div className="profile-first-contact">
                <label>Mobile No. </label>
                <br />
                <input disabled type="text" value={user.phoneNumber} placeholder="Contact No" />
              </div>
              <div className="profile-first-email">
                <label>Email Address</label> <br />
                <input value={user.email} disabled type="text" placeholder="sandeepuit@gmail.com" />
              </div>
            </div>           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
