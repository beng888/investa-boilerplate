import { NextButton } from '@common/components/buttons';
import StepLayout from '@common/layouts/StepLayout';
import { Typography } from '@mui/material';
import { useRouter } from 'next/router';

export default function Beneficiary() {
  const router = useRouter();

  return (
    <StepLayout
      footerButton={
        <NextButton
          mt={['48px']}
          onClick={() => router.push({ query: { step: 'review_and_confirm' } })}
        >
          NEXT
        </NextButton>
      }
      footerImage="/images/beneficiary.svg"
    >
      <Typography mt={['24px', '40px']} variant="h1">
        Your policy benefits are currently paid in this standard order.
      </Typography>
    </StepLayout>
  );
}
