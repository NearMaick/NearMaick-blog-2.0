import { useState } from 'react';
import type { GetStaticProps } from 'next';
import Link from 'next/link';
import Prismic from '@prismicio/client';

import { SimpleGrid } from '@chakra-ui/react';
import { PostCard } from '../components/PostCard';
import { LastPostCard } from '../components/LastPostCard';
import { getPrismicClient } from '../services/prismic';

type PostsProps = {
  posts: {
    uid: string;
    banner_url: string;
    banner_alt: string;
    title: string;
    subtitle: string;
  }[];
};

function Home({ posts }: PostsProps): JSX.Element {
  return (
    <>
      <Link href="/posts/banana">
        <a>
          <LastPostCard />
        </a>
      </Link>
      <SimpleGrid minChildWidth="360px" spacingX="1" spacingY="14">
        {posts.map(post => (
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
  );
}

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();

  const response = await prismic.query([
    Prismic.predicates.at('document.type', 'posts'),
  ]);

  const posts = response.results.map(post => {
    return {
      uid: post.uid,
      banner_url: post.data.banner.url,
      banner_alt: post.data.banner.alt,
      title: post.data.title[0].text,
      subtitle: post.data.subtitle[0].text,
    };
  });

  return {
    props: {
      posts,
    },
  };
};
