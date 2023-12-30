import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import { financeApis } from "../../apis";

function GraphView() {
  const [data, setData] = useState([]);
  useEffect(() => {
    financeApis.getGraphData().then(setData)
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
        maxHeight: "300px",
        minHeight: "200px",
      }}
    >
      <Box component={"img"} src="graph.png" alt="Graph View" sx={{ maxWidth: "100%", maxHeight: "100%" }} />
    </Box>
  );
}

export default GraphView;
