import { ReactNode } from 'react';
import { Text, Flex } from '@chakra-ui/react';

type InfoProps = {
  children?: ReactNode;
  info: string;
};

export function PostInfo({ children, info }: InfoProps): JSX.Element {
  return (
    <Flex flexDirection="row" alignItems="center">
      {children}
      <Text marginLeft="2" mt="1">
        {info}
      </Text>
    </Flex>
  );
}
