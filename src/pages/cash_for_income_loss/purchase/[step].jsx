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

const stepsKeys = Object.keys(steps);

export async function getServerSideProps({ query }) {
  if (!stepsKeys.includes(query.step)) {
    return {
      notFound: true,
    };
  }

  return {
    props: {},
  };
}

export default function Purchase() {
  const { query } = useRouter();
  const { setSteps } = useStepperContext();

  useEffect(() => {
    setSteps(stepsKeys);
  }, [setSteps]);

  return steps[query.step];
}

Purchase.PageLayout = StepperLayout;
