import PropTypes from 'prop-types';
import Head from 'next/head';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider } from '@emotion/react';
import Theme from 'src/styles/theme';
import createEmotionCache from 'src/helpers/createEmotionCache';
import MainLayout from '@common/layouts/MainLayout';
import '../styles/globals.css';
import { useState } from 'react';
import setGlobalStyles from 'src/styles/setGlobalStyles';
import { wrapper } from 'src/store';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchUser, selectUser } from '@store/user/user.slice';

//* Client-side cache shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const [theme] = useState(Theme);

  // const user = useSelector(selectUser);
  // console.log('%c⧭', 'color: red', user);

  // const dispatch = useDispatch();
  // useEffect(() => {
  //   const fetchData = async () => {
  //     await dispatch(fetchUser('60d0fe4f5311236168a109ca'));
  //   };

  //   fetchData()
  //     // make sure to catch any error
  //     .catch(console.error);
  // }, [dispatch]);

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        {setGlobalStyles(theme)}
        <CssBaseline />
        <MainLayout>
          {Component.PageLayout ? (
            <Component.PageLayout>
              <Component {...pageProps} />
            </Component.PageLayout>
          ) : (
            <Component {...pageProps} />
          )}
        </MainLayout>
      </ThemeProvider>
    </CacheProvider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  // eslint-disable-next-line react/require-default-props
  emotionCache: PropTypes.instanceOf(Object),
  pageProps: PropTypes.instanceOf(Object).isRequired,
};

export default wrapper.withRedux(MyApp);
