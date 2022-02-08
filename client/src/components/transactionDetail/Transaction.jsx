import React, { useState } from "react";

import "./transaction.scss";

const Transaction = () => {
  const [status, setStatus] = useState(false);

  const handleEvent = () => {
    setStatus(!status);
  };

  return (
    <div className="transaction">
      <h3>Recent Orders</h3>
      <table className="transaction__tables">
        <tr>
          <th>Customer</th>
          <th>date</th>
          <th>Amount</th>
          <th>payments</th>
          <th>Status</th>
        </tr>
        <tr>
          <td>
            <img
              src="https://images.hdqwalls.com/wallpapers/thumb/sadness-8n.jpg"
              alt=""
            />
            <span>aHMED</span>
          </td>
          <td>22/02/2022</td>
          <td>5200RS</td>
          <td>due</td>
          <td className={status ? "pay" : "pending"}>pending</td>
          <td className="detail" onClick={handleEvent}>
            details
          </td>
        </tr>
        <tr>
          <td>
            <img
              src="https://images.hdqwalls.com/wallpapers/thumb/sadness-8n.jpg"
              alt=""
            />
            <span>AHMED</span>
          </td>
          <td>22/02/2022</td>
          <td>5200RS</td>
          <td>Paid</td>
          <td className={status ? "pay" : "pending"}>delivers</td>
          <td className="detail" onClick={handleEvent}>
            details
          </td>
        </tr>
        <tr>
          <td>
            <img
              src="https://images.hdqwalls.com/wallpapers/thumb/sadness-8n.jpg"
              alt=""
            />
            <span>aHMED</span>
          </td>
          <td>22/02/2022</td>
          <td>5200RS</td>
          <td>due</td>
          <td className={status ? "pay" : "pending"}>pending</td>
          <td className="detail" onClick={handleEvent}>
            details
          </td>
        </tr>
        <tr>
          <td>
            <img
              src="https://images.hdqwalls.com/wallpapers/thumb/sadness-8n.jpg"
              alt=""
            />
            <span>AHMED</span>
          </td>
          <td>22/02/2022</td>
          <td>5200RS</td>
          <td>Paid</td>
          <td className={status ? "pay" : "pending"}>delivers</td>
          <td className="detail" onClick={handleEvent}>
            details
          </td>
        </tr>
        <tr>
          <td>
            <img
              src="https://images.hdqwalls.com/wallpapers/thumb/sadness-8n.jpg"
              alt=""
            />
            <span>aHMED</span>
          </td>
          <td>22/02/2022</td>
          <td>5200RS</td>
          <td>due</td>
          <td className={status ? "pay" : "pending"}>pending</td>
          <td className="detail" onClick={handleEvent}>
            details
          </td>
        </tr>
        <tr>
          <td>
            <img
              src="https://images.hdqwalls.com/wallpapers/thumb/sadness-8n.jpg"
              alt=""
            />
            <span>AHMED</span>
          </td>
          <td>22/02/2022</td>
          <td>5200RS</td>
          <td>Paid</td>
          <td className={status ? "pay" : "pending"}>delivers</td>
          <td className="detail" onClick={handleEvent}>
            details
          </td>
        </tr>
        <tr>
          <td>
            <img
              src="https://images.hdqwalls.com/wallpapers/thumb/sadness-8n.jpg"
              alt=""
            />
            <span>AHMED</span>
          </td>
          <td>22/02/2022</td>
          <td>5200RS</td>
          <td>Paid</td>
          <td className={status ? "pay" : "pending"}>delivers</td>
          <td className="detail" onClick={handleEvent}>
            details
          </td>
        </tr>
        <tr>
          <td>
            <img
              src="https://images.hdqwalls.com/wallpapers/thumb/sadness-8n.jpg"
              alt=""
            />
            <span>AHMED</span>
          </td>
          <td>22/02/2022</td>
          <td>5200RS</td>
          <td>Paid</td>
          <td className={status ? "pay" : "pending"}>delivers</td>
          <td className="detail" onClick={handleEvent}>
            details
          </td>
        </tr>
      </table>
    </div>
  );
};

export default Transaction;
