import Head from 'next/head';
import Link from 'next/link';
import { Stack } from '@mui/material';

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

      <Stack component="h1" textAlign="center">
        CashForIncomeLoss
        <Link href={{ pathname: '/cash_for_income_loss/purchase/your_profile' }}>
          <a style={{ color: 'blue', marginTop: 20 }}>PURCHASE</a>
        </Link>
      </Stack>
    </>
  );
}
