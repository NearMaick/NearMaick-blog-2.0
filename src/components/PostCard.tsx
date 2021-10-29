import { Text, Flex, Image, Heading, useColorMode } from '@chakra-ui/react';

export const PostCard: React.FC = () => {
  const { colorMode } = useColorMode();

  return (
    <Flex
      as="main"
      direction="column"
      justifyContent="center"
      alignItems="center"
      maxWidth="360"
      marginX="auto"
      padding="4"
      borderRadius="md"
      background={colorMode === 'light' ? 'gray.400' : 'gray.700'}
    >
      <Image
        src="https://i.ibb.co/KNqMjWF/tim-mossholder-tq8-Cuap8-w-Y-unsplash.jpg"
        alt="teste"
        borderRadius="md"
      />
      <Flex direction="column" justifyContent="center">
        <Heading as="h2" textAlign="center" size="lg">
          Falando sobre testes
        </Heading>
        <Text textAlign="justify">
          claro que essa ferramenta não é perfeita e de repente você precisa
          fazer algumas correções mas ganhei um baita tempo Principalmente
          quando você for quere...
        </Text>
      </Flex>
    </Flex>
  );
};
