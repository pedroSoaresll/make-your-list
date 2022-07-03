import { Flex, Grid, Heading } from '@chakra-ui/react'

import { ListWeddingGifts } from '../../modules/wedding-gifts/List'

interface LayoutProps {
  children?: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Flex minHeight="100vh">
      <Flex
        width="100%"
        justifyContent="center"
        alignItems="center"
        marginY="16"
      >
        {children}
      </Flex>
    </Flex>
  )
}

const Home = () => {
  return (
    <Layout>
      <Grid
        rowGap="10"
        backgroundColor="gray.50"
        padding="16px 24px"
        borderRadius="xl"
        maxWidth="500px"
        width="100%"
      >
        <Heading>Presentes de casamento</Heading>

        <ListWeddingGifts />
      </Grid>
    </Layout>
  )
}

export default Home
