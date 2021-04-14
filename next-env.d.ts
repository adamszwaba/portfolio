/// <reference types="next" />
/// <reference types="next/types/global" />
/// <reference types="@mdx-js/loader" />
declare module '*.svg';

declare module '*.mdx' {
  import { ReactNode } from 'react';

  export const frontMatter: {
    title: string;
    description: string;
    timestamp: number;
    image: string;
    alt: string;
    caption: string;
    __resourcePath: string;
    // type additional properties according to
    // the front-matter you define
  };

  const component: ReactNode;
  export default ReactNode;
}
