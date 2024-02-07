import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import GraphedTable from "../components/GraphedTable";
import FollowedTable from "../components/FollowedTable";
import WinnerTable from "../components/WinnerTable";
import LoserTable from "../components/LoserTable";
import GraphView from "../components/GraphView";
import SubjectTable from "../components/SubjectTable";
import { useMediaQuery } from "@mui/material";
import { financeApis } from "../apis";

function Summary({ handleManagerClickOnFollowedTable }) {
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
              height: "100%",
              display: "flex",
            }}
          >
            <Box sx={{ width: "350px", height: 1, display: "flex", flexDirection: "column", paddingLeft: "2px" }}>
              <Box sx={{ display: "flex", flexDirection: "column", overflow: "auto" }}>
                <GraphedTable followedData={followedData} />
                <FollowedTable
                  followedData={followedData}
                  handleManagerClickOnFollowedTable={handleManagerClickOnFollowedTable}
                />
              </Box>
              <Box sx={{ flex: 1, display: "flex", flexDirection: "column", overflow: "auto", paddingBottom: "4px" }}>
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
          <Box>
            <GraphedTable followedData={followedData} />
            <FollowedTable
              followedData={followedData}
              handleManagerClickOnFollowedTable={handleManagerClickOnFollowedTable}
            />
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

export default Summary;
