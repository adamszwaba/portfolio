const withPlugins = require('next-compose-plugins');
const remarkCodeTitles = require('remark-code-titles');
const remarkSlug = require('remark-slug');
const mdxPrism = require('mdx-prism');

const mdx = require('next-mdx-enhanced')({
  defaultLayout: true,
  fileExtensions: ['mdx', 'md'],
  remarkPlugins: [remarkCodeTitles, remarkSlug],
  rehypePlugins: [mdxPrism],
});

const nextConfig = {
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx', 'md'],
  webpack(config, options) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
};

module.exports = withPlugins([mdx], nextConfig);
