import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();



      {/* <h1>UserDetails</h1>
      <h1>Name: {user.name}</h1>
      <h3>Username: {user.username}</h3>
      <h5>Phone: {user.phone}</h5>
      <h3>Company: {user.company.name}</h3>
      <div>
        <div>
          <h3>Address:</h3>
          <h5>Street: {user.address.street}</h5>
          <hr />
          <h5>City: {user.address.city}</h5>
        </div>
      </div> */}