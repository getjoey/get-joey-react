import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { IconButton } from '@mui/material';
import { useThemeContext } from '../context/ThemeContext';


export default () => {
    const { toggleTheme, isLightTheme } = useThemeContext();

    return <></>;
    // Disabled for now
    // return (
    //     <IconButton onClick={toggleTheme}>
    //         {isLightTheme ? <DarkModeIcon/> : <LightModeIcon/>}
    //     </IconButton>
    // )
}