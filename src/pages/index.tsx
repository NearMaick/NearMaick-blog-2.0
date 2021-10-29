import type { NextPage } from 'next'
import { Flex, Text, Image, Heading } from '@chakra-ui/react'

const Home: NextPage = () => {
  return (
    <Flex as="main" height="90vh" justifyContent="center" alignItems="center">
      <Image
        src="https://i.ibb.co/KNqMjWF/tim-mossholder-tq8-Cuap8-w-Y-unsplash.jpg"
        alt="teste"
        w="100"
        h="200"
      />
      <Heading as="h2">Falando sobre testes</Heading>
      <Text>claro que essa ferramenta não é perfeita e de repente você precisa fazer algumas correções mas ganhei um baita tempo Principalmente quando você for querer fazer um blog tiver codando enquanto tá falando</Text>
    </Flex>
  )
}

export default Home
