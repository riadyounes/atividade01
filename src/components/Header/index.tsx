import { Flex } from "@chakra-ui/react";
  
import { Logo } from "./Logo";
import { Navbar } from "./Navbar";

export function Header() {
  return (
    <Flex
      as="header"
      w="100%"
      maxWidth={1480}
      h="20"
      mx="auto"
      mt="4"
      p="6"
      align="center"
    >
      <Logo />
      <Flex align="center" ml="auto">
        <Navbar /> 
      </Flex>
    </Flex>
  );
}