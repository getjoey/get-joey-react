import Box from '@mui/material/Box';
import Dialog from '@mui/material/Dialog';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import { Paper } from '@mui/material';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

export default function PhotoCarousel({ photoLinks }: { photoLinks: string[] }) {
    const [open, setOpen] = React.useState(false);
    const [selectedImageIndex, setSelectedImageIndex] = React.useState(0);
    const [dialogImage, setDialogImage] = React.useState('');
    const theme = useTheme();

    const handleClickOpen = (image: string) => {
        setDialogImage(image);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleStepChange = (step: number) => {
        if (step > photoLinks.length) {
            step = 0;
        }
        if (step < 0) {
            step = photoLinks.length - 1;
        }
        setSelectedImageIndex(step);
    };

    if (photoLinks.length == 0) {
        return <></>;
    }


    return (
        <Box margin={1} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Box component={Paper} padding={1} elevation={1} sx={{ width: {xs: "100%", md:"500px"}}}>
                <AutoPlaySwipeableViews
                    axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                    index={selectedImageIndex}
                    onChangeIndex={handleStepChange}
                    enableMouseEvents
                    interval={3000}
                    style={{ maxWidth: '100%', maxHeight: '100%' }}
                >
                    {photoLinks.map((photoLink: string, index: number) => (
                        <div key={index} style={{ textAlign: 'center' }}>
                            <img
                                src={photoLink}
                                alt={`Photo ${index + 1}`}
                                style={{ maxHeight: '200px', maxWidth:"100%", cursor: 'pointer' }}
                                onClick={() => handleClickOpen(photoLink)}
                            />
                        </div>
                    ))}
                </AutoPlaySwipeableViews>
                <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection:"row" }}>
                    <MobileStepper
                        steps={photoLinks.length}
                        position="static"
                        activeStep={selectedImageIndex}
                        nextButton={
                            <IconButton
                                onClick={() => handleStepChange((selectedImageIndex + 1) % photoLinks.length)}
                            >
                                {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
                            </IconButton>
                        }
                        backButton={
                            <IconButton
                                onClick={() => handleStepChange((selectedImageIndex - 1 + photoLinks.length) % photoLinks.length)}
                            >
                                {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
                            </IconButton>
                        }
                        sx={{ width: {xs: "100%", md:"500px"}, height:"50px" }}
                    />
                </Box>
            </Box>
            <Dialog open={open} onClose={handleClose} fullWidth maxWidth="md">
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
                <img src={dialogImage} alt="Selected" style={{ maxWidth: '100%', maxHeight: '100%' }} />
            </Dialog>
        </Box>
    );
}
