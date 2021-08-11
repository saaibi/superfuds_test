import React from 'react';
import Header from './features/header';
import Product from './features/product';
import './App.css';

export default function App() {
  return (
    <div className="App">
      <Header />
      <img width="11%" height="10%" alt="logo" src='https://ci3.googleusercontent.com/proxy/JFN-KBAPmn-hYvn2A9_6J_7QpS8NkA28rwD-1M5CHgui37DVfMJFV-6T4rGwrKRtmcH_VwXw7emrdb42toXF23NOG6fNYyObFyGTod7ePmQtBgoepH9PXW33d9aqLQClkLiIt3IO7cYhvs1rQ1eJ1unag8CSKzJVGns7LofTDEIEx3YC2SMBs3y4fx6yyVBM6EZ32uQ54PfElJpw9Q=s0-d-e1-ft#https://docs.google.com/uc?export=download&id=1HVtiGVz7Owmw0_fcORCT5zt6GMSYplUE&revid=0BxtFoSn2HvlHVHhnRXN2eGRFWERxV1VMVUpJOHorVStUeE9rPQ' />
      <Product />
    </div>
  );
}
