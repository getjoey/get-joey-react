import { Box, CssBaseline } from '@mui/material';
import React from 'react';
import NavigationTabs from './components/NavigationTabs';
import { CustomThemeProviderWithContext } from './context/ThemeContext';

function App() {
  return (
    <CustomThemeProviderWithContext>
      <CssBaseline />
      <Box>
        <NavigationTabs />
      </Box>
    </CustomThemeProviderWithContext>
  );
}

export default App;
