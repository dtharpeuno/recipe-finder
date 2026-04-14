import { createTheme } from '@mui/material/styles';

// Create a custom MUI theme
const theme = createTheme({
    palette: {
        primary: {
            main: '#6b6b6b'
        },
        secondary: {
            main: '#ba431b'
        },
        success: {
            main: '#457645'
        },
        error: {
            main: 'rgba(199, 64, 64, 0.90)'
        },
        background: {
            default: '#f5f5f5',
        },
    },
    typography: {
        fontFamily: "'Inter', sans-serif",
        h1: {
            fontWeight: 700,
            fontSize: '2.5rem',
            fontFamily: "'Sacramento', cursive"
        },
        h2: {
            fontFamily: "'Inter', sans-serif",
        },
        h3: {
            fontSize: '1.3rem',
            fontFamily: "'Inter', sans-serif",
        },
        h4: {
            fontSize: '1.1rem',
            lineHeight: '1.1rem',
            fontFamily: "'Inter', sans-serif",
        },
        body1: {
            fontSize: '1rem',
            fontFamily: "'Inter', sans-serif",
        },
        body2: {
            fontSize: '.9rem',
            lineHeight: '1.2rem',
            fontFamily: "'Inter', sans-serif",
        },
        body3: {
            fontSize: '.8rem',
            fontFamily: "'Inter', sans-serif",
        },
        body4: {
            fontSize: '.7rem',
            fontFamily: "'Inter', sans-serif",
        },
        button: {
            fontFamily: "'Inter', sans-serif"
        },
    },
    spacing: 8,
});

export default theme;