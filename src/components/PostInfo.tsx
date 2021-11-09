import { Text, Flex } from '@chakra-ui/react'
import { ReactNode } from 'react'

type InfoProps = {
  children?: ReactNode
  info: string
}

export function PostInfo({ children, info }: InfoProps) {
  return (
    <Flex flexDirection="row" alignItems="center">
      {children}
      <Text marginLeft="2" mt="1">
        {info}
      </Text>
    </Flex>
  )
}
