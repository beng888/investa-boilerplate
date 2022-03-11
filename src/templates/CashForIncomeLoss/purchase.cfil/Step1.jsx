import DetailsCard from '@common/components/cards/DetailsCard';
import { Box, Typography } from '@mui/material';

export default function Step1() {
  return (
    <Box>
      <Typography variant="h1">We need to verify your identity first.</Typography>
      <DetailsCard />
    </Box>
  );
}
