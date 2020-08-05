import { makeStyles, Theme, createStyles, TypographyProps, Typography } from '@material-ui/core';

const useCaptionStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      fontWeight: 'lighter',
      fontSize: '16px',
      lineHeight: '20px',
      color: theme.palette.grey[600],
      textAlign: 'center',
      '& a': {
        color: theme.palette.grey[600],
        fontWeight: 'bold',
      },
    },
  }),
);

export type CaptionProps = TypographyProps & {
  component?: React.ElementType;
  caption: JSX.Element;
};

const ImageCaption: React.FC<CaptionProps> = ({ caption, component = 'figcaption', ...props }) => {
  function createMarkup() {
    return { __html: caption };
  }
  const classes = useCaptionStyles();
  return (
    <Typography
      variant="h5"
      className={classes.root}
      dangerouslySetInnerHtml={createMarkup()}
      component={component}
      {...props}
    ></Typography>
  );
};

export default ImageCaption;
