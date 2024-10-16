import './Dashboard.css';
import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h1>Inventory Management System</h1>
      <div className="buttons">
        <Link to="/add-item">
          <button>Add Item</button>
        </Link>
        <Link to="/update-item">
          <button>Update Item</button>
        </Link>
        <Link to="/remove-item">
          <button>Remove Item</button>
        </Link>
        <Link to="/display-all-items">
          <button>Display All Items</button>
        </Link>
        <Link to="/display-items-category">
          <button>Display by Category</button>
        </Link>
        <Link to="/search-item">
          <button>Search Item</button>
        </Link>
        <Link to="/sort-items">
          <button>Sort Items</button>
        </Link>
        <Link to="/low-stock-items">
          <button>Display Low Stock Items</button>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;