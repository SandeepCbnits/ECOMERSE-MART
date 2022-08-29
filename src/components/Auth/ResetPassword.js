import React from "react";

import UserInput from "./hooks/User-Input";
import style from "./ResetPassword.module.css";


const ResetPassword = () => {

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
            minLength={8}
            maxLength={10}
            required
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
            placeholder="Enter new Password "
            minLength={8}
            maxLength={10}
            required
          />
          {invalidNewPassword && (
            <p className={style.error}>Confirm your new password</p>
          )}
        </div>

        <div className={style.actionButton}>
          <button type="submit" >
            Submit
          </button>
        </div>
      </form>
     
    </div>
  );
};

export default ResetPassword;