import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  cssVariables: true,
  palette: {
    mode: 'light',
    primary: {
      main: '#28675e',
    },
    secondary: {
      main: '#870407',
    },
    background: {
      default: '#ffffff',
    },
    error: {
      main: '#ff3737',
    },
    warning: {
      main: '#edad02',
    },
    success: {
      main: '#3aa040',
    },
  },
});