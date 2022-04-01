import { createTheme } from '@mui/material/styles';

// Create a theme instance.
const theme = createTheme({
  palette: {
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
  },
})

export default theme