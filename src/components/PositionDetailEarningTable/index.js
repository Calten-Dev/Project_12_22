import React, { useEffect, useState } from "react";
import { Table } from "@mui/material";
import Radio from "@mui/joy/Radio";
import RadioGroup from "@mui/joy/RadioGroup";
import { StyledTableHead, StyledTableBodyCell, StyledTableHeaderCell, StyledTableRow } from "../StyledComponents";
import { StyledContainer } from "./StyledComponents";
import { formatNumber } from "../../utils";

const INDEX_FOR_POSITION = 2;
const INDEX_FOR_QUANTITY = 4;
const INDEX_FOR_AVERAGE = 5;
const INDEX_FOR_PRICE = 7;
const INDEX_FOR_CHANGE = 8;

const tableHeaderLabels = ["Position", "Quantity", "Avg.Cost", "Price", "Change", "%Change"];
const earningRadioLabels = ["All", "Long", "Short", "Earnings Today"];
const earningRadioValues = ["all", "long", "short", "earningToday"];

function PositionDetailEarningTable({ managerData }) {
  const [data, setData] = useState([]);
  const [radioData, setRadioData] = useState("all");
  useEffect(() => {
    setData(managerData);
  }, [managerData]);

  const handleRadioChange = (event) => {
    setRadioData(event.target.value);
  };
  return (
    <>
      <StyledContainer>
        <Table stickyHeader>
          <StyledTableHead>
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
          </StyledTableHead>
          <StyledTableHead>
            {tableHeaderLabels.map((item, index) => (
              <StyledTableHeaderCell bgcolor={"#A1B5C5"} key={index} align={index === 0 ? "left" : "right"}>
                {item}
              </StyledTableHeaderCell>
            ))}
          </StyledTableHead>
          {!!data && data.length > 0
            ? data.map((item, index) => (
                <StyledTableRow key={index} index={index} hvcolor="#DDE5D4">
                  <StyledTableBodyCell>{item[INDEX_FOR_POSITION]}</StyledTableBodyCell>
                  <StyledTableBodyCell align={"right"}>{item[INDEX_FOR_QUANTITY]}</StyledTableBodyCell>
                  <StyledTableBodyCell align={"right"}>{formatNumber(item[INDEX_FOR_AVERAGE])}</StyledTableBodyCell>
                  <StyledTableBodyCell align={"right"}>{formatNumber(item[INDEX_FOR_PRICE])}</StyledTableBodyCell>
                  <StyledTableBodyCell align={"right"} type={"highlight"} value={item[INDEX_FOR_CHANGE]}>
                    {formatNumber(item[INDEX_FOR_CHANGE])}
                  </StyledTableBodyCell>
                  <StyledTableBodyCell align={"right"}></StyledTableBodyCell>
                </StyledTableRow>
              ))
            : null}
        </Table>
      </StyledContainer>
    </>
  );
}

export default PositionDetailEarningTable;
