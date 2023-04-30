import React, { useContext, createContext, useState } from "react";

import { useFetch } from "../FetchContext";

const FilterContext = createContext();

function FilterContextProvider({ children }) {
  const { menuList } = useFetch();
  const [filteredList, setFilteredList] = useState([]);

  const simpleString = (getString) => {
    return getString.trim().toLowerCase().split(" ").join("");
  };

  function updateFilterList(getFilters) {
    const { itemName, isVeg, isSpicy, sortOrder } = getFilters;

    if (!itemName) {
      setFilteredList([...menuList]);
    }

    if (itemName) {
      setFilteredList((prevFilteredList) => {
        return prevFilteredList.filter((current) => {
          return simpleString(current.name).includes(simpleString(itemName));
        });
      });
    }

    if (sortOrder) {
      setFilteredList((prevFilteredList) => {
        return prevFilteredList.sort((a, b) =>
          sortOrder === "lowToHigh" ? a.price - b.price : b.price - a.price
        );
      });
    }

    if (isVeg || isSpicy) {
      if (isVeg && isSpicy) {
        setFilteredList((prevFilteredList) => {
          return prevFilteredList.filter((current) => {
            return current.is_vegetarian && current.is_spicy;
          });
        });
      }
      if (isVeg) {
        setFilteredList((prevFilteredList) => {
          return prevFilteredList.filter((current) => {
            return current.is_vegetarian;
          });
        });
      }
      if (isSpicy) {
        setFilteredList((prevFilteredList) => {
          return prevFilteredList.filter((current) => {
            return current.is_spicy;
          });
        });
      }
    }
  }

  return (
    <FilterContext.Provider value={{ filteredList, updateFilterList }}>
      {children}
    </FilterContext.Provider>
  );
}

function useFilter() {
  return useContext(FilterContext);
}

export { useFilter, FilterContextProvider };
