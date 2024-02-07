import React from "react";
import { Table, TableBody, TableHead, TableRow } from "@mui/material";
import { StyledTableHeaderCell, StyledTableRow, StyledTableBodyCell, StyledTableContainer } from "../StyledComponents";

const tableHeaderLabels = ["Date", "Quantity", "Order", "Price", "Manager"];

function PortfolioTradesTable({ tradesData }) {
  return (
    <StyledTableContainer color="#B4B4B4">
      <Table stickyHeader>
        <TableHead>
          <TableRow>
            {tableHeaderLabels.map((item, index) => (
              <StyledTableHeaderCell key={index} align={index > 0 ? "right" : "left"}>
                {item}
              </StyledTableHeaderCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {tradesData &&
            tradesData.length > 0 &&
            tradesData.map((item, index) => (
              <StyledTableRow key={index} index={index}>
                {item.map((element, itemIndex) => (
                  <StyledTableBodyCell key={itemIndex} type={"normal"} align={itemIndex > 0 ? "right" : "left"}>
                    {element}
                  </StyledTableBodyCell>
                ))}
              </StyledTableRow>
            ))}
        </TableBody>
      </Table>
    </StyledTableContainer>
  );
}

export default PortfolioTradesTable;
