import { Box, Chip, Grid, Paper, Stack, Typography } from '@mui/material';
import React from 'react';

export default () => {

    const skillsLanguages = ['Typescript', 'Javascript', 'Python', 'Java', 'Ruby', "C#"];
    const skillsBackend = ['Node js', 'Flask', 'Spring', 'REST', 'GraphQL', 'Ruby on Rails', 'SQL', 'PostgreSQL', 'MySQL', 'DynamoDB'];
    const skillsFrontend = ['React', 'HTML', 'CSS', 'Bootstrap', 'MaterialUI'];
    const skillsOther = ['Tensorflow Keras', 'Unity', 'Git', 'CircleCi', 'Serverless', 'Kubernetes', 'Docker', 'AWS stack'];

    return (
        <Box padding={2} component={Paper} elevation={2}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Box sx={{ textAlign: "center", mb: 2 }}>
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

    );
};
