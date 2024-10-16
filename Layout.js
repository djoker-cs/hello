import React from 'react';
import { Outlet } from 'react-router-dom';
import Dashboard from './dashboard.js';

const Layout = () => {
  return (
    <div>
      {}
      <Dashboard />
      {}
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;