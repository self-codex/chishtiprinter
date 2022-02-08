import React from "react";
import { MdTimeline, MdTrendingUp } from "react-icons/md";
import {
  AiOutlineUsergroupAdd,
  AiOutlineHome,
  AiOutlineShop,
} from "react-icons/ai";
import { BsCurrencyDollar, BsBag } from "react-icons/bs";
import { FiBarChart2 } from "react-icons/fi";
import "./sidebar.scss";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__nav">
        <div className="sidebar__nav__menu">
          <p className="title">Deshboard</p>
          <ul className="sidebar__list">
            <li className="listItems active">
              <AiOutlineHome className="list__icon" /> Home
            </li>
            <li className="listItems">
              <MdTimeline className="list__icon" /> Analytics
            </li>
            <li className="listItems">
              <MdTrendingUp className="list__icon" /> Sales
            </li>
          </ul>
        </div>

        <div className="sidebar__nav__menu">
          <p className="title">Quick menu</p>
          <ul className="sidebar__list">
            <li className="listItems">
              <AiOutlineUsergroupAdd className="list__icon" /> customer
            </li>
            <li className="listItems">
              <AiOutlineShop className="list__icon" /> products
            </li>
            <li className="listItems">
              <BsCurrencyDollar className="list__icon" /> transactions
            </li>
            <li className="listItems">
              <FiBarChart2 className="list__icon" /> reports
            </li>
          </ul>
        </div>

        <div className="sidebar__nav__menu">
          <p className="title">staff</p>
          <ul className="sidebar__list">
            <li className="listItems">
              <BsBag className="list__icon" /> manage
            </li>
            <li className="listItems">
              <MdTimeline className="list__icon" /> Analytics
            </li>
            <li className="listItems">
              <FiBarChart2 className="list__icon" /> reports
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
