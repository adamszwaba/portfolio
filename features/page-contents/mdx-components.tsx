import Image from 'components/image';
import { MDXProvider } from '@mdx-js/react';

const Pre = (props: any) => <pre className="my-8 rounded-sm not-prose" {...props} />;

const Table = (props: any) => (
  <div className="overflow-x-auto">
    <table className="text-left mt-8 w-full" {...props} />
  </div>
);

const THead = (props: any) => (
  <th
    className="font-semibold bg-gray-50 dark:bg-slate-800 p-2 text-sm"
    fontWeight="semibold"
    {...props}
  />
);

const TData = (props: any) => (
  <td className="p-2 border-t-[1px] border-inherit text-sm whitespace-normal" {...props} />
);

const LinkedHeading = (props: any) => {
  const CustomTag = `${props.h}`;
  return (
    <CustomTag style={{ scrollMarginBlock: '6.875rem' }} {...props}>
      <span className="content">{props.children}</span>
      {props.id && (
        <a
          className="text-teal-500 font-normal outline-none focus:outline-black opacity-0 hover:opacity-100 ml-1"
          aria-label="anchor"
          href={`#${props.id}`}
        >
          #
        </a>
      )}
    </CustomTag>
  );
};

const InlineCode = (props: any) => (
  <code className="text-purple-500 bg:text-purple-200" {...props} />
);

type MdxPropsType = React.ComponentProps<typeof MDXProvider>;

const MDXProviderComponents: MdxPropsType['components'] = {
  h1: (props: any) => <LinkedHeading className="mdx-h1" h="h1" {...props} />,
  h2: (props: any) => <LinkedHeading className="mdx-h2" h="h2" {...props} />,
  h3: (props: any) => <LinkedHeading className="mdx-h3" h="h3" {...props} />,
  h4: (props: any) => <LinkedHeading className="mdx-h4" h="h4" {...props} />,
  h5: (props: any) => <LinkedHeading className="mdx-h5" h="h5" {...props} />,
  hr: (props: any) => <hr className="mdx-hr" {...props} />,
  strong: (props: any) => <strong className="font-semibold" {...props} />,
  inlineCode: InlineCode,
  pre: Pre,
  br: (props) => <br {...props} />,
  table: Table,
  th: THead,
  td: TData,
  a: (props: any) => <a className="mdx-a" {...props} />,
  p: (props: any) => <p {...props} />,
  ul: (props: any) => <ul className="mdx-ul" {...props} />,
  ol: (props: any) => <ol className="mdx=ul" {...props} />,
  li: (props: any) => <li className="pb-1" {...props} />,
  blockquote: (props: any) => <blockquote className="mt-4 rounded-sm my-2" {...props} />,
  img: (props) => <Image {...props} />,
};

export default MDXProviderComponents;
