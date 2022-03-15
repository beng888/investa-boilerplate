import StepperLayout, { useStepperContext } from '@common/layouts/StepperLayout';
import { useRouter } from 'next/router';
import {
  Beneficiary,
  CheckingProductFit,
  Eligibility,
  GettingYourPersonalizedQuote,
  Income,
  ReviewAndConfirm,
  Success,
  YourProfile,
} from '@common/modules/purchase';
import { useEffect } from 'react';

const steps = {
  your_profile: <YourProfile />,
  eligibility: <Eligibility />,
  checking_product_fit: <CheckingProductFit />,
  income: <Income />,
  getting_you_a_personalized_quote: <GettingYourPersonalizedQuote />,
  beneficiary: <Beneficiary />,
  review_and_confirm: <ReviewAndConfirm />,
  success: <Success />,
};

export default function Purchase() {
  const { query } = useRouter();
  const { setSteps } = useStepperContext();

  useEffect(() => {
    setSteps(Object.keys(steps));
  }, [setSteps]);

  return steps[query.step] || <YourProfile />;
}

Purchase.PageLayout = StepperLayout;
