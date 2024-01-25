import React from "react";
import ColoredArrowIcon from "../ColoredArrow";
import { Box } from "@mui/material";
import { formatNumber } from "../../utils";
import { useMediaQuery } from "@mui/material";
function DetailedTickerInfo({ data }) {
  const mobileMatches = useMediaQuery("(min-width:600px)");
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: mobileMatches ? "row" : "column",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box component={"span"} sx={{ color: "#696969", margin: "5px", fontSize: "14px", fontWeight: "700" }}>
            {data[0]}
          </Box>
          <Box component={"span"} sx={{ color: "#696969", margin: "5px", fontSize: "14px", fontWeight: "700" }}>
            {formatNumber(data[2])}
          </Box>
          <ColoredArrowIcon value={data[3]} />
          <Box
            component={"span"}
            sx={{ color: data[3] > 0 ? "#00AE00" : "#FF0000", margin: "5px", fontSize: "14px", fontWeight: "600" }}
          >
            {formatNumber(data[3])}({formatNumber(data[4])}%)
          </Box>
          <Box component={"span"} sx={{ color: "#696969", margin: "5px", fontSize: "14px", fontWeight: "700" }}>
            Open:
          </Box>
          <Box component={"span"} sx={{ color: "#696969", margin: "5px", fontSize: "14px", fontWeight: "600" }}>
            {formatNumber(data[5])}
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box component={"span"} sx={{ color: "#696969", margin: "5px", fontSize: "14px", fontWeight: "700" }}>
            Range
          </Box>
          <Box component={"span"} sx={{ color: "#696969", margin: "5px", fontSize: "14px", fontWeight: "600" }}>
            (15.86 - 16.83)
          </Box>
          <Box component={"span"} sx={{ color: "#696969", margin: "5px", fontSize: "14px", fontWeight: "700" }}>
            Volumn:
          </Box>
          <Box component={"span"} sx={{ color: "#696969", margin: "5px", fontSize: "14px", fontWeight: "600" }}>
            {formatNumber(data[6])}
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default DetailedTickerInfo;
