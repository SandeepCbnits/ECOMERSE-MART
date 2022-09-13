import React from "react";
import "./Profile.css";
const Profile = () => {
  return (
    <div className="container">
      {/* <----------------------Left Container---------------> */}
      <div className="profile-container">
        <div className="profile">
          <h3>Profile</h3>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRViCck0-66zUhbxsjl0iMB_LS6YiH31_PyWA&usqp=CAU"
            alt="Profile-pic"
          />
          <br />
          <div className="profile-name-edits">
            <h2 contentEditable="true">{localStorage.getItem("USERNAME")}</h2>{" "}
          </div>
          <div className="profile-action">
            <button>Edits</button>
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
                <label>Personal Information</label> <br />
                <input type="text" placeholder="Enter your first name" />
              </div>
              <div className="profile-last-name">     <br/>           
                <input type="text" placeholder="Last Name" />
              </div>
            </div>
            <div className="email-profile">
              <div className="profile-first-contact">
                <label>Mobile No. </label>
                <br />
                <input type="text" placeholder="Contact No" />
              </div>
              <div className="profile-first-email">
                <label>Email Address</label> <br />
                <input type="text" placeholder="sandeepuit@gmail.com" />
              </div>
            </div>
            {/* <div className="message-profile">
              <label>Message</label> <br />
              <textarea name="" id="" cols="60" rows="10"></textarea>
            </div>
            <div className="profile-action">
              <button>Submit</button>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
