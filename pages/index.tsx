import { GetStaticProps } from 'next';
import NextLink from 'next/link';
import { ArticleMetaData, getArticlesData } from 'src/features/articles/helpers';
import Image from 'next/image';

type IStaticProps = {
  postsData: Array<ArticleMetaData>;
};

export default function Home({ postsData }: IStaticProps) {
  return (
    <div className="container ">
      <div className="grid grid-flow-col grid-cols-7 mt-12">
        <div className="col-span-4">
          <h2 className="my-0">Hi, my name is Adam Szwaba.</h2>
          <p className="leading-tight text-opacity-60">
            I&apos;m a fullstack dev who happens to write every now and again.
          </p>
        </div>
        <div className="col-span-1"></div>
      </div>
      <h2 className="my-2">Articles</h2>
      <hr />
      <div className="grid grid-cols-5 gap-4">
        {postsData.map((post) => (
          <div
            className="px-2 py-2 col-span-5 gap-6 rounded-md bg-slate-100 border-slate-700 border-[1px] border-opacity-10 shadow-sm grid grid-cols-7 grid-rows-6"
            key={post.slug}
          >
            <div className="col-span-4 row-span-6 ml-2 mt-2">
              <h3 className="mt-0">{post.title}</h3>
              <p>{post.description}</p>
              <NextLink href={`/blog/${post.slug}`} className="mt-4 hover:underline cursor-pointer">
                Read the article
              </NextLink>
            </div>
            <div className="col-span-1" />
            <div className="col-span-2 relative row-span-6 h-0 pt-[117.5%] m-4">
              <Image
                className="my-0 rounded-xl"
                fill={true}
                src={post.thumbnail}
                alt={post.title}
              />
            </div>
          </div>
        ))}
      </div>
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
