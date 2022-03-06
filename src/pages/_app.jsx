import PropTypes from 'prop-types';
// import { CacheProvider } from '@emotion/react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import Layout from '@common/components/layout';
// import createEmotionCache from '@common/utility/createEmotionCache';
import lightTheme from '../styles/theme/lightTheme';
import '../styles/globals.css';

// const clientSideEmotionCache = createEmotionCache();

function MyApp(props) {
  const {
    Component,
    // emotionCache = clientSideEmotionCache,
    pageProps,
  } = props;

  return (
    // <CacheProvider value={emotionCache}>
    <Layout>
      <ThemeProvider theme={lightTheme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </Layout>
    // </CacheProvider>
  );
}

export default MyApp;
MyApp.defaultProps = {
  emotionCache: {},
};

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.instanceOf(Object),
  pageProps: PropTypes.instanceOf(Object).isRequired,
};
