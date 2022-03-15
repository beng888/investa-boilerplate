import { NextButton, ToggleButton } from '@common/components/buttons';
import StepLayout from '@common/layouts/StepLayout';
import { Typography } from '@mui/material';
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function Part3() {
  const router = useRouter();
  const [answer, setAnswer] = useState('');

  return (
    <StepLayout
      footerButton={
        <NextButton
          mt={['48px']}
          onClick={() =>
            router.push({ query: { step: 'getting_you_a_personalized_quote', part: 4 } })
          }
        >
          NEXT
        </NextButton>
      }
      footerImage="/images/medical-checkup.svg"
    >
      <Typography mt={['16px', '40px']} variant="h1">
        How many immediate family members do you have who passed away or stopped working before age
        55 due to heart disease, stroke, or cancer?
      </Typography>
      <ToggleButton
        value={answer}
        onChange={(e, newVal) => newVal && setAnswer(newVal)}
        display={['flex', 'none']}
        options={[0, 1, 2]}
      />
    </StepLayout>
  );
}
