import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import { LineChart } from "@mui/x-charts";
import { financeApis } from "../../apis";
import { convertGraphData, getXAxisData } from "../../utils";
import { customizedTheme } from "../CustomizedTheme";
import { ChartsReferenceLine } from "@mui/x-charts/ChartsReferenceLine";

function GraphView() {
  const [graphData, setGraphData] = useState({});
  const [xAxisData, setXAxisData] = useState([]);

  const fetchData = async () => {
    try {
      const result = await financeApis.getGraphData();
      setGraphData(convertGraphData(result));
      setXAxisData(getXAxisData());
    } catch (error) {
      console.error("Error fetching graph data:", error);
    }
  };

  useEffect(() => {
    fetchData();

    const intervalId = setInterval(fetchData, 60000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <Box
      sx={{
        border: "4px solid #495565",
        margin: "4px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxSizing: "border-box",
        overflowX: "hidden",
        height: "300px",
        [customizedTheme.breakpoints.down("sm")]: {
          height: "200px",
        },
        [customizedTheme.breakpoints.down("md")]: {
          height: "250px",
        },
      }}
    >
      <LineChart
        xAxis={[
          {
            scaleType: "point",
            data: xAxisData,
            tickInterval: (value, index) => index % 30 === 0,
            valueFormatter: (date) =>
              date.toLocaleTimeString("fr-FR", {
                hour: "2-digit",
                minute: "2-digit",
              }),
          },
        ]}
        series={Object.keys(graphData).map((value, index) => {
          return { id: value, data: graphData[value], label: value, area: false, showMark: false };
        })}
      >
        <ChartsReferenceLine y={0} lineStyle={{ stroke: "#C0C0C0" }} />
        <ChartsReferenceLine y={0.5} lineStyle={{ stroke: "#D8D8D8" }} />
        <ChartsReferenceLine y={-0.5} lineStyle={{ stroke: "#D8D8D8" }} />
        <ChartsReferenceLine y={1} lineStyle={{ stroke: "#D8D8D8" }} />
        <ChartsReferenceLine y={-1} lineStyle={{ stroke: "#D8D8D8" }} />
      </LineChart>
    </Box>
  );
}

export default GraphView;
