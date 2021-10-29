import type { AppProps } from 'next/app'
import { ChakraProvider, Flex, theme } from '@chakra-ui/react'
import { ColorModeSwitcher } from '../components/ColorModeSwitcher'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Flex justifyContent="flex-end">
        <ColorModeSwitcher />
      </Flex>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
