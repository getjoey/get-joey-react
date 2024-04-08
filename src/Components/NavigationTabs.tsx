import { TabContext, TabList, TabPanel } from '@mui/lab';
import { Box, IconButton, Tab } from '@mui/material';
import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import ThemeModeButton from './ThemeModeButton';
import HomeTab from './home/HomeTab';
import BlogTab from './blog/BlogTab';
import ContactTab from './contact/ContactTab';

import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';

export default () => {
  const [tabValue, setTabValue] = React.useState<string>('0');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setTabValue(newValue);
  };

  return (
    <TabContext value={tabValue}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider', display: 'flex', justifyContent: 'space-between' }}>
        <Box>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab icon={<HomeIcon/>} value="0" />
            <Tab icon={<NewspaperIcon />} value="1" />
            <Tab icon={<ContactPageIcon />} value="2" />
          </TabList>
        </Box>
        <Box sx={{pr: 1, pt:0.5}}>
          <IconButton href="https://github.com/getjoey" target="_blank" rel="noopener noreferrer">
            <GitHubIcon />
          </IconButton>
          <IconButton href="https://www.linkedin.com/in/jo-ciamp/" target="_blank" rel="noopener noreferrer">
            <LinkedInIcon />
          </IconButton>
          <IconButton onClick={() => setTabValue("2")}>
            <AlternateEmailIcon />
          </IconButton>
          <ThemeModeButton />
        </Box>
      </Box>
      {/* <TabPanel value="0"><HomeTab setTabValue={setTabValue}/></TabPanel> */}
      <TabPanel value="1"><BlogTab/></TabPanel>
      <TabPanel value="2"><ContactTab setTabValue={setTabValue}/></TabPanel>
    </TabContext>
  );
};
