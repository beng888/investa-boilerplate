import PropTypes from 'prop-types';
import Head from 'next/head';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider } from '@emotion/react';
import Theme from 'src/styles/theme';
import createEmotionCache from 'src/helpers/createEmotionCache';
import Layout from '@common/layouts/MainLayout';
import '../styles/globals.css';
import { useState } from 'react';
import setGlobalStyles from 'src/styles/setGlobalStyles';

//* Client-side cache shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export default function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const [theme] = useState(Theme);

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        {setGlobalStyles(theme)}
        <CssBaseline />
        <Layout>
          <Component {...pageProps} />
        </Layout>
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
