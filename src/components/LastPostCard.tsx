import { Text, Flex, Image, Heading, useColorMode } from '@chakra-ui/react'
import Link from 'next/link'

import { PostProps } from './PostCard'

export function LastPostCard({
  uid,
  banner_url,
  banner_alt,
  title,
  subtitle,
}: PostProps) {
  const { colorMode } = useColorMode()

  return (
    <Link href={uid ? `/posts/${uid}` : '/blog'}>
      <a>
        <Flex
          as="main"
          direction={{ base: 'column', md: 'column', lg: 'row' }}
          justifyContent="center"
          alignItems="center"
          marginX="14"
          marginBottom="14"
          padding="4"
          borderRadius="md"
          background={colorMode === 'light' ? 'gray.400' : 'gray.700'}
        >
          <Image
            src={banner_url}
            alt={banner_alt}
            maxWidth={{ md: '400', lg: '600' }}
            borderRadius="md"
          />
          <Flex
            h="330"
            direction="column"
            justifyContent="space-around"
            margin="4"
          >
            <Heading as="h2" textAlign="center" size="2xl">
              {title}
            </Heading>
            <Text textAlign="justify" lineHeight="8">
              {subtitle}
            </Text>
          </Flex>
        </Flex>
      </a>
    </Link>
  )
}
