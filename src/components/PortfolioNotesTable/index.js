import React from "react";
import { Table, TableBody, TableHead, TableRow } from "@mui/material";
import { StyledTableHeaderCell, StyledTableRow, StyledTableBodyCell } from "../StyledComponents";
import { FcKey } from "react-icons/fc";
import { StyledTableContainer } from "./StyledComponents";

const tableHeaderLabels = ["From", <FcKey />, "Subject", "Received"];

function PortfolioNotesTable({ notesData }) {
  return (
    <StyledTableContainer>
      <Table stickyHeader>
        <TableHead>
          <TableRow>
            {tableHeaderLabels.map((item, index) => (
              <StyledTableHeaderCell key={index} align={index === 0 ? "left" : "right"}>
                {item}
              </StyledTableHeaderCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {notesData &&
            notesData.length > 0 &&
            notesData.map((item, index) => (
              <StyledTableRow key={index} index={index}>
                <StyledTableBodyCell type={"normal"}>{item[0]}</StyledTableBodyCell>
                <StyledTableBodyCell align={"right"} type={"normal"}></StyledTableBodyCell>
                <StyledTableBodyCell align={"right"} type={"normal"}>
                  {item[1]}
                </StyledTableBodyCell>
                <StyledTableBodyCell align={"right"} type={"normal"}>
                  {item[2]}
                </StyledTableBodyCell>
              </StyledTableRow>
            ))}
        </TableBody>
      </Table>
    </StyledTableContainer>
  );
}

export default PortfolioNotesTable;
