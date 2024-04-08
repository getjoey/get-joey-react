import { Box, CssBaseline } from '@mui/material';
import React from 'react';
import NavigationTabs from './components/NavigationTabs';
import { CustomThemeProviderWithContext } from './context/ThemeContext';
import MatrixRain from './components/other/MatrixRains';
import MainPage from './components/MainPage';

function App() {
  return (
    <CustomThemeProviderWithContext>
      <CssBaseline />
      <Box>
        <MatrixRain>
          <MainPage />
        </MatrixRain>
      </Box>
    </CustomThemeProviderWithContext>
  );
}

export default App;
