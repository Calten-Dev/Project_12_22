import React, { useEffect, useState } from "react";
import { Table } from "@mui/material";
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers";
import { formatNumber } from "../../utils";
import { StyledTableHead, StyledTableBodyCell, StyledTableHeaderCell, StyledTableRow } from "../StyledComponents";
import { StyledContainer } from "./StyledComponents";
const tableHeaderLabels = ["Positions", "Net Change", "Net Value", "Next ERD", "Region", "% Of Portfolio"];

const INDEX_FOR_POSITION = 2;
const INDEX_FOR_QUANTITY = 4;
const INDEX_FOR_PRICE = 7;
const INDEX_FOR_ERD = 21;
const INDEX_FOR_REGION = 20;

function PositionDetailHistoryTable({ managerData, mmData }) {
  const today = new Date().toISOString();
  const [data, setData] = useState([]);
  const [datePickerData, setDatePickerData] = useState(dayjs(today));
  useEffect(() => {
    setData(managerData);
  }, [managerData, mmData]);

  const handleDatePickerChange = (value) => {
    setDatePickerData(value);
  };

  return (
    <>
      <StyledContainer>
        <Table stickyHeader>
          <StyledTableHead>
            <StyledTableHeaderCell colSpan={6}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  value={datePickerData}
                  onChange={handleDatePickerChange}
                  sx={{
                    backgroundColor: "white",
                    borderRadius: "4px",
                    width: "150px",
                  }}
                  slotProps={{ textField: { size: "small" } }}
                />
              </LocalizationProvider>
            </StyledTableHeaderCell>
          </StyledTableHead>
          <StyledTableHead>
            {tableHeaderLabels.map((item, index) => (
              <StyledTableHeaderCell bgcolor={"#A1B5C5"} key={index} align={index === 0 ? "left" : "right"}>
                {item}
              </StyledTableHeaderCell>
            ))}
          </StyledTableHead>
          {!!data && data.length > 0 && mmData && Object.keys(mmData).length > 0 ? (
            data.map((item, index) => (
              <StyledTableRow key={index} index={index} hvcolor="#DDE5D4">
                <StyledTableBodyCell>{item[INDEX_FOR_POSITION]}</StyledTableBodyCell>
                <StyledTableBodyCell align={"right"}></StyledTableBodyCell>
                <StyledTableBodyCell
                  align={"right"}
                  type={"highlight"}
                  value={item[INDEX_FOR_QUANTITY] * item[INDEX_FOR_PRICE]}
                >
                  {formatNumber(item[INDEX_FOR_QUANTITY] * item[INDEX_FOR_PRICE])}
                </StyledTableBodyCell>
                <StyledTableBodyCell align={"right"}>{item[INDEX_FOR_ERD]}</StyledTableBodyCell>
                <StyledTableBodyCell align={"right"}>{item[INDEX_FOR_REGION]}</StyledTableBodyCell>
                <StyledTableBodyCell
                  align={"right"}
                  type={"highlight"}
                  value={
                    (item[INDEX_FOR_QUANTITY] * item[INDEX_FOR_PRICE] * 100) / mmData.aggregates.portfolio_sod_value
                  }
                >
                  {formatNumber(
                    (item[INDEX_FOR_QUANTITY] * item[INDEX_FOR_PRICE] * 100) / mmData.aggregates.portfolio_sod_value
                  )}{" "}
                  %
                </StyledTableBodyCell>
              </StyledTableRow>
            ))
          ) : (
            <StyledTableRow>
              <StyledTableBodyCell colSpan={tableHeaderLabels.length}>Loading...</StyledTableBodyCell>
            </StyledTableRow>
          )}
        </Table>
      </StyledContainer>
    </>
  );
}

export default PositionDetailHistoryTable;
