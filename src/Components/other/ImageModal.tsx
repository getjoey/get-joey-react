import Box from '@mui/material/Box';
import Dialog from '@mui/material/Dialog';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import React from "react";

export default ({ photoLinks }: any)=> {
    const [open, setOpen] = React.useState(false);
    const [selectedImage, setSelectedImage] = React.useState('');
  
    const handleClickOpen = (image:any) => {
      setSelectedImage(image);
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
    return (
      <Box>
        {photoLinks.map((photoLink:any, index:number) => (
          <img
            key={index}
            src={photoLink}
            alt={`Photo ${index + 1}`}
            style={{ maxHeight: '100px', cursor: 'pointer' }}
            onClick={() => handleClickOpen(photoLink)}
          />
        ))}
        <Dialog open={open} onClose={handleClose}>
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
          <img src={selectedImage} alt="Selected" style={{ maxWidth: '100%', maxHeight: '100%' }} />
        </Dialog>
      </Box>
    );
  }
  