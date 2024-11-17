import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import Users from './components/Users';
import SignUp from './components/SignUp';  // ȸ������ ������Ʈ �߰�
import Login from './components/Login';

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/users" element={<Users />} />
      <Route path="/signup" element={<SignUp />} /> {/* ȸ������ ������ ���Ʈ �߰� */}
      <Route path="/login" element={<Login/>}/>
    </Routes>
  </Router>,
  document.getElementById('root')
);