import { Box, IconButton, Typography } from '@mui/material';
import React from 'react';
import { useTheme } from '@mui/material/styles';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default () => {
    const theme = useTheme();
    return (
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography variant="h5" component="h2" sx={{ fontWeight: 'bold', ml: 2, mt: 1 }}>Joseph Ciampini</Typography>
            <Box>
                <IconButton href="https://github.com/getjoey" target="_blank" rel="noopener noreferrer">
                    <GitHubIcon sx={{ color: "#E5E4E2" }} fontSize='large' />
                </IconButton>
                <IconButton href="https://www.linkedin.com/in/jo-ciamp/" target="_blank" rel="noopener noreferrer">
                    <LinkedInIcon sx={{ color: "#E5E4E2" }} fontSize='large' />
                </IconButton>
            </Box>
        </Box>
    );
};
