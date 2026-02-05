import React from "react";
import LoginButton from "./LoginButton";

const LoginForm = () => {
  return (
    <>
      <form className="login-form">
        {/* <!-- email --> */}
        <div>
          <label htmlFor="email">Email Address</label>
          <input type="email" name="email" id="email" />
        </div>
        {/* <!-- password --> */}
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" />
        </div>

        <LoginButton />
      </form>
    </>
  );
};

export default LoginForm;
