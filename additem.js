import React, { useState } from 'react';
import './additem.css';

const AddItem = ({ onAddItem, itemsList }) => {
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    category: '',
    stock: '',
    price: ''
  });
  const [notification, setNotification] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { id, name, category, stock, price } = formData;

    const isDuplicateId = itemsList.some(item => item.id === id);
    if (isDuplicateId) {
      setNotification('This ID is already in use. Please choose another one.');
    } else if (id && name && category && stock && price) {
      onAddItem({
        id,
        name,
        category,
        stock: parseInt(stock),
        price: parseFloat(price)
      });
      setNotification('New item added successfully!');

      setFormData({
        id: '',
        name: '',
        category: '',
        stock: '',
        price: ''
      });
    } else {
      setNotification('All fields are required. Please fill them in.');
    }
  };

  return (
    <div className="add-item-container">
      <h3>Add an Item</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="id"
          value={formData.id}
          onChange={handleInputChange}
          placeholder="Item ID"
          required
          className="input-field"
        />
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          placeholder="Item Name"
          required
          className="input-field"
        />
        <input
          type="number"
          name="stock"
          value={formData.stock}
          onChange={handleInputChange}
          placeholder="Stock Quantity"
          required
          className="input-field"
        />
        <input
          type="number"
          name="price"
          value={formData.price}
          onChange={handleInputChange}
          placeholder="Price (in USD)"
          step="0.01"
          required
          className="input-field"
        />
        <select
          name="category"
          value={formData.category}
          onChange={handleInputChange}
          className="select-field"
          required
        >
          <option value="" disabled>Select a Category</option>
          <option value="Clothing">Clothing</option>
          <option value="Electronics">Electronics</option>
          <option value="Entertainment">Entertainment</option>
        </select>
        <button type="submit" className="submit-button">Submit Item</button>
      </form>
      {notification && <p className="notification-message">{notification}</p>}
    </div>
  );
};

export default AddItem;
