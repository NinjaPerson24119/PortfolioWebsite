import { Typography, useTheme, Link } from '@mui/material';
import type { MDXComponents } from 'mdx/types.js';

function TypographyVariant(
  variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body1',
  paragraph = false,
) {
  return function TypographyVariant({
    ...props
  }: React.PropsWithChildren<unknown>) {
    return (
      <Typography variant={variant} paragraph={paragraph}>
        {props.children}
      </Typography>
    );
  };
}

function StyledLink({
  ...props
}: React.DetailedHTMLProps<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
>) {
  const theme = useTheme();
  return (
    <Link
      sx={{ textDecoration: 'none', color: theme.palette.text.link }}
      href={props.href}
      target={props.href?.includes('#') ? '' : '_blank'}
    >
      {props.children}
    </Link>
  );
}

function LazyLoadedImage({
  ...props
}: React.DetailedHTMLProps<
  React.ImgHTMLAttributes<HTMLImageElement>,
  HTMLImageElement
>) {
  return <img {...props} loading="lazy" />;
}

export function MDXComponentMapping(): MDXComponents {
  return {
    h1: TypographyVariant('h1'),
    h2: TypographyVariant('h2'),
    h3: TypographyVariant('h3'),
    h4: TypographyVariant('h4'),
    h5: TypographyVariant('h5'),
    h6: TypographyVariant('h6'),
    p: TypographyVariant('body1', true),
    a: StyledLink,
    img: LazyLoadedImage,
  };
}
