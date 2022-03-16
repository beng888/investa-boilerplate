import { useEffect, useRef, useState } from 'react';
import { Box, LinearProgress, Stack, Typography } from '@mui/material';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Image from 'next/image';

export default function HowItWorks() {
  const containerRef = useRef(null);
  const wrapperRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(wrapperRef.current, {
      x: -(containerRef.current.scrollWidth - window.innerWidth),
      scrollTrigger: {
        onUpdate: ({ progress }) => setScrollProgress(progress.toFixed(3)),
        trigger: containerRef.current,
        pin: true,
        scrub: 1,
        snap: 1,
        end: () => `+=${wrapperRef.current.scrollWidth - window.innerWidth}`,
      },
    });
  }, []);

  const progressStyle = {
    mt: ['32px', '49px'],
    height: 7,
    bgcolor: 'rgba(245, 245, 245, 0.3)',
    borderRadius: '100px',
    '& .MuiLinearProgress-barColorPrimary': {
      bgcolor: 'var(--N100)',
    },
    '& .MuiLinearProgress-bar': {
      transition: 'transform 0.1s linear',
    },
  };

  return (
    <Box>
      <Stack
        ref={containerRef}
        bgcolor="var(--SL-R500)"
        minHeight="100vh"
        px={[' 24px', ' 120px']}
        pt={['40px', ' 64px']}
        pb={['64px', ' 70px']}
      >
        <Typography variant="h2" color="var(--N000)">
          How it works
        </Typography>
        <Box ref={wrapperRef} flexGrow={1} mt={['32px', '40px']}>
          <Box display="flex" gap="24px" height="100%" alignItems="center">
            {[1, 2, 3, 4, 5, 6].map((arr) => (
              <Box
                key={arr}
                sx={{
                  minWidth: ['275px', '340px'],
                  height: ['379px', '497px'],
                  bgcolor: 'var(--N100)',
                  borderRadius: '10px',
                  p: '29px',
                }}
              >
                <Box fontWeight={600} fontSize="24px" lineHeight="29px">
                  {arr}
                </Box>
                <Box
                  sx={{ transform: 'translateX(-31.5px)', position: 'relative', mt: '18px' }}
                  height={['150px', '215px']}
                  width={['150px', '215px']}
                >
                  <Image src="/images/how-it-works-1.svg" layout="fill" priority />
                </Box>
                <Box
                  sx={{
                    fontWeight: 600,
                    fontSize: ['17.5px', '22px'],
                    lineHeight: ['24px', '28px'],
                  }}
                  mt="18px"
                >
                  You Buy Cash for Income Loss today for Php XXX
                </Box>
                <Box
                  sx={{
                    fontWeight: 400,
                    fontSize: ['11.2px', '14px'],
                    lineHeight: ['14.73px', '18px'],
                  }}
                  mt="18px"
                >
                  *Quote for a 30 y.o. in excellent health, drives to and works in office, earns
                  P30,000/month
                </Box>
              </Box>
            ))}
            <Box minWidth={['24px', '120px']} visibility="hidden">
              a
            </Box>
          </Box>
        </Box>
        <LinearProgress
          value={scrollProgress * 100}
          variant="determinate"
          sx={{ ...progressStyle }}
        />
      </Stack>
    </Box>
  );
}
