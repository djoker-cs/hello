import React, { useState } from 'react';
import './DispItem.css';

const ArrangeItems = ({ itemList }) => {
  const [sortCriteria, setSortCriteria] = useState('quantity');
  const [orderDirection, setOrderDirection] = useState('ascending');
  const [sortedList, setSortedList] = useState(itemList);

  const performSort = () => {
    const arrayToSort = [...itemList];

    arrayToSort.sort((a, b) => {
      const valueA = sortCriteria === 'quantity' ? a.stock : a.price;
      const valueB = sortCriteria === 'quantity' ? b.stock : b.price;

      return orderDirection === 'ascending' ? valueA - valueB : valueB - valueA;
    });

    setSortedList(arrayToSort);
  };

  const handleCriteriaChange = (e) => setSortCriteria(e.target.value);
  const handleDirectionChange = (e) => setOrderDirection(e.target.value);

  return (
    <div className="table-container">
      <h2>Sort Items</h2>

      <div className="sort-options">
        <label>Sort By: </label>
        <select value={sortCriteria} onChange={handleCriteriaChange} className="sort-field-select">
          <option value="quantity">Quantity</option>
          <option value="price">Price</option>
        </select>

        <label>Order: </label>
        <select value={orderDirection} onChange={handleDirectionChange} className="sort-order-select">
          <option value="ascending">Ascending</option>
          <option value="descending">Descending</option>
        </select>

        <button onClick={performSort} className="sort-button">Sort</button>
      </div>

      {sortedList.length > 0 && (
        <table className="sorted-items-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Quantity</th>
              <th>Price (₱)</th>
            </tr>
          </thead>
          <tbody>
            {sortedList.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.stock}</td>
                <td>₱{item.price.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ArrangeItems;
