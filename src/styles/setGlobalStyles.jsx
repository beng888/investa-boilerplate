import { GlobalStyles } from '@mui/material';
import variables from './variables.module.css';

const setGlobalStyles = (theme) => (
  <GlobalStyles
    styles={{
      ':root': {
        ...variables,
        '--color-primary': theme.palette.primary.main,
        '--color-secondary': theme.palette.secondary.main,
      },
    }}
  />
);

export default setGlobalStyles;
