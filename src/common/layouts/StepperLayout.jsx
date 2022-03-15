import { Box, LinearProgress, Stack, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { createContext, useContext, useMemo, useState } from 'react';

const progressStyle = {
  bgcolor: 'var(--N000)',
  '& .MuiLinearProgress-barColorPrimary': {
    bgcolor: 'var(--SL-R700)',
  },
};

const StepperContext = createContext();

export function useStepperContext() {
  return useContext(StepperContext);
}
export default function StepperLayout({ children, ...props }) {
  const [steps, setSteps] = useState([]);
  const { query } = useRouter();
  const value = useMemo(() => ({ setSteps }), []);
  const step = steps.indexOf(query.step) + 1;
  const stepTitle = query.step?.replace(/_/g, ' ')?.toUpperCase();

  return (
    <Stack display="flex" flexGrow={1} {...props}>
      <Box mt={['24px', '0px']} mx={['24px', 'unset']}>
        <Typography
          sx={{ display: ['flex', 'none'], justifyContent: 'space-between', mb: '16px' }}
          variant="Global/Stepper"
        >
          {stepTitle}
          <Box>{`${step}/${steps.length}`}</Box>
        </Typography>
        <LinearProgress
          variant="determinate"
          value={(step / steps.length) * 100}
          sx={{ ...progressStyle }}
        />
        <Box
          sx={{ display: ['none', 'flex'], mt: '22px', gap: '12px', height: 72 }}
          justifyContent="center"
          alignItems="center"
        >
          <Typography variant="step X of X">{`step ${step} of ${steps.length}`}</Typography>
          <Typography variant="Step Title">{stepTitle}</Typography>
        </Box>
      </Box>
      <StepperContext.Provider value={value}>{children}</StepperContext.Provider>
    </Stack>
  );
}

StepperLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
