import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { IconButton } from '@mui/material';
import { useThemeContext } from '../Context/ThemeContext';


export default () => {
    const { toggleTheme, isLightTheme } = useThemeContext();

    return (
        <IconButton onClick={toggleTheme}>
            {isLightTheme ? <DarkModeIcon/> : <LightModeIcon/>}
        </IconButton>
    )
}