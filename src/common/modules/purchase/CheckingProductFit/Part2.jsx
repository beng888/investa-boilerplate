import { NextButton, YesNoButton } from '@common/components/buttons';
import ToggleButton from '@common/components/buttons/ToggleButton';
import StepLayout from '@common/layouts/StepLayout';
import { Typography } from '@mui/material';
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function Part2() {
  const router = useRouter();
  const [answer, setAnswer] = useState('');
  const goToNextPage = () => router.push({ query: { step: 'income' } });

  return (
    <StepLayout
      footerButton={
        <NextButton
          onClick={() => (answer === 'yes' ? goToNextPage() : null)}
          display={[null, 'none']}
        >
          NEXT
        </NextButton>
      }
      footerImage="/images/income.svg"
      mobileImage="/images/income-mob.svg"
    >
      <Typography variant="h1" mt={['24px', '32px']}>
        Do you want to replace your income in case you get disabled or pass away to ensure those who
        depend on you will still get financial support?{' '}
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
