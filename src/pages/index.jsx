// import { wrapper } from 'src/store';
// import { fetchUser, selectUser } from '@store/user.slice';
// import { useSelector } from 'react-redux';

// export const getServerSideProps = wrapper.getServerSideProps((store) => async ({ query }) => {
//   await store.dispatch(fetchUser('60d0fe4f5311236168a109ca'));

//   return {
//     props: {}, // will be passed to the page component as props
//   };
// });

export default function Home() {
  // const user = useSelector(selectUser);
  // console.log('%c⧭', 'color: #735656', user);

  return <h1>Index Page</h1>;
}
