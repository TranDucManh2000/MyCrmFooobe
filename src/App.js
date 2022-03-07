import React from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';
import Home from './component/home/Home';
import { Routes, Route, Link } from "react-router-dom";
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
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Logintow/>} />
        <Route path="/table" element={<HomeTable/>} />
        <Route path="/qlnguoidung" element={<Usertable/>} />
        <Route path="/qlbaocao" element={<Baocaotb/>} />
        <Route path="/qlnhom" element={<Qlgrop/>} />
        <Route path="/qltrang" element={<QlTrang/>} />
    </Routes>
  );
}

export default App;
