import { Grid } from '@mui/material';
import React from 'react';
import AboutSection from './AboutSection';
import SkillSection from './SkillSection';
import ProjectsSection from './ProjectsSection';

export default () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={12} lg={12}>
        <AboutSection/>
      </Grid>
      <Grid item xs={12} md={4} lg={3}>
        <SkillSection />
      </Grid>
      <Grid item xs={12} md={8} lg={9}>
        <ProjectsSection />
      </Grid>
    </Grid>
  );
};
