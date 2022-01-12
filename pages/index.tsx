import { GetStaticProps } from 'next';
import NextLink from 'next/link';
import Image from 'next/image';
import { Box, Heading, Text, Link, Grid, GridItem } from '@chakra-ui/react';

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
    <Grid templateColumns="repeat(5, 1fr)" templateRows="repeat(auto, 1fr)" gap={10}>
      {Object.values(blogPosts).map((yearData) =>
        yearData.map((post) => (
          <GridItem colSpan={5}>
            <Box>
              <Image src={post.thumbnail} width="300" height="200" />
              <Box p={[2, 4]}>
                <Heading variant="h1">{post.title}</Heading>
                <Text noOfLines={4}>{post.excerpt}</Text>
                <Box mt="4">
                  <NextLink href={`/blog/${post.slug}`} passHref>
                    <Link>Read the article</Link>
                  </NextLink>
                </Box>
              </Box>
            </Box>
          </GridItem>
        )),
      )}
    </Grid>
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
