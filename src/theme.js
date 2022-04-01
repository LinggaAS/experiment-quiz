import { createTheme } from '@mui/material/styles';

// Create a theme instance.
const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          "&::-webkit-scrollbar, & *::-webkit-scrollbar": {
            width: '5px',
            height: '14px',
          },
          "&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb": {
            background: "#C82D39",
            borderRadius: '10px'
          },
          "&::-webkit-scrollbar-track, & *::-webkit-scrollbar-track": {
            backgroundColor: "#C9C9C9",
            boxShadow: "inset 0 0 5px grey",
            borderRadius: '10px'
          },
        },
      },
    },
  },
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
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 950,
      lg: 1280,
      xl: 1536,
    }
  },
});

export default theme;