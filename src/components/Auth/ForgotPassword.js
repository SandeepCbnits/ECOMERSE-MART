import React from "react";
import style from "./ForgotPassword.module.css";
import { useNavigate } from "react-router-dom";
import UserInput from "./hooks/User-Input";
import axios from "axios";
import { useState } from "react";
import { createSerializableStateInvariantMiddleware } from "@reduxjs/toolkit";

const ForgotPassword = () => {

  let navigate = useNavigate();
 
  // const {
  //   value: email,
  //   nameIsInValid: invalidEmail,
  //   onErrorHandler: emailBlurHandler,
  //   nameIsValid: validEmail,
  //   reset: resetHandler,
  // } = UserInput((value) => value.includes("@gmail.com"));
  const [email , setEmail]=useState({
    email:""
  })
  const [ error , setError]=useState("")
  const onEmailChangeHandler=(e)=>{
   
    const value=  e.target.value
      console.log({[e.target.name]:value})
      setEmail({...email,[e.target.name]:value })

  }


  // const onSubmitHandler = async (e) => {
  //   e.preventDefault();

  //   try {
  //     let otpGenrate = await fetch("http://localhost:9092/forgot", {
  //       method: "POST",
  //       headers: {
  //         'Accept': 'application/json, text/plain, */*',
  //         "Content-Type": "application/json",
         
  //       },
  //       body: JSON.stringify( email ),
  //     });
  //     if (!otpGenrate.ok) {
  //       throw new Error(` ${otpGenrate.status}`);
  //     } else {
  //       let respoonse = await otpGenrate.json();
  //       console.log(respoonse);
  //       navigate("/reset", { replace: true });
  //       alert("OTP SENDING ON YOUR EMAIL")
  //     }
  //   } catch (error) {
  //     alert(`Somthing Went Worng !! ${error}`);
  //     console.log("Somthing Went Worng !!", error);
  //   }

     
  // };
  
const onSubmitHandler=(e)=>{
  e.preventDefault();
  axios.post(`http://localhost:9092/forgot`, email ).then(res=>{

    navigate("/reset" , { replace: true } )
    console.log(res.data + "dekh rahi hu email aa raha hai ki nahi ")
  }).catch(function (error) {
    if (error.response) {
      console.log(error.response.data);
      console.log(error.response.status);
      setError(error.response.data);
      console.log(error.response.headers);
    }
  })
}
    

  return (
    <div className={style.loginContainer}>
      <h2>Password Reset</h2>
      <form action="http://localhost:9092/forgot"  method="post">
        <div className={style.inputFiled}>
          <label htmlFor="email">Enter your email address </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email.email}
            onChange={onEmailChangeHandler}
            placeholder="Enter Email Ex. sandeep@cbnits.com"
          />
          {/* {invalidEmail && (
            <p className={style.error}>Enter your email address</p>
          )} */}
        </div>

        <div className={style.actionButton}>
          <button
            type="submit"
            onClick={onSubmitHandler}
            // onClick={() => navigate("/reset", { replace: true })}
          >
            OTP Send
          </button>
        </div>
      </form>
      <br/>
    <h6 className={style.alert}>{error}</h6> 
    </div>
  );

          }
export default ForgotPassword;

