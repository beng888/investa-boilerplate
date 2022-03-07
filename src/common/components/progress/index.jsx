import { Box, LinearProgress, Stack, Typography } from '@mui/material';
import React from 'react';

const style = {
  height: '4',
  bgcolor: 'var(--N000)',
  '& .MuiLinearProgress-barColorPrimary': {
    bgcolor: 'var(--SL-R700)',
  },
};

export default function Progress() {
  return (
    <Stack spacing="22px">
      <LinearProgress variant="determinate" value={20} sx={{ ...style }} />
      <Box
        sx={{ display: ['none', 'flex'] }}
        justifyContent="center"
        alignItems="center"
        gap="12px"
        height={72}
      >
        <Typography variant="step X of X">step 1 of 8</Typography>
        <Typography variant="Step Title">Your profile</Typography>
      </Box>
    </Stack>
  );
}
