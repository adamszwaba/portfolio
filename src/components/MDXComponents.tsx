import {
  Alert,
  As,
  Box,
  chakra,
  ChakraProps,
  Flex,
  HTMLChakraProps,
  Image,
  Kbd,
  OmitCommonProps,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { MDXProviderComponents } from '@mdx-js/react';

const Pre = (props: any) => <chakra.div my="2em" borderRadius="sm" {...props} />;

const Table = (props: any) => (
  <chakra.div overflowX="auto">
    <chakra.table textAlign="left" mt="32px" width="full" {...props} />
  </chakra.div>
);

const THead = (props: any) => (
  <chakra.th
    bg={useColorModeValue('gray.50', 'whiteAlpha.100')}
    fontWeight="semibold"
    p={2}
    fontSize="sm"
    {...props}
  />
);
const CustomImage = (props: any) => {
  return (
    <Flex as="span" width="100%" flexDirection="column">
      <Image
        src={props.src}
        alt={props.alt}
        maxWidth="100%"
        margin={[0, 'auto', '1.5', 'auto']}
        borderRadius="base"
      />
      <Text variant="h5" textAlign="center" component="span" fontWeight="light">
        {props.alt}
      </Text>
    </Flex>
  );
};

const TData = (
  props: JSX.IntrinsicAttributes &
    OmitCommonProps<
      React.DetailedHTMLProps<
        React.TdHTMLAttributes<HTMLTableDataCellElement>,
        HTMLTableDataCellElement
      >,
      keyof ChakraProps
    > &
    ChakraProps &
    OmitCommonProps<any, keyof ChakraProps> & { as?: As<any> | undefined },
) => (
  <chakra.td
    p={2}
    borderTopWidth="1px"
    borderColor="inherit"
    fontSize="sm"
    whiteSpace="normal"
    {...props}
  />
);

const LinkedHeading = (props: HTMLChakraProps<'h2'>) => (
  <chakra.h2 data-group="" css={{ scrollMarginBlock: '6.875rem' }} {...props}>
    <span className="content">{props.children}</span>
    {props.id && (
      <chakra.a
        aria-label="anchor"
        color="teal.500"
        fontWeight="normal"
        outline="none"
        _focus={{ opacity: 1, boxShadow: 'outline' }}
        opacity={0}
        _groupHover={{ opacity: 1 }}
        ml="0.375rem"
        href={`#${props.id}`}
      >
        #
      </chakra.a>
    )}
  </chakra.h2>
);

const InlineCode = (props: any) => (
  <chakra.code apply="mdx.code" color={useColorModeValue('purple.500', 'purple.200')} {...props} />
);

const MDXComponents: MDXProviderComponents = {
  h1: (props: any) => <chakra.h1 apply="mdx.h1" {...props} />,
  h2: (props: any) => <LinkedHeading apply="mdx.h2" {...props} />,
  h3: (props: any) => <LinkedHeading as="h3" apply="mdx.h3" {...props} />,
  h4: (props: any) => <LinkedHeading as="h4" apply="mdx.h4" {...props} />,
  hr: (props: any) => <chakra.hr apply="mdx.hr" {...props} />,
  strong: (props: any) => <Box as="strong" fontWeight="semibold" {...props} />,
  inlineCode: InlineCode,
  pre: Pre,
  kbd: Kbd,
  // @ts-ignore
  br: ({ reset, ...props }) => (
    <Box as={reset ? 'br' : undefined} height={reset ? undefined : '24px'} {...props} />
  ),
  table: Table,
  th: THead,
  td: TData,
  a: (props: any) => <chakra.a apply="mdx.a" {...props} />,
  p: (props: any) => <chakra.p apply="mdx.p" {...props} />,
  ul: (props: any) => <chakra.ul apply="mdx.ul" {...props} />,
  ol: (props: any) => <chakra.ol apply="mdx.ul" {...props} />,
  li: (props: any) => <chakra.li pb="4px" {...props} />,
  blockquote: (props: any) => (
    <Alert
      mt="4"
      role="none"
      status="warning"
      variant="left-accent"
      as="blockquote"
      rounded="4px"
      my="1.5rem"
      {...props}
    />
  ),
  img: (props) => <CustomImage {...props} />,
};

export default MDXComponents;
