/** @type {import('next').NextConfig} */
// const { PHASE_DEVELOPMENT_SERVER, PHASE_PRODUCTION_BUILD } = require('next/constants');

module.exports = async () => {
  // module.exports = async (phase) => {
  //   const isDev = phase === PHASE_DEVELOPMENT_SERVER;
  //   const isProd = phase === PHASE_PRODUCTION_BUILD && process.env.STAGING !== '1';
  //   const isStaging = phase === PHASE_PRODUCTION_BUILD && process.env.STAGING === '1';

  const nextConfig = {
    reactStrictMode: true,
    redirects: async () => {
      return [
        {
          source: '/',
          destination: '/cash_for_income_loss',
          permanent: true,
        },
        {
          source: '/cash_for_income_loss/purchase',
          destination: '/cash_for_income_loss/purchase/your_profile',
          permanent: true,
        },
      ];
    },
  };
  return nextConfig;
};
