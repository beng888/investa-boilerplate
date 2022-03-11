import { AppBar, Box, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

export default function Header() {
  return (
    <AppBar color="default" position="sticky" sx={{ height: { sm: 96 }, p: { sm: '24px 120px' } }}>
      <Box sx={{ display: ['none', 'flex'] }} justifyContent="space-between" alignItems="center">
        <Image src="/images/singlife-investa.svg" layout="intrinsic" height={48} width={355} />
        <Typography variant="You're now covered w">Cash for Income Loss</Typography>
      </Box>
      <Stack display={{ sm: 'none' }}>
        <Box height={48} px="16px" display="flex" alignItems="center" gap="12px">
          <Image src="/icons/close.svg" layout="intrinsic" height={16} width={16} />
          <Typography variant="Title Name">Unionbank x Singlife</Typography>
        </Box>
        <Box
          height={48}
          px="24px"
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          gap="12px"
          bgcolor="var(--N100)"
        >
          <Box display="flex" gap="4px" alignItems="center">
            <ChevronLeftIcon fontSize="medium" />
            <Typography variant="Title">Cash for Income Loss</Typography>
          </Box>
          <Image src="/images/singlife.svg" layout="intrinsic" height={24} width={77.4} />
        </Box>
      </Stack>
    </AppBar>
  );
}
