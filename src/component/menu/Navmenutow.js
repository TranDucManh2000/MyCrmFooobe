import React, { useState } from "react";
import "./navs.scss";
import {
    HomeTwoTone,
    SearchOutlined,
    UserOutlined ,
    SettingFilled,
    BellFilled,
    MenuFoldOutlined,
  } from '@ant-design/icons';

const Navmenutow = () => {
    const [burger,setburger] = useState('open-main-nav');
    const [main,setmain] = useState('main-nav')

    const burgerz = ()=>{
        if(burger == 'open-main-nav' ){
            setburger('open-main-nav is-open');
            setmain('main-nav is-open');
        }else{
            setburger('open-main-nav');
            setmain('main-nav');
        }
        
    }
  return (
    <div className="navz">
      <div className="device">
        <div className="container">
          <button id="burger" className={burger} onClick={burgerz}>
            {/* <span className="burger"></span> */}
            {/* <span className="burger-text">Menu</span> */}
            <MenuFoldOutlined />
          </button>
          <nav className={main} id="main-nav">
          <button id="burger" className={burger} onClick={burgerz}>
            <span className="burger-text"><span className="burger"></span></span>
          </button>
            <ul>
              <li>
                <a href="/">Trang chủ</a>
              </li>
              {/* <li>
                <a href="#">Speaker &amp; Writer</a>
              </li> */}
              <li>
                <a href="/qltrang">Quản lý Trang</a>
              </li>
              <li>
                <a href="/qlnguoidung">Quản lý Người Dùng</a>
              </li>
              <li>
                <a href="/qlnhom">Quản lý Hội nhóm</a>
              </li>
              <li>
                <a href="qlbaocao">Quản lý Báo cáo</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navmenutow;
