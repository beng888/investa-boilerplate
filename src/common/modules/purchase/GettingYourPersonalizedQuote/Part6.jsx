import { NextButton } from '@common/components/buttons';
import StepLayout from '@common/layouts/StepLayout';
import { Typography } from '@mui/material';
import { useRouter } from 'next/router';

export default function Part6() {
  const router = useRouter();

  return (
    <StepLayout
      footerButton={
        <NextButton
          mt={['48px']}
          onClick={() =>
            router.push({ query: { step: 'getting_you_a_personalized_quote', part: 7 } })
          }
        >
          NEXT
        </NextButton>
      }
      footerImage="/images/work-environment.svg"
    >
      <Typography mt={['24px', '40px']} variant="h1">
        We got your answers! One last look before proceeding.
      </Typography>
    </StepLayout>
  );
}
