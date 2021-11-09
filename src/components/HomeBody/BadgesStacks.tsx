import { DiNodejs, DiReact } from 'react-icons/di'

import { Badge, Box, Flex, Image, Heading, Text } from '@chakra-ui/react'
import { stacksBadges } from '../../utils/badgesStacks'

export function BadgeStacks() {
  return (
    <>
      <Box>
        <Heading textAlign="center">
          Tecnologias que utilizo no momento...
        </Heading>
        <Flex justifyContent="center">
          <Badge
            display="flex"
            flexDirection="column"
            mx="8"
            alignItems="center"
            justifyContent="center"
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
        <Flex justifyContent="space-around">
          {stacksBadges.map(stack => (
            <Image key={stack.alt} src={stack.src} alt={stack.alt} />
          ))}
        </Flex>
      </Box>
    </>
  )
}
