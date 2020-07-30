import Link from 'next/link';
import posts from '../posts.json';

export default function Home(): JSX.Element {
  return (
    <>
      {posts.posts.map((post) => {
        const postDate = new Date(post.date);
        const postYear = postDate.getFullYear();
        return (
          <Link key={post.id} href={`/${postYear}/${post.id}`}>
            <a>{post.title}</a>
          </Link>
        );
      })}
    </>
  );
}
