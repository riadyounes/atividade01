import { Badge, Box, Flex, Grid, Image, SimpleGrid, Text } from "@chakra-ui/react";
import { Card } from "../components/Card";
import { Header } from "../components/Header";


  
export default function Dashboard() {


  return (
    <Flex direction="column" h="100vh">
      <Header />

      <Flex w="100%" my="6" mx="auto" maxWidth={1480} px="6">
        <SimpleGrid
          flex="1"
          gap="4"
          minChildWidth="320px"
          alignItems="flex-start"
        >
          <SimpleGrid columns={[2, null, 3]} spacing={10}>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </SimpleGrid>
        </SimpleGrid>
      </Flex>
    </Flex>
  );
}
