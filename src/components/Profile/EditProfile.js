import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./EditProfile.css";
const EditProfile = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("TOKEN");
  const [editsProfile, setEditsProfile] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
  });
  const [isTouch, setIsTouch] = useState(false);
  const [formIsValid, setFormIsValid] = useState(false);
  const validFirstName = editsProfile.firstName !== "";
  const inValidFirstName = !validFirstName && isTouch;

  const validLastName = editsProfile.lastName.trim() !== "";
  const inValidLastName = !validFirstName && isTouch;

  const validPhoneName = editsProfile.phoneNumber.trim() !== "";
  const inValidPhoneName = !validFirstName && isTouch;

  const validEmailName = editsProfile.email !== "@gmail.com";
  const inValidEmailName = !validFirstName && isTouch;

  const onChangeProfile = (e) => {
    const value = e.target.value;
    console.log(value);
    setEditsProfile({ ...editsProfile, [e.target.name]: value });
  };

  const profileSubmit = async (e) => {
    e.preventDefault();
    if (
      !validFirstName &&
      !validLastName &&
      !validEmailName &&
      !validPhoneName
    ) {
      return;
    }
    try {
      const profile = await fetch(
        `http://localhost:9092/updateProfile/${token}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            fname: editsProfile.firstName,
            lname: editsProfile.lastName,
            phoneNumber: editsProfile.phoneNumber,
            email: editsProfile.email,            
          }),
        }
      );
      if (!profile.ok) {
        throw new Error("Somthing Went worng!!");
      } else {
        const response = await profile.json();
        console.log(response);
        navigate("/profile", { replace: true });
      }
    } catch (error) {
      alert("Somthing went worng!!");
      console.log(error);
    }
    setEditsProfile("");
  };
// <------------------Valid User Only Can only Edit form --------------------->
  useEffect(() => {
    if (validFirstName && validLastName && validEmailName && validPhoneName) {
      setFormIsValid(true);
    } else {
      setFormIsValid(false);
    }
  }, [validFirstName, validLastName, validPhoneName, validEmailName]);

  return (
    <form onSubmit={profileSubmit}>
      <div>
        <h2>EDIT PRROFILE</h2>
      </div>
      <div className="edit-form">
        <div className="name-edit">
          <div className="edit-first-name">
            <label>Personal Information</label>
            <input
              type="text"
              onBlur={() => setIsTouch(true)}
              name="firstName"
              value={editsProfile.firstName}
              onChange={onChangeProfile}
              placeholder="Enter your first name"
            />
            {inValidFirstName && (
              <p className="error">Name is Required to input </p>
            )}
          </div>
          <div className="edit-last-name">
            {" "}
            <br />
            <input
              value={editsProfile.lastName}
              onBlur={() => setIsTouch(true)}
              name="lastName"
              onChange={onChangeProfile}
              type="text"
              placeholder="Last Name"
            />
            {inValidLastName && (
              <p className="error">Name is Required to input </p>
            )}
          </div>
        </div>
        <div className="email-edit">
          <div className="edit-first-contact">
            <label>Mobile No. </label>
            <br />
            <input
              name="phoneNumber"
              onBlur={() => setIsTouch(true)}
              type="text"
              onChange={onChangeProfile}
              value={editsProfile.phoneNumber}
              placeholder="Contact No"
            />
            {inValidPhoneName && (
              <p className="error">Name is Required to input </p>
            )}
          </div>
          <div className="edit-first-email">
            <label>Email Address</label> <br />
            <input
              name="email"
              onBlur={() => setIsTouch(true)}
              value={editsProfile.email}
              onChange={onChangeProfile}
              type="text"
              placeholder="sandeepuit@gmail.com"
            />
            {inValidEmailName && (
              <p className="error">Name is Required to input </p>
            )}
          </div>
        </div>
{/* <------------------Submit Button---------------------> */}
        <div className="edit-action"> 
          <button type="submit" disabled={!formIsValid}>
            Profile
          </button>
        </div>
      </div>
    </form>
  );
};

export default EditProfile;
