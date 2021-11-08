import { Box, Flex, Image, Heading, Text, useColorMode } from '@chakra-ui/react'

export default function Home() {
  const { colorMode } = useColorMode()

  return (
    <Box>
      <Flex
        direction={{ base: 'column-reverse', md: 'column-reverse', lg: 'row' }}
        marginX="auto"
      >
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
          <Text>
            Mussum Ipsum, cacilds vidis litro abertis. Praesent vel viverra
            nisi. Mauris aliquet nunc non turpis scelerisque, eget. Praesent
            malesuada urna nisi, quis volutpat erat hendrerit non. Nam vulputate
            dapibus. Interessantiss quisso pudia ce receita de bolis, mais bolis
            eu num gostis. Casamentiss faiz malandris se pirulitá. Si num tem
            leite então bota uma pinga aí cumpadi! Copo furadis é disculpa de
            bebadis, arcu quam euismod magna. Quem manda na minha terra sou
            euzis! Manduma pindureta quium dia nois paga. Suco de cevadiss, é um
            leite divinis, qui tem lupuliz, matis, aguis e fermentis. Viva
            Forevis aptent taciti sociosqu ad litora torquent. Per aumento de
            cachacis, eu reclamis. Paisis, filhis, espiritis santis.
          </Text>
        </Flex>
        <Image
          src="https://github.com/nearmaick.png"
          alt="NearMaick"
          boxSize={700}
          objectFit="contain"
          borderRadius="base"
          margin="auto"
        />
      </Flex>
    </Box>
  )
}
