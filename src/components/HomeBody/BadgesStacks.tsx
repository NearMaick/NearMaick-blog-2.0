import { DiDart, DiErlang, DiNodejs, DiReact } from 'react-icons/di'

import { Badge, Box, Image, Heading, Text } from '@chakra-ui/react'

export function BadgeStacks() {
  return (
    <Box>
      <Box>
        <Heading>Tecnologias que utilizo no momento...</Heading>
        <Badge>
          <DiNodejs size={60} />
          <Text>NodeJS</Text>
        </Badge>
        <Badge>
          <DiReact size={60} />
          <Text>ReactJS</Text>
        </Badge>
        <Heading>O que estou aprendendo?</Heading>
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
      </Box>
      <Box>
        <Heading>
          Outras Tecnologias que estou utilizando ao longo da minha jornada...
        </Heading>

        <Image
          src="https://img.shields.io/badge/chakra-%234ED1C5.svg?style=for-the-badge&logo=chakraui&logoColor=white"
          alt="Chakra"
        />
        <Image
          src="https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white"
          alt="Next JS"
        />
      </Box>
    </Box>
  )
}
