import { Box, Grid, Stack, Typography } from '@mui/material';
import Image from 'next/image';

const sections = [
  [
    '/images/value-for-money.svg',
    'Value for money',
    'Big on coverage but still easy on the money. You can get a personalized quote based on your lifestyle and needs.',
  ],
  [
    '/images/family.svg',
    'Monthly bounce back budget',
    'Ensure the coverage will be used to sustain your family’s lifestyle. We pay out benefits monthly as your family recovers.',
  ],
  [
    '/images/coverage.svg',
    'Comprehensive coverage',
    "We cover a wide range of causes and conditions, including ones that other insurance companies typically don't.",
  ],
  [
    '/images/easy-to-buy.svg',
    'Easy to buy and manage',
    'We know you value your time. You can buy this product and manage your policy with just a few taps.',
  ],
];

export default function MoreReasonsToBuy() {
  return (
    <Stack alignItems="center" pt={{ xs: '40px', md: '64px' }} pb="64px" px="24px">
      <Box maxWidth={1200} width="100%">
        <Typography variant="p.eyebrow">More Reasons to Buy</Typography>
        <Typography variant="h2" mt="16">
          Why get Cash for Income Loss?{' '}
        </Typography>
        <Grid
          sx={{ display: 'flex', mt: ['32px', null, '40px'] }}
          container
          rowSpacing="24px"
          columnSpacing="24px"
        >
          {sections.map((section) => {
            const [image, title, description] = section;
            return (
              <Grid display={['flex', null, 'unset']} gap="16px" item xs={12} md={3}>
                <Box
                  minHeight={{ xs: 93, md: 124 }}
                  minWidth={{ xs: 93, md: 124 }}
                  position="relative"
                >
                  <Image src={image} layout="fill" />
                </Box>
                <Box mt="20px">
                  <Typography variant="h4">{title}</Typography>
                  <Typography component="p" mt={['4px', null, '12px']} variant="p">
                    {description}
                  </Typography>
                </Box>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </Stack>
  );
}
