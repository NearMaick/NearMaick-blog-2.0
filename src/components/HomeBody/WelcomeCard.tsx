import { Flex, Heading, Text, useColorMode } from '@chakra-ui/react'

export function WelcomeCard() {
  const { colorMode } = useColorMode()

  return (
    <Flex
      flexDirection="column"
      justifyContent="center"
      w="container.sm"
      h="lg"
      marginY={{ base: 0, md: 0, lg: 'auto' }}
      marginRight={{ base: 'auto', md: 'auto', lg: -100 }}
      marginLeft={{ base: 'auto', md: 'auto', lg: '4' }}
      marginTop={{ base: -100, md: -100, lg: 'auto' }}
      paddingX="4"
      zIndex="9"
      background={colorMode === 'light' ? 'white' : 'gray.700'}
      borderRadius="base"
    >
      <Heading fontSize="4xl" marginBottom="8">
        Olá, sou o NearMaick
      </Heading>
      <Text fontSize="xl">
        Sou uma pessoa que vivo em constante aprendizado. Sempre gostei de
        profissões relacionadas a tecnologia, mas ganhei muito gosto ná área de
        desenvolvimento de software. Concluí recentemente o curso GoStack da
        Rocketseat, fou formado em Sistemas de Informação, mas sempre
        acompanhando novos conteúdos para me manter atualizado. Tenho interesse
        em trabalhar com construções de aplicações com tecnologias relacionadas
        ao ecossistema JavaScript | Node | React | React Native, pois essas
        tenho mais familiaridade, mas não me limito apenas nessas ferramentas,
        sempre busco as ferramentas quem fazem sentido ao problema apresentado.
        Sou uma pessoa proativa e com espírito colaborador e empreendedor.
      </Text>
    </Flex>
  )
}
