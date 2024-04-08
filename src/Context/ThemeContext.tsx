// ThemeContext.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { createTheme, ThemeProvider as MUIThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

interface ThemeContextType {
  toggleTheme: () => void;
  isLightTheme: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useThemeContext must be used within a ThemeProvider');
  }
  return context;
};

export const CustomThemeProviderWithContext = ({ children }: { children: ReactNode }) => {
  const [isLightTheme, setIsLightTheme] = useState<boolean>(false);

  const toggleTheme = () => {
    setIsLightTheme((prev) => !prev);
  };

  const theme = createTheme({
    palette: {
      mode: isLightTheme ? 'light' : 'dark',
      text: {
        primary: '#E5E4E2', // Default text color
      },
    },
    typography: {
      fontFamily: 'Arial, sans-serif',
    },
  });

  return (
    <ThemeContext.Provider value={{ toggleTheme, isLightTheme }}>
      <MUIThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MUIThemeProvider>
    </ThemeContext.Provider>
  );
};
