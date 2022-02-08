import React from "react";
import Charts from "../../components/charts/Charts";
import Income from "../../components/income/Income";
import Transaction from "../../components/transactionDetail/Transaction";
import "./homeScreen.scss";

const HomeScreen = () => {
  return (
    <div className="home">
      <div className="home__analytics">
        <Income />
        <Charts />
        <Transaction />
      </div>
    </div>
  );
};

export default HomeScreen;
