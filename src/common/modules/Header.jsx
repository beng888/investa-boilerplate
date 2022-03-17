import { AppBar, Box, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { useRouter } from 'next/router';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { scrollReveal, scrollTo } from '@common/utilities/gsap';
import { useEffect, useRef } from 'react';

export default function Header() {
  const router = useRouter();
  const isPurchase = router.pathname.includes('purchase');
  const boxRef = useRef(null);

  useEffect(() => {
    scrollReveal(boxRef.current, {
      from: 100,
      to: 0,
      start: 'top -80%',
    });
  }, []);

  return (
    <>
      <AppBar
        id="header"
        color="default"
        sx={{
          position: [`${isPurchase ? 'sticky' : 'relative'}`, 'relative'],
          height: { sm: 96 },
        }}
      >
        <Box
          sx={{
            display: [`${isPurchase ? 'none' : 'flex'}`, 'flex'],
            p: { xs: '18px', md: '24px 120px' },
          }}
          justifyContent="space-between"
          alignItems="center"
        >
          <Box
            onClick={() => router.push('/')}
            height={['29.46px', '48px']}
            width={['216px', '355px']}
            position="relative"
          >
            <Image src="/images/singlife-investa.svg" layout="fill" />
          </Box>
          <Typography display={{ xs: 'none', sm: 'unset' }} variant="You're now covered w">
            Cash for Income Loss
          </Typography>
        </Box>
        {isPurchase && (
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
              bgcolor="var(--N300)"
            >
              <Box display="flex" gap="4px" alignItems="center">
                <ChevronLeftIcon onClick={() => router.back()} fontSize="medium" />
                <Typography variant="Title">Cash for Income Loss</Typography>
              </Box>
              <Image src="/images/singlife.svg" layout="intrinsic" height={24} width={77.4} />
            </Box>
          </Stack>
        )}
      </AppBar>
      <Box
        ref={boxRef}
        sx={{
          width: '48px',
          minHeight: '48px',
          bgcolor: 'var(--SL-R700)',
          display: 'grid',
          placeContent: 'center',
          position: 'fixed',
          right: 0,
          bottom: 272,
          '&:hover': { cursor: 'pointer' },
          zIndex: 1,
        }}
        borderRadius="8px 0px 0px 8px"
      >
        <ArrowUpwardIcon
          sx={{ color: 'var(--N000)' }}
          onClick={() => scrollTo({ to: '#header' })}
        />
      </Box>
    </>
  );
}
