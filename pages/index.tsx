import { GetStaticProps } from 'next';
import fs from 'fs';
import path from 'path';
import { Card, CardActions, CardContent, CardHeader, CardMedia, Link } from '@material-ui/core';
import NextLink from 'next/link';

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
  return Object.values(blogPosts).map((yearData) =>
    yearData.map((post) => (
      <Card>
        <CardMedia image={post.thumbnail}></CardMedia>
        <CardHeader title={post.title}></CardHeader>
        <CardContent>{post.excerpt}</CardContent>
        <CardActions>
          <NextLink href={`/blog/${post.slug}`} passHref>
            <Link>Read the article</Link>
          </NextLink>
        </CardActions>
      </Card>
    )),
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
