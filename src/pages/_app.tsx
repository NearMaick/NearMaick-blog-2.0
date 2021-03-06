import { ChakraProvider, Flex, theme } from '@chakra-ui/react'
import type { AppProps } from 'next/app'

import { Header } from '../components/Header'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Flex>
        <Header />
      </Flex>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
