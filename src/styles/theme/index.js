import { createTheme } from '@mui/material';
import typography from './typography';

// import colors from '../lib/colors.css';
// ? Default breakpoints
//* xs, extra-small: 0px
//* sm, small: 600px
//* md, medium: 900px
//* lg, large: 1200px
//* xl, extra-large: 1536px

// const cssVar = (name: string) =>
//   getComputedStyle(document.documentElement).getPropertyValue(name).trim();

const theme = createTheme({
  typography,
  palette: {
    mode: 'light',
    primary: {
      main: '#FF0008',
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableRipple: true,
      },
    },
  },
});

export default theme;
