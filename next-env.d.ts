/// <reference types="next" />
/// <reference types="next/types/global" />
declare module '*.md' {
  const MDXComponent: (props: any) => JSX.Element;
  export default MDXComponent;
}
declare module '*.mdx' {
  const MDXComponent: (props: any) => JSX.Element;
  export default MDXComponent;
}

declare module '*.svg';

declare module '*.mdx' {
  import { ReactNode } from 'react';

  export const frontMatter: {
    title: string;
    snippet: string;
    timestamp: number;
    __resourcePath: string;
    // type additional properties according to
    // the front-matter you define
  };

  const component: ReactNode;
  export default ReactNode;
}
