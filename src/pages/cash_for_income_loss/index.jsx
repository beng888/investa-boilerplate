import Head from 'next/head';
import {
  Coverage,
  Hero,
  HowItWorks,
  MoreReasonsToBuy,
  TrustBox,
} from '@common/modules/discover-and-buy';
import { Box } from '@mui/material';

// import { wrapper } from 'src/store';
// import { fetchUser, selectUser } from '@store/user.slice';
// import { useSelector } from 'react-redux';

// export const getServerSideProps = wrapper.getServerSideProps((store) => async ({ query }) => {
//   await store.dispatch(fetchUser('60d0fe4f5311236168a109ca'));

//   return {
//     props: {}, // will be passed to the page component as props
//   };
// });

export default function CashForIncomeLoss() {
  // const user = useSelector(selectUser);
  // console.log('%c⧭', 'color: #735656', user);
  return (
    <>
      <Head>
        <title>Cash For Income Loss</title>
      </Head>

      <Hero />
      <Coverage />
      <HowItWorks />
      <MoreReasonsToBuy />
      <TrustBox />
      <Box height="100vh" />
    </>
  );
}
