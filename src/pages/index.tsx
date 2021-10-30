import type { NextPage } from 'next';
import Link from 'next/link';
import { SimpleGrid } from '@chakra-ui/react';
import { PostCard } from '../components/PostCard';
import { LastPostCard } from '../components/LastPostCard';

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
