import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
import { Table } from "@mui/material";
import Radio from "@mui/joy/Radio";
import RadioGroup from "@mui/joy/RadioGroup";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers";

import { StyledTableHead, StyledTableBodyCell, StyledTableHeaderCell, StyledTableRow } from "../StyledComponents";
import { StyledContainer } from "./StyledComponents";
import { formatNumber } from "../../utils";

const INDEX_FOR_POSITION = 2;
const INDEX_FOR_QUANTITY = 4;
const INDEX_FOR_AVERAGE = 5;
const INDEX_FOR_PRICE = 7;
const INDEX_FOR_CHANGE = 8;
const INDEX_FOR_ERD = 21;
const INDEX_FOR_REGION = 20;

const tableHeaderLabels = [
  "Position",
  "Quantity",
  "Avg.Cost",
  "Price",
  "Change",
  "%Change",
  "Net Change",
  "Net Value",
  "Next ERD",
  "Region",
  "% Of Portfolio",
];

const earningRadioLabels = ["All", "Long", "Short", "Earnings Today"];
const earningRadioValues = ["all", "long", "short", "earningToday"];

function PositionDetailTable({ managerData, mmData }) {
  const today = new Date().toISOString();
  const [data, setData] = useState([]);
  const [radioData, setRadioData] = useState("all");
  const [datePickerData, setDatePickerData] = useState(dayjs(today));
  useEffect(() => {
    setData(managerData);
  }, [managerData, mmData]);

  const handleRadioChange = (event) => {
    setRadioData(event.target.value);
  };

  const handleDatePickerChange = (value) => {
    setDatePickerData(value);
  };
  return (
    <>
      <StyledContainer>
        <Table stickyHeader>
          <StyledTableHead>
            <StyledTableRow>
              <StyledTableHeaderCell colSpan={6} sx={{ padding: "8px" }}>
                <RadioGroup
                  onChange={handleRadioChange}
                  defaultValue="short"
                  value={radioData}
                  name="radio-buttons-group"
                  orientation="horizontal"
                >
                  {earningRadioLabels.map((item, index) => (
                    <Radio key={index} value={earningRadioValues[index]} size="sm" label={item} />
                  ))}
                </RadioGroup>
              </StyledTableHeaderCell>
              <StyledTableHeaderCell align={"right"} colSpan={5}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    value={datePickerData}
                    onChange={handleDatePickerChange}
                    sx={{
                      backgroundColor: "white",
                      borderRadius: "4px",
                      width: "200px",
                    }}
                    slotProps={{ textField: { size: "small" } }}
                  />
                </LocalizationProvider>
              </StyledTableHeaderCell>
            </StyledTableRow>
            <StyledTableRow>
              {tableHeaderLabels.map((item, index) => (
                <StyledTableHeaderCell
                  key={index}
                  color={"#000000"}
                  bgcolor={"#A1B5C5"}
                  align={index === 0 ? "left" : "right"}
                >
                  {item}
                </StyledTableHeaderCell>
              ))}
            </StyledTableRow>
          </StyledTableHead>
          {!!data && data.length > 0 && mmData && Object.keys(mmData).length > 0 ? (
            data.map((item, index) => (
              <StyledTableRow key={index} index={index} hvcolor="#DDE5D4">
                <StyledTableBodyCell>{item[INDEX_FOR_POSITION]}</StyledTableBodyCell>
                <StyledTableBodyCell align={"right"}>{item[INDEX_FOR_QUANTITY]}</StyledTableBodyCell>
                <StyledTableBodyCell align={"right"}>{formatNumber(item[INDEX_FOR_AVERAGE])}</StyledTableBodyCell>
                <StyledTableBodyCell align={"right"}>{formatNumber(item[INDEX_FOR_PRICE])}</StyledTableBodyCell>
                <StyledTableBodyCell align={"right"} type={"highlight"} value={item[INDEX_FOR_CHANGE]}>
                  {formatNumber(item[INDEX_FOR_CHANGE])}
                </StyledTableBodyCell>
                <StyledTableBodyCell align={"right"}></StyledTableBodyCell>
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

export default PositionDetailTable;
