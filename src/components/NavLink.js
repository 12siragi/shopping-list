import React from "react";
import { Link } from 'react-router-dom'; // For React Router


const NavLink = ({ href, children }) => {
  return (
    <Link href={href}>
      <a className="text-gray-300 hover:text-white transition duration-300">{children}</a>
    </Link>
  );
};

export default NavLink;
