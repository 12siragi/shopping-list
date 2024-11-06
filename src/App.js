import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Header from './components/Header';
import { ShoppingListProvider } from './context/ShoppingListContext';
import Home from './components/Home';
import ListPage from './components/ListPage';
import CreateList from './components/CreateList';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <ShoppingListProvider>
      <Router>
        <div className={darkMode ? 'bg-gray-800 text-white min-h-screen' : 'bg-white text-black min-h-screen'}>
          <Header />
          <NavBar />
          <button onClick={() => setDarkMode(!darkMode)} className="p-2 m-4 border rounded">
            Toggle Dark Mode
          </button>
          <Routes>
            <Route path="/" element={<Home darkMode={darkMode} />} />
            <Route path="/list/:id" element={<ListPage />} />
            <Route path="/create-list" element={<CreateList />} /> {/* New Route */}
          </Routes>
        </div>
      </Router>
    </ShoppingListProvider>
  );
};

export default App;
