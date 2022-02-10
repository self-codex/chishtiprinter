import React, { useState } from "react";
import { Box, LinearProgress } from "@mui/material";
import "./statistics.scss";

const Statistics = () => {
  const [progress, setProgress] = useState(5);
  const [buffer, setBuffer] = useState(10);

  return (
    <div className="statistic">
      <h4>Target sales</h4>
      <p> Total Performmence</p>
      <div className="statistic__order">
        <div className="statistic__order__progress">
          <Box sx={{ width: "100%" }}>
            <div className="order">
              <p>Order</p>
              <p>125</p>
            </div>
            <LinearProgress
              color="success"
              variant="buffer"
              value={progress}
              valueBuffer={buffer}
            />
            <div className="order">
              <p>Total Targer</p>
              <p>100%</p>
            </div>
          </Box>
        </div>
        <div className="statistic__order__progress">
          <Box sx={{ width: "100%" }}>
            <div className="order">
              <p>Income</p>
              <p>Rs325</p>
            </div>
            <LinearProgress
              color="error"
              variant="buffer"
              value={progress}
              valueBuffer={buffer}
            />
            <div className="order">
              <p>Total Target</p>
              <p>100%</p>
            </div>
          </Box>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
