import Link from 'next/link';
import { Text, Flex, Image, Heading, useColorMode } from '@chakra-ui/react';

export type PostProps = {
  uid: string | undefined;
  banner_url: string | undefined;
  banner_alt: string | undefined;
  title: string | undefined;
  subtitle: string | undefined;
};

export function PostCard({
  uid,
  banner_url,
  banner_alt,
  title,
  subtitle,
}: PostProps): JSX.Element {
  const { colorMode } = useColorMode();

  return (
    <Link href={`/posts/${uid}`}>
      <a>
        <Flex
          as="main"
          direction="column"
          justifyContent="center"
          alignItems="center"
          maxWidth="360"
          marginX="auto"
          padding="4"
          borderRadius="md"
          background={colorMode === 'light' ? 'gray.400' : 'gray.700'}
        >
          <Image src={banner_url} alt={banner_alt} borderRadius="md" />
          <Flex my="4" direction="column" justifyContent="center">
            <Heading as="h2" textAlign="center" size="lg" mb="4">
              {title}
            </Heading>
            <Text textAlign="justify">{subtitle}</Text>
          </Flex>
        </Flex>
      </a>
    </Link>
  );
}
