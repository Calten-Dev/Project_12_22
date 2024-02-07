import React, { useEffect, useState } from "react";
import { Box, Select, MenuItem, OutlinedInput } from "@mui/material";
import { customizedTheme } from "../../CustomizedTheme";

function TickerSelect({ handleTickerChange, managerList, selectedManagerId, handleManagerChange }) {
  const [managerCd, setManagerCd] = useState("");
  const [ticker, setTicker] = useState("");
  useEffect(() => {
    setTicker("");
    !!selectedManagerId
      ? setManagerCd(selectedManagerId)
      : !!managerList && managerList.length > 0
      ? setManagerCd(managerList[0].mm_id)
      : setManagerCd("");
  }, [managerList, selectedManagerId]);

  const handleEnterPress = (event) => {
    if (event.key === "Enter") {
      handleTickerChange(ticker);
      setTicker("");
    }
  };

  const handleSelectChange = (event) => {
    setManagerCd(event.target.value);
    handleManagerChange(event.target.value);
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
        value={managerCd}
        onChange={handleSelectChange}
      >
        {managerList &&
          managerList.length > 0 &&
          managerList.map((item, index) => (
            <MenuItem key={index} value={item.mm_id} sx={{ ":hover": { background: "#E0E0E0" } }}>
              {item.first_name} {item.last_name}
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
