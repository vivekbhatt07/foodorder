import React, { useState, useContext, createContext } from "react";
import { useFetch } from "../FetchContext";

const CartContext = createContext();

function CartContextProvider({ children }) {
  const { menuList } = useFetch();
  const [cartList, setCartList] = useState([]);
  const updateCartList = (getId) => {
    const getCart = menuList.find((currentItem) => currentItem.id === getId);
    return setCartList((prevCartList) => {
      if (prevCartList.length === 0) {
        return [{ ...getCart, cartCount: 1 }];
      }

      return prevCartList.reduce((updatedList, currentCart, index) => {
        if (currentCart.id == getCart.id) {
          return [
            ...updatedList,
            { ...currentCart, cartCount: currentCart.cartCount + 1 },
          ];
        } else {
          if (prevCartList.length == index + 1) {
            if (prevCartList.every((current) => !(current.id == getCart.id))) {
              return [
                ...updatedList,
                currentCart,
                { ...getCart, cartCount: 1 },
              ];
            } else {
              return [...updatedList, currentCart];
            }
          } else {
            return [...updatedList, currentCart];
          }
        }
      }, []);
    });
  };

  const deleteCart = (getId) => {
    const getCart = menuList.find((currentItem) => currentItem.id === getId);

    setCartList((prevCartList) => {
      return prevCartList.reduce((updatedList, currentCart) => {
        if (currentCart.id === getCart.id) {
          if (currentCart.cartCount > 1) {
            return [
              ...updatedList,
              { ...currentCart, cartCount: currentCart.cartCount - 1 },
            ];
          }
          if (currentCart.cartCount === 1) {
            return [...updatedList];
          }
        } else {
          return [...updatedList, { ...currentCart }];
        }
      }, []);
    });
  };

  const cartCount = cartList.reduce((totalCount, currentCart) => {
    return totalCount + currentCart.cartCount;
  }, 0);

  const total = (getHint) => {
    return cartList.reduce((totalCount, currentCart) => {
      return totalCount + currentCart[getHint] * currentCart.cartCount;
    }, 0);
  };

  // const applyVoucher = () => {};
  return (
    <CartContext.Provider
      value={{ cartList, updateCartList, deleteCart, cartCount, total }}
    >
      {children}
    </CartContext.Provider>
  );
}

function useCart() {
  return useContext(CartContext);
}

export { useCart, CartContextProvider };
