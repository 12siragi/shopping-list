// src/components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';

const Home = ({ darkMode }) => {
  return (
    <div className={`flex flex-col items-center justify-center h-screen px-4 ${darkMode ? 'bg-gray-800 text-white' : 'bg-gray-100 text-black'}`}>
      <h2 className="text-4xl font-bold mb-6">
        Welcome to Your Shopping List App
      </h2>
      <p className="text-lg mb-8 max-w-lg text-center">
        Easily manage all your shopping lists in one place. Stay organized and never miss an item!
      </p>
      <div className="mb-8">
        <span role="img" aria-label="shopping cart" className="text-7xl">
          🛒
        </span>
      </div>
      <div className="space-x-4">
        <Link to="/list/1">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg hover:bg-blue-700 transition duration-300">
            View My Lists
          </button>
        </Link>
        <Link to="/create-list">
          <button className="bg-green-600 text-white px-8 py-3 rounded-lg text-lg hover:bg-green-700 transition duration-300">
            Create New List
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
