import React, { useEffect, useState, useMemo } from "react";
import { TableContainer, Table, TableHead, TableBody } from "@mui/material";
import { StyledTableRow, StyledTableHeaderCell, StyledTableBodyCell } from "../StyledComponents";
import { StyledTableNameCell } from "./StyledComponent";
import { formatNumber, getSortedData } from "../../utils";

const headers = ["Graphed", "Change", "%", "YTD%", "Value"];
const headerSortField = ["description", "change", "change_pct", "change_pct_ytd", "value"];

function GraphedTable({followedData}) {
  const [data, setData] = useState(followedData);
  const [sortField, setSortField] = useState({ fieldName: "", ascStatus: true });

  useEffect(() => {
    setData(followedData)
  }, [followedData]);

  const sortedData = useMemo(() => {
    return getSortedData(data, sortField);
  }, [sortField, data]);

  const onHeaderClick = (fieldName) => () => {
    if (fieldName === sortField.fieldName) {
      setSortField((prevSortField) => ({
        fieldName,
        ascStatus: !prevSortField.ascStatus,
      }));
    } else {
      setSortField({ fieldName, ascStatus: true });
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