import { createTheme } from '@mui/material/styles';

// Create a theme instance.
const theme = createTheme({
  palette: {
    background: {
      default: 'inherit',
      paper: 'inherit'
    },
    common: {
      main: '#393939'
    },
    primary: {
      main: '#1769AA'
    },
    warning: {
      main: '#E9D757'
    },
    success: {
      main: '#297374'
    },
    secondary: {
      main: '#838383'
    },
    error: {
      main: '#FF8552'
    },
    text: {
      primary: '#393939'
    }
  },
  typography: {
    fontFamily: 'inherit',
    h1: {
      fontSize: '3.583rem',
    },
    h2: {
      fontSize: '2.986rem',
    }
  }
})

export default theme