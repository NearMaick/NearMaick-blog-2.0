import {
  Badge,
  Box,
  Flex,
  Image,
  Heading,
  Text,
  useColorMode,
} from '@chakra-ui/react'
import { GetStaticProps } from 'next'
import { getPrismicClient } from '../services/prismic'
import Prismic from '@prismicio/client'
import { LastPostCard } from '../components/LastPostCard'
import { DiDart, DiErlang, DiNodejs, DiReact } from 'react-icons/di'

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
  const { colorMode } = useColorMode()

  const nextPosts = [...posts]

  const lastPost = nextPosts.shift()

  return (
    <Box>
      <Flex
        direction={{ base: 'column-reverse', md: 'column-reverse', lg: 'row' }}
        marginX="auto"
      >
        <Flex
          flexDirection="column"
          justifyContent="center"
          w="container.sm"
          h="lg"
          marginY={{ base: 0, md: 0, lg: 'auto' }}
          marginRight={{ base: 'auto', md: 'auto', lg: -100 }}
          marginLeft={{ base: 'auto', md: 'auto', lg: '4' }}
          marginTop={{ base: -100, md: -100, lg: 'auto' }}
          paddingX="4"
          zIndex="9"
          background={colorMode === 'light' ? 'white' : 'gray.700'}
          borderRadius="base"
        >
          <Heading fontSize="4xl" marginBottom="8">
            Olá, sou o NearMaick
          </Heading>
          <Text>
            Sou uma pessoa que vivo em constante aprendizado. Sempre gostei de
            profissões relacionadas a tecnologia, mas ganhei muito gosto ná área
            de desenvolvimento de software. Concluí recentemente o curso GoStack
            da Rocketseat, fou formado em Sistemas de Informação, mas sempre
            acompanhando novos conteúdos para me manter atualizado. Tenho
            interesse em trabalhar com construções de aplicações com tecnologias
            relacionadas ao ecossistema JavaScript | Node | React | React
            Native, pois essas tenho mais familiaridade, mas não me limito
            apenas nessas ferramentas, sempre busco as ferramentas quem fazem
            sentido ao problema apresentado. Sou uma pessoa proativa e com
            espírito colaborador e empreendedor.
          </Text>
        </Flex>
        <Image
          src="https://github.com/nearmaick.png"
          alt="NearMaick"
          boxSize={700}
          objectFit="contain"
          borderRadius="base"
          margin="auto"
        />
      </Flex>
      <Box>
        <Heading>Quais os meus objetivos?</Heading>
        <Text>
          Ser um profissional que possa somar em uma equipe, bem como aprender
          novas maneiras, práticas e eficientes de resolver problemas referentes
          a implementação de tecnologias quefacilite, no contexto geral, quem as
          utilizam.
        </Text>
      </Box>

      <Box>
        <Heading>Tecnologias que utilizo no momento...</Heading>
        <Badge>
          <DiNodejs size={60} />
          <Text>NodeJS</Text>
        </Badge>
        <Badge>
          <DiReact size={60} />
          <Text>ReactJS</Text>
        </Badge>
        <Heading>O que estou aprendendo?</Heading>
        <Badge>
          <DiReact size={60} />
          <Text>React Native</Text>
        </Badge>
        <Badge>
          <DiErlang size={60} />
          <Text>Elixir</Text>
        </Badge>
        <Badge>
          <DiDart size={60} />
          <Text>Flutter</Text>
        </Badge>
      </Box>
      <Box>
        <Heading>
          Outras Tecnologias que estou utilizando ao longo da minha jornada...
        </Heading>

        <Image
          src="https://img.shields.io/badge/chakra-%234ED1C5.svg?style=for-the-badge&logo=chakraui&logoColor=white"
          alt="Chakra"
        />
        <Image
          src="https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white"
          alt="Next JS"
        />
      </Box>
      <Box>
        <Heading>Ultimo post do blog</Heading>

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
