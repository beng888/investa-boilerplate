import { AppBar, Box, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { useRouter } from 'next/router';
// import { useDispatch } from 'react-redux';
// import { useEffect } from 'react';
// import { openModal } from '@store/app/app.slice';

export default function Header() {
  const router = useRouter();
  const isPurchase = router.pathname.includes('purchase');
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(
  //     openModal({
  //       open: true,
  //       content: <div>test</div>,
  //       yesLabel: 'yes',
  //       onClickYes: () => console.log('clicked yes'),
  //       noLabel: 'No',
  //       onClickNo: () => console.log('clicked no'),
  //     }),
  //   );
  // }, [dispatch]);

  return (
    <AppBar
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
  );
}
