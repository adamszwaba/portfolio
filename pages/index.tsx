import { GetStaticProps } from 'next';
import NextLink from 'next/link';
import Image from 'next/image';

type ArticleMetaData = {
  title: string;
  author: string;
  thumbnail: string;
  excerpt: string;
  slug: string;
  createdAt: string;
};

type IStaticProps = {
  blogPosts: Record<string, Array<ArticleMetaData>>;
};

export default function Home({ blogPosts }: IStaticProps) {
  return (
    <div className="grid grid-cols-5 gap-4">
      {Object.values(blogPosts).map((yearData) =>
        yearData.map((post) => (
          <div className="col-span-5">
            <Image src={post.thumbnail} width="300" height="200" alt={post.title} />
            <div className="px-2 py-4">
              <h1>{post.title}</h1>
              <p className="truncate overflow-hidden text-ellipsis whitespace-nowrap max-h-40">
                {post.excerpt}
              </p>
              <NextLink href={`/blog/${post.slug}`} className="mt-4 hover:underline cursor-pointer">
                Read the article
              </NextLink>
            </div>
          </div>
        )),
      )}
    </div>
  );
}

export const getStaticProps: GetStaticProps<IStaticProps> = async (context) => {
  return {
    props: {
      blogPosts: {
        2022: [
          {
            slug: 'co-dalej-czyli-next-js',
            title: 'Co dalej, czyli Next.js',
            author: 'Adam Szwaba',
            thumbnail: 'https://picsum.photos/200/300',
            excerpt:
              'Jest taki mały podziemny ruch w Code and Pepper, w którym cicho (ale odpowiednio głośno, żeby każdy dookoła usłyszał) szepczemy o Next.js. Szepczemy, bo w sumie nam się podoba, bo to framework of choice wielu z nas, do tego stopnia, że z chęcią byśmy coś w nim napisali bardziej oficjalnie niż w ramach riserczu. No to teraz przyszedł czas, że mogę wepchnąć się kulturalnie, ale łokciem i opowiedzieć trochę, co to w ogóle jest i czemu nas to tak bardzo jara.',
            createdAt: new Date('12-01-2022').toDateString(),
          },
        ],
      },
    },
  };
};
