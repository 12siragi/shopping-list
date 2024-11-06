import { Link } from 'react-router-dom';
import { useState } from 'react';

const NavBar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="bg-gray-200 p-4 relative">
      <div className="flex justify-between items-center">
        <div>
          <Link to="/" className="text-blue-600 hover:underline mr-4">Home</Link>
          <Link to="/list/1" className="text-blue-600 hover:underline">List 1</Link>
          <Link to="/list/2" className="text-blue-600 hover:underline ml-4">List 2</Link>
        </div>
        <div>
          <button 
            className="text-blue-600 hover:underline" 
            onClick={() => setDropdownOpen(!isDropdownOpen)}
          >
            More Options
          </button>
          {isDropdownOpen && (
            <div className="absolute bg-white border shadow-lg mt-2">
              <Link to="/settings" className="block px-4 py-2 hover:bg-gray-100">Settings</Link>
              <Link to="/about" className="block px-4 py-2 hover:bg-gray-100">About</Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
