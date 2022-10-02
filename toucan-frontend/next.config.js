/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  // webpack: (cfg) => {
  //   cfg.module.rules.push(
  //     {
  //       test: /\.md$/,
  //       loader: 'frontmatter-markdown-loader',
  //       options: { mode: ['react-component'] }
  //     }
  //   )
  //   return cfg;
  // },
  // images: {
  //   domains: [],
  // },
  // async redirects() {
  //   return [
  //     {
  //       source: '/dashboard',
  //       destination: '/dashboard/something',
  //       permanent: true,
  //     },
  //   ]
  // }
}

module.exports = nextConfig
