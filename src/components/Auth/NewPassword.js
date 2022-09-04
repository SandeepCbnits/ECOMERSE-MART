import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

import style from "./NewPassword.module.css";

const NewPassword = () => {
  const navigate = useNavigate();
  const [resetPassword, setResetPassword] = useState({
    password: "",
    newPassword: "",
  });
  const [isTouch, setIsTouch] = useState(false);

  let validPassword = resetPassword.password !== "";
  let invalidPassword = !validPassword && isTouch;

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    if (!validPassword) {
      return;
    }
    navigate("/home", { replace: true });
  };

  //const formControlClass = invalidEmail ? "inputFiled invalid" : "inputFiled"
  return (
    <div className={style.loginContainer}>
      <h2>Password Reset</h2>
      <form action="" onSubmit={onSubmitHandler}>
        <div className={style.inputFiled}>
          New Password
          <input
            type="password"
            placeholder="Enter new Password"
            value={resetPassword.newPassword}
            onChange={(e) => setResetPassword(e.target.value)}
            onBlur={() => setIsTouch(true)}
          />
          {invalidPassword && (
            <p className={style.error}>Enter your new password</p>
          )}
        </div>
        <div className={style.inputFiled}>
          Confirm New Password
          <input type="password" placeholder="Confirm Password " />
          {/* {invalidNewPassword && (
            <p className={style.error}>Confirm your new password</p>
          )} */}
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
