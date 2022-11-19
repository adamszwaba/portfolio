import nextMdx from '@next/mdx';
import remarkCodeTitles from 'remark-code-titles';
import rehypeHighlight from 'rehype-highlight';
import rehypeSlug from 'rehype-slug';

const withMDX = nextMdx({
  options: {
    extension: /\.mdx$/,
    remarkPlugins: [remarkCodeTitles],
    rehypePlugins: [rehypeHighlight, rehypeSlug],
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
