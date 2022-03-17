import { Box, Grid, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const sections = [
  {
    icon: '/icons/product-details.svg',
    title: 'Product Details',
  },
  {
    icon: '/icons/frequently-asked-questions.svg',
    title: 'Frequently Asked Questions',
  },
  {
    icon: '/icons/exclusions-and-limitations.svg',
    title: 'Exclusions and Limitations',
  },
  {
    icon: '/icons/contact-singlife.svg',
    title: 'Contact Singlife',
  },
];

export default function Footer() {
  return (
    <Stack alignItems="center" pt={{ xs: '40px', md: '64px' }} pb={['64px', '200px']} px="24px">
      <Box maxWidth={1200} width="100%">
        <Typography variant="h2" mt="16">
          Have more questions?
        </Typography>
        <Typography variant="p" component="p" mt="16">
          We’re here to help.
        </Typography>

        <Grid container mt="32px" columnSpacing="24px" rowSpacing="16px">
          {sections.map((section) => (
            <Grid item xs={6}>
              <Box
                sx={{ p: '16px 24px', display: 'flex', alignItems: 'center', gap: '16px' }}
                border="1px solid var(--N300)"
                borderRadius="4px"
              >
                <Image src={section.icon} height={24} width={24} layout="intrinsic" />
                <Typography flexGrow={1} variant="Label">
                  {section.title}
                </Typography>
                <Box color="var(--SL-R700)" display="flex" alignItems="center">
                  <Typography fontSize="11.2px" fontWeight={600} lineHeight="18px">
                    VIEW
                  </Typography>
                  <ChevronRightIcon fontSize="small" />
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Stack>
  );
}
