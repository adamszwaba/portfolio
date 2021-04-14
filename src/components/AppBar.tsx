import * as React from 'react';
import { FaMoon, FaSun, FaGithub } from 'react-icons/fa';
import Logo from './Logo';
import NextLink from 'next/link';
import {
  Button,
  Divider,
  IconButton,
  useColorMode,
  useColorModeValue,
  Container,
  Link,
  Text,
  Flex,
} from '@chakra-ui/react';

const AppBar: React.FC = () => {
  const { toggleColorMode: toggleMode } = useColorMode();
  const text = useColorModeValue('dark', 'light');
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);
  return (
    <Flex width="100%" top={0} shadow="base" zIndex="banner" as="nav">
      <Container maxWidth="container.lg" height="16" display="flex" justifyContent="space-between">
        <NextLink passHref href="/">
          <Link height="16" display="flex" alignItems="center">
            <Logo height="8" width="8" mr="2" textShadow="dark-lg" boxShadow="sm" />
            <Divider height="8" mr="2" orientation="vertical" borderColor="gray.600" />
            <Text variant="h5">@AdamSzwaba</Text>
          </Link>
        </NextLink>
        <Flex aria-label="Other links" alignItems="center">
          <NextLink href="https://github.com/adamszwaba/portfolio" passHref>
            <Button leftIcon={<FaGithub />}>Source</Button>
          </NextLink>
          <IconButton
            size="md"
            fontSize="lg"
            aria-label={`Switch to ${text} mode`}
            variant="ghost"
            color="current"
            ml={{ base: '0', md: '3' }}
            onClick={toggleMode}
            icon={<SwitchIcon />}
          />
        </Flex>
      </Container>
    </Flex>
  );
};
export default AppBar;
