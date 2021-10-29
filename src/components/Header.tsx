import { Heading, Flex } from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';

export const Header: React.FC = () => {
  return (
    <Flex as="header" w="100%" p="4" justifyContent="space-between">
      <Heading as="h1">NearMaick.dev.br</Heading>
      <ColorModeSwitcher />
    </Flex>
  );
};
