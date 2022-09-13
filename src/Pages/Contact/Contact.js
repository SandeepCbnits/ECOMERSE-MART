import React from "react";
import "./Contact.css";
const Contact = () => {
  return (
    <div className="container">
      {/* <----------------------Left Container---------------> */}
      <div className="contact-container">
        <div className="contact">
          <h1>OFFICE ADDRESS:</h1>
          <h3>Office</h3>
          <h3>Connect with Gmail</h3>
          <span>sandeep@cbnits.com</span> <br/>
          <span>jagrati@cbnits.com</span>
          <h3>Mobile No.</h3>
          <span>+91 8400420939</span>
        </div>

        {/* <----------------------Right Container---------------> */}
        <div className="right-container">
          <div>
            <h1>LEAVE US A MESSAGE</h1>
          </div>
          <div className="contact-form">
            <div className="name-container">
              <div className="form-first-name">
                <label>First Name</label> <br />
                <input type="text" placeholder="Enter your first name" />
              </div>
              <div className="form-first-last">
                <label>Last Name</label> <br />
                <input type="text" placeholder="Enter your last name" />
              </div>
            </div>
            <div className="email-container">
              <div className="form-first-contact">
                <label>Contact No</label> <br />
                <input type="text" placeholder="Enter your contact number"/>
              </div>
              <div className="form-first-email">
                <label>Email Address</label> <br />
                <input type="text" placeholder="Enter your email address"/>
              </div>
            </div>
            <div className="message-container">
              <label>Message</label> <br />
              <textarea name="" id="" cols="60" rows="10"></textarea>
            </div>
            <div className="form-action">
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
