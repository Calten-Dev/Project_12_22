import { styled, TableCell } from "@mui/material";

export const StyledTableNameCell = styled(TableCell)`
  color: ${({ graphedcolor }) => `#${graphedcolor}`};
  font-weight: 600;
  padding: 0px 5px 0px 5px;
  font-size: 12px;
  border: 1px solid #ffffff;
`;
