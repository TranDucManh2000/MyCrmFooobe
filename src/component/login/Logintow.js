import React from "react";
import "./logintow.scss";

const Logintow = () => {
  return (
    <div className="logintowz">
      <div id="login-button ">
        <img src="http://cdn.magdeleine.co/wp-content/uploads/2014/05/3jPYgeVCTWCMqjtb7Dqi_IMG_8251-1400x933.jpg"></img>
      </div>
      <div id="container">
        <h1>Đăng Nhập</h1>
        <span className="close-btn">
          <img src="https://cdn4.iconfinder.com/data/icons/miu/22/circle_close_delete_-128.png"></img>
        </span>

        <form>
          <input type="email" name="email" placeholder="E-mail"></input>
          <input type="password" name="pass" placeholder="Password"></input>
          <a href="#">Đăng Nhập</a>
          <div id="remember-container">
            <input
              type="checkbox"
              id="checkbox-2-1"
              className="checkbox"
              checked="checked"
            ></input>
            <span id="remember">Nhớ </span>
            <span id="forgotten">Quên Mật khẩu</span>
          </div>
        </form>
      </div>

      <div id="forgotten-container">
        <h1>Forgotten</h1>
        <span className="close-btn">
          <img src="https://cdn4.iconfinder.com/data/icons/miu/22/circle_close_delete_-128.png"></img>
        </span>

        <form>
          <input type="email" name="email" placeholder="E-mail"></input>
          <a href="#" className="orange-btn">
            Get new password
          </a>
        </form>
      </div>
    </div>
  );
};

export default Logintow;
