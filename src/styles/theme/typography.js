// import { createTheme } from '@mui/material';
import _var from '../variables.module.css';

// const theme = createTheme();

const typography = {
  fontFamily: ['SharpSansNo1', 'sans-serif'].join(','),

  /* -------------------------------- variants -------------------------------- */

  h1: {
    fontWeight: 600,
    fontSize: '32px',
    lineHeight: '42px',
    color: _var['--N999'],
    '@media (max-width:600px)': {
      fontSize: '21.88px',
      lineHeight: '26px',
    },
    //* sample using theme breakpoints
    // [theme.breakpoints.up('md')]: {
    //   fontSize: '2.4rem',
    // },
  },
  'Title Name': {
    fontWeight: 500,
    fontSize: '18px',
    lineHeight: '21.09px',
    color: _var['--black'],
  },
  Title: {
    fontWeight: 500,
    fontSize: '18px',
    lineHeight: '21.09px',
    color: '#4A4A4A',
  },
  "You're now covered w": {
    fontWeight: 600,
    fontSize: '18px',
    lineHeight: '24px',
    color: _var['--N500'],
  },
  'step X of X': {
    fontWeight: 400,
    fontSize: '18px',
    lineHeight: '23.67px',
    color: _var['--N700'],
  },
  'Step Title': {
    fontWeight: 600,
    fontSize: '18px',
    lineHeight: '23.67px',
    color: _var['--N700'],
  },
  'Global/Stepper': {
    fontWeight: 600,
    fontSize: '11.2px',
    lineHeight: '14px',
    color: _var.Black,
    textTransform: 'uppercase',
  },
};

export default typography;
