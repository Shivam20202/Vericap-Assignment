import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
  FaTh,
  FaBars,
  FaUserAlt,
  FaRegChartBar,
  FaCommentAlt,
  FaShoppingBag,
  FaThList
} from 'react-icons/fa';

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const menuItem = [
    {
      path: "/dashboard",
      name: "Dashboard",
      icon: <FaTh />
    },
    {
      path: "/about",
      name: "About",
      icon: <FaUserAlt />
    },
    {
      path: "/analytics",
      name: "Analytics",
      icon: <FaRegChartBar />
    },
    {
      path: "/comment",
      name: "Comment",
      icon: <FaCommentAlt />
    },
    {
      path: "/product",
      name: "Product",
      icon: <FaShoppingBag />
    },
    {
      path: "/Settings",
      name: "Settings",
      icon: <FaThList />
    }
  ];

  return (
    <div className="container">
      <div style={{ width: isOpen ? "200px" : "50px" }} className="sidebar">
        <div className="top_section">
          <h1 style={{ display: isOpen ? "block" : "none" }} className="logo">User</h1>
          <div style={{ marginLeft: isOpen ? "50px" : "0px" }} className="bars">
            <FaBars onClick={toggle} />
          </div>
        </div>

        {menuItem.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className={({ isActive }) => `link ${isActive ? "active" : ""}`} 
          >
            <div className="icon">{item.icon}</div>
            <div style={{ display: isOpen ? "block" : "none" }} className="link_text">
              {item.name}
            </div>
          </NavLink>
        ))}
      </div>
      <main>{children}</main>
    </div>
  );
};

export default Sidebar;

