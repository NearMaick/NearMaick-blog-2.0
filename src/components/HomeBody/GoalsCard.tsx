import { Box, Heading, Text, useColorMode } from '@chakra-ui/react'

export function GoalsCard() {
  const { colorMode } = useColorMode()
  return (
    <Box
      margin="8"
      padding="4"
      background={colorMode === 'light' ? 'white' : 'gray.700'}
      borderRadius="base"
    >
      <Heading textAlign="center" mb="4">
        Quais os meus objetivos?
      </Heading>
      <Text fontSize="2xl" textAlign="center">
        Ser um profissional que possa somar em uma equipe, bem como aprender
        novas maneiras, práticas e eficientes de resolver problemas referentes a
        implementação de tecnologias que facilite, no contexto geral, quem as
        utilizam.
      </Text>
    </Box>
  )
}
