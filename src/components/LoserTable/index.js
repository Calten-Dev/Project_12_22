import React, { useEffect, useState } from "react";
import { Table, TableHead, TableBody, TableCell, TableRow } from "@mui/material";
import { StyledTableRow, StyledTableBodyCell } from "../StyledComponents";
import { StyledTableContainer } from "./StyledComponents";
import { formatNumber } from "../../utils";
import { financeApis } from "../../apis";

const INDEX_FOR_FILTER = 14;
const INDEX_FOR_FRISTFIELD = 2;
const INDEX_FOR_SECONDFIELD = 9
const INDEX_FOR_THIRDFIELD = 6;

function LoserTable() {
  const [data, setData] = useState([]);
  useEffect(() => {
    financeApis.getPortfolioData().then(setData)
  }, []);

  return (
    <StyledTableContainer>
      <Table stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell
              colSpan={4}
              sx={{
                backgroundColor: "#658396",
                color: "#FFFFFF",
                textAlign: "center",
                padding: "2px",
                fontWeight: 600,
              }}
            >
              Loser
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data &&
            data.length > 0 &&
            data
              .filter((item) => item[INDEX_FOR_FILTER] < 0)
              .sort((a, b) => a[INDEX_FOR_FILTER] - b[INDEX_FOR_FILTER])
              .map((item, index) => (
                <StyledTableRow key={index} index={index}>
                  <StyledTableBodyCell type={"normal"} value={item[INDEX_FOR_FRISTFIELD]}>
                    {item[INDEX_FOR_FRISTFIELD]}
                  </StyledTableBodyCell>
                  <StyledTableBodyCell align={"right"} type={"highlight"} value={item[INDEX_FOR_SECONDFIELD]}>
                    {formatNumber(item[INDEX_FOR_SECONDFIELD])}
                  </StyledTableBodyCell>
                  <StyledTableBodyCell align={"right"} type={"highlight"} value={item[INDEX_FOR_THIRDFIELD]}>
                    {formatNumber(item[INDEX_FOR_THIRDFIELD])}
                  </StyledTableBodyCell>
                  <StyledTableBodyCell align={"right"} type={"normal"} value={item[INDEX_FOR_FILTER]}>
                    {formatNumber(item[INDEX_FOR_FILTER])}
                  </StyledTableBodyCell>
                </StyledTableRow>
              ))}
        </TableBody>
      </Table>
    </StyledTableContainer>
  );
}

export default LoserTable;
