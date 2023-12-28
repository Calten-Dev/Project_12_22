import React from "react";
import { Box } from "@mui/material";
import { StyledHeaderButton } from "./StyledComponents";
import { customizedTheme } from "../../CustomizedTheme";

function HeaderButtons() {
  return (
    <Box
      sx={{
        height: "40px",
        backgroundColor: "#314c61",
        display: "flex",
        alignItems: "center",
        [customizedTheme.breakpoints.down("md")]: {
          justifyContent: "space-between",
          paddingX: "10px",
        },
      }}
    >
      <StyledHeaderButton>Summaries</StyledHeaderButton>
      <StyledHeaderButton>Positions</StyledHeaderButton>
      <StyledHeaderButton>Trades</StyledHeaderButton>
      <StyledHeaderButton>Orders</StyledHeaderButton>
    </Box>
  );
}

export default HeaderButtons;
