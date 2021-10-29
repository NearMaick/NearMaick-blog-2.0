import { Heading, Flex } from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';

export const Header: React.FC = () => {
  return (
    <Flex
      as="header"
      w="100%"
      p="4"
      marginX="12"
      marginY="4"
      alignItems="center"
      justifyContent="space-between"
    >
      <Heading as="h1" size="4xl">
        NearMaick.dev.br
      </Heading>
      <ColorModeSwitcher />
    </Flex>
  );
};