import { Box, LinearProgress, Stack, Typography } from '@mui/material';
import { NextButton } from '@common/components/buttons';
import PropTypes from 'prop-types'; // ES6

const style = {
  bgcolor: 'var(--N000)',
  '& .MuiLinearProgress-barColorPrimary': {
    bgcolor: 'var(--SL-R700)',
  },
};

export default function StepperLayout({ children, ...props }) {
  return (
    <Stack display="flex" flexGrow={1} {...props}>
      <Box p={['24px', '0px']}>
        <Typography
          sx={{ display: ['flex', 'none'], justifyContent: 'space-between', mb: '16px' }}
          variant="Global/Stepper"
        >
          Personal Details<Box>1/8</Box>
        </Typography>
        <LinearProgress variant="determinate" value={20} sx={{ ...style }} />
        <Box
          sx={{ display: ['none', 'flex'], mt: '22px', gap: '12px', height: 72 }}
          justifyContent="center"
          alignItems="center"
        >
          <Typography variant="step X of X">step 1 of 8</Typography>
          <Typography variant="Step Title">Your profile</Typography>
        </Box>
      </Box>
      {children}
      <Box m={['auto 24px 24px 24px', 'unset']} justifyContent="center" display="flex">
        <NextButton>TEST</NextButton>
      </Box>
    </Stack>
  );
}

StepperLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
