import React, { useContext } from 'react';
import { ShoppingListContext } from '../context/ShoppingListContext';

const ShoppingListDisplay = () => {
  const { lists } = useContext(ShoppingListContext);

  return (
    <div className="mt-8">
      <h3 className="text-2xl mb-4">Your Shopping Lists:</h3>
      <ul className="list-disc pl-5">
        {lists.map((list) => (
          <li key={list.id} className="mb-2">
            <strong>{list.name}</strong>
            <ul>
              {list.items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShoppingListDisplay;
