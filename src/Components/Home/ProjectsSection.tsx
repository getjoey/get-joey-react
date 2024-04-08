import { Box, Chip, Grid, IconButton, Paper, Stack, Tooltip, Typography } from "@mui/material"
import GitHubIcon from '@mui/icons-material/GitHub';

import nlpGameScreenshot1 from "../../assets/photos/nlpGameSC1.png";
import nlpGameScreenshot2 from "../../assets/photos/nlpGameSC2.png";
import nlpGameScreenshot3 from "../../assets/photos/nlpGameSC3.png";
import nlpGameScreenshot4 from "../../assets/photos/nlpGameSC4.png";
import nlpGameScreenshot5 from "../../assets/photos/nlpGameSC5.png";
import nlpGameScreenshot6 from "../../assets/photos/nlpGameSC6.png";
import ImageModalCarousel from "../other/ImageModalCarousel";

type Project = {
  title: string,
  info: string,
  languages: string[],
  photoLinks: string[],
  githubLink: string,
};

const Project = ({ title, info, languages, photoLinks, githubLink }: Project) => {
  return (
    <Grid container spacing={2} borderTop="1px solid #e0e0e0" p={2} mb={2}>
      <Grid item xs={12}>
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
      </Grid>
      <Grid item xs={12} lg={6}>
        <Typography variant="body2">
          {info}
        </Typography>
      </Grid>
      <Grid item xs={12} lg={6}>
        <ImageModalCarousel photoLinks={photoLinks} />
      </Grid>
      <Grid item xs={12}>
        <Box display="flex" flexDirection="row">
          <Stack direction="row" spacing={1} justifyContent="center" flexWrap="wrap" gap={1}>
            {languages.map(lang => <Chip key={lang} label={lang} size="small" />)}
          </Stack>
        </Box>
      </Grid>
    </Grid>
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
      to make sure the site is not just visually appealing but also well-constructed.`,
      languages: ["React", "Typescript", "Javascript", "HTML", "CSS", "MaterialUI"],
      photoLinks: [],
      githubLink: "https://github.com/getjoey/getjoey.github.io",
    },
    {
      title: "Android Puzzle Game",
      info: `During the holidays, I decided to explore the Unity game engine, known for its ability 
      to run simulations and bring creative ideas to life. I developed a fun little puzzle game that 
      was available for free download on Android. The objective of the game is to manipulate light using 
      various colored lenses and mirrors to overcome obstacles, collect coins, and energize a black hole.`,
      languages: ["C#", "Unity", "Android"],
      photoLinks: [nlpGameScreenshot1, nlpGameScreenshot2, nlpGameScreenshot3, nlpGameScreenshot4, nlpGameScreenshot5, nlpGameScreenshot6],
      githubLink: "",
    },
    // {
    //   title: "RaceCar AI",
    //   info: `A fun little project, to attempt to learn more about genetic AI, where cars randomly drive through checkpoints where they are awarded, and cycle keeps on repeating with each best driver being replicated and split into another 100 random cars. Eventually the car is able to finish the track, and will continue to improve.`,
    //   languages: ['Java'],
    //   photoLinks: ["https://raw.githubusercontent.com/getjoey/raceCarAi/master/carA.png", "https://raw.githubusercontent.com/getjoey/raceCarAi/master/carB.png"],
    //   githubLink: "https://github.com/getjoey/raceCarAi",
    // },
    // {
    //   title: "Pixel Drawer",
    //   info: `Pixel art creator, like paint, but for blocky pixel art like images`,
    //   languages: ["Java"],
    //   photoLinks: ["https://raw.githubusercontent.com/getjoey/getjoey.github.io-old/master/images/pixeldrawer2.png", "https://raw.githubusercontent.com/getjoey/getjoey.github.io-old/master/images/pixeldrawer.png"],
    //   githubLink: "https://github.com/getjoey/PixelDrawer1.1",
    // },
    {
      title: "Under Construction",
      info: `I am adding in more projects (April 8th, 2024)`,
      languages: [],
      photoLinks: [],
      githubLink: "",
    }
  ];


  return (
    <Box p={1} paddingLeft={2} paddingRight={2} component={Paper} elevation={2}>
      <Box sx={{ textAlign: "left", mb: 3, ml: 1 }}>
        <Typography variant="h5" component="h2" sx={{ fontWeight: 'bold' }}>Project Showcase</Typography>
      </Box>
      {projectList.map(p => <Project title={p.title} info={p.info} photoLinks={p.photoLinks} languages={p.languages} githubLink={p.githubLink} />)}
    </Box>
  )
}