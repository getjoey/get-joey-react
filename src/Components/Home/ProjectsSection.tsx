import { Box, Paper, Typography } from "@mui/material"


export default () => {

    return (
        <Box padding={2} component={Paper} elevation={2}>
          <Box sx={{ textAlign: "center", mb: 2 }}>
            <Typography variant="h5" component="h2" sx={{ fontWeight: 'bold' }}>Projects</Typography>
          </Box>
          <Box>
            <Typography variant="body1">
              Under Construction
            </Typography>
          </Box>
        </Box>
    )
}