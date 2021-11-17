import {
  SimpleGrid,
  Image,
  Flex,
  Box,
  Button,
  Text,
  useColorMode,
} from '@chakra-ui/react'
import { createRef } from 'react'
import Pdf from 'react-to-pdf'

export default function Resume() {
  const { colorMode } = useColorMode()
  const ref = createRef<any>()

  return (
    <>
      <Flex
        fontWeight="bold"
        direction="column"
        alignItems="center"
        marginY="8"
      >
        <Text>
          PS: a imagem não irá sair na versão em PDF, mas vou procurar uma
          solução!
        </Text>
        <Text>
          Ao abrir essa página, colocar em modo claro para melhor visualização.
        </Text>
        <Text>
          Para gerar o PDF, clicar no botão Gerar PDF no final do documento.
        </Text>
      </Flex>
      <Image
        src="https://github.com/nearmaick.png"
        alt="NearMaick"
        marginLeft={330}
        w="32"
        h="32"
        borderRadius="full"
      />
      <Box as="div" ref={ref}>
        <Text
          marginLeft="12"
          w={700}
          textAlign="center"
          color={colorMode === 'light' ? 'gray.700' : 'gray.700'}
          fontSize="2xl"
          fontWeight="bold"
          marginBottom="4"
        >
          MAICO ANTÔNIO DE SOUZA
        </Text>
        <Text
          marginLeft="12"
          w={700}
          textAlign="center"
          color={colorMode === 'light' ? 'gray.700' : 'gray.700'}
          borderBottom="solid"
          paddingBottom="4"
        >
          DESENVOLVEDOR FULL-STACK JAVASCRIPT
        </Text>
        <SimpleGrid
          color={colorMode === 'light' ? 'gray.700' : 'gray.700'}
          w={700}
          marginLeft="12"
          marginY="4"
          columns={2}
        >
          <Box borderRight="solid" paddingRight="8">
            <Text fontWeight="bold" textAlign="center" paddingY="8">
              RESUMO PESSOAL
            </Text>
            <Text paddingY="2">
              Sou formado em Sistemas de Informação e aluno da turma do Ignite
              da Rocketseat. Finalizei a trilha de ReactJS e revisando a trilha
              de NodeJS.
            </Text>
            <Text paddingY="2">
              Estou aplicando desenvolvimento front-end em projetos pessoais,
              com as tecnologias: React.js, Next.js, TypeScript, Styled-
              Components, Sass, módulos Css, Prismic CMS, Chakra-UI.
            </Text>
            <Text paddingY="2">
              Tecnologias que estou em eprendizado em desenvolvimento web: Jest,
              Testing Library, Performance, Estratégia de deploy, GraphQL,
              Apollo, Strapi CMS.
            </Text>
            <Text paddingY="2">
              Tecnologias de padronização de código: Design Patterns, S.O.L.I.D,
              Clean Code.
            </Text>
            <Text paddingY="2">
              Tecnologias em desenvolvimento back-end: Express.js, JWT,
              node-mailer, Sentry, SocketIO, Servless, Docker, Git, Linux.
            </Text>
            <Text paddingY="2">
              Estudando conceitos de desenvolvimento orientado a testes (TDD).
            </Text>
            <Text>
              Conhecimentos em desenvolvimento em plataformas mobile (React
              Native, Expo).
            </Text>
            <Text fontWeight="bold" textAlign="center" paddingY="8">
              CURSO CONCLUÍDO
            </Text>
            <Text paddingY="2">
              React.js, Next.js, TypeScript, Styled-Componentes, SASS,
              CSS-modules, Prismic CMS, Chakra-UI, Jest, Testing Library,
              performance, estratégia de deploy.
            </Text>
          </Box>
          <Box paddingLeft="8">
            <Text fontWeight="bold" textAlign="center" paddingY="8">
              CURSOS EM ANDAMENTO
            </Text>
            <Text>
              React - Redux - Redux Saga - React Hooks, NodeJS, React Native.
            </Text>
            <Text fontWeight="bold" textAlign="center" paddingY="8">
              CONTATO
            </Text>
            <Text>WhatsApp/Telegram: (11)9.8421-2084;</Text>
            <Text>E-mail: maick_a_s@msn.com;</Text>
            <Text>https://www.linkedin.com/in/nearmaick/;</Text>
            <Text>GitHub: https://github.com/nearmaick.</Text>
            <Text fontWeight="bold" textAlign="center" paddingY="8">
              FORMAÇÃO ACADÊMICA
            </Text>
            <Text>Faculdade ENIAC;</Text>
            <Text>Janeiro de 2011 - Junho de 2015;</Text>
            <Text>Formado em Sistemas de Informação;</Text>
            <Text fontWeight="bold" textAlign="center" paddingY="8">
              IDIOMA
            </Text>
            <Text>
              Inglês: básico(leitura, escrita, conversação) - estudando;
            </Text>
            <Text>
              Espanhol: intermediário (leitura, escrita), básico (conversação).
            </Text>
            <Text fontWeight="bold" textAlign="center" paddingY="8">
              EXPERIÊNCIA PROFISSIONAL
            </Text>
            <Text>Auxiliar de expedição e atendimento, ECT:</Text>
            <Text>Dezembro de 2006 - atual</Text>
            <Text>
              Exercendo a função de auxílio de chefia, conferências de
              encomendas, operando sistemas de gestão.
            </Text>
          </Box>
        </SimpleGrid>
      </Box>
      <Flex justifyContent="center" marginY="8">
        <Pdf targetRef={ref} filename="MaickCV.pdf">
          {({ toPdf }: any) => <Button onClick={toPdf}>Gerar PDF</Button>}
        </Pdf>
      </Flex>
    </>
  )
}
