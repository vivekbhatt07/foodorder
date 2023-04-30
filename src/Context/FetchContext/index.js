import React, { useState, useEffect, useContext, createContext } from "react";
import { fakeFetch } from "../../Data/FakeFetch";

const FetchContext = createContext();

function FetchContextProvider({ children }) {
  const [menuList, setMenuList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const handleData = async () => {
    try {
      const response = await fakeFetch("https://example.com/api/menu");
      const { status, data } = response;
      if (status === 200) {
        setMenuList(data.menu);
        setIsLoading(false);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    handleData();
  }, []);

  return (
    <FetchContext.Provider value={{ menuList, isLoading }}>
      {children}
    </FetchContext.Provider>
  );
}

function useFetch() {
  return useContext(FetchContext);
}

export { useFetch, FetchContextProvider };
