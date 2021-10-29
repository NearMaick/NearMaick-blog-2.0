import { Text, Flex, Image, Heading, useColorMode } from '@chakra-ui/react';

export const LastPostCard: React.FC = () => {
  const { colorMode } = useColorMode();

  return (
    <Flex
      as="main"
      direction="row"
      justifyContent="center"
      alignItems="center"
      marginX="14"
      marginBottom="14"
      padding="4"
      borderRadius="md"
      background={colorMode === 'light' ? 'gray.400' : 'gray.700'}
    >
      <Image
        src="https://i.ibb.co/KNqMjWF/tim-mossholder-tq8-Cuap8-w-Y-unsplash.jpg"
        alt="teste"
        maxWidth="700px"
        borderRadius="md"
      />
      <Flex h="330" direction="column" justifyContent="space-around" margin="4">
        <Heading as="h2" textAlign="center" size="2xl">
          Executando teste em React Native
        </Heading>
        <Text textAlign="justify" lineHeight="8">
          claro que essa ferramenta não é perfeita e de repente você precisa
          fazer algumas correções mas ganhei um baita tempo Principalmente
          quando você for quere...
        </Text>
      </Flex>
    </Flex>
  );
};
