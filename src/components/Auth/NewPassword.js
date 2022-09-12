import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import UserInput from "./hooks/User-Input";
import style from "./NewPassword.module.css";

import axios from 'axios'
const NewPassword = () => {
  const navigate = useNavigate();
  const  [ password , setPassword]=useState({
    newPassword:"",
    confirmPassword:""
  })
const [error, setError]=useState("")
  const onPasswordChangeHandler=(e)=>{
    const value = e.target.value
    console.log({ [e.target.name]: value })
    setPassword({ ...password, [e.target.name]: value })

  }
  const onSubmitHandler=(e)=>{
    e.preventDefault();
    axios.post(`http://localhost:9092/changepassword`, password ).then(res=>{
      navigate("/", { replace: true });
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
//   const {
//     value: password,
//     nameIsInValid: invalidPassword,
//     onValueInputHandler: onPasswordChangeHandler,
//     onErrorHandler: passwordBlurHandler,
//     nameIsValid: validPassword,
//     reset: resetHandler,
//   } = UserInput((value) => value.trim() !== "");

  // const {
  //   value: newPassword,
  //   nameIsInValid: invalidNewPassword,
  //   onValueInputHandler: onNewPasswordChangeHandler,
  //   onErrorHandler: NewPasswordBlurHandler,
  //   nameIsValid: validNewPassword,
  //   reset: resetNewPasswordHandler,
  // } = UserInput((value) => value.trim !== "");

//   const onSubmitHandler = async (e) => {
//     e.preventDefault();
//     if (!validPassword && !validNewPassword) {
//       return;
//     }
    
//     resetHandler();
// navigate('/home', {replace:true})
//     resetNewPasswordHandler()

   
//   };
 
  //const formControlClass = invalidEmail ? "inputFiled invalid" : "inputFiled"
  return (
    <div className={style.loginContainer}>
      <h2>Password Reset</h2>
      <form action="" method="post">
        <div className={style.inputFiled}>
          <label htmlFor="password">New Password </label>
          <input
            type="password"
            id="newPassword"
            name="newPassword"
            value={password.newPassword}
            onChange={onPasswordChangeHandler}
            // onBlur={passwordBlurHandler}
            placeholder="Enter new Password"
           
           
          />
          {/* {invalidPassword && (
            <p className={style.error}>Enter your new password</p>
          )} */}
        </div>
        <div className={style.inputFiled}>
          <label htmlFor="password">Confirm New Password</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={password.confirmPassword}

            onChange={onPasswordChangeHandler}
            // onBlur={NewPasswordBlurHandler}
            placeholder="Confirm Password "
            
          
          />
          {/* {invalidNewPassword && (
            <p className={style.error}>Confirm your new password</p>
          )} */}
        </div>

        <div className={style.actionButton}>
          <button type="submit" className={style.submit} onClick={onSubmitHandler}>
           Submit
          </button>
        </div>

        <br/>
    <h6 className={style.alert}>{error}</h6> 
      </form>
     
    </div>
  );
};

export default NewPassword;
