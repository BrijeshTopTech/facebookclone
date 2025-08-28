import React from "react";
import "../css/Login.css";

const Login = () => {
  return (
    <div className="login__wrapper">
      <div className="left__pane">
        <div className="left__block">
          <div className="login_page_logo">
            <img
              className="login_page_logo"
              src="https://static.xx.fbcdn.net/rsrc.php/y1/r/4lCu2zih0ca.svg"
            />
          </div>
          <h2>
            Facebook helps you connect and share with the people in your life.
          </h2>
        </div>
      </div>

      <div className="right__pane">
        <div className="login__box">
          <input type="text" placeholder="Email address or Phone number" />
          <input type="password" placeholder="Password" />
          <button type="submit" className="login__btn">Log in</button>
          <a className="forgot__password" href="#">Forgotten password?</a>
          <hr />
          <button type="button" className="create__account">Create new account</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
