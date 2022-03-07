import React from 'react'
import '../scss/nav.scss'
import {
  HomeTwoTone,
  SearchOutlined,
  UserOutlined ,
  SettingFilled,
  BellFilled,
  MenuFoldOutlined,
} from '@ant-design/icons';
import { useSelector, useDispatch } from 'react-redux';
import CurMenu from './CurMenu';
import Navmenutow from '../menu/Navmenutow';

const NavMenus = () => {
  const dispatch = useDispatch();
  return (
    <div className='bodynav'>
    <div className='nav'>
      <div className='namenav'>
       <HomeTwoTone/><span className='clotext'> /Trang Chủ</span>
       <h2 className='clotext top-'>Cơ Sở Dữ Liệu</h2>
      </div>

      <div className='itemav'>
        <button style={{cursor:'pointer'}} className='btnavz'>
          <SearchOutlined />
        </button>
        <input placeholder='Tìm Kiếm...' className='inputav'></input>
        <span style={{cursor:'pointer'}}><UserOutlined/><a href='/login'> Đăng Xuất</a></span>
        <span style={{cursor:'pointer'}}><Navmenutow/></span>
        <span style={{cursor:'pointer'}}><SettingFilled /></span>
        <span style={{cursor:'pointer'}}><BellFilled /></span>
        
      </div>

    </div>
    </div>
  )
}

export default NavMenus