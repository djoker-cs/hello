import React, { useState } from 'react';
import './DispItem.css';

const DisplayItemsByCategory = ({ itemList }) => {
  const [currentCategory, setCurrentCategory] = useState('');

  const filteredItems = currentCategory
    ? itemList.filter(item => item.category === currentCategory)
    : itemList;

  return (
    <div className="category-display-container">
      <h2>Items Filtered by Category</h2>

      <select
        value={currentCategory}
        onChange={(e) => setCurrentCategory(e.target.value)}
        className="category-dropdown"
      >
        <option value="">All Categories</option>
        <option value="Clothing">Clothing</option>
        <option value="Electronics">Electronics</option>
        <option value="Entertainment">Entertainment</option>
      </select>

      <table className="category-items-table">
        <thead>
          <tr>
            <th>Item ID</th>
            <th>Item Name</th>
            <th>Category</th>
            <th>Available Stock</th>
            <th>Price (₱)</th>
          </tr>
        </thead>
        <tbody>
          {filteredItems.length > 0 ? (
            filteredItems.map(item => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.category}</td>
                <td>{item.stock}</td>
                <td>₱{item.price.toFixed(2)}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5">No items found for the selected category.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default DisplayItemsByCategory;
