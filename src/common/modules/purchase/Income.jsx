import { NextButton } from '@common/components/buttons';
import StepLayout from '@common/layouts/StepLayout';
import { Typography } from '@mui/material';
import { useRouter } from 'next/router';

export default function Income() {
  const router = useRouter();

  return (
    <StepLayout
      footerButton={
        <NextButton
          mt={['24px', '32px']}
          onClick={() =>
            router.push({ query: { step: 'getting_you_a_personalized_quote', part: 1 } })
          }
        >
          CALCULATE MY PRICE
        </NextButton>
      }
      footerImage="/images/income.svg"
    >
      <Typography variant="h1" mt={['24px', '40px']}>
        That’s a wise choice! Now, let’s figure out how much you want to leave for your loved ones.
      </Typography>
    </StepLayout>
  );
}
