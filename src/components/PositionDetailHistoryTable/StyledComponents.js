import { TableContainer, styled } from "@mui/material";

export const StyledContainer = styled("div")`
  margin: 1px;
  flex: 1;

  overflow-y: auto;
  &::-webkit-scrollbar {
    display: block;
    height: 4px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #aaaaaa;
    border-radius: 4px;
  }

  &::-webkit-scrollbar-track {
    background-color: #f1f1f1;
  }
  @media only screen and (min-width: 900px) {
    margin: 0px 1px 1px 0px;
  }
`;
