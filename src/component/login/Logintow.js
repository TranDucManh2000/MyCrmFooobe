import React, { useState,useEffect} from "react";
import "./logintow.scss";
import axios from 'axios';
import { useLocation, useNavigate } from "react-router-dom";

const Logintow = () => {
  const url = 'https://fooobe.com/api/admin/LOGIN_TOADMIN.php'
  const [name,setname] = useState();
  const [pass,setpass] = useState();
  const navigate = useNavigate();
  const logz = useLocation();
  const vluaetoken = sessionStorage.getItem("Token");

  const submit = ()=>{
    axios.post(url,{
      account : name,
      password : pass,
    }).then((vl)=>{
     const {data} = vl;
     console.log('data',data);
     if(data.status === 200 ){
      alert('Đăng nhập thành công');
      sessionStorage.setItem("Token",data.resul.token);
      navigate("/");
      window.location.reload();
     }else{
      alert('Đăng nhập thất bại');
     }
    })

    // const pageView = sessionStorage.getItem("Token");
    // if (pageView == null) {
    //   // Initialize page views count
    //   alert('Đăng nhập thất bại');
    // } else {
    //   // Increment count
    //   alert('Đang đăng nhập')
    // }

  }
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
          <input onChange={(e)=>setname(e.target.value)}
          type="email" name="email" placeholder="E-mail"></input>
          <input 
           onChange={(e)=>setpass(e.target.value)}
          type="password" name="pass" placeholder="Password"></input>
          <a onClick={submit}>Đăng Nhập</a>
          <div id="remember-container">
            <span id="forgotten">Quên Mật khẩu</span>
          </div>
        </form>
        
      </div>
    </div>
  );
};

export default Logintow;
