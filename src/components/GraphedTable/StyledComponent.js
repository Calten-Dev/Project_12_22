import { styled, TableCell } from "@mui/material";

export const StyledTableNameCell = styled(TableCell)`
  color: ${({ graphedcolor }) => `#${graphedcolor}`};
  font-weight: 600;
  padding: 2px 5px 2px 5px;
  font-size: 14px;
  border: 1px solid #ffffff;
`;
