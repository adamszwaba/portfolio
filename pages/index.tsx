import { GetStaticProps } from 'next';
import NextLink from 'next/link';
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
    <Grid gridTemplateColumns="repeat(5, 1fr)" templateRows="repeat(auto, 1fr)" gap={10}>
      {Object.values(blogPosts).map((yearData) =>
        yearData.map((post) => (
          <>
            <GridItem colspan={2} rowSpan={2}>
              <Box>
                <Box width="100%" pt="56.5%" backgroundImage={`url(${post.thumbnail})`}></Box>
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
            <GridItem>
              <Box maxWidth="96">
                <Box width="100%" pt="56.5%" backgroundImage={`url(${post.thumbnail})`}></Box>
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
            <GridItem>
              <Box maxWidth="96">
                <Box width="100%" pt="56.5%" backgroundImage={`url(${post.thumbnail})`}></Box>
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
              <Box maxWidth="96">
                <Box width="100%" pt="56.5%" backgroundImage={`url(${post.thumbnail})`}></Box>
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
          </>
        )),
      )}
    </Grid>
  );
}

export const getStaticProps: GetStaticProps<IStaticProps> = async (context) => {
  return {
    props: {
      blogPosts: {
        2020: [
          {
            slug: 'first-post',
            title: 'first post',
            author: 'Adam Szwaba',
            thumbnail: 'https://picsum.photos/200/300',
            excerpt:
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint quam at ad dolores minus. Dolores, quod? Aliquam voluptatem earum nam, blanditiis hic dolores veniam nostrum ullam saepe sequi, inventore aliquid?',
            createdAt: new Date().toDateString(),
          },
        ],
      },
    },
  };
};
