import { NextButton } from '@common/components/buttons';
import StepLayout from '@common/layouts/StepLayout';
import { Typography } from '@mui/material';
import { useRouter } from 'next/router';

export default function Part7() {
  const router = useRouter();

  return (
    <StepLayout
      footerButton={
        <NextButton mt={['48px']} onClick={() => router.push({ query: { step: 'beneficiary' } })}>
          GET THIS PLAN
        </NextButton>
      }
      footerImage="/images/work-environment.svg"
    >
      <Typography mt={['24px', '40px']} variant="h1">
        Yay! You’re qualified for a lower price because you’re in tip-top shape!
      </Typography>
    </StepLayout>
  );
}
