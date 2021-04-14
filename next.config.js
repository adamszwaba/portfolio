const nextMdx = require('@next/mdx');
const remarkCodeTitles = require('remark-code-titles');
const remarkSlug = require('remark-slug');
const mdxPrism = require('mdx-prism');

const withMDX = nextMdx({
  options: {
    extension: /\.mdx$/,
    remarkPlugins: [remarkCodeTitles, remarkSlug],
    rehypePlugins: [mdxPrism],
  },
});

module.exports = withMDX({
  future: {
    webpack5: false,
  },
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx', 'md'],
  webpack(config, options) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
});
