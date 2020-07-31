import React, { ReactNode } from 'react';
import { NextSeo } from 'next-seo';

type FrontMatter = {
  title: string;
  snippet: string;
};

const Layout = ({ title, snippet }: FrontMatter) => ({ children }: { children: ReactNode }) => (
  <>
    <NextSeo title={title} description={snippet} />
    <section>{children}</section>
  </>
);

export default Layout;
