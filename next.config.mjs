import nextMdx from '@next/mdx';
import remarkCodeTitles from 'remark-code-titles';
import rehypeHighlight from 'rehype-highlight';
import rehypeSlug from 'rehype-slug';
import remarkFrontmatter from 'remark-frontmatter';

const withMDX = nextMdx({
  options: {
    extension: /\.mdx$/,
    remarkPlugins: [remarkCodeTitles, remarkFrontmatter],
    rehypePlugins: [rehypeHighlight, rehypeSlug],
    providerImportSource: '@mdx-js/react',
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx', 'md'],
  images: {
    domains: ['picsum.photos'],
  },
};

export default withMDX(nextConfig);
