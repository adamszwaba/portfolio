import { GetStaticProps } from 'next';
import NextLink from 'next/link';
import Image from 'next/image';
import { ArticleMetaData, getArticlesData } from 'src/features/articles/helpers';

type IStaticProps = {
  postsData: Array<ArticleMetaData>;
};

export default function Home({ postsData }: IStaticProps) {
  console.log(postsData);
  return (
    <div className="grid grid-cols-5 gap-4">
      {postsData.map((post) => (
        <div className="col-span-5" key={post.slug}>
          <Image src={post.thumbnail} width="300" height="200" alt={post.title} />
          <div className="px-2 py-4">
            <h1>{post.title}</h1>
            <p className="truncate overflow-hidden text-ellipsis whitespace-nowrap max-h-40">
              {post.description}
            </p>
            <NextLink href={`/blog/${post.slug}`} className="mt-4 hover:underline cursor-pointer">
              Read the article
            </NextLink>
          </div>
        </div>
      ))}
    </div>
  );
}

export const getStaticProps: GetStaticProps<IStaticProps> = async (context) => {
  const posts = await getArticlesData();
  return {
    props: {
      postsData: posts,
    },
  };
};
