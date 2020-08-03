import {
  Typography,
  Chip,
  Link,
  makeStyles,
  Theme,
  createStyles,
  withTheme,
  withStyles,
} from '@material-ui/core';
import { MDXProviderComponents } from '@mdx-js/react';
import NextLink from 'next/link';
import theme from 'styles/theme';

const useKeyboardStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: 'transparent',
      boxShadow: `inset 0 -1px 0 ${theme.palette.grey[400]}`,
      borderRadius: `${theme.spacing(0.75)}px`,
      padding: `${theme.spacing(3 / 8)}px ${theme.spacing(5 / 8)}px`,
      border: `1px solid ${theme.palette.grey[400]}`,
      lineHeight: `${theme.spacing(10 / 8)}px`,
      fontSize: `11px`,
      '.MuiChip-labelSmall': {
        backgroundColor: 'red',
      },
    },
  }),
);

const CustomChip = withTheme(
  withStyles((theme) => {
    return {
      root: {
        backgroundColor: 'transparent',
        boxShadow: `inset 0 -1px 0 ${theme.palette.grey[400]}`,
        borderRadius: `${theme.spacing(0.75)}px`,
        padding: `${theme.spacing(3 / 8)}px ${theme.spacing(5 / 8)}px`,
        border: `1px solid ${theme.palette.grey[400]}`,
        lineHeight: `${theme.spacing(10 / 8)}px`,
        fontSize: `11px`,
      },
      labelSmall: {
        padding: 0,
      },
    };
  })(Chip),
);
const Kbd = (props: any) => {
  return <CustomChip size="small" label={props.children} />;
};

const useImageStyles = makeStyles((theme: Theme) =>
  createStyles({
    wrapper: {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
    },
    image: {
      maxWidth: '100%',
      margin: `0 auto ${theme.spacing(1.25)}px auto`,
      borderRadius: `${theme.spacing(1)}px`,
    },
    caption: {
      fontWeight: 'lighter',
      fontSize: '16px',
      lineHeight: '20px',
      color: theme.palette.grey[600],
      textAlign: 'center',
    },
  }),
);
const CustomImage = (props: any) => {
  const classes = useImageStyles();
  return (
    <span className={classes.wrapper}>
      <img src={props.src} alt={props.alt} className={classes.image} />
      <Typography variant="h5" className={classes.caption} component="span">
        {props.alt}
      </Typography>
    </span>
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

const useHeaderStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      scrollMarginTop: '100px',
      scrollSnapMargin: '100px', // Safari
      // '&[id]': {
      //   pointerEvents: 'none',
      // },
      '&[id]:before': {
        display: 'block',
        height: ' 6rem',
        marginTop: '-6rem',
        visibility: 'hidden',
        content: `""`,
      },
      '&[id]:hover a': { opacity: 1 },
    },
    anchor: {
      fontWeight: 'normal',
      marginLeft: '0.375rem',
      opacity: '0',
      '&:focus': {
        opacity: 1,
        boxShadow: 'outline',
      },
    },
  }),
);

const CustomHeader = (props: any) => {
  const classes = useHeaderStyles();
  return (
    <Typography className={classes.root} variant={props.variant} {...props}>
      {props.children}
      {props.id && (
        <Link className={classes.anchor} color="primary" aria-label="anchor" href={`#${props.id}`}>
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
