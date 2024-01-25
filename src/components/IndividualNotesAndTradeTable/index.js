import React, { useEffect, useState } from "react";
import { Box, Tabs, Tab } from "@mui/material";
import { SubjectTableHeader } from "./StyledComponents";
import PortfolioNotesTable from "../PortfolioNotesTable";
import PortfolioTradesTable from "../PortfolioTradesTable";

const INDEX_FOR_NOTES = 8;
const INDEX_FOR_TRADES = 9;

function IndividualNotesAndTradeTable({ data }) {
  const [tabValue, setTabValue] = useState("Notes");
  useEffect(() => {
    setTabValue("Notes");
  }, []);

  const handleChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <Box
      sx={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        overflowY: "auto",
        border: "2px solid #B4B4B4",
      }}
    >
      <SubjectTableHeader>
        <Tabs
          sx={{ display: "flex", alignItems: "center" }}
          indicatorColor="primary"
          textColor="primary"
          value={tabValue}
          onChange={handleChange}
        >
          <Tab
            label="Notes"
            value="Notes"
            indicatorColor="secondary"
            textColor="secondary"
            sx={{
              border: "2px solid #4B657A",
              background: "#384C61",
              color: "#FFFFFF",
              minHeight: "20px",
              height: "20px",
              lineHeight: "20px",
              fontWeight: "600",
            }}
          />
          <Tab
            label="Trades"
            value="Trades"
            sx={{
              border: "2px solid #4B657A",
              background: "#384C61",
              color: "#FFFFFF",
              minHeight: "20px",
              height: "20px",
              lineHeight: "20px",
              fontWeight: "600",
            }}
          />
        </Tabs>
      </SubjectTableHeader>
      {tabValue === "Notes" ? (
        <PortfolioNotesTable notesData={data[INDEX_FOR_NOTES]} />
      ) : (
        <PortfolioTradesTable tradesData={data[INDEX_FOR_TRADES]} />
      )}
    </Box>
  );
}

export default IndividualNotesAndTradeTable;
