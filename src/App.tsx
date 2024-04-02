import { Box, CssBaseline } from '@mui/material';
import React from 'react';
import NavigationTabs from './Components/NavigationTabs';
import { CustomThemeProviderWithContext } from './Theme/ThemeContext';

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
