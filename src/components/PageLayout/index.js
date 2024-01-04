import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import GraphedTable from "../GraphedTable";
import FollowedTable from "../FollowedTable";
import WinnerTable from "../WinnerTable";
import LoserTable from "../LoserTable";
import GraphView from "../GraphView";
import SubjectTable from "../SubjectTable";
import { customizedTheme } from "../CustomizedTheme";
import { useMediaQuery } from "@mui/material";
import { financeApis } from "../../apis";

function PageLayout() {
  const mobileMatches = useMediaQuery("(min-width:700px)");

  const [followedData, setFollowedData] = useState([]);
  const [portfolioData, setPortfolioData] = useState([]);

  const fetchData = () => {
    financeApis.getFollowedData().then(setFollowedData);
    financeApis.getPortfolioData().then(setPortfolioData);
  };

  useEffect(() => {
    fetchData();
    const intervalId = setInterval(fetchData, 60000);

    return () => clearInterval(intervalId);
  }, []);

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
                <GraphedTable followedData={followedData} />
                <FollowedTable followedData={followedData} />
              </Box>
              <Box sx={{ flex: 1, display: "flex", flexDirection: "column", overflow: "auto", paddingBottom: "2px" }}>
                <WinnerTable portfolioData={portfolioData} />
                <LoserTable portfolioData={portfolioData} />
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
            <GraphedTable followedData={followedData} />
            <FollowedTable followedData={followedData} />
            <GraphView />
            <WinnerTable portfolioData={portfolioData} />
            <LoserTable portfolioData={portfolioData} />
            <SubjectTable />
          </Box>
        </>
      )}
    </>
  );
}

export default PageLayout;
