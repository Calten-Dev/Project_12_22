import { styled, TableRow, TableCell } from "@mui/material";

export const StyledTableRow = styled(TableRow)`
  background-color: ${({ header, index }) => (header === "true" ? "#658396" : index % 2 === 0 ? "#FFFFFF" : "#D0D2D2")};
`;

export const StyledTableHeaderCell = styled(TableCell)`
  background-color: #658396;
  padding: 2px 5px 2px 5px;
  font-size: 14px;
  font-weight: 600;
  color: ${({color}) => (!!color ? color : "#ffffff")};
  border: 1px solid #ffffff;
`;

export const StyledTableBodyCell = styled(TableCell)`
  padding: 0px 5px 0px 5px;
  font-size: 12px;
  font-weight: ${({ type }) => (type === "highlight" ? 400 : 600)};
  color: ${({ type, value }) => (type === "normal" ? "#000000" : value > 0 ? "#00AF00" : "#FF0000")};
  align: ${({ align }) => align};
  border: 1px solid #ffffff;
`;
