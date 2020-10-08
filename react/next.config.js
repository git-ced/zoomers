/**
 * Zoooomers
 *
 * NOTE: To whomever shall follow our work, behold our art.
 * This software was Made & Crafted with love.
 * She was written to read like poetry.
 * Treat her well.
 * And when you touch this source code,
 * leave your signature below to show that you were part of its legacy.
 *
 * @author Prince Neil Cedrick Castro
 */
require('dotenv').config();

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

function pipe(value) {
  return (...transform) => transform.reduce((acc, x) => x(acc), value);
}

const initialConfigDevelopment = {
  env: {
    ZOOM_API_KEY: process.env.ZOOM_API_KEY,
    ZOOM_API_SECRET: process.env.ZOOM_API_SECRET,
  },
};

const initialConfigProduction = {
  env: {
    ZOOM_API_KEY: process.env.ZOOM_API_KEY_PRODUCTION,
    ZOOM_API_SECRET: process.env.ZOOM_API_SECRET_PRODUCTION,
  },
};

const initialConfig = {
  ...(
    process.env.DB_ENV !== 'production'
      ? initialConfigDevelopment
      : initialConfigProduction
  ),
  experimental: {
    productionBrowserSourceMaps: true,
  },
  distDir: 'build',
};

module.exports = pipe(initialConfig)(
  withBundleAnalyzer,
);
