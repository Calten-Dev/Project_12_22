import React from "react";
import { Box } from "@mui/material";
import { StyledHeaderButton } from "./StyledComponents";
import { customizedTheme } from "../../CustomizedTheme";

function HeaderButtons({ handleClickButton }) {
  const buttonLabels = ["Summaries", "Positions", "Trades", "Orders"];
  const navigateUrls = ["", "positions", "trades", "orders"];

  const handleClick = (value) => {
    handleClickButton(value);
  };

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
      {buttonLabels.map((item, index) => (
        <StyledHeaderButton key={index} onClick={() => handleClick(navigateUrls[index])}>
          {item}
        </StyledHeaderButton>
      ))}
    </Box>
  );
}

export default HeaderButtons;
