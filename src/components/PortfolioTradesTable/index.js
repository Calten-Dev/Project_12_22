import React from "react";
import { Table, TableBody, TableHead, TableRow } from "@mui/material";
import { StyledTableHeaderCell, StyledTableRow, StyledTableBodyCell } from "../StyledComponents";
import { StyledTableContainer } from "./StyledComponents";

const tableHeaderLabels = ["Date", "Quantity", "Order", "Price", "Manager"];

function PortfolioTradesTable({ tradesData }) {
  return (
    <StyledTableContainer>
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
                  <StyledTableBodyCell type={"normal"} align={itemIndex > 0 ? "right" : "left"}>
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
