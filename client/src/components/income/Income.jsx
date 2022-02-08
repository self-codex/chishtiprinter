import React from "react";
import "./income.scss";
import { FiTrendingUp } from "react-icons/fi";
import { FaChartBar } from "react-icons/fa";
import { BiBarChart } from "react-icons/bi";
import { PieChart, Pie, Sector, ResponsiveContainer } from "recharts";
import { Circle } from "rc-progress";

import "./income.scss";
const data = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
];

const Income = () => {
  return (
    <div className="income">
      <div className="income__feature">
        <FaChartBar className="icons" />
        <p>total sales</p>
        <div className="price">
          <h2>$2200</h2>
          <span>Compared to last month</span>
        </div>
      </div>
      <div className="income__feature">
        <BiBarChart className="icons s" />
        <p>total expenses</p>
        <div className="price">
          <h2>$2200</h2>
          <span>Compared to last month</span>
        </div>
      </div>
      <div className="income__feature">
        <FiTrendingUp className="icons t" />
        <p>total income</p>
        <div className="price">
          <h2>$2200</h2>
          <span>Compared to last month</span>
        </div>
      </div>
    </div>
  );
};

export default Income;
