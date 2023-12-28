import { createTheme } from "@mui/material";

export const customizedTheme = createTheme({
  breakpoints: {
    values: {
      xxs: 0,
      xs: 360,
      sm: 700,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});
