import React, { useEffect, useState } from "react";
import { Table, TableHead, TableBody } from "@mui/material";
import { StyledTableRow, StyledTableHeaderCell, StyledTableBodyCell } from "../StyledComponents";
import { StyledContaier } from "./StyledComponents";
import { formatNumber } from "../../utils";

function IndividualPortfolioTable({ selectedTicker, tickerData, price }) {
  const tableHeaders = [selectedTicker, "Shares", "Accts", "%Port", "AC", "Cost", "MV", "PL", "% Chg"];

  const [data, setData] = useState([]);

  let totalShares = 0;
  let totalAccts = 0;
  let totalCost = 0;

  tickerData.forEach((element) => {
    totalShares += element[2];
    totalAccts += element[3];
    totalCost += element[6];
  });

  let totalMV = totalShares * price;
  let totalTableRow = [
    "Total",
    totalShares,
    totalAccts,
    "N/A",
    totalCost / totalShares,
    totalCost,
    totalMV,
    totalMV - totalCost,
    `${formatNumber((totalMV - totalCost) / totalCost)}%`,
  ];
  useEffect(() => {
    setData(tickerData);
  }, [tickerData]);

  return (
    <StyledContaier>
      <Table stickyHeader>
        <TableHead sx={{ width: "100%" }}>
          <StyledTableRow header={"true"}>
            {tableHeaders.map((header, index) => (
              <StyledTableHeaderCell key={index} align={index > 0 ? "right" : "inherit"} color={"#000000"}>
                {header}
              </StyledTableHeaderCell>
            ))}
          </StyledTableRow>
        </TableHead>
        <TableBody>
          {data &&
            data.length > 0 &&
            data.map((item, index) => (
              <StyledTableRow index={index + 1} key={index}>
                {item.map((field, itemIndex) =>
                  itemIndex === 0 ? null : (
                    <StyledTableBodyCell
                      key={itemIndex}
                      className="followed-table-cell-body"
                      type={"normal"}
                      align={itemIndex > 1 ? "right" : "inherit"}
                    >
                      {itemIndex === 4 || itemIndex === 9
                        ? `${formatNumber(field * 100)}%`
                        : itemIndex === 3 || typeof field !== "number"
                        ? field
                        : formatNumber(field)}
                    </StyledTableBodyCell>
                  )
                )}
              </StyledTableRow>
            ))}
        </TableBody>
        <TableHead>
          <StyledTableRow header={"true"}>
            {totalTableRow.map((item, index) => (
              <StyledTableHeaderCell key={index} align={index > 0 ? "right" : "inherit"} color={"#000000"}>
                {index === 2 || typeof item !== "number" ? item : formatNumber(item)}
              </StyledTableHeaderCell>
            ))}
          </StyledTableRow>
        </TableHead>
      </Table>
    </StyledContaier>
  );
}

export default IndividualPortfolioTable;
