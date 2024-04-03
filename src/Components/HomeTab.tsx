import { Box, Chip, Grid, IconButton, Paper, Stack, Typography } from '@mui/material';
import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';

export default ({ setTabValue }: { setTabValue: React.Dispatch<React.SetStateAction<string>> }) => {

  const about = "I am a software developer with a Bachelor's degree in Commerce and a Postgraduate degree in Computer Science. Since begining my career in 2019, I have developed a strong foundation in software development, consistently delivering high-quality work. My passion for learning drives me to explore new technologies and projects in my personal time, including AI generative models, video game development with Unity, and various research projects. Colleagues appreciate my collaborative approach and my ability to contribute positively to the team. I am dedicated to continuous improvement and strive for excellence in all my endeavors.";

  const skillsLanguages = ['Typescript', 'Javascript', 'Python', 'Java', 'Ruby', "C#"];
  const skillsBackend = ['Node js', 'Flask', 'Spring', 'REST', 'GraphQL', 'Ruby on Rails', 'SQL', 'PostgreSQL', 'MySQL', 'DynamoDB'];
  const skillsFrontend = ['React', 'HTML', 'CSS', 'Bootstrap', 'MaterialUI'];
  const skillsOther = ['Tensorflow Keras', 'Unity', 'Git', 'CircleCi', 'Serverless', 'Kubernetes', 'Docker', 'AWS stack'];

  return (
    <Grid container spacing={2} component={Paper} elevation={1} sx={{ p: 2 }}>

      <Grid item xs={12} md={3} lg={2}>
        <Box padding={2} component={Paper} elevation={4} textAlign={"center"}>
          <Box
            sx={{ width: { xs: '50%', md: '100%' }, height: { xs: 'auto', md: '100%' }, objectFit: 'contain' }}
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
      </Grid>

      <Grid item xs={12} md={9} lg={10} sx={{ display: 'flex', flexDirection: 'column' }}>
        <Box padding={2} component={Paper} elevation={4} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', flexGrow: 1 }}>
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
      </Grid>

      <Grid item xs={12} md={4}>
        <Box padding={2} component={Paper} elevation={4}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Box sx={{ textAlign:"center", mb: 2 }}>
                <Typography variant="h5" component="h2" sx={{ fontWeight: 'bold' }}>Technical Skills</Typography>
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box sx={{ textAlign: "center", mb: 1 }}>
                <Typography variant="h6" component="h3" sx={{ fontWeight: 'bold' }}>Languages</Typography>
              </Box>
              <Stack direction="column" spacing={0.5} justifyContent="center">
                {skillsLanguages.map((skill) => (
                  <Chip key={skill} label={skill} size="small" />
                ))}
              </Stack>
            </Grid>
            <Grid item xs={6}>
              <Box sx={{ textAlign: "center", mb: 1 }}>
                <Typography variant="h6" component="h3" sx={{ fontWeight: 'bold' }}>Backend</Typography>
              </Box>
              <Stack direction="column" spacing={0.5} justifyContent="center">
                {skillsBackend.map((skill) => (
                  <Chip key={skill} label={skill} size="small" />
                ))}
              </Stack>
            </Grid>
            <Grid item xs={6}>
              <Box sx={{ textAlign: "center", mb: 1 }}>
                <Typography variant="h6" component="h3" sx={{ fontWeight: 'bold' }}>Frontend</Typography>
              </Box>
              <Stack direction="column" spacing={0.5} justifyContent="center">
                {skillsFrontend.map((skill) => (
                  <Chip key={skill} label={skill} size="small" />
                ))}
              </Stack>
            </Grid>
            <Grid item xs={6}>
              <Box sx={{ textAlign: "center", mb: 1 }}>
                <Typography variant="h6" component="h3" sx={{ fontWeight: 'bold' }}>Other</Typography>
              </Box>
              <Stack direction="column" spacing={0.5} justifyContent="center">
                {skillsOther.map((skill) => (
                  <Chip key={skill} label={skill} size="small" />
                ))}
              </Stack>
            </Grid>
          </Grid>
        </Box>
      </Grid>

      <Grid item xs={12} md={8}>
        <Box padding={2} component={Paper} elevation={4}>
        <Box sx={{ textAlign:"center", mb: 2 }}>
            <Typography variant="h5" component="h2" sx={{ fontWeight: 'bold' }}>Projects</Typography>
          </Box>
          <Box>
            <Typography variant="body1">
              Under Construction
            </Typography>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};
