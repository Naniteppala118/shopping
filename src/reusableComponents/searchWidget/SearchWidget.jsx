import React from 'react';
import './SearchWidget.css';
import { FiSearch } from 'react-icons/fi'; // using react-icons

const SearchWidget = ({ placeholder, value, onChange, name }) => {
  return (
    <div className="searchFieldContainer">
      <span className="searchIcon">
        <FiSearch />
      </span>
      <input
        className="searchInput"
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        name={name}
        id={name}
      />
    </div>
  );
};

export default SearchWidget;
