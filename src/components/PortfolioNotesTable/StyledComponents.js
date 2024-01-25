import { TableContainer, styled } from "@mui/material";

export const StyledTableContainer = styled(TableContainer)`
  flex: 1;
  overflowy: auto;
  background: #b4b4b4;
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
