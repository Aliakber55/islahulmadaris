import { createTheme } from '@mui/material/styles';
import { alpha } from '@mui/system';

// Create a base theme instance
let theme = createTheme({
  palette: {
    primary: {
      main: '#0B3D2E', // Deep Emerald Green
      dark: '#082f24',
    },
    secondary: {
      main: '#14532d', // Darker Green for secondary elements
    },
    accent: {
      main: '#D4AF37', // Gold for highlights
    },
    background: {
      default: '#F5F7FA', // Light Gray
      paper: '#FFFFFF',
    },
    text: {
      primary: '#1F2937',
      secondary: '#6B7280',
    },
    divider: '#E5E7EB',
  },
  typography: {
    fontFamily: ['Poppins', 'sans-serif'].join(','),
    h1: { fontWeight: 700 },
    h2: { fontWeight: 700 },
    h3: { fontWeight: 700 },
    h4: { fontWeight: 600 },
    h5: { fontWeight: 600 },
    h6: { fontWeight: 600 },
    button: {
      textTransform: 'none',
      fontWeight: 600,
      letterSpacing: '0.5px',
    }
  },
});

// Augment the theme with component overrides
theme = createTheme(theme, {
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: '0px 4px 20px rgba(31, 41, 55, 0.05)',
        },
      },
      defaultProps: {
        elevation: 0,
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: '10px 20px',
          transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
        },
        containedPrimary: {
          color: theme.palette.common.white,
          boxShadow: '0 3px 8px rgba(0,0,0,0.08)',
          '&:hover': {
            backgroundColor: theme.palette.primary.dark,
            boxShadow: '0 6px 15px rgba(0,0,0,0.12)',
            transform: 'translateY(-2px)',
          }
        },
        outlined: {
          borderColor: theme.palette.divider,
          color: theme.palette.text.primary,
          '&:hover': {
              borderColor: theme.palette.primary.main,
              backgroundColor: alpha(theme.palette.primary.main, 0.04),
          }
        }
      }
    },
    MuiDrawer: {
        styleOverrides: {
            paper: {
                borderRight: 'none',
            }
        }
    }
  }
});

export default theme;
