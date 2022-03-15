import { NextButton } from '@common/components/buttons';
import StepLayout from '@common/layouts/StepLayout';
import { Typography } from '@mui/material';
import { useRouter } from 'next/router';

export default function Success() {
  const router = useRouter();

  return (
    <StepLayout
      footerButton={
        <NextButton mt={['48px']} onClick={() => router.push('/cash_for_income_loss/aftersales')}>
          View Policy
        </NextButton>
      }
      footerImage="/images/beneficiary.svg"
    >
      <Typography mt={['24px', '40px']} variant="h1">
        Cash for Income Loss{' '}
      </Typography>
    </StepLayout>
  );
}
