import React, { useEffect, useState } from "react";
import { Table, TableHead, TableBody, Paper } from "@mui/material";
import { StyledTableRow, StyledTableHeaderCell, StyledTableBodyCell } from "../StyledComponents";
import { StyledTableContainer } from "./StyledComponents";
import { formatNumber } from "../../utils";

const headers = ["", "Change", "%", "YTD%", "Value"];

function FollowedTable() {
  const [data, setData] = useState([]);
  const getData = async () => {
    try {
      const response = await fetch("followed_clean.json", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <StyledTableContainer component={Paper}>
      <Table stickyHeader>
        <TableHead>
          <StyledTableRow header={"true"}>
            {headers.map((header, index) => (
              <StyledTableHeaderCell key={index} align={index > 0 ? "right" : "inherit"}>
                {header}
              </StyledTableHeaderCell>
            ))}
          </StyledTableRow>
        </TableHead>
        <TableBody>
          {data &&
            data.length > 0 &&
            data
              .filter((item) => !item.sec_id)
              .map((item, index) => (
                <StyledTableRow index={index} key={index}>
                  <StyledTableBodyCell className="followed-table-cell-body" type={"normal"}>
                    {item.description}
                  </StyledTableBodyCell>
                  <StyledTableBodyCell align={"right"} type={"highlight"} value={item.change}>
                    {formatNumber(item.change)}
                  </StyledTableBodyCell>
                  <StyledTableBodyCell align={"right"} type={"highlight"} value={item.change_pct}>
                    {formatNumber(item.change_pct)}
                  </StyledTableBodyCell>
                  <StyledTableBodyCell align={"right"} type={"highlight"} value={item.change_pct_ytd}>
                    {formatNumber(item.change_pct_ytd)}
                  </StyledTableBodyCell>
                  <StyledTableBodyCell align={"right"} type={"normal"} value={item.value}>
                    {formatNumber(item.value)}
                  </StyledTableBodyCell>
                </StyledTableRow>
              ))}
        </TableBody>
      </Table>
    </StyledTableContainer>
  );
}

export default FollowedTable;
