import { GetServerSideProps, GetStaticPaths, GetStaticProps } from 'next'

import { Text, Image, Heading, Flex, Box } from '@chakra-ui/react'
import { FiCalendar, FiClock } from 'react-icons/fi'
import { RichText, RichTextBlock } from 'prismic-reactjs'
import { ParsedUrlQuery } from 'querystring'
import { PostInfo } from '../../components/PostInfo'
import { getPrismicClient } from '../../services/prismic'
import { htmlSerializer } from '../../utils/htmlSerializer'

type PostsProps = {
  response: {
    uid: string
    first_publication_date: string
    data: {
      banner: {
        url: string
        alt: string
      }
      title: { text: string }[]
      subtitle: { text: string }[]
      content: RichTextBlock[]
    }
  }
}

export default function Posts({ response }: PostsProps) {
  const dateFormatted = new Date(
    response.first_publication_date
  ).toLocaleDateString('pt-BR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
  const estimatedReadTime = Math.ceil(
    JSON.stringify(response.data.content).split(' ').length / 200
  )

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
          <PostInfo info={dateFormatted}>
            <FiCalendar />
          </PostInfo>
          <PostInfo info={`${estimatedReadTime} min`}>
            <FiClock />
          </PostInfo>
        </Flex>
        <Heading as="h3" mb="4">
          {response.data.subtitle[0].text}
        </Heading>
        <Text as="div" fontSize="lg" textAlign="justify">
          <RichText
            render={response.data.content}
            htmlSerializer={htmlSerializer}
          />
        </Text>
      </Flex>
    </Box>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params as ParsedUrlQuery

  const prismic = getPrismicClient()

  const response = await prismic.getByUID('posts', String(slug), {})

  return {
    props: {
      response,
    },
    revalidate: 60 * 60 * 2, //2 hours
  }
}
