import { Box, Paper, Typography } from '@mui/material';
import React from 'react';

export default () => {

  return (
    <Box component={Paper} elevation={4} sx={{ p: 2 }}>
      <Box>
        <Typography variant="h5" component="h2" sx={{ fontWeight: 'bold' }}>Blog</Typography>
        <Typography variant="body1">Under Construction</Typography>
      </Box>
    </Box>
  );
};
