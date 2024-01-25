import React, { useEffect, useState } from "react";
import { Box, Select, MenuItem, OutlinedInput } from "@mui/material";
import { customizedTheme } from "../../CustomizedTheme";

const exampleSelectorData = ["Alex Derbes", "1", "2", "3"];

function TickerSelect({ handleTickerChange }) {
  const [ticker, setTicker] = useState("");
  useEffect(() => {
    setTicker("");
  }, []);

  const handleEnterPress = (event) => {
    if (event.key === "Enter") {
      handleTickerChange(ticker);
      setTicker("");
    }
  };

  const handleInputChange = (event) => {
    setTicker(event.target.value);
  };

  return (
    <Box
      sx={{
        height: "40px",
        backgroundColor: "#314c61",
        paddingX: "10px",
        display: "flex",
        alignItems: "center",
        [customizedTheme.breakpoints.down("md")]: {
          justifyContent: "space-between",
        },
      }}
    >
      <Select
        sx={{
          backgroundColor: "#FFFFFF",
          height: "25px",
          width: "150px",
          border: "none",
          borderRadius: "2px",
          marginRight: "10px",
          [customizedTheme.breakpoints.down("sm")]: {
            width: "100px",
          },
        }}
        defaultValue={0}
      >
        {exampleSelectorData &&
          exampleSelectorData.length > 0 &&
          exampleSelectorData.map((item, index) => (
            <MenuItem key={index} value={index}>
              {item}
            </MenuItem>
          ))}
      </Select>
      <Box
        component={"label"}
        sx={{
          color: "#FFFFFF",
          [customizedTheme.breakpoints.down("xs")]: {
            display: "none",
          },
        }}
      >
        Ticker :{" "}
      </Box>
      <OutlinedInput
        sx={{
          height: "25px",
          width: "100px",
          backgroundColor: "#FFFFFF",
          border: "none",
          borderRadius: "2px",
          marginLeft: "10px",
          [customizedTheme.breakpoints.down("xs")]: {
            width: "70px",
          },
        }}
        onChange={handleInputChange}
        onKeyUp={handleEnterPress}
        value={ticker}
      />
    </Box>
  );
}

export default TickerSelect;
