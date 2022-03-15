import { NextButton } from '@common/components/buttons';
import StepLayout from '@common/layouts/StepLayout';
import { Typography } from '@mui/material';
import { useRouter } from 'next/router';

export default function YourProfile() {
  const router = useRouter();

  return (
    <StepLayout
      footerButton={
        <NextButton
          mt={['16px', '64px']}
          onClick={() => router.push({ query: { step: 'eligibility' } })}
        >
          Confirm
        </NextButton>
      }
      footerImage="/images/eligibility.svg"
    >
      <Typography mt={['32px']} variant="h1">
        We need to verify your identity first.
      </Typography>
    </StepLayout>
  );
}
