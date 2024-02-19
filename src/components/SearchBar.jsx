// Search.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      window.location.href = `/search/${searchTerm}`;
    }
  };

  return (
    <div className="box">
        <form name="search">
        <input type="text" 
                className="input" 
                name="txt" 
                value={searchTerm}
                onChange={handleChange}
                onKeyDown={handleKeyPress} 
                placeholder='search movie title here..'
                onmouseout="this.value = ''; 
                this.blur();"/>
        </form>
        <i className="fas fa-search"></i>
    </div>
  );
};

export default Search;