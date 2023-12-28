import React, {useState, useEffect} from "react";
import { Box } from "@mui/material";

function GraphView() {
  const [data, setData] = useState([]);
  const getData = async () => {
    try {
      const response = await fetch("graph_cleaned.json", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getData();
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
        minHeight: "200px"
      }}
    >
      <Box component={"img"} src="graph.png" alt="Graph View" sx={{ maxWidth: "100%", maxHeight: "100%" }} />
    </Box>
  );
}

export default GraphView;
