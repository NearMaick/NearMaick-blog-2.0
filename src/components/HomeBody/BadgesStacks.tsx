import { DiDart, DiErlang, DiNodejs, DiReact } from 'react-icons/di'

import { Badge, Box, Flex, Image, Heading, Text } from '@chakra-ui/react'

export function BadgeStacks() {
  return (
    <>
      <Box>
        <Heading textAlign="center">
          Tecnologias que utilizo no momento...
        </Heading>
        <Flex justifyContent="space-around">
          <Badge>
            <DiNodejs size={60} />
            <Text>NodeJS</Text>
          </Badge>
          <Badge>
            <DiReact size={60} />
            <Text>ReactJS</Text>
          </Badge>
        </Flex>
        <Heading textAlign="center">O que estou aprendendo?</Heading>
        <Flex justifyContent="space-around">
          <Badge>
            <DiReact size={60} />
            <Text>React Native</Text>
          </Badge>
          <Badge>
            <DiErlang size={60} />
            <Text>Elixir</Text>
          </Badge>
          <Badge>
            <DiDart size={60} />
            <Text>Flutter</Text>
          </Badge>
        </Flex>
      </Box>
      <Box>
        <Heading textAlign="center">
          Outras Tecnologias que estou utilizando ao longo da minha jornada...
        </Heading>
        <Flex justifyContent="space-around">
          <Image
            src="https://img.shields.io/badge/chakra-%234ED1C5.svg?style=for-the-badge&logo=chakraui&logoColor=white"
            alt="Chakra"
          />
          <Image
            src="https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white"
            alt="Next JS"
          />
        </Flex>
      </Box>
    </>
  )
}
