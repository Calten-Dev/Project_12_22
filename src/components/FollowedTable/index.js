import React, { useEffect, useMemo, useState } from "react";
import { Table, TableHead, TableBody, Paper } from "@mui/material";
import { StyledTableRow, StyledTableHeaderCell, StyledTableBodyCell } from "../StyledComponents";
import { StyledTableContainer } from "./StyledComponents";
import { formatNumber, getSortedData } from "../../utils";

const headers = ["", "Change", "%", "YTD%", "Value"];
const headerSortField = ["description", "change", "change_pct", "change_pct_ytd", "value"];

function FollowedTable({ followedData }) {
  const [data, setData] = useState(followedData);
  const [sortField, setSortField] = useState({ fieldName: "", ascStatus: true });

  useEffect(() => {
    setData(followedData);
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
    <StyledTableContainer component={Paper}>
      <Table stickyHeader>
        <TableHead>
          <StyledTableRow header={"true"}>
            {headers.map((header, index) => (
              <StyledTableHeaderCell
                key={index}
                align={index > 0 ? "right" : "inherit"}
                onClick={onHeaderClick(headerSortField[index])}
              >
                {header}
              </StyledTableHeaderCell>
            ))}
          </StyledTableRow>
        </TableHead>
        <TableBody>
          {sortedData &&
            sortedData.length > 0 &&
            sortedData
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
