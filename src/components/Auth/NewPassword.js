import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import UserInput from "./hooks/User-Input";
import style from "./NewPassword.module.css";


const NewPassword = () => {
  const navigate = useNavigate();
   const [passwordIsValid, setPasswordIsValid] = useState(false);  

  const {
    value: confirmPassword,
    nameIsInValid: invalidConfirmPassword,
    onValueInputHandler: confirmPasswordChange,
    onErrorHandler: confirmPasswordBlur,
    nameIsValid: validConfirmPassword,
    reset: resetConfirmPassword,
  } = UserInput((value) => value.length > 0);

  const {
    value: newPassword,
    nameIsInValid: invalidNewPassword,
    onValueInputHandler: newPasswordChange,
    onErrorHandler: newPasswordBlur,
    nameIsValid: validNewPassword,
    reset: resetNewPassword,
  } = UserInput((value) => value.length > 0);
// <--------------------Submit New Password ------------------------------------>
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    if (!validConfirmPassword && !validNewPassword) {
      return;
    }
    let sendPassword ={newPassword:newPassword, confirmPassword:confirmPassword}
    console.log(sendPassword)
    axios.post("http://localhost:9092/changepassword/", sendPassword).then((res)=>{     
      navigate("/", { replace: true });
    }).catch((err)=>{
      console.log(err.data)
    })
    resetConfirmPassword()
    resetNewPassword()
  };

  useEffect(() => {
    if (confirmPassword && validNewPassword) {
      setPasswordIsValid(true)
    } else {
      setPasswordIsValid(false)
    }
  }, [confirmPassword, validNewPassword]);
  
  return (
    <div className={style.loginContainer}>
      <h2>Password Reset</h2>
      <form action="" onSubmit={onSubmitHandler}>
        <div className={style.inputFiled}>
          New Password
          <input
            type="password"           
            placeholder="Enter new Password"
            value={confirmPassword}
            onChange={confirmPasswordChange}
            onBlur={confirmPasswordBlur}          
          />
          {invalidConfirmPassword && (
            <p className={style.error}>Enter your new password</p>
          )}
        </div>
        <div className={style.inputFiled}>
          Confirm New Password
          <input
            type="password"            
            placeholder="Confirm Password "
            value={newPassword}
            onChange={newPasswordChange}
            onBlur={newPasswordBlur}            
          />
          {invalidNewPassword && (
            <p className={style.error}>Confirm your new password</p>
          )}
        </div>
        <div className={style.actionButton}>
          <button type="submit" disabled={!passwordIsValid} className={style.submit}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewPassword;
