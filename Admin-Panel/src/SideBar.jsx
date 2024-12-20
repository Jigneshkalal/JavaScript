import React from 'react';
import {

  BsCart3,
  BsGrid1X2Fill,
  BsFillArchiveFill,
  BsFillGrid3X3GapFill,
  BsPeopleFill,
  BsListCheck,
  BsMenuButtonWideFill,
  BsFillGearFill,
} from 'react-icons/bs';
import './App.css'

const SideBar = ({ openSidebarToggle }) => {
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive" : ""}>
      <div className="sidebar-title">
        <div className="sidebar-brand">
          <BsCart3 className="icon_header" /> SHOP
        </div>
      </div>

      <ul className="sidebar-list">
        <li className="sidebar-list-item">
          <a href="#">
            <BsGrid1X2Fill className="icon" /> Dashboard
          </a>
        </li>

        <li className="sidebar-list-item">
          <a href="#">
            <BsCart3 className="icon" /> Total Orders
          </a>
        </li>

        <li className="sidebar-list-item">
          <a href="#">
            <BsFillArchiveFill className="icon" /> Revenue
          </a>
        </li>

        <li className="sidebar-list-item">
          <a href="#">
            <BsListCheck className="icon" /> Pending Orders
          </a>
        </li>

        <li className="sidebar-list-item">
          <a href="#">
            <BsPeopleFill className="icon" /> Active Users
          </a>
        </li>

        <li className="sidebar-list-item">
          <a href="#">
            <BsMenuButtonWideFill className="icon" /> Report
          </a>
        </li>

        <li className="sidebar-list-item">
          <a href="#">
            <BsFillGearFill className="icon" /> Settings
          </a>
        </li>
      </ul>
    </aside>
  );
};

export default SideBar;

