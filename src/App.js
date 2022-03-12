import React from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';
import Home from './component/home/Home';
import { Routes, Route, Link,useNavigate } from "react-router-dom";
import Login from './component/login/Login'
import Tabble from './component/bodypage/Tabble';
import TableTodo from './component/common/TableTodo';
import HomeTable from './component/home/HomeTable';
import Usertable from './component/table/Usertable';
import Baocaotb from './component/table/Baocaotb';
import Qlgrop from './component/table/Qlgrop';
import QlTrang from './component/table/QlTrang';
import Navmenutow from './component/menu/Navmenutow';
import Logintow from './component/login/Logintow';

function App() {
  const vluaetoken = sessionStorage.getItem("Token");
  return (
    <Routes>
        <Route path="/" element={ vluaetoken == null ? <Logintow/> : <Home/> } />
        <Route path="/login" element={vluaetoken == null ? <Logintow/>:<Logintow/>} />
        <Route path="/table" element={vluaetoken == null ? <Logintow/>:<HomeTable/>} />
        <Route path="/qlnguoidung" element={vluaetoken == null ? <Logintow/>:<Usertable/>} />
        <Route path="/qlbaocao" element={vluaetoken == null ? <Logintow/>:<Baocaotb/>} />
        <Route path="/qlnhom" element={vluaetoken == null ? <Logintow/>:<Qlgrop/>} />
        <Route path="/qltrang" element={vluaetoken == null ? <Logintow/>:<QlTrang/>} />
    </Routes>
  );
}

export default App;
