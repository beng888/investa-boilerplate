import { NextButton } from '@common/components/buttons';
import StepLayout from '@common/layouts/StepLayout';
import { Typography } from '@mui/material';
import { useRouter } from 'next/router';

export default function Part1() {
  const router = useRouter();

  return (
    <StepLayout
      footerButton={
        <NextButton
          mt={['48px']}
          onClick={() =>
            router.push({ query: { step: 'getting_you_a_personalized_quote', part: 2 } })
          }
        >
          GET THIS PLAN
        </NextButton>
      }
      footerImage="/images/income.svg"
    >
      <Typography mt={['16px', '40px']} variant="h1">
        Yay! You’re qualified for a lower price because you’re in tip-top shape!{' '}
      </Typography>
    </StepLayout>
  );
}
