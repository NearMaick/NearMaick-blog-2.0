import type { GetStaticProps, NextPage } from 'next';
import Link from 'next/link';
import Prismic from '@prismicio/client';

import { SimpleGrid } from '@chakra-ui/react';
import { PostCard } from '../components/PostCard';
import { LastPostCard } from '../components/LastPostCard';
import { getPrismicClient } from '../services/prismic';

const Home: NextPage = () => {
  return (
    <>
      <Link href="/posts/banana">
        <a>
          <LastPostCard />
        </a>
      </Link>
      <SimpleGrid minChildWidth="360px" spacingX="1" spacingY="14">
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
      </SimpleGrid>
    </>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();

  const response = await prismic.query(
    [Prismic.predicates.at('document.type', 'posts')],
    {
      fetch: ['post.title', 'post.content'],
      pageSize: 100,
    }
  );

  console.log(JSON.stringify(response, null, 2));

  return {
    props: {},
  };
};
