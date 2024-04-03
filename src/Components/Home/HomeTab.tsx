import { Box, Chip, Grid, IconButton, Paper, Stack, Typography } from '@mui/material';
import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import AboutSection from './AboutSection';
import SkillSection from './SkillSection';
import ProjectsSection from './ProjectsSection';

export default ({ setTabValue }: { setTabValue: React.Dispatch<React.SetStateAction<string>> }) => {

  const about = "I am a software developer with a Bachelor's degree in Commerce and a Postgraduate degree in Computer Science. Since begining my career in 2019, I have developed a strong foundation in software development, consistently delivering high-quality work. My passion for learning drives me to explore new technologies and projects in my personal time, including AI generative models, video game development with Unity, and various research projects. Colleagues appreciate my collaborative approach and my ability to contribute positively to the team. I am dedicated to continuous improvement and strive for excellence in all my endeavors.";

  const skillsLanguages = ['Typescript', 'Javascript', 'Python', 'Java', 'Ruby', "C#"];
  const skillsBackend = ['Node js', 'Flask', 'Spring', 'REST', 'GraphQL', 'Ruby on Rails', 'SQL', 'PostgreSQL', 'MySQL', 'DynamoDB'];
  const skillsFrontend = ['React', 'HTML', 'CSS', 'Bootstrap', 'MaterialUI'];
  const skillsOther = ['Tensorflow Keras', 'Unity', 'Git', 'CircleCi', 'Serverless', 'Kubernetes', 'Docker', 'AWS stack'];

  return (
    <Grid container spacing={2} component={Paper} elevation={1} sx={{ p: 2 }}>
      <Grid item xs={12} md={12} lg={12}>
        <AboutSection setTabValue={setTabValue} />
      </Grid>

      <Grid item xs={12} md={4}>
        <SkillSection />
      </Grid>

      <Grid item xs={12} md={8}>
        <ProjectsSection />
      </Grid>
    </Grid>
  );
};
