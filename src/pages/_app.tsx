import type { AppProps } from 'next/app';
import { ChakraProvider, Flex, theme } from '@chakra-ui/react';
import { Header } from '../components/Header';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <ChakraProvider theme={theme}>
      <Flex>
        <Header />
      </Flex>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
