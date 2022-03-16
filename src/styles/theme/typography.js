import { createTheme } from '@mui/material';
import _var from '../variables.module.css';

const theme = createTheme();

const typography = {
  fontFamily: ['SharpSansNo1', 'sans-serif'].join(','),

  /* -------------------------------- variants -------------------------------- */

  'h1.main': {
    fontWeight: 700,
    fontSize: '34.18px',
    lineHeight: '42.72px',
    color: _var['--N999'],
    [theme.breakpoints.up('sm')]: {
      fontSize: '42px',
      lineHeight: '60px',
    },
  },
  h1: {
    fontWeight: 600,
    fontSize: '21.88px',
    lineHeight: '26px',
    color: _var['--N999'],
    //* sample using @media breakpoints
    // '@media (max-width:600px)': {
    //   fontSize: '21.88px',
    //   lineHeight: '26px',
    // },
    [theme.breakpoints.up('sm')]: {
      fontSize: '32px',
      lineHeight: '42px',
    },
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
  'p.eyebrow': {
    fontWeight: 400,
    fontSize: '14px',
    lineHeight: '18px',
    color: _var['--N700'],
    textTransform: 'uppercase',
    [theme.breakpoints.up('sm')]: {
      fontSize: '20px',
      lineHeight: '24px',
    },
  },
  Footnote: {
    fontWeight: 400,
    fontSize: '11.2px',
    lineHeight: '18px',
    color: _var['--N700'],
    [theme.breakpoints.up('sm')]: {
      fontSize: '18px',
      lineHeight: '22px',
    },
  },
  'a.reg': {
    fontWeight: 700,
    fontSize: '11.2px',
    lineHeight: '13px',
    color: _var['--SL-R700'],
    textTransform: 'uppercase',
    [theme.breakpoints.up('sm')]: {
      fontSize: '18px',
      lineHeight: '22px',
    },
  },
  h2: {
    fontWeight: 700,
    fontSize: '27.34px',
    lineHeight: '34px',
    color: _var['--N999'],
    [theme.breakpoints.up('sm')]: {
      fontSize: '48px',
      lineHeight: '60px',
    },
  },
  p: {
    fontWeight: 400,
    fontSize: '14px',
    lineHeight: '18px',
    color: _var['--N900'],
    [theme.breakpoints.up('sm')]: {
      fontSize: '20px',
      lineHeight: '24px',
    },
  },
  h3: {
    fontWeight: 700,
    fontSize: '21.88px',
    lineHeight: '26px',
    color: _var['--N999'],
    textTransform: 'uppercase',
    [theme.breakpoints.up('sm')]: {
      fontSize: '24px',
      lineHeight: '30px',
    },
  },
  h4: {
    fontWeight: 700,
    fontSize: '17.5px',
    lineHeight: '24px',
    color: _var['--N999'],
    [theme.breakpoints.up('sm')]: {
      fontSize: '20px',
      lineHeight: '24px',
    },
  },
};

export default typography;
