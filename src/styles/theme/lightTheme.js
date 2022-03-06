import { createTheme } from '@mui/material';

// ? Default breakpoints
//* xs, extra-small: 0px
//* sm, small: 600px
//* md, medium: 900px
//* lg, large: 1200px
//* xl, extra-large: 1536px

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#FF0008',
    },
  },
  typography: {
    fontFamily: ['SharpSansNo1', 'sans-serif'].join(','),
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
