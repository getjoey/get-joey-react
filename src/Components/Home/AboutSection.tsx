import { Box, IconButton, Paper, Typography } from '@mui/material';
import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';

export default ({ setTabValue }: { setTabValue: React.Dispatch<React.SetStateAction<string>> }) => {
  const about = "I am a software developer with a Bachelor's degree in Commerce and a Postgraduate degree in Computer Science. Since begining my career in 2019, I have developed a strong foundation in software development, consistently delivering high-quality work. My passion for learning drives me to explore new technologies and projects in my personal time, including AI generative models, video game development with Unity, and various research projects. Colleagues appreciate my collaborative approach and my ability to contribute positively to the team. I am dedicated to continuous improvement and strive for excellence in all my endeavors.";
  return (
        <Box padding={2} component={Paper} elevation={2} display="flex" flexDirection="row" flexWrap="wrap">
          <Box textAlign={"center"} sx={{width: {xs:"100%", md:"25%"}}}>
            <Box
              sx={{ width: "100%", maxWidth:"200px", height: "100%",maxHeight:"200px", objectFit: 'contain' }}
              component="img"
              alt="The house from the offer."
              src="https://media.licdn.com/dms/image/C5603AQHur0Pc4d1A-g/profile-displayphoto-shrink_400_400/0/1655248382107?e=1717632000&v=beta&t=gphbbBsXjkH-eNokhg5F2_epsgozpOmvPSm7ohMZ-qo"
            />
            <Box>
              <IconButton href="https://github.com/getjoey" target="_blank" rel="noopener noreferrer">
                <GitHubIcon />
              </IconButton>
              <IconButton href="https://www.linkedin.com/in/jo-ciamp/" target="_blank" rel="noopener noreferrer">
                <LinkedInIcon />
              </IconButton>
              <IconButton onClick={() => setTabValue("2")}>
                <AlternateEmailIcon />
              </IconButton>
            </Box>
          </Box>
          <Box sx={{width: {xs:"100%", md:"75%"}}}>
            <Box sx={{ ml: 2, mb: 2 }}>
              <Typography variant="h5" component="h2" sx={{ fontWeight: 'bold' }}>About</Typography>
            </Box>
            <Box sx={{mb:1}}>
              <Typography variant="body1" sx={{ textIndent: '2em' }}>
                Bilingual Montreal based programmer
              </Typography>
            </Box>
            <Box sx={{ mb: 2 }}>
              <Typography variant="body1" sx={{ textIndent: '2em' }}>
                {about}
              </Typography>
            </Box>
          </Box>
        </Box>
  );
};
