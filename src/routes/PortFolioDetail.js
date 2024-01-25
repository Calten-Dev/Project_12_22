import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box, useMediaQuery } from "@mui/material";
import { financeApis } from "../apis";
import IndividualPortfolioTable from "../components/IndividualPortfolioTable";
import DetailedTickerInfo from "../components/DetailedTickerInfo";
import IndividualNotesAndTradeTable from "../components/IndividualNotesAndTradeTable";
import { useNavigate } from "react-router-dom";

const INDEX_FOR_TABLE = 7;
const INDEX_FOR_PRICE = 2;

function PortfolioDetail() {
  const mobileMatches = useMediaQuery("(min-width:900px)");
  let { selectedTicker } = useParams();
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const fetchData = () => {
    financeApis
      .getIndividualPortfolioData(selectedTicker)
      .then(setData)
      .catch((error) => {
        console.log("error => ", error);
        navigate("/notfound");
      });
  };

  useEffect(() => {
    fetchData();
    const intervalId = setInterval(fetchData, 60000);
    return () => clearInterval(intervalId);
  });

  return (
    <>
      {mobileMatches ? (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            height: "100%",
          }}
        >
          <DetailedTickerInfo data={data} />
          <Box sx={{ display: "flex", flex: 1, height: "90%", margin: "4px" }}>
            <IndividualPortfolioTable
              selectedTicker={selectedTicker}
              tickerData={!!data[INDEX_FOR_TABLE] ? data[INDEX_FOR_TABLE] : []}
              price={data[INDEX_FOR_PRICE]}
            />
            <IndividualNotesAndTradeTable data={data} />
          </Box>
        </Box>
      ) : (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            height: "100%",
          }}
        >
          <DetailedTickerInfo data={data} />
          <IndividualPortfolioTable
            selectedTicker={selectedTicker}
            tickerData={!!data[INDEX_FOR_TABLE] ? data[INDEX_FOR_TABLE] : []}
            price={data[INDEX_FOR_PRICE]}
          />
          <IndividualNotesAndTradeTable data={data} />
        </Box>
      )}
    </>
  );
}

export default PortfolioDetail;
