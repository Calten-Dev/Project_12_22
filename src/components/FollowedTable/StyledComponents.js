import { styled, TableContainer } from "@mui/material";

export const StyledTableContainer = styled(TableContainer)`
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
  @media only screen and (min-width: 700px) {
    max-height: 40vh;
  }
`;
