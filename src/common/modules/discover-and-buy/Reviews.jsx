import { Box, Stack, Typography } from '@mui/material';
import { useEffect, useRef } from 'react';

export default function Reasons() {
  // Create a reference to the <div> element which will represent the TrustBox
  const ref = useRef(null);
  useEffect(() => {
    // If window.Trustpilot is available it means that we need to load the TrustBox from our ref.
    // If it's not, it means the script you pasted into <head /> isn't loaded  just yet.
    // When it is, it will automatically load the TrustBox.
    if (window.Trustpilot && process.browser) {
      window.Trustpilot.loadFromElement(ref.current, true);
    }
  }, []);

  return (
    <Stack
      sx={{ bgcolor: 'var(--N100)', alignItems: 'center' }}
      pt={{ xs: '40px', md: '64px' }}
      pb="64px"
      px="24px"
    >
      <Box maxWidth={1200} width="100%">
        <Typography variant="p.eyebrow">Reviews</Typography>
        <Typography variant="h2" mt="16">
          Still need convincing?
        </Typography>
        <Typography variant="p" component="p" mt="16">
          Here’s what others are saying.
        </Typography>
        <Box
          mt="40px"
          ref={ref} // We need a reference to this element to load the TrustBox in the effect.
          className="trustpilot-widget" // Renamed this to className.
          data-locale="en-US"
          data-template-id="539ad0ffdec7e10e686debd7"
          data-businessunit-id="6142c6d38f0dad001d8bd11a"
          data-style-height="350px"
          data-style-width="100%"
          data-theme="light"
          data-tags="SelectedReview"
          data-review-languages="en"
          data-per-page={3}
        >
          {/* eslint-disable-next-line react/jsx-no-target-blank */}
          <a href="https://www.trustpilot.com/review/example.com" target="_blank" rel="noopener">
            Trustpilot
          </a>
        </Box>
      </Box>
    </Stack>
  );
}
