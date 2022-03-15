import { Box, Stack } from '@mui/material';
import Image from 'next/image';
import PropTypes from 'prop-types';

export default function StepLayout({ footerButton, footerImage, mobileImage, children, ...props }) {
  return (
    <>
      {mobileImage && (
        <Box display={[null, 'none']} mt="24px">
          <Image priority src={mobileImage} layout="responsive" height={120} width={350} />
        </Box>
      )}
      <Stack sx={{ mb: ['24px', 'unset'], mx: '24px', flexGrow: 1, ...props }}>
        <Box maxWidth={792} mx="auto">
          {children}
        </Box>

        <Box mt={['auto', 'unset']} pt={['32px', 'unset']} justifyContent="center" display="flex">
          {footerButton}
        </Box>

        {footerImage && (
          <Stack mt="auto" sx={{ display: ['none', 'flex'] }}>
            <Image src={footerImage} height={320} width={1200} layout="intrinsic" />
          </Stack>
        )}
      </Stack>
    </>
  );
}

StepLayout.defaultProps = {
  footerImage: null,
  mobileImage: null,
};

StepLayout.propTypes = {
  children: PropTypes.node.isRequired,
  mobileImage: PropTypes.string,
  footerButton: PropTypes.node.isRequired,
  footerImage: PropTypes.string,
};
