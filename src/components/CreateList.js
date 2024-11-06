import React from 'react';
import CreateList from './CreateList'; // Assuming this is where CreateList is defined
import ShoppingListDisplay from './ShoppingListDisplay'; // Import the display component

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <CreateList />
      <ShoppingListDisplay />
    </div>
  );
};

export default App;
