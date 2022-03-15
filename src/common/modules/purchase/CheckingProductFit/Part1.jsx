import { NextButton, ToggleButton, YesNoButton } from '@common/components/buttons';
import StepLayout from '@common/layouts/StepLayout';
import { Typography } from '@mui/material';
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function Part2() {
  const router = useRouter();
  const [answer, setAnswer] = useState('');
  const goToNextPage = () => router.push({ query: { step: 'checking_product_fit', part: 2 } });

  const handleReject = () => {};

  return (
    <StepLayout
      footerButton={
        <NextButton
          onClick={() => (answer === 'yes' ? goToNextPage() : handleReject())}
          display={[null, 'none']}
        >
          NEXT
        </NextButton>
      }
      footerImage="/images/checking-product-fit.svg"
      mobileImage="/images/checking-product-fit-mob.svg"
    >
      <Typography variant="h1" mt={['24px', '32px']}>
        Do you have other people, like your family, who depend on the income that you earn?{' '}
      </Typography>
      <YesNoButton
        mt="40px"
        display={['none', 'flex']}
        onClickYes={() => goToNextPage()}
        onClickNo={() => {}}
      />
      <ToggleButton
        mt="24px"
        value={answer}
        onChange={(e, newVal) => newVal && setAnswer(newVal)}
        display={['flex', 'none']}
        options={['yes', 'no']}
      />
    </StepLayout>
  );
}
