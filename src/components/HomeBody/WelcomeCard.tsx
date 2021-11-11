import {
  Heading,
  Text,
  useColorMode,
  chakra,
  HTMLChakraProps,
} from '@chakra-ui/react'
import { motion, HTMLMotionProps } from 'framer-motion'
import React from 'react'

type Merge<P, T> = Omit<P, keyof T> & T

type MotionFlexProps = Merge<HTMLChakraProps<'div'>, HTMLMotionProps<'div'>>
export const MotionFlex: React.FC<MotionFlexProps> = motion(chakra.div)

export function WelcomeCard() {
  const { colorMode } = useColorMode()

  return (
    <MotionFlex
      animate={{ y: 16, opacity: [0, 0, 0, 1] }}
      transition={{ ease: 'easeOut', duration: 2 }}
      position="absolute"
      visibility={{ base: 'hidden', sm: 'visible' }}
      top={{ base: '4', md: '8', lg: '24', xl: '64' }}
      left={{ base: '8', md: '24', lg: '56', xl: '96' }}
      w={{ base: 400, md: 600, lg: 700, xl: 820 }}
      h={{ base: 280, md: 400, lg: 480, xl: 560 }}
      zIndex="9"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      paddingX="4"
      background={colorMode === 'light' ? 'white' : 'gray.700'}
      borderRadius="base"
    >
      <Heading
        fontSize={{ base: 'sm', md: 'xl', lg: '2xl', xl: '4xl' }}
        marginBottom="8"
        textAlign="center"
      >
        Olá, sou o NearMaick
      </Heading>
      <Text
        fontSize={{ base: '12', md: 'md', lg: 'lg', xl: '2xl' }}
        textAlign="justify"
      >
        Sou uma pessoa que vivo em constante aprendizado. Sempre gostei de
        profissões relacionadas a tecnologia, mas ganhei muito gosto na área de
        desenvolvimento de software. Concluí recentemente o curso GoStack da
        Rocketseat, sou formado em Sistemas de Informação, mas sempre
        acompanhando novos conteúdos para me manter atualizado. Tenho interesse
        em trabalhar com construções de aplicações com tecnologias relacionadas
        ao ecossistema JavaScript | Node | React | React Native, pois essas
        tenho mais familiaridade, mas não me limito apenas nessas ferramentas,
        sempre busco as ferramentas quem fazem sentido ao problema apresentado.
        Sou uma pessoa proativa e com espírito colaborador e empreendedor.
      </Text>
    </MotionFlex>
  )
}
