import { Box, Flex, Image, Heading } from '@chakra-ui/react'
import { GetStaticProps } from 'next'
import { getPrismicClient } from '../services/prismic'
import Prismic from '@prismicio/client'
import { LastPostCard } from '../components/LastPostCard'
import { WelcomeCard } from '../components/HomeBody/WelcomeCard'
import { GoalsCard } from '../components/HomeBody/GoalsCard'
import { BadgeStacks } from '../components/HomeBody/BadgesStacks'

type PostsProps = {
  posts: {
    uid: string | undefined
    banner_url: string
    banner_alt: string
    title: string
    subtitle: string
  }[]
}

export default function Home({ posts }: PostsProps) {
  const nextPosts = [...posts]

  const lastPost = nextPosts.shift()

  return (
    <Box>
      <Flex
        direction={{ base: 'column-reverse', md: 'column-reverse', lg: 'row' }}
        marginX="auto"
      >
        <WelcomeCard />
        <Image
          src="https://github.com/nearmaick.png"
          alt="NearMaick"
          boxSize={700}
          objectFit="contain"
          borderRadius="base"
          margin="auto"
        />
      </Flex>
      <GoalsCard />
      <BadgeStacks />

      <Box>
        <Heading my="8" textAlign="center">
          Ultimo post do blog
        </Heading>

        <LastPostCard
          banner_url={lastPost?.banner_url}
          banner_alt={posts[0].banner_alt}
          title={lastPost?.title}
          subtitle={lastPost?.subtitle}
        />
      </Box>
    </Box>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient()

  const response = await prismic.query([
    Prismic.predicates.at('document.type', 'posts'),
  ])

  const posts = response.results.map(post => {
    return {
      uid: post.uid,
      banner_url: post.data.banner.url,
      banner_alt: post.data.banner.alt,
      title: post.data.title[0].text,
      subtitle: post.data.subtitle[0].text,
    }
  })

  return {
    props: {
      posts,
    },
    revalidate: 60 * 60 * 12, //12 hours
  }
}
