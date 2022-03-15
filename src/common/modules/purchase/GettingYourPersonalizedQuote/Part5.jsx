import { NextButton } from '@common/components/buttons';
import StepLayout from '@common/layouts/StepLayout';
import { Typography } from '@mui/material';
import { useRouter } from 'next/router';

export default function Part5() {
  const router = useRouter();

  return (
    <StepLayout
      footerButton={
        <NextButton
          mt={['48px']}
          onClick={() =>
            router.push({ query: { step: 'getting_you_a_personalized_quote', part: 6 } })
          }
        >
          NEXT
        </NextButton>
      }
      footerImage="/images/work-environment.svg"
    >
      <Typography mt={['24px', '40px']} variant="h1">
        How would you describe your current work?{' '}
      </Typography>
    </StepLayout>
  );
}
