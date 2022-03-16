import { Box, Grid, Stack, Typography } from '@mui/material';
import Image from 'next/image';

const sections = [
  {
    image: '/images/value-for-money.svg',
    title: 'Value for money',
    description:
      'Big on coverage but still easy on the money. You can get a personalized quote based on your lifestyle and needs.',
  },
  {
    image: '/images/family.svg',
    title: 'Monthly bounce back budget',
    description:
      'Ensure the coverage will be used to sustain your family’s lifestyle. We pay out benefits monthly as your family recovers.',
  },
  {
    image: '/images/coverage.svg',
    title: 'Comprehensive coverage',
    description:
      "We cover a wide range of causes and conditions, including ones that other insurance companies typically don't.",
  },
  {
    image: '/images/easy-to-buy.svg',
    title: 'Easy to buy and manage',
    description:
      'We know you value your time. You can buy this product and manage your policy with just a few taps.',
  },
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
            const { image, title, description } = section;
            return (
              <Grid key={title} display={['flex', null, 'grid']} item xs={12} md={3}>
                <Box
                  minHeight={{ xs: 93, md: 124 }}
                  minWidth={{ xs: 93, md: 124 }}
                  position="relative"
                >
                  <Image src={image} layout="fill" priority />
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
