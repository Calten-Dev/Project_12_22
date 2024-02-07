import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import { useParams } from "react-router";
import { useMediaQuery } from "@mui/material";
import { financeApis } from "../apis";
import PositionDetailEarningTable from "../components/PositionDetailEarningTable";
import PositionDetailHistoryTable from "../components/PositionDetailHistoryTable";
import PositionDetailTable from "../components/PositionDetailTable";

function PositionDetail() {
  const mobileMatches = useMediaQuery("(min-width:900px)");
  const [managerData, setManagerData] = useState([]);
  const [mmData, setMMData] = useState({});
  let { managerId } = useParams();
  const fetchData = (mmId) => {
    financeApis.getPositionDetailData(mmId).then(setManagerData);
    financeApis.getMMDetailData(mmId).then(setMMData);
  };

  useEffect(() => {
    fetchData(managerId);
    const intervalId = setInterval(() => fetchData(managerId), 60000);
    return () => clearInterval(intervalId);
  }, [managerId]);

  return (
    <>
      {mobileMatches ? (
        <>
          <Box sx={{ height: "100%" }}>
            <PositionDetailTable managerData={managerData} mmData={mmData} />
          </Box>
        </>
      ) : (
        <>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
            }}
          >
            <PositionDetailEarningTable managerData={managerData} />
            <PositionDetailHistoryTable managerData={managerData} mmData={mmData}/>
          </Box>
        </>
      )}
    </>
  );
}

export default PositionDetail;
