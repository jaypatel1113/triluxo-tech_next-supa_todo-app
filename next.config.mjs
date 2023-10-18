/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
await import("./src/env.mjs");

/** @type {import("next").NextConfig} */
const baseConfig = {
    reactStrictMode: true,

    i18n: {
        locales: ["en"],
        defaultLocale: "en",
    },
};

const developmentConfig = {
    // Enable type checking and linting during development.
    typescript: {
        ignoreBuildErrors: false,
    },
    eslint: {
        ignoreDuringBuilds: false,
    },
    swcMinify: true,
};

const isProduction = process.env.NODE_ENV === 'production';
const config = isProduction ? { ...baseConfig } : { ...baseConfig, ...developmentConfig };

export default config;

