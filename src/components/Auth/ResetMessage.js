import React from "react";
import { NavLink } from "react-router-dom";
import style from "./ResetMessage.module.css";
const ResetMessage = () => {
  return (
    <div className={style.message}>
      <h1>Password Reset</h1>
      <p>
        An emil with a password reset link has been send to your email Click on
        ex. <strong>sandeep.yadav@cbnits.com </strong> the email and click on
        the link to procced
      </p>
      <strong>
        <NavLink to="/passwordReset">Reset </NavLink>
      </strong>
    </div>
  );
};

export default ResetMessage;
