import type { NextPage } from 'next';
import { SimpleGrid } from '@chakra-ui/react';
import { PostCard } from '../components/PostCard';

const Home: NextPage = () => (
  <SimpleGrid minChildWidth="360px" spacingX="1" spacingY="20">
    <PostCard />
    <PostCard />
    <PostCard />
    <PostCard />
  </SimpleGrid>
);

export default Home;
