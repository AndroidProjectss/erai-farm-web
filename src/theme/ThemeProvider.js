'use client';
import ThemeRegistry from './ThemeRegistry';
import { ThemeProvider as MUIThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme';

export default function ThemeProvider({ children }) {
  return (
    <ThemeRegistry>
      <MUIThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MUIThemeProvider>
    </ThemeRegistry>
  );
}
