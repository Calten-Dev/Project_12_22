import React, { useEffect, useState, useMemo } from "react";
import { TableContainer, Table, TableHead, TableBody } from "@mui/material";
import { StyledTableRow, StyledTableHeaderCell, StyledTableBodyCell } from "../StyledComponents";
import { StyledTableNameCell } from "./StyledComponent";
import { formatNumber, getSortedData } from "../../utils";
import { financeApis } from "../../apis";

const headers = ["Graphed", "Change", "%", "YTD%", "Value"];
const headerSortField = ["description", "change", "change_pct", "change_pct_ytd", "value"];

function GraphedTable() {
  const [data, setData] = useState([]);
  const [sortField, setSortField] = useState({ fieldName: "", ascStatus: true });
  useEffect(() => {
    financeApis.getFollowedData().then(setData);
  }, []);

  const sortedData = useMemo(() => {
    return getSortedData(data, sortField);
  }, [sortField, data]);

  const onHeaderClick = (data) => () => {
    if (data === sortField.fieldName) {
      setSortField({ fieldName: data, ascStatus: !sortField.ascStatus });
    } else {
      setSortField({ fieldName: data, ascStatus: true });
    }
  };

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
              <StyledTableHeaderCell key={index} align={index > 0 ? "right" : "left"} onClick={onHeaderClick(headerSortField[index])}>
                {header}
              </StyledTableHeaderCell>
            ))}
          </StyledTableRow>
        </TableHead>
        <TableBody>
          {sortedData &&
            sortedData.length > 0 &&
            sortedData
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
