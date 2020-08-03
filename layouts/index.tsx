import React, { ReactNode } from 'react';
import { NextSeo } from 'next-seo';

type FrontMatter = {
  title: string;
  description: string;
};

const Layout = ({ title, description }: FrontMatter) => ({ children }: { children: ReactNode }) => (
  <>
    <NextSeo title={title} description={description} />
    <article>{children}</article>
  </>
);

export default Layout;
