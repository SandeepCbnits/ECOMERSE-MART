import React from "react";
import { useNavigate } from "react-router-dom";

import UserInput from "./hooks/User-Input";
import style from "./NewPassword.module.css";


const NewPassword = () => {
  const navigate = useNavigate();
  const {
    value: password,
    nameIsInValid: invalidPassword,
    onValueInputHandler: onPasswordChangeHandler,
    onErrorHandler: passwordBlurHandler,
    nameIsValid: validPassword,
    reset: resetHandler,
  } = UserInput((value) => value.trim() !== "");

  const {
    value: newPassword,
    nameIsInValid: invalidNewPassword,
    onValueInputHandler: onNewPasswordChangeHandler,
    onErrorHandler: NewPasswordBlurHandler,
    nameIsValid: validNewPassword,
    reset: resetNewPasswordHandler,
  } = UserInput((value) => value.trim !== "");

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    if (!validPassword && !validNewPassword) {
      return;
    }
    
    resetHandler();
navigate('/home', {replace:true})
    resetNewPasswordHandler()

   
  };
 
  //const formControlClass = invalidEmail ? "inputFiled invalid" : "inputFiled"
  return (
    <div className={style.loginContainer}>
      <h2>Password Reset</h2>
      <form action="" onSubmit={onSubmitHandler}>
        <div className={style.inputFiled}>
          <label htmlFor="password">New Password </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={onPasswordChangeHandler}
            onBlur={passwordBlurHandler}
            placeholder="Enter new Password"
           
           
          />
          {invalidPassword && (
            <p className={style.error}>Enter your new password</p>
          )}
        </div>
        <div className={style.inputFiled}>
          <label htmlFor="password">Confirm New Password</label>
          <input
            type="password"
            id="password"
            value={newPassword}
            onChange={onNewPasswordChangeHandler}
            onBlur={NewPasswordBlurHandler}
            placeholder="Confirm Password "
            
          
          />
          {invalidNewPassword && (
            <p className={style.error}>Confirm your new password</p>
          )}
        </div>

        <div className={style.actionButton}>
          <button type="submit" className={style.submit}>
           Submit
          </button>
        </div>
      </form>
     
    </div>
  );
};

export default NewPassword;
