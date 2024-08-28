import React from 'react';

const FilterOptions = ({ setGenderFilter }) => {
  return (
    <select onChange={e => setGenderFilter(e.target.value)}>
      <option value="All">All</option>
      <option value="Male">Male</option>
      <option value="Female">Female</option>
      <option value="Agender">Agender</option>
      <option value="Genderfluid">Genderfluid</option>
    </select>
  );
};

export default FilterOptions;
