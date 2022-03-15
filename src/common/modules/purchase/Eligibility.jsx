import { NextButton, ToggleButton, YesNoButton } from '@common/components/buttons';
import StepLayout from '@common/layouts/StepLayout';
import { Typography } from '@mui/material';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { closeModal, openModal } from '@store/app.slice';

export default function Eligibility() {
  const [eligibility, setEligibility] = useState('');
  const router = useRouter();
  const dispatch = useDispatch();

  const goToNextPage = () => router.push({ query: { step: 'checking_product_fit' } });

  const handleReject = () => {
    dispatch(
      openModal({
        open: true,
        title: 'Sorry, we can’t insure you right now.',
        description: 'You need to be between 18 to 55 years old to get this product.',
        onClickYes: () => dispatch(closeModal()),
      }),
    );
  };

  return (
    <StepLayout
      footerButton={
        <NextButton
          onClick={() => (eligibility === 'yes' ? goToNextPage() : handleReject())}
          display={[null, 'none']}
        >
          NEXT
        </NextButton>
      }
      footerImage="/images/eligibility.svg"
      mobileImage="/images/eligibility-mob.svg"
    >
      <Typography variant="h1" mt={['24px', '32px']}>
        Are you currently a Filipino citizen or a foreigner who is a legal resident in the
        Philippines, between 18 to 55 years old?
      </Typography>
      <YesNoButton
        mt="32px"
        display={['none', 'flex']}
        onClickYes={() => goToNextPage()}
        onClickNo={() => handleReject()}
      />
      <ToggleButton
        value={eligibility}
        // ? newVal checks if value has changed
        //* onChange={(e, newVal) => setEligibility(e.target.value)}
        onChange={(e, newVal) => newVal && setEligibility(newVal)}
        // onChange={(e) => setEligibility(e.target.value)}
        display={['flex', 'none']}
        options={['yes', 'no']}
        mt="24px"
      />
    </StepLayout>
  );
}
