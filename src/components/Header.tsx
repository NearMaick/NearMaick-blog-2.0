import { Heading, Flex } from '@chakra-ui/react'
import Link from 'next/link'

import { ColorModeSwitcher } from './ColorModeSwitcher'

export const Header = () => {
  return (
    <Flex
      as="header"
      w="100%"
      p="4"
      marginX="12"
      marginY="4"
      alignItems="center"
      justifyContent="space-between"
    >
      <Link href="/">
        <a>
          <Heading
            as="h1"
            fontSize={{ base: 'sm', sm: '2xl', md: '3xl', lg: '5xl' }}
          >
            NearMaick.dev.br
          </Heading>
        </a>
      </Link>
      <ColorModeSwitcher />
    </Flex>
  )
}
