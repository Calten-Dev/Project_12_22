import React from "react";
import { Box } from "@mui/material";
import { StyledHeaderButton } from "./StyledComponents";
import { customizedTheme } from "../../CustomizedTheme";
import { Link } from "react-router-dom";
function HeaderButtons({selectedManagerId}) {
  const buttonLabels = ["Summaries", "Positions", "Trades", "Orders"];
  const navigateUrls = ["", `positions/${selectedManagerId}`, "trades", "orders"];

  return (
    <Box
      sx={{
        height: "40px",
        backgroundColor: "#314C61",
        display: "flex",
        alignItems: "center",
        [customizedTheme.breakpoints.down("md")]: {
          justifyContent: "space-between",
          paddingX: "10px",
        },
      }}
    >
      {/* onClick={() => handleClick(navigateUrls[index])} */}
      {buttonLabels.map((item, index) => (
        <Link to={`/${navigateUrls[index]}`} key={index}>
          <StyledHeaderButton>{item}</StyledHeaderButton>
        </Link>
      ))}
    </Box>
  );
}

export default HeaderButtons;
