import React from 'react';
import Form from '../components/form';
import './main.scss';
const Main = () => {
  return (
    <div className="main">
      <div className="title-section">
        <h1>Packing Due date and Shipping ETA Calculation</h1>
      </div>
      <Form />
      <div className="copyright">
        <p><small>Copyright © 2023 Hadi Santoso. All rights reserved.</small> </p>
      </div>
    </div>
  );
};

export default Main;
