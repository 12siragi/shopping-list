import React from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { Link } from 'react-router-dom'; // Correct for React project


const MenuOverlay = ({ toggleMenu, links }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
      <div className="bg-[#121212] p-4 rounded-lg space-y-4 w-3/4">
        <div className="flex justify-end">
          <button onClick={toggleMenu} className="text-white">
            <XMarkIcon className="h-6 w-6" />
          </button>
        </div>
        <div className="flex flex-col items-center">
          {links.map((link, index) => (
            <Link key={index} href={link.path}>
              <a
                onClick={toggleMenu}
                className="text-white py-2 text-lg hover:text-gray-300"
              >
                {link.title}
              </a>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MenuOverlay;
