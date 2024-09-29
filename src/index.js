/* 
   File Name: index.js
   Student Name: Yehong Hu
   Student ID: 301392896
   Date: 2024.09.28
*/
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // 确保此文件存在
import App from './App';
import reportWebVitals from './reportWebVitals'; // 确保此文件存在

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
