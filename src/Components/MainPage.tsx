import { Box, IconButton, Tab, Typography } from '@mui/material';
import React from 'react';
import { useTheme } from '@mui/material/styles';
import AboutSection from './home/AboutSection';
import ProjectsSection from './home/ProjectsSection';
import SkillSection from './home/SkillSection';
import Header from './other/Header';

export default () => {
    const theme = useTheme();
    const [tabValue, setTabValue] = React.useState<string>('0');
    const [animate, setAnimate] = React.useState(false);

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setTabValue(newValue);
    };

    return (
        <Box display="flex" justifyContent={"center"}>
            <Box margin={2} sx={{ width: { xs: "90%", md: "80%" }, opacity:0.88}}>
                <Box>
                    <Header />
                </Box>
                <Box marginTop={2}>
                    <AboutSection />
                </Box>
                <Box marginTop={2}>
                    <SkillSection />
                </Box>
                <Box marginTop={2}>
                    <ProjectsSection />
                </Box>
            </Box>
        </Box>
    );
};
