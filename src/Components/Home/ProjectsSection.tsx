import { Box, Chip, IconButton, Paper, Stack, Tooltip, Typography } from "@mui/material"
import GitHubIcon from '@mui/icons-material/GitHub';

import nlpGameScreenshot from "../../assets/photos/nlpGameScreenshot.png";
import ImageModal from "../other/ImageModal";

type Project = {
  title: string,
  info: string,
  languages: string[],
  photoLinks: string[],
  githubLink: string,
};

const Project = ({ title, info, languages, photoLinks, githubLink }: Project) => {
  return (
    <Box padding={2} margin={2} component={Paper} elevation={1} display="flex" flexDirection="column" rowGap={1}>
      <Box display="flex" flexDirection={"row"}>
        <Typography variant="h6" component="h3" sx={{ fontWeight: 'bold' }}>{title}</Typography>
        {!githubLink ? <></> :
          <Tooltip title="View on GitHub">
            <IconButton href={githubLink} target="_blank" rel="noopener noreferrer"
              sx={{
                color: 'orange',
                '&:hover': {
                  backgroundColor: 'grey'
                },
                mt: -1.5
              }}>
              <GitHubIcon fontSize="large" />
            </IconButton>
          </Tooltip>
        }
      </Box>
      <Box>
        <Typography variant="body2">
          {info}
        </Typography>
      </Box>
      <Box>
        <ImageModal photoLinks={photoLinks}/>
      </Box>
      <Box display="flex" flexDirection="row">
        <Stack direction="row" spacing={1} justifyContent="center" flexWrap="wrap" gap={1}>
          {languages.map(lang => <Chip key={lang} label={lang} size="small" />)}
        </Stack>
      </Box>
    </Box>
  )
};

export default () => {
  const projectList: Project[] = [
    {
      title: "This website",
      info: `My first portfolio website was built when I started learning to code. 
      Recently, I decided it was time for an update, so I rebuilt it using React. 
      The new design is sleeker and more polished, and it reflects my growing skills in front-end development, 
      even though I started my career focused on back-end work. For the updated version of my portfolio, 
      I chose to use React and Material-UI. This allowed me to build the site with modular components, 
      which keeps the code organized and easy to work with. I aimed to write clean code and follow best practices 
      to make sure the site is not just visually appealing but also well-constructed.
      The website is also mobile friendly (Using mui bootstrap grid for responsive layout). Feel free to try it out!`,
      languages: ["React", "Typescript", "Javascript", "HTML", "CSS", "MaterialUI"],
      photoLinks: [],
      githubLink: "https://github.com/getjoey/getjoey.github.io",
    },
    {
      title: "Android Puzzle Game",
      info: `Over the holidays, I wanted to learn Unity game making engine, 
      as it is great for running simulations and bringing ideas to life. 
      So I created a fun little puzzle game that anyone can download for free on android. 
      Unfortunately game has been removed from the android store do to inactivity. 
      The Goal of the game is to reflect light through different colored lenses and mirrors 
      to get through all barriers, collect all coins, and charge up the black hole.`,
      languages: ["C#", "Unity", "Android"],
      photoLinks: [nlpGameScreenshot],
      githubLink: "",
    }
  ];


  return (
    <Box padding={2} component={Paper} elevation={2}>
      <Box sx={{ textAlign: "center", mb: 2 }}>
        <Typography variant="h5" component="h2" sx={{ fontWeight: 'bold' }}>Projects</Typography>
      </Box>
      {/* <Box>
            <Typography variant="body1">
              Under Construction
            </Typography>
          </Box> */}
      {projectList.map(p => <Project title={p.title} info={p.info} photoLinks={p.photoLinks} languages={p.languages} githubLink={p.githubLink} />)}
    </Box>
  )
}