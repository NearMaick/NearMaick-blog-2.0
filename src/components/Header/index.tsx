import { Heading, Flex } from '@chakra-ui/react'
import { ColorModeSwitcher } from '../ColorModeSwitcher'

export function Header() {
  return (
    <Flex w="100%" p="4" justifyContent="space-between">
      <Heading>NearMaick.dev.br</Heading>
      <ColorModeSwitcher />
    </Flex>
  )
}