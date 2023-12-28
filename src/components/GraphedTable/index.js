import React, { useEffect, useState } from "react";
import { TableContainer, Table, TableHead, TableBody } from "@mui/material";
import { StyledTableRow, StyledTableHeaderCell, StyledTableBodyCell } from "../StyledComponents";
import { StyledTableNameCell } from "./StyledComponent";
import { formatNumber } from "../../utils";

const headers = ["Graphed", "Change", "%", "YTD%", "Value"];

function GraphedTable() {
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
    <TableContainer
      sx={{
        marginBottom: "1px",
      }}
    >
      <Table>
        <TableHead>
          <StyledTableRow header={"true"}>
            {headers.map((header, index) => (
              <StyledTableHeaderCell key={index} align={index > 0 ? "right" : "left"}>
                {header}
              </StyledTableHeaderCell>
            ))}
          </StyledTableRow>
        </TableHead>
        <TableBody>
          {data &&
            data.length > 0 &&
            data
              .filter((item) => item.sec_id !== undefined)
              .map((item, index) => (
                <StyledTableRow key={index} index={index}>
                  <StyledTableNameCell graphedcolor={item.color}>{item.description}</StyledTableNameCell>
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
                    {item.value}
                  </StyledTableBodyCell>
                </StyledTableRow>
              ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default GraphedTable;
