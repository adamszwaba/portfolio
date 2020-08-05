import React, { ReactNode } from 'react';
import { NextSeo } from 'next-seo';

type FrontMatter = {
  title: string;
  description: string;
  timestamp: number;
  image: string;
  alt: string;
  caption: string;
};

const Layout = ({ title, description, timestamp, image, alt, caption }: FrontMatter) => ({
  children,
}: {
  children: ReactNode;
}) => {
  return (
    <>
      <NextSeo title={title} description={description} />
      <img src={image} alt={alt} />
      {/* <ImageCaption caption={caption} /> */}
      {/* <Container maxWidth="md" component="article"> */}
      <h1>{title}</h1>
      <article>{children}</article>
      {/* </Container> */}
    </>
  );
};

export default Layout;
