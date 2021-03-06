import { createTheme } from '@mui/material';
import typography from './typography';
import _var from '../variables.module.css';

// ? Default breakpoints
//* xs, extra-small: 0px
//* sm, small: 600px
//* md, medium: 900px
//* lg, large: 1200px
//* xl, extra-large: 1536px

const theme = createTheme({
  typography,
  palette: {
    mode: 'light',
    primary: {
      main: _var['--SL-R700'],
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableRipple: true,
      },
      variants: [
        {
          props: { variant: 'outlined' },
          style: {
            border: `1px solid ${_var['--N999']}`,
            color: _var['--N999'],
          },
        },
      ],
    },
    MuiToggleButton: {
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiDialogActions: {
      styleOverrides: {
        root: { padding: '0px' },
      },
    },
    MuiDialogTitle: {
      styleOverrides: {
        root: { padding: '0px' },
      },
    },
  },
});

export default theme;
