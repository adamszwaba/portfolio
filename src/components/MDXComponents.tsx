import { Typography, Chip, Link, makeStyles, Theme, createStyles } from '@material-ui/core';
import { MDXProviderComponents } from '@mdx-js/react';
import NextLink from 'next/link';

const useKeyboardStyles = makeStyles((theme: Theme) => createStyles({}));

const Kbd = (props: any) => {
  console.log(props);
  return <Chip size="small" label={props.children}></Chip>;
};

const CustomImage = (props: any) => {
  return (
    <div>
      <img src={props.src} alt={props.alt} />
    </div>
  );
};

const CustomLink = (props: any) => {
  const href = props.href;
  const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'));

  if (isInternalLink) {
    return (
      <NextLink href={href} passHref>
        <Link {...props} />
      </NextLink>
    );
  }

  return <Link {...props} />;
};

const CustomHeader = (props: any) => {
  return (
    <Typography
      variant={props.variant}
      // css={{
      //   scrollMarginTop: '100px',
      //   scrollSnapMargin: '100px', // Safari
      //   '&[id]': {
      //     pointerEvents: 'none',
      //   },
      //   '&[id]:before': {
      //     display: 'block',
      //     height: ' 6rem',
      //     marginTop: '-6rem',
      //     visibility: 'hidden',
      //     content: `""`,
      //   },
      //   '&[id]:hover a': { opacity: 1 },
      // }}
      {...props}
      // mb="1em"
      // mt="2em"
    >
      {props.children}
      {props.id && (
        <Link
          color="primary"
          aria-label="anchor"
          // fontWeight="normal"
          // outline="none"
          // _focus={{
          //   opacity: 1,
          //   boxShadow: 'outline',
          // }}
          // opacity="0"
          // ml="0.375rem"
          href={`#${props.id}`}
        >
          #
        </Link>
      )}
    </Typography>
  );
};

const MDXComponents: MDXProviderComponents = {
  h1: (props) => <CustomHeader variant="h1" component="h1" my={4} {...props} />,
  h2: (props) => <CustomHeader variant="h2" {...props} />,
  h3: (props) => <CustomHeader variant="h3" {...props} />,
  h4: (props) => <CustomHeader variant="h4" {...props} />,
  h5: (props) => <CustomHeader variant="h5" {...props} />,
  h6: (props) => <CustomHeader variant="h6" {...props} />,
  kbd: (props: any) => <Kbd {...props} />,
  a: CustomLink,
  // p: (props) => <Typography variant="body1" component="p" {...props} />,
  img: (props) => <CustomImage {...props} />,
};

export default MDXComponents;
