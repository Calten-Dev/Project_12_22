import { styled, TableContainer, TableRow } from "@mui/material";

export const StyledTableHeaderRow = styled(TableRow)`
  width: 100%;
  display: flex;
  justify-content: center;
  align-item: center;
  background-color: #658396;
  color: #ffffff;
`;

export const StyledTableContainer = styled(TableContainer)`
  flex: 1;
  margin-bottom: 1px;
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
`;
