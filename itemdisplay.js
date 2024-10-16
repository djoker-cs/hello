import React from 'react';
import './DispItem.css';

const DisplayAllItems = ({ itemsList }) => {
  return (
    <div className="item-display-container">
      <h2>Inventory Overview</h2>
      <table className="items-list-table">
        <thead>
          <tr>
            <th>Item ID</th>
            <th>Item Name</th>
            <th>Available Stock</th>
            <th>Price (₱)</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {itemsList.length === 0 ? (
            <tr>
              <td colSpan="5">No items available in the inventory</td>
            </tr>
          ) : (
            itemsList.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.stock}</td>
                <td>₱{item.price.toFixed(2)}</td>
                <td>{item.category}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default DisplayAllItems;
