import React from "react";
import { Box, Select, MenuItem } from "@mui/material";
import HeaderButtons from "./HeaderButtons";
import TickerSelect from "./TickerSelect";
import { StyledHeaderButton } from "./HeaderButtons/StyledComponents";
import { customizedTheme } from "../CustomizedTheme";

const exampleGoto = ["Go To...", "1", "2", "3"];

function Header() {
  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        zIndex: "999",
        width: "100vw",
        backgroundColor: "#314c61",
        paddingY: "5px",
        paddingX: "20px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        boxSizing: "border-box",
        overflow: "hidden",
        [customizedTheme.breakpoints.down("sm")]: {
          flexDirection: "column",
          justifyContent: "center",
        },
        [customizedTheme.breakpoints.down("md")]: {
          paddingX: "2px",
        },
      }}
    >
      <HeaderButtons />
      <Select
        sx={{
          backgroundColor: "#FFFFFF",
          height: "25px",
          width: "120px",
          border: "none",
          borderRadius: "2px",
          [customizedTheme.breakpoints.down("md")]: {
            display: "none",
          },
        }}
        defaultValue={0}
      >
        {exampleGoto &&
          exampleGoto.length > 0 &&
          exampleGoto.map((item, index) => (
            <MenuItem key={index} value={index}>
              {item}
            </MenuItem>
          ))}
      </Select>
      <TickerSelect />
      <StyledHeaderButton sx={{ [customizedTheme.breakpoints.down("md")]: { display: "none" } }}>Go</StyledHeaderButton>
    </Box>
  );
}

export default Header;
