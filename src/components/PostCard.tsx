import Link from 'next/link';
import { Text, Flex, Image, Heading, useColorMode } from '@chakra-ui/react';

type PostProps = {
  uid: string;
  data: {
    banner: {
      url: string;
      alt: string;
    };
    title: { text: string }[];
    subtitle: { text: string }[];
  };
};

export function PostCard({ uid, data }: PostProps): JSX.Element {
  const { colorMode } = useColorMode();

  return (
    <Link href={`/posts/${uid}`}>
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
        <Image src={data.banner.url} alt={data.banner.alt} borderRadius="md" />
        <Flex my="4" direction="column" justifyContent="center">
          <Heading as="h2" textAlign="center" size="lg" mb="4">
            {data.title[0].text}
          </Heading>
          <Text textAlign="justify">{data.subtitle[0].text}</Text>
        </Flex>
      </Flex>
    </Link>
  );
}
