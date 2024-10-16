import React, { useState } from 'react';
import './additem.css';

const DeleteItem = ({ onRemoveItem, itemList = [] }) => {
  const [itemId, setItemId] = useState('');
  const [itemInfo, setItemInfo] = useState(null);

  const handleDelete = (e) => {
    e.preventDefault();
    const wasRemoved = onRemoveItem(itemId);
    if (wasRemoved) {
      alert('Item deleted successfully!');
      setItemInfo(null);
      setItemId('');
    } else {
      alert('Item not found!');
    }
  };

  const handleIdChange = (e) => {
    const value = e.target.value;
    setItemId(value);

    if (itemList && itemList.length > 0) {
      const foundItem = itemList.find((item) => item.id === value);
      setItemInfo(foundItem || null);
    }
  };

  return (
    <div className="delete-item-form">
      <h2>Delete Item</h2>
      <form onSubmit={handleDelete}>
        <input
          type="text"
          placeholder="Enter Item ID"
          value={itemId}
          onChange={handleIdChange}
          required
          className="delete-item-input"
        />
        <button type="submit" className="delete-item-button">Remove</button>
      </form>

      {itemInfo && (
        <div className="item-details">
          <h3>Item Details:</h3>
          <p>Name: {itemInfo.name}</p>
          <p>Category: {itemInfo.category}</p>
          <p>Stock: {itemInfo.stock}</p>
        </div>
      )}
    </div>
  );
};

export default DeleteItem;
