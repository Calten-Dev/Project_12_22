import { styled, TableRow, TableCell, TableContainer, TableHead } from "@mui/material";

export const StyledTableHead = styled(TableHead)`
  background-color: ${({ color }) => (!!color ? color : "#658396")};
  position: sticky;
  top: 0;
  z-index: 1;
`;

export const StyledTableRow = styled(TableRow)`
  background-color: ${({ index }) => (index % 2 === 0 ? "#FFFFFF" : "#D0D2D2")};

  &:hover {
    background-color: ${({ hvcolor }) => (!!hvcolor ? hvcolor : "#B0B0B0")};
  }
`;

export const StyledTableHeaderCell = styled(TableCell)`
  background-color: ${({ bgcolor }) => (!!bgcolor ? bgcolor : "#658396")};
  padding: 2px 5px 2px 5px;
  font-size: 14px;
  font-weight: 600;
  color: ${({ color }) => (!!color ? color : "#FFFFFF")};
  border: 1px solid #ffffff;
`;

export const StyledTableBodyCell = styled(TableCell)`
  padding: 0px 5px 0px 5px;
  font-size: 12px;
  font-weight: ${({ type }) => (type === "highlight" ? 400 : 600)};
  color: ${({ type, value }) => (type === "normal" || !type ? "#000000" : value > 0 ? "#00AF00" : "#FF0000")};
  border: 1px solid #ffffff;
`;

export const StyledTableContainer = styled(TableContainer)`
  flex: 1;
  margin-bottom: 1px;
  background: ${({ color }) => (!!color ? color : "#FFFFFF")};
  overflow-y: auto;
  &::-webkit-scrollbar {
    display: block;
    width: 4px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #aaaaaa;
    border-radius: 4px;
  }

  &::-webkit-scrollbar-track {
    background-color: #f1f1f1;
  }
  @media only screen and (min-width: 700px) {
    max-height: ${({ maxHeight }) => (!!maxHeight ? maxHeight : "none")};
  }
`;
