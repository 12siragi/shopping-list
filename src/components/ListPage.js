import React, { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ShoppingListContext } from '../context/ShoppingListContext';

const ListPage = () => {
  const { id } = useParams();
  const { lists, addItemToList, removeItemFromList } = useContext(ShoppingListContext);
  const list = lists.find((list) => list.id === parseInt(id));

  const [newItem, setNewItem] = useState('');

  const handleAddItem = (e) => {
    e.preventDefault();
    if (newItem) {
      addItemToList(list.id, newItem);
      setNewItem('');
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold">{list ? list.name : 'List Not Found'}</h2>
      <ul className="mt-4">
        {list ? (
          list.items.map((item, index) => (
            <li key={index} className="border-b py-2 flex justify-between items-center">
              {item}
              <button 
                onClick={() => removeItemFromList(list.id, index)} 
                className="text-red-500 hover:underline"
              >
                Delete
              </button>
            </li>
          ))
        ) : (
          <li>No items found.</li>
        )}
      </ul>
      <form onSubmit={handleAddItem} className="mt-4">
        <input
          type="text"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          placeholder="Add new item"
          className="border p-2 w-full"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 mt-2 hover:bg-blue-600"
        >
          Add Item
        </button>
      </form>
    </div>
  );
};

export default ListPage;
