import { TableContainer, styled } from "@mui/material";

export const StyledContainer = styled(TableContainer)`
  overflow-y: auto;
  height: calc(100% - 4px);
  position: relative;

  &::-webkit-scrollbar {
    // display: block;
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
