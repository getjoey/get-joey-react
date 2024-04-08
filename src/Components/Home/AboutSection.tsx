import { Box, IconButton, Paper, Typography } from '@mui/material';
import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import joseph from "../../assets/photos/joseph.jpeg";

export default () => {
  const about = "I am a software developer with a Bachelor's degree in Commerce and a Postgraduate degree in Computer Science. Since begining my career in 2019, I have developed a strong foundation in software development, consistently delivering high-quality work. My passion for learning drives me to explore new technologies and projects in my personal time, including AI generative models, video game development with Unity, and various research projects. Colleagues appreciate my collaborative approach and my ability to contribute positively to the team. I am dedicated to continuous improvement and strive for excellence in all my endeavors.";
  return (
    <Box pl={2} pr={2} component={Paper} elevation={2} display="flex" flexDirection="row" flexWrap="wrap">
      <Box textAlign="center"
        sx={{
          width: { xs: "100%", md: "25%" },
          display: 'flex', // Enables flexbox
          flexDirection: 'column', // Children are stacked vertically
          alignItems: 'center', // Horizontal centering
          justifyContent: 'center', // Vertical centering
          height: { xs: "200px", md: "auto" }, // Adjust the height as needed
        }}>
        <Box
          sx={{
            p:2,
            borderRadius: '50%',
            width: "100%",
            maxWidth: "200px",
            height: "200px", // Explicit height for the image box
            objectFit: 'cover', // Adjust objectFit as necessary
          }}
          component="img"
          src={joseph}
        />
      </Box>
      <Box sx={{ width: { xs: "100%", md: "75%" } }}>
        {/* <Box sx={{ ml: 2, mb: 2 }}>
          <Typography variant="h5" component="h2" sx={{ fontWeight: 'bold' }}>About</Typography>
        </Box> */}
        <Box sx={{ my: 2 }}>
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
