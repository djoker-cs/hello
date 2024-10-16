import React, { useState } from 'react';
import './itemup.css';
import './additem.css';

const ModifyItem = ({ modifyItem, items }) => {
  const [itemId, setItemId] = useState('');
  const [updateField, setUpdateField] = useState('stock');
  const [newValue, setNewValue] = useState('');
  const [statusMessage, setStatusMessage] = useState('');

  const handleUpdate = (e) => {
    e.preventDefault();

    // Find the item by ID
    const item = items.find((item) => item.id === itemId);
    if (item) {
      const oldValue = updateField === 'stock' ? item.stock : item.price;
      const parsedNewValue = updateField === 'stock' ? parseInt(newValue) : parseFloat(newValue);
      const isUpdated = modifyItem(itemId, updateField, parsedNewValue);

      if (isUpdated) {
        setStatusMessage(`Item ${item.name} ${updateField === 'stock' ? 'quantity' : 'price'} updated from ${oldValue} to ${parsedNewValue}.`);
      } else {
        setStatusMessage('Update failed!');
      }
    } else {
      setStatusMessage('Item not found!');
    }

    setItemId('');
    setNewValue('');
  };

  return (
    <div className="add-item-form">
      <h2>Update Item</h2>
      <form onSubmit={handleUpdate} className="add-item-form">
        <input
          type="text"
          value={itemId}
          onChange={(e) => setItemId(e.target.value)}
          placeholder="Item ID"
          required
          className="add-item-input"
        />
        <select
          value={updateField}
          onChange={(e) => setUpdateField(e.target.value)}
          className="add-item-select"
        >
          <option value="stock">Quantity</option>
          <option value="price">Price</option>
        </select>
        <input
          type="number"
          value={newValue}
          onChange={(e) => setNewValue(e.target.value)}
          placeholder="New Value"
          required
          className="add-item-input"
        />
        <button type="submit" className="add-item-button">Update</button>
      </form>
      {statusMessage && <p className="update-item-message">{statusMessage}</p>}
    </div>
  );
};

export default ModifyItem;
