import { NextButton } from '@common/components/buttons';
import StepLayout from '@common/layouts/StepLayout';
import { Typography } from '@mui/material';
import { useRouter } from 'next/router';

export default function Part2() {
  const router = useRouter();

  return (
    <StepLayout
      footerButton={
        <NextButton
          mt={['48px']}
          onClick={() =>
            router.push({ query: { step: 'getting_you_a_personalized_quote', part: 3 } })
          }
        >
          NEXT
        </NextButton>
      }
      footerImage="/images/scale.svg"
    >
      <Typography mt={['16px', '40px']} variant="h1">
        What is your height and weight?
      </Typography>
    </StepLayout>
  );
}
