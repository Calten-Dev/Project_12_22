import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import { financeApis } from "../../apis";
import { LineChart } from "@mui/x-charts";
import { convertGraphData, getXAxisData } from "../../utils";
import { customizedTheme } from "../CustomizedTheme";
import { ChartsReferenceLine } from "@mui/x-charts/ChartsReferenceLine";

function GraphView() {
  const [graphData, setGraphData] = useState({ acdData: [], ccmpData: [], spxData: [] });
  const [xAxisData, setXAxisData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await financeApis.getGraphData();
        setGraphData(convertGraphData(result));
        setXAxisData(getXAxisData());
      } catch (error) {
        console.error("Error fetching graph data:", error);
      }
    };

    fetchData();
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
        [customizedTheme.breakpoints.down("sm")]: {
          height: "200px",
        },
        [customizedTheme.breakpoints.down("md")]: {
          height: "250px",
        },
        height: "300px",
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
                minute: "2-digit"
              }),
          },
        ]}
        series={[
          {
            data: graphData.acdData,
            label: "ACD",
            area: false,
            showMark: false,
          },
          {
            data: graphData.ccmpData,
            label: "CCMP",
            area: false,
            showMark: false,
          },
          {
            data: graphData.spxData,
            label: "SPX",
            area: false,
            showMark: false,
          },
        ]}
      >
        <ChartsReferenceLine y={0} lineStyle={{ stroke: '#C0C0C0'}} />
        <ChartsReferenceLine y={0.5} lineStyle={{ stroke: '#D8D8D8'}} />
        <ChartsReferenceLine y={-0.5} lineStyle={{ stroke: '#D8D8D8'}} />
        <ChartsReferenceLine y={1} lineStyle={{ stroke: '#D8D8D8'}} />
        <ChartsReferenceLine y={-1} lineStyle={{ stroke: '#D8D8D8'}} />
      </LineChart>
    </Box>
  );
}

export default GraphView;
