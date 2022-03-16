import { Box, Grid, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import { Fragment } from 'react';

const sections = [
  [
    'You will get',
    [
      {
        image: '/images/monthly-cash-benefit.svg',
        title: 'Monthly Cash Benefit',
        description: 'replacing your monthly income for the next 24, 36, or 60 months',
      },
      {
        image: '/images/cash-bonus.svg',
        title: 'Cash Bonus',
        description:
          'at the end of your monthly cash payout as added help for you and your loved ones.',
      },
    ],
  ],
  [
    'In case you',
    [
      {
        image: '/images/get-disabled.svg',
        title: 'Get disabled',
        description: 'due to an accident or illness',
      },
      {
        image: '/images/pass-away.svg',
        title: 'Pass away',
        description: 'due to an accident or illness',
      },
    ],
  ],
];

export default function Coverage() {
  return (
    <Stack
      alignItems="center"
      id="coverage"
      sx={{ pt: { xs: '40px', md: '64px' }, pb: '64px', px: '24px', bgcolor: 'var(--N100)' }}
    >
      <Box maxWidth={1200} width="100%">
        <Typography variant="p.eyebrow">coverage</Typography>
        <Typography variant="h2" mt="16px">
          Keep the cash flowing when you can&apos;t keep going.
        </Typography>
        <Typography component="p" variant="p" mt="8px">
          Your income is your greatest asset—but it&apos;s not guaranteed. Buy Cash for Income Loss
          to replace your monthly income in case of an accident or illness that makes you unfit to
          work.
        </Typography>

        {sections.map((section) => {
          const [title, contents] = section;
          return (
            <Fragment key={title}>
              <Typography variant="h3" mt={['32px', null, '40px']}>
                {title}
              </Typography>
              <Grid mt={['32px', null, '24px']} container rowSpacing="24px" columnSpacing="24px">
                {contents.map((content) => (
                  <Grid
                    key={content.title}
                    sx={{ alignItems: 'center', display: 'flex', gap: ['16px', null, '24px'] }}
                    item
                    xs={12}
                    sm={6}
                  >
                    <Box
                      minHeight={{ xs: 93, md: 148 }}
                      minWidth={{ xs: 93, md: 148 }}
                      position="relative"
                    >
                      <Image src={content.image} layout="fill" />
                    </Box>
                    <Box>
                      <Typography variant="h4">{content.title}</Typography>
                      <Typography component="p" variant="p" mt="4px">
                        {content.description}{' '}
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Fragment>
          );
        })}
      </Box>
    </Stack>
  );
}
