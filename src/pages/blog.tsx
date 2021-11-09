import { SimpleGrid } from '@chakra-ui/react'
import Prismic from '@prismicio/client'
import type { GetStaticProps } from 'next'

import { LastPostCard } from '../components/LastPostCard'
import { PostCard } from '../components/PostCard'
import { getPrismicClient } from '../services/prismic'
import { PostsProps } from '../types/PostTypes'

export default function Blog({ posts }: PostsProps) {
  const nextPosts = [...posts]

  const lastPost = nextPosts.shift()

  return (
    <>
      <LastPostCard
        uid={lastPost?.uid}
        banner_url={lastPost?.banner_url}
        banner_alt={posts[0].banner_alt}
        title={lastPost?.title}
        subtitle={lastPost?.subtitle}
      />

      <SimpleGrid minChildWidth="360px" spacingX="1" spacingY="14">
        {nextPosts.map(post => (
          <PostCard
            key={post.uid}
            uid={post.uid}
            banner_url={post.banner_url}
            banner_alt={post.banner_alt}
            title={post.title}
            subtitle={post.subtitle}
          />
        ))}
      </SimpleGrid>
    </>
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
