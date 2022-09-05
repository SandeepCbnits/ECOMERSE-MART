import React, { useEffect, useState } from "react";
import "./Profile.css";
import ProfileImage from "../Image/profile.svg";
import axios from 'axios';

import {Link } from "react-router-dom";
const Profile = () => {
  const [user, setUser] = useState({});
 const token= localStorage.getItem("TOKEN")
  console.log(token+"Something is coming or not")
  useEffect(() => {
    axios.get(`http://localhost:9092/getUserByToken/${token}`).then((response) => {
      console.log(response.data)
     setUser(response.data)
    });
  }, []);
 
  return (
    <div >
      {/* <div className={style.profileContainer}>
        <div>
          <div className={style.profile}>
            <img
              src="data:image/png;base64,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"
              alt=""
            />
            <div>
              <span>Hello</span> <br />
              <span> <strong>
              {localStorage.getItem("USERNAME")}
                </strong> </span>
            </div>
          </div>
        </div>
        <div className={style.order}>
          <h4>My Order</h4> <br />
          <h4>Account Setting</h4> <br />
          <span>Profile Information</span> <br />
          <span>Manage Address</span>
        </div>
      </div>
      <div>
        <h3>Personal Information </h3>
        <div className={style.input}>
          <input type="text" placeholder="Sandeep" />
          <input type="text" placeholder="Yadav" />
        </div>
        <div className={style.email}>
          <h3>Email Address</h3>
          <input type="text" placeholder="email" />
        </div>
        <div className={style.mobile}>
          <h3>Mobile</h3>
          <input type="text" placeholder="+8400420939" />
        </div>
      </div> */}


      <div className="container">
   
        <div className="row">
          <div className="col-md-4 col-sm-12">
            <div className="card shadow p-3 border-0 rounded-0" >
              <div className='row'>
                <div className='col-md-4'>
                  <img className="image" height="50px" width="50px" src={ProfileImage} />
                </div>
                <div className='col-md-8'>
                  <p>Hello , <p className='name'>  {user.fname} {user.lname}</p></p>

                </div>
              </div>

            </div>

            <div className="card shadow p-3 border-0 rounded-0">
             
              <div className='d-flex align-items-start'>
                <div className="nav " id="nav-tab" role="tablist">
                  <div className='row'>

                    <div className='col-md-12'>
                      <p className="tab active" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" aria-controls="nav-profile" aria-selected="true" >Profile Information</p>

                      <p className="tab" id="nav-address-tab" data-bs-toggle="tab" data-bs-target="#nav-address" aria-controls="nav-address" aria-selected="true">Manage Address</p>


                    </div>
                  </div>
                </div>
              </div>
            </div>


          </div>
          <div className="col-md-8">
            <div class="tab-content" id="nav-tabContent">
              <div class="tab-pane fade show active" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                <div className="card shadow p-3 border-0 rounded-0">
                  <div className='info'>
                    <h5>Personal Information    <Link to="/editform" > Edit</Link></h5>
                    <div className='row'>
                      <div className='col-md-6'>
                        <input type="text" className='input' name="firstName" required="" autocomplete="name" tabindex="1" value={user.fname} disabled="" />

                      </div>
                      <div className='col-md-6'>
                        <input type="text" className='input' name="lastName" required="" autocomplete="name" tabindex="1" value={user.lname} disabled="" />
                      </div>
                    </div>
                  </div>
                  <div className='info'>

                    <h5>Mobile Number  </h5>
                    <div className='row'>
                      <div className='col-md-6'>
                        <input type="text" className='input' name="mobile" required="" autocomplete="name" tabindex="1" value={user.phoneNumber} disabled="" />

                      </div>

                    </div>
                  </div>

                  <div className='info'>
                    <h5>Email Address   </h5>
                    <div className='row'>
                      <div className='col-md-6'>
                        <input type="email" className='input' name="email" required="" autocomplete="name" tabindex="1" value={user.email} disabled="" />

                      </div>

                    </div>
                  </div>
                </div>
              </div>
           

            <div class="tab-pane fade" id="nav-address" role="tabpanel" aria-labelledby="nav-address-tab">
              <div className="card shadow p-3 border-0 rounded-0">
                <div className='info'>
                  <h5>Manage Address </h5>
                  <div className='row'>
                    <div className='col-md-6'>
                      <input type="text" className='input' name="firstName" required="" autocomplete="name" tabindex="1" value="Jagrati" disabled="" />

                    </div>
                    <div className='col-md-6'>
                      <input type="text" className='input' name="firstName" required="" autocomplete="name" tabindex="1" value="Khatri" disabled="" />
                    </div>
                  </div>
                </div>
                <div className='info'>

                  <h5>Mobile Number </h5>
                  <div className='row'>
                    <div className='col-md-6'>
                      <input type="number" className='input' name="firstName" required="" autocomplete="name" tabindex="1" value="7073899577" disabled="" />

                    </div>

                  </div>
                </div>

                <div className='info'>
                  <h5>Email Address   </h5>
                  <div className='row'>
                    <div className='col-md-6'>
                      <input type="email" className='input' name="email" required="" autocomplete="name" tabindex="1" value="jagratikhatri98@gmail.com" disabled="" />

                    </div>

                  </div>
                </div>
              </div>

            </div>
            </div>
          </div>
        </div>



      </div>


    </div>
  );
};

export default Profile;
