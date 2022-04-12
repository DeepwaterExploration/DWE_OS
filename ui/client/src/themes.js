import createTheme from '@mui/material/styles/createTheme';
import grey from '@mui/material/colors/grey';

export const lightTheme = createTheme({
    palette: {
        grey: {
            main: grey[200], 
            dark: grey[300]
        },
        primary: {
            dark: '#092037',
            main: '#15314d'
        }
    }
});

export const darkTheme = createTheme({
    palette: {
        mode: 'dark'
    }
});
