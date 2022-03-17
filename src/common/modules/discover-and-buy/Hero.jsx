import { NextButton } from '@common/components/buttons';
import { Box, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin';

export default function Hero() {
  gsap.registerPlugin(ScrollToPlugin);

  return (
    <Box pt={{ xs: '24px', md: '64px' }} px="24px" position="relative">
      <Box display="flex" maxWidth={1200} gap="24px" mx="auto">
        <Stack maxWidth={791}>
          <Typography variant="p.eyebrow">Cash For Income Loss</Typography>
          <Typography variant="h1.main" mt="24px">
            Replace your income for 36 months if you get disabled or pass away.
          </Typography>
          <NextButton
            href="/cash_for_income_loss/purchase/your_profile"
            p="16px 24px"
            mt={['16px', null, '40px']}
            maxWidth="fit-content"
          >
            GET A QUOTE NOW
          </NextButton>
          <Typography
            variant="Footnote"
            sx={{ mt: ['16px', null, '40px'], width: { xs: '182px', md: 'unset' } }}
          >
            *Quote for a 30 y.o. in excellent health, drives to and works in office, earns
            P30,000/month
          </Typography>
        </Stack>
        <Box
          sx={{ minWidth: '385px', minHeight: '393px', position: 'relative' }}
          display={['none', null, 'unset']}
        >
          <Image
            src="/images/cash-for-income-loss-hero.svg"
            layout="fill"
            objectFit="contain"
            priority
          />
        </Box>
      </Box>
      <Stack
        sx={{
          '&:hover': { cursor: 'pointer' },
          width: { xs: 177, md: 'fit-content' },
          mx: { md: 'auto' },
          alignItems: 'center',
          mt: { xs: '16px', md: '40px' },
        }}
        mb={{ xs: '71px', md: '40px' }}
        onClick={() => {
          gsap.to(window, { duration: 0.7, scrollTo: { y: `#coverage` } });
        }}
      >
        <Typography variant="a.reg">learn more</Typography>
        <ExpandMoreIcon fontSize="large" sx={{ color: 'var(--SL-R700)' }} />
      </Stack>
      <Box position="absolute">
        <Box
          sx={{
            minWidth: { xs: '100vw', md: '385px' },
            minHeight: { md: '393px' },
            maxHeight: '450px',
            height: '100vw',
            position: 'relative',
            display: { md: 'none' },
            transform: 'translate(-20px,-77% )',
            right: 0,
            zIndex: '-1',
          }}
        >
          <Image src="/images/cash-for-income-loss-hero.svg" layout="fill" objectFit="contain" />
        </Box>
      </Box>
    </Box>
  );
}
