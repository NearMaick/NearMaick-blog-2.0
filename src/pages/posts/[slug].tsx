import { GetServerSideProps } from 'next';

import { Text, Image, Heading, Flex, Box } from '@chakra-ui/react';
import { FiCalendar, FiUser, FiClock } from 'react-icons/fi';
import { RichText, RichTextBlock } from 'prismic-reactjs';
import { ParsedUrlQuery } from 'querystring';
import { PostInfo } from '../../components/PostInfo';
import { getPrismicClient } from '../../services/prismic';

type PostsProps = {
  response: {
    uid: string;
    data: {
      banner: {
        url: string;
        alt: string;
      };
      title: { text: string }[];
      subtitle: { text: string }[];
      content: RichTextBlock[];
    };
  };
};

function Posts({ response }: PostsProps): JSX.Element {
  return (
    <Box mx="4">
      <Image
        src={response.data.banner.url}
        alt={response.data.banner.alt}
        borderRadius="md"
        w={1440}
        h={400}
        fit="cover"
        mx="auto"
        mb="4"
      />
      <Flex
        as="article"
        direction="column"
        px="8"
        maxWidth={900}
        marginX="auto"
      >
        <Heading as="h2" mb="4">
          {response.data.title[0].text}
        </Heading>
        <Flex as="span" gridGap="8" mb="4">
          <PostInfo info="15 Mar 2021">
            <FiCalendar />
          </PostInfo>
          <PostInfo info="Maick Souza">
            <FiUser />
          </PostInfo>
          <PostInfo info="4 min">
            <FiClock />
          </PostInfo>
        </Flex>
        <Heading as="h3" mb="4">
          {response.data.subtitle[0].text}
        </Heading>
        <Text as="div" fontSize="lg" textAlign="justify">
          <RichText render={response.data.content} Component="div" />
        </Text>
      </Flex>
    </Box>
  );
}

export default Posts;

export const getServerSideProps: GetServerSideProps = async ({
  req,
  params,
}) => {
  const { slug } = params as ParsedUrlQuery;

  const prismic = getPrismicClient(req);

  const response = await prismic.getByUID('posts', String(slug), {});

  return {
    props: { response },
  };
};
