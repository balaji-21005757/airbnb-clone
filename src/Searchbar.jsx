// src/SearchBar.js
import React, { useState } from 'react';
import './SearchBar.css';

const SearchBar = () => {
  const [location, setLocation] = useState('');
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [guestsOpen, setGuestsOpen] = useState(false);
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
    if (e.target.value) {
      alert(`User has selected the destination: ${e.target.value}`);
    }
  };

  const handleSearch = () => {
    // Handle the search logic here, such as updating the state or making an API call
    console.log({ location, checkInDate, checkOutDate, adults, children, infants });
  };

  return (
    <div className="search-bar">
      <div className="search-bar-item">
        <label htmlFor="location">Where</label>
        <input
          type="text"
          id="location"
          value={location}
          onChange={handleLocationChange}
          placeholder="Search destinations"
        />
      </div>
      <div className="search-bar-item">
        <label htmlFor="check-in">Check-in</label>
        <input
          type="date"
          id="check-in"
          value={checkInDate}
          onChange={(e) => setCheckInDate(e.target.value)}
        />
      </div>
      <div className="search-bar-item">
        <label htmlFor="check-out">Check-out</label>
        <input
          type="date"
          id="check-out"
          value={checkOutDate}
          onChange={(e) => setCheckOutDate(e.target.value)}
        />
      </div>
      <div className="search-bar-item" onClick={() => setGuestsOpen(!guestsOpen)}>
        <label htmlFor="guests">Who</label>
        <input
          type="text"
          id="guests"
          value={`${adults} adults, ${children} children, ${infants} infants`}
          readOnly
          placeholder="Add guests"
        />
        {guestsOpen && (
          <div className="guests-dropdown">
            <div className="guests-dropdown-item">
              <span>Adults</span>
              <div>
                <button onClick={() => setAdults(adults > 0 ? adults - 1 : 0)}>-</button>
                <span>{adults}</span>
                <button onClick={() => setAdults(adults + 1)}>+</button>
              </div>
            </div>
            <div className="guests-dropdown-item">
              <span>Children</span>
              <div>
                <button onClick={() => setChildren(children > 0 ? children - 1 : 0)}>-</button>
                <span>{children}</span>
                <button onClick={() => setChildren(children + 1)}>+</button>
              </div>
            </div>
            <div className="guests-dropdown-item">
              <span>Infants</span>
              <div>
                <button onClick={() => setInfants(infants > 0 ? infants - 1 : 0)}>-</button>
                <span>{infants}</span>
                <button onClick={() => setInfants(infants + 1)}>+</button>
              </div>
            </div>
          </div>
        )}
      </div>
      <button className="search-bar-button" onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
