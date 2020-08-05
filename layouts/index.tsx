import React, { ReactNode } from 'react';
import { NextSeo } from 'next-seo';
import { Container, Typography, createStyles, makeStyles } from '@material-ui/core';
import ImageCaption from 'components/ImageCaption';

type FrontMatter = {
  title: string;
  description: string;
  timestamp: number;
  image: string;
  alt: string;
  caption: string;
};

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      fontFamily: 'Georgia, Cambria, "Times New Roman", Times, serif',
      marginTop: '0.72em',
      marginBottom: '-0.27em',
    },
    image: {
      width: '100%',
      marginTop: '0.2rem ',
    },
  }),
);

const Layout = ({ title, description, timestamp, image, alt, caption }: FrontMatter) => ({
  children,
}: {
  children: ReactNode;
}) => {
  const classes = useStyles();
  return (
    <>
      <NextSeo title={title} description={description} />
      <img className={classes.image} src={image} alt={alt} />
      {/* <ImageCaption caption={caption} /> */}
      {/* <Container maxWidth="md" component="article"> */}
      <h1 className={classes.root}>{title}</h1>
      <article>{children}</article>
      {/* </Container> */}
    </>
  );
};

export default Layout;
