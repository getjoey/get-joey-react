import { Box, IconButton, Paper, Typography } from '@mui/material';
import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default () => {

  return (
    <Box component={Paper} elevation={4} sx={{ p: 2 }} display="flex" flexDirection={"column"} rowGap={2}>
      <Box>
        <Typography variant="h5" component="h2" sx={{ fontWeight: 'bold' }}>Contact</Typography>
      </Box>
      <Box>
        <Typography variant="body1">Email: JosephMChamp@gmail.com</Typography>
      </Box>
      <Box>
        <Typography variant="body1">Feel free to reach out if you'd like me to send you my resume</Typography>
      </Box>
      <Box>
        <IconButton href="https://github.com/getjoey" target="_blank" rel="noopener noreferrer">
          <GitHubIcon />
        </IconButton>
        <IconButton href="https://www.linkedin.com/in/jo-ciamp/" target="_blank" rel="noopener noreferrer">
          <LinkedInIcon />
        </IconButton>
      </Box>

    </Box>
  );
};
