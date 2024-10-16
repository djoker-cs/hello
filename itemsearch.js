import React, { useState } from 'react';
import './DispItem.css';

const FindItem = ({ itemList }) => {
  const [searchId, setSearchId] = useState('');
  const [itemFound, setItemFound] = useState(null);
  const [notification, setNotification] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    const foundItem = itemList.find(item => item.id === searchId);

    if (foundItem) {
      setItemFound(foundItem);
      setNotification('');
    } else {
      setItemFound(null);
      setNotification('Item not found.');
    }
  };

  return (
    <div className="search-container">
      <h2>Search for an Item by ID</h2>
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          value={searchId}
          onChange={(e) => setSearchId(e.target.value)}
          placeholder="Enter Item ID"
          required
          className="search-input"
        />
        <button type="submit" className="search-button">Search</button>
      </form>

      {itemFound ? (
        <table className="result-table">
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
            <tr>
              <td>{itemFound.id}</td>
              <td>{itemFound.name}</td>
              <td>{itemFound.category}</td>
              <td>{itemFound.stock}</td>
              <td>₱{itemFound.price.toFixed(2)}</td>
            </tr>
          </tbody>
        </table>
      ) : (
        notification && <p className="notification-message">{notification}</p>
      )}
    </div>
  );
};

export default FindItem;
