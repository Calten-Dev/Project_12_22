import React from "react";
import { Box } from "@mui/material";
import GraphedTable from "../GraphedTable";
import FollowedTable from "../FollowedTable";
import WinnerTable from "../WinnerTable";
import LoserTable from "../LoserTable";
import GraphView from "../GraphView";
import SubjectTable from "../SubjectTable";
import { customizedTheme } from "../CustomizedTheme";
import { useMediaQuery } from "@mui/material";

function PageLayout() {
  const mobileMatches = useMediaQuery("(min-width:700px)");
  return (
    <>
      {mobileMatches ? (
        <>
          <Box
            sx={{
              [customizedTheme.breakpoints.down("sm")]: {
                paddingTop: "90px",
                height: "100%",
              },
              display: "flex",
              paddingTop: "50px",
              height: "calc(100vh - 50px)",
              width: "100vw",
            }}
          >
            <Box sx={{ width: "350px", height: 1, display: "flex", flexDirection: "column" }}>
              <Box sx={{ display: "flex", flexDirection: "column", overflow: "auto" }}>
                <GraphedTable />
                <FollowedTable />
              </Box>
              <Box sx={{ flex: 1, display: "flex", flexDirection: "column", overflow: "auto", paddingBottom:"2px" }}>
                <WinnerTable />
                <LoserTable />
              </Box>
            </Box>
            <Box
              sx={{
                flex: 1,
                height: 1,
                display: "flex",
                flexDirection: "column",
              }}
            >
              <GraphView />
              <Box sx={{ height: "10px", backgroundColor: "#495565", marginX: "4px" }}></Box>
              <SubjectTable />
            </Box>
          </Box>
        </>
      ) : (
        <>
          <Box
            sx={{
              [customizedTheme.breakpoints.up("sm")]: {
                display: "none",
              },
              paddingTop: "90px",
              height: "100%",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <GraphedTable />
            <FollowedTable />
            <GraphView />
            <WinnerTable />
            <LoserTable />
            <SubjectTable />
          </Box>
        </>
      )}
    </>
  );
}

export default PageLayout;
