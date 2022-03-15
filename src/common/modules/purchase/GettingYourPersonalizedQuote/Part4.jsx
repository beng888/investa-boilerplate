import { NextButton } from '@common/components/buttons';
import StepLayout from '@common/layouts/StepLayout';
import { Typography } from '@mui/material';
import { useRouter } from 'next/router';

export default function Part4() {
  const router = useRouter();

  return (
    <StepLayout
      footerButton={
        <NextButton
          mt={['48px']}
          onClick={() =>
            router.push({ query: { step: 'getting_you_a_personalized_quote', part: 5 } })
          }
        >
          NEXT
        </NextButton>
      }
      footerImage="/images/mode-of-travel.svg"
    >
      <Typography mt={['24px', '40px']} variant="h1">
        How do you usually travel going to and from your workplace? Select the one that you use
        most.
      </Typography>
    </StepLayout>
  );
}
