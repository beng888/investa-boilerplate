import StepperLayout from '@common/layouts/StepperLayout';
import { wrapper } from 'src/store';
import { setUserData } from 'src/store/user/user.slice';

export const getServerSideProps = wrapper.getServerSideProps((store) => async ({ query }) => {
  // console.log('store state on the server before dispatch', store.getState());
  store.dispatch(setUserData('lawrence'));
  // console.log('store state on the server after dispatch', store.getState());

  const data = query.data || 'default data';
  //  http://localhost:3000?data='some-data'

  return {
    props: {
      data,
    }, // will be passed to the page component as props
  };
});

export default function Home() {
  return <StepperLayout>asd</StepperLayout>;
}
