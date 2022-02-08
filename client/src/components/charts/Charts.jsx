import React from "react";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
} from "recharts";

import "./charts.scss";

const data = [
  {
    name: "Jan",
    Sales: 4000,
  },
  {
    name: "Feb",
    Sales: 3000,
  },
  {
    name: "Mar",
    Sales: 2000,
  },
  {
    name: "Apr",
    Sales: 2780,
  },
  {
    name: "May",
    Sales: 1890,
  },
  {
    name: "Jun",
    Sales: 2390,
  },
  {
    name: "Jul",
    Sales: 3490,
  },
  {
    name: "Aug",
    Sales: 2000,
  },
  {
    name: "Sep",
    Sales: 2780,
  },
  {
    name: "Oct",
    Sales: 1890,
  },
  {
    name: "Nov",
    Sales: 2390,
  },
  {
    name: "Dec",
    Sales: 3490,
  },
];

const Charts = () => {
  return (
    <div className="charts">
      <h3>Sales Analytics</h3>
      <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart data={data}>
          <XAxis dataKey="name" stroke="#5550bd" />
          <Line dataKey="Sales" type="monotone" stroke="#5550bd" />
          <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5" />
          <Tooltip />
          <Legend />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Charts;
