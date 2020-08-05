import NextLink from 'next/link';
import { frontMatter as blogPosts } from './**/*.mdx';
// import { Link } from '@material-ui/core';

export default function Home() {
  return (
    <>
      {
        // @ts-ignore
        blogPosts.map((post) => {
          const slug = post.__resourcePath.replace('.mdx', '');
          return (
            <NextLink key={post.timestamp} passHref href={`/${slug}`}>
              <a> {post.title}</a>
            </NextLink>
          );
        })
      }
    </>
  );
}
