import { TableContainer, styled } from "@mui/material";

export const SubjectTableHeader = styled("div")`
  position: relative;
  background-image: linear-gradient(#e1e1e1, #c8c8c8);
  border: 2px solid #aaaaaa;
  border-radius: 4px 4px 0px 0px;
  height: 60px;
`;

export const StyledSubjectTableContainer = styled(TableContainer)`
  flex: 1;
  overflowy: auto;
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
