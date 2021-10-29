import type { NextPage } from 'next';
import { SimpleGrid } from '@chakra-ui/react';
import { PostCard } from '../components/PostCard';
import { LastPostCard } from '../components/LastPostCard';

const Home: NextPage = () => {
  return (
    <>
      <LastPostCard />
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
