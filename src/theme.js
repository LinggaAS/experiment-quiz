import { createTheme } from '@mui/material/styles';

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#1769AA',
    },
    secondary: {
      main: '#838383',
    },
    textSecondary: {
      main: '#A2A2A2'
    },
    error: {
      main: '#E25141',
    },
  },
})

export default theme