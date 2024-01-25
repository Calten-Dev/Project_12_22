import { TableContainer, styled } from "@mui/material";

export const SubjectTableHeader = styled("div")`
  display: flex;
  align-items: center;
  background: #698393;
  height: 30px;
  padding-left: 4px;
`;

export const StyledSubjectTableContainer = styled(TableContainer)`
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
