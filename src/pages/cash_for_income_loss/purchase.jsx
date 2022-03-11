import { fetchUser } from '@store/user/user.slice';
import { wrapper } from 'src/store';
import Purchase from 'src/templates/CashForIncomeLoss/purchase.cfil';
// import {  useDispatch } from 'react-redux'

export const getServerSideProps = wrapper.getServerSideProps((store) => async ({ query }) => {
  // console.log('store state on the server before dispatch', store.getState());

  store.dispatch(fetchUser(query.userId));

  // console.log('store state on the server after dispatch', store.getState());

  //  http://localhost:3000?data='some-data'

  return {
    props: {}, // will be passed to the page component as props
  };
});

export default function PurchaseCFIL() {
  return <Purchase />;
}
