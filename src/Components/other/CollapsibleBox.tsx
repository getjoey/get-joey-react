import React, { useState } from 'react';
import { IconButton, Collapse, Box, Typography, Paper } from '@mui/material';

function CollapsibleBox({ title, startsOpen, children } : any) {
  const [open, setOpen] = useState(startsOpen);

  const handleClose = () => {
    setTimeout(() => {
      setOpen(false);
    }, 500); // Delay of 500ms
  };

  return (
    <Box sx={{mt:2, p:2}} component={Paper} elevation={1} onMouseEnter={()=>setOpen(true)}>
      <Box display="flex" flexDirection={"row"}>
        <Typography variant="h5" component="h2" sx={{ fontWeight: 'bold', mt:0.5, ml:0.5 }}>{title}</Typography>
      </Box>
      <Collapse in={open}>
        <Box>
          {children}
        </Box>
      </Collapse>
    </Box>
  );
}

export default CollapsibleBox;
