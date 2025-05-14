import { createTheme } from '@mui/material/styles';
import { blue, grey } from '@mui/material/colors';

export const theme = createTheme({
  palette: {
    primary: {
      main: blue[700], // A nice shade of blue
      contrastText: '#fff',
    },
    secondary: {
      main: grey[500],
    },
    background: {
      default: grey[50], // Light grey for the overall page background
      paper: '#fff', // White for elements like cards or form backgrounds
    },
    text: {
      primary: grey[900],
      secondary: grey[700],
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
    h3: {
      fontWeight: 700,
      fontSize: '2.8rem', // Enlarged
    },
    h4: {
      fontWeight: 600,
      fontSize: '2.2rem', // Enlarged
    },
    h5: {
      fontWeight: 500,
      fontSize: '1.8rem', // Enlarged
    },
    subtitle1: {
      fontSize: '1.2rem', // Enlarged
      lineHeight: 1.6,
    },
    body1: {
      fontSize: '1.1rem', // Enlarged
      lineHeight: 1.7,
    },
    button: {
      textTransform: 'none',
      fontWeight: 600,
      fontSize: '1rem', // Enlarged
    },
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          marginBlock: '0.75rem', // Uniform spacing for text fields
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          padding: '12px 24px', // Larger buttons
          fontSize: '1.1rem',
        },
      },
    },
    MuiFormControlLabel: {
      styleOverrides: {
        label: {
          fontSize: '1rem', // Enlarged checkbox label
        }
      }
    },
    MuiLink: {
      styleOverrides: {
        root: {
          fontSize: '1rem', // Enlarged links
        }
      }
    }
  },
});