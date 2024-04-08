import { Box, Chip, Grid, Paper, Stack, Typography, useTheme } from '@mui/material';
import React from 'react';

const TitleAndSkillsSubset = ({ title, skills }: { title: string, skills: string[] }) => {
    const theme = useTheme();
    return (
        <Box>
            <Box>
                <Typography variant="subtitle1" component="h3" sx={{ fontWeight: 'bold' }}>{title}</Typography>
            </Box>
            <Stack direction="row" flexWrap={"wrap"}>
                {skills.map((skill) => (
                    <Chip key={skill} label={skill} size="small" sx={{ m: 0.15 }} />
                ))}
            </Stack>
        </Box>
    );
};

export default () => {
    const theme = useTheme();
    const skillsLanguages = ['Typescript', 'Javascript', 'Python', 'Java', 'Ruby', "C#"];
    const skillsBackend = ['Node js', 'Flask', 'Spring', 'REST', 'GraphQL', 'Ruby on Rails', 'SQL', 'PostgreSQL', 'MySQL', 'DynamoDB'];
    const skillsFrontend = ['React', 'HTML', 'CSS', 'Bootstrap', 'MaterialUI'];
    const skillsOther = ['Tensorflow Keras', 'Unity', 'Git', 'CircleCi', 'Serverless', 'Kubernetes', 'Docker', 'AWS stack'];
    return (
        <Box padding={2} pl={4} component={Paper} elevation={2}>
            <TitleAndSkillsSubset title={"Languages"} skills={skillsLanguages} />
            <TitleAndSkillsSubset title={"Backend"} skills={skillsBackend} />
            <TitleAndSkillsSubset title={"Frontend"} skills={skillsFrontend} />
            <TitleAndSkillsSubset title={"Other"} skills={skillsOther} />
        </Box>

    );
};
