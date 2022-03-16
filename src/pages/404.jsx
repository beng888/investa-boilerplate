import React from 'react';
import { Stack, Typography } from '@mui/material';
import { NextButton } from '@common/components/buttons';

export default function Error() {
  return (
    <Stack spacing="24px" alignItems="center" mt="10vw">
      <Typography variant="h1.main">404</Typography>
      <Typography variant="h1">
        Oops! We can&apos;t seem to find the page you&apos;re looking for.
      </Typography>
      <NextButton>Back To Home Page</NextButton>
    </Stack>
  );
}
