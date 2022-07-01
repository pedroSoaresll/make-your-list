import {
  Button,
  Flex,
  Grid,
  Heading,
  Link,
  List,
  ListItem,
  Text
} from "@chakra-ui/react";

interface LayoutProps {
  children?: React.ReactNode;
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
  );
};

const Home = () => {
  return (
    <Layout>
      <Grid
        rowGap="10"
        backgroundColor="gray.50"
        padding="16px 24px"
        borderRadius="xl"
      >
        <Heading>Presentes de casamento</Heading>

        <List spacing="6">
          <ListItem>
            <Flex columnGap="8px" flexWrap="wrap">
              <Link color="blue.400">Pedro</Link>
              <Text textDecoration="line-through">
                - Lorem ipsum dolor sit amet, consectetur adipisicing elit
              </Text>
            </Flex>
          </ListItem>
          <ListItem>
            <Link color="blue.400">
              Assumenda, quia temporibus eveniet a libero incidunt suscipit
            </Link>
          </ListItem>
          <ListItem>
            <Link color="blue.400">
              Assumenda, quia temporibus eveniet a libero incidunt suscipit
            </Link>
          </ListItem>
          <ListItem>
            <Link color="blue.400">
              Assumenda, quia temporibus eveniet a libero incidunt suscipit
            </Link>
          </ListItem>
          <ListItem>
            <Link color="blue.400">
              Assumenda, quia temporibus eveniet a libero incidunt suscipit
            </Link>
          </ListItem>
          <ListItem>
            <Link color="blue.400">
              Assumenda, quia temporibus eveniet a libero incidunt suscipit
            </Link>
          </ListItem>
        </List>

        <Flex justifyContent="flex-end">
          <Button colorScheme="twitter" variant="ghost">
            Adicionar presente
          </Button>
        </Flex>
      </Grid>
    </Layout>
  );
};

export default Home;
