import React from 'react';
import './DispItem.css';

const LowStockDisplay = ({ itemList }) => {
  const lowStockItems = itemList.filter(item => item.stock <= 5);

  return (
    <div className="low-stock-container">
      <h2>Items with Low Stock</h2>

      {lowStockItems.length > 0 ? (
        <table className="low-stock-table">
          <thead>
            <tr>
              <th>Item ID</th>
              <th>Item Name</th>
              <th>Available Quantity</th>
              <th>Price (₱)</th>
              <th>Category</th>
            </tr>
          </thead>
          <tbody>
            {lowStockItems.map(item => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.stock}</td>
                <td>₱{item.price.toFixed(2)}</td>
                <td>{item.category}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No items found with low stock.</p>
      )}
    </div>
  );
};

export default LowStockDisplay;
