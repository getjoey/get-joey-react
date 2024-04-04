import { Box, Chip, Grid, IconButton, Paper, Stack, Typography } from '@mui/material';
import React from 'react';
import AboutSection from './AboutSection';
import SkillSection from './SkillSection';
import ProjectsSection from './ProjectsSection';

export default ({ setTabValue }: { setTabValue: React.Dispatch<React.SetStateAction<string>> }) => {
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
