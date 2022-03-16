import { Box } from '@mui/material';

export default function Banner() {
  return (
    <Box
      p={['6px 24px', '16px 120px']}
      textAlign="center"
      sx={{
        bgcolor: 'var(--INV-BLUE)',
        color: '#fff',
        fontSize: ['14px', '18px'],
        lineHeight: ['21px', '24px'],
        fontWeight: [400, 700],
      }}
    >
      Get Php 1,140,000 coverage for as low as Php 289/month*!
    </Box>
  );
}
