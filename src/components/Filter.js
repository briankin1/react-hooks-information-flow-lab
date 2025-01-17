import React from 'react';

function Filter({ onCategoryChange }) {
  return (
    <select onChange={(e) => onCategoryChange(e.target.value)}>
      <option value="all">All</option>
      <option value="fruits">Fruits</option>
      <option value="vegetables">Vegetables</option>
      <option value="dairy">Dairy</option>
    </select>
  );
}

export default Filter;