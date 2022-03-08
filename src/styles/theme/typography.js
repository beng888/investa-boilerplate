import _var from '../variables.module.css';

const typography = {
  fontFamily: ['SharpSansNo1', 'sans-serif'].join(','),

  /* -------------------------------- variants -------------------------------- */

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
