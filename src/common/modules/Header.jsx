import { AppBar, Box, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import Link from 'next/link';
import { useRouter } from 'next/router';
// import { useDispatch } from 'react-redux';
// import { useEffect } from 'react';
// import { openModal } from '@store/app/app.slice';

export default function Header() {
  const router = useRouter();
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
      sx={{ position: ['sticky', 'relative'], height: { sm: 96 }, p: { sm: '24px 120px' } }}
    >
      <Box sx={{ display: ['none', 'flex'] }} justifyContent="space-between" alignItems="center">
        <Link href="/">
          <a>
            <Image src="/images/singlife-investa.svg" layout="intrinsic" height={48} width={355} />
          </a>
        </Link>
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
            <ChevronLeftIcon onClick={() => router.back()} fontSize="medium" />
            <Typography variant="Title">Cash for Income Loss</Typography>
          </Box>
          <Image src="/images/singlife.svg" layout="intrinsic" height={24} width={77.4} />
        </Box>
      </Stack>
    </AppBar>
  );
}
