import React, { createContext, useState } from 'react';

export const ShoppingListContext = createContext();

export const ShoppingListProvider = ({ children }) => {
  const [lists, setLists] = useState([
    { id: 1, name: 'Groceries', items: ['Apples', 'Bread', 'Milk'] },
    { id: 2, name: 'Hardware Store', items: ['Nails', 'Hammer', 'Drill'] }
  ]);

  const addItemToList = (listId, item) => {
    setLists((prevLists) =>
      prevLists.map((list) => {
        if (list.id === listId) {
          return { ...list, items: [...list.items, item] };
        }
        return list;
      })
    );
  };

  const removeItemFromList = (listId, itemIndex) => {
    setLists((prevLists) =>
      prevLists.map((list) => {
        if (list.id === listId) {
          const updatedItems = [...list.items];
          updatedItems.splice(itemIndex, 1);
          return { ...list, items: updatedItems };
        }
        return list;
      })
    );
  };

  return (
    <ShoppingListContext.Provider value={{ lists, addItemToList, removeItemFromList }}>
      {children}
    </ShoppingListContext.Provider>
  );
};
