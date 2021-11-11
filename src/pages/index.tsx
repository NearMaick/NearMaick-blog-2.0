import { Box, Flex, Image, Heading } from '@chakra-ui/react'
import Prismic from '@prismicio/client'
import { GetStaticProps } from 'next'

import { BadgeStacks } from '../components/HomeBody/BadgesStacks'
import { GoalsCard } from '../components/HomeBody/GoalsCard'
import { WelcomeCard } from '../components/HomeBody/WelcomeCard'
import { LastPostCard } from '../components/LastPostCard'
import { getPrismicClient } from '../services/prismic'
import { PostsProps } from '../types/PostTypes'

export default function Home({ posts }: PostsProps) {
  const nextPosts = [...posts]

  const lastPost = nextPosts.shift()

  return (
    <Box>
      <Box position="relative" marginX="4">
        <WelcomeCard />
        <Image
          src="https://images.prismic.io/nearmaickdev/20b0bfd6-a75f-40c6-a2fa-00bff4ea554a_juanjo-jaramillo-mZnx9429i94-unsplash.jpg?auto=compress,format"
          alt="NearMaick"
          objectFit="cover"
          borderRadius="base"
        />
      </Box>
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
