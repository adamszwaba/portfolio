import Link from 'next/link';
import { frontMatter as blogPosts } from './**/*.mdx';

export default function Home() {
  return (
    <>
      {blogPosts.map((post) => {
        const slug = post.__resourcePath.replace('.mdx', '');
        return (
          <Link key={post.id} href={`/${slug}`}>
            <a>{post.title}</a>
          </Link>
        );
      })}
    </>
  );
}
