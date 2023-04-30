import React, { useEffect, useState } from "react";

import "./Filtered.css";
import { useFilter } from "../../Context/FilterContext";
import { useFetch } from "../../Context/FetchContext";
function Filtered() {
  const { updateFilterList } = useFilter();
  const { menuList } = useFetch();
  const [filters, setFilters] = useState({
    itemName: "",
    isVeg: false,
    isSpicy: false,
    sortOrder: "",
  });

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFilters((prevFilters) => {
      return {
        ...prevFilters,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  };

  useEffect(() => {
    updateFilterList(filters);
  }, [filters, menuList]);

  return (
    <div className="filter">
      <h2>Filters</h2>
      <div className="filter-list">
        <input
          className="text-input"
          type="text"
          value={filters.itemName}
          placeholder="Search Food Here"
          onChange={handleChange}
          name="itemName"
        />
        <div className="input-chip">
          <input
            id="vegetarian"
            type="checkbox"
            name="isVeg"
            checked={filters.isVeg}
            onChange={handleChange}
          />
          <label htmlFor="vegetarian">Veg</label>
        </div>
        <div className="input-chip">
          <input
            id="spicy"
            type="checkbox"
            name="isSpicy"
            checked={filters.isSpicy}
            onChange={handleChange}
          />
          <label htmlFor="spicy">Spicy</label>
        </div>
        <div className="input-chip">
          <input
            id="ascend-sort"
            type="radio"
            name="sortOrder"
            value="lowToHigh"
            checked={filters.sortOrder === "lowToHigh"}
            onChange={handleChange}
          />
          <label htmlFor="ascend-sort">Sort (price) Low to High</label>
        </div>
        <div className="input-chip">
          <input
            id="descend-sort"
            type="radio"
            name="sortOrder"
            value="highToLow"
            checked={filters.sortOrder === "highToLow"}
            onChange={handleChange}
          />
          <label htmlFor="descend-sort">Sort (price) High to Low</label>
        </div>
      </div>
    </div>
  );
}
export default Filtered;
