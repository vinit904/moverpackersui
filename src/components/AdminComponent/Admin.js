import './Admin.css';

import { useState, useEffect } from 'react';

function Admin() {


  return (
    <>
      <section className="admin-container">
        <h1 className="admin-title">Admin Panel</h1>

        <div className="admin-cards">
          <div className="card">
            <h2></h2>
            <p>Registered Users</p>
          </div>
          <div className="card">
            <h2></h2>
            <p>Orders Today</p>
          </div>
          <div className="card">
            <h2></h2>
            <p>Total Revenue</p>
          </div>
        </div>

        <div className="admin-actions">
          <button className="btn">Manage Users</button>
          <button className="btn">View Orders</button>
          <button className="btn">Settings</button>
        </div>
      </section>
    </>
  );
}

export default Admin;