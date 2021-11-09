import { DiNodejs, DiReact } from 'react-icons/di'

import {
  Badge,
  Box,
  Flex,
  Image,
  Heading,
  SimpleGrid,
  Text,
} from '@chakra-ui/react'
import { stacksBadges } from '../../utils/badgesStacks'

export function BadgeStacks() {
  return (
    <>
      <Box>
        <Heading textAlign="center">
          Tecnologias que utilizo no momento...
        </Heading>
        <Flex justifyContent="center" my="8">
          <Badge
            display="flex"
            flexDirection="column"
            mx="8"
            alignItems="center"
            justifyContent="center"
            padding="4"
          >
            <DiNodejs size={60} />
            <Text>NodeJS</Text>
          </Badge>
          <Badge
            display="flex"
            flexDirection="column"
            mx="8"
            alignItems="center"
            justifyContent="center"
            padding="4"
          >
            <DiReact size={60} />
            <Text>ReactJS</Text>
          </Badge>
          <Badge
            display="flex"
            flexDirection="column"
            mx="8"
            alignItems="center"
            justifyContent="center"
            padding="4"
          >
            <DiReact size={60} />
            <Text>React Native</Text>
          </Badge>
        </Flex>
      </Box>
      <Box>
        <Heading textAlign="center">
          Outras Tecnologias que estou utilizando ao longo da minha jornada...
        </Heading>
        <SimpleGrid my="8" minChildWidth="240px" spacingY="8">
          {stacksBadges.map(stack => (
            <Image mx="auto" key={stack.alt} src={stack.src} alt={stack.alt} />
          ))}
        </SimpleGrid>
      </Box>
    </>
  )
}
