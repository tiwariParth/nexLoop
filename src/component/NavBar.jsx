import React from "react";
import { VStack, HStack, Heading, Text } from "@chakra-ui/react";

const NavBar = () => {
  return (
    <HStack mx={"120px"} my={"20px"}>
      <Heading fontWeight={"100"}>
        nex
        <Text color={"green"} as={"span"}>
          Loop
        </Text>
      </Heading>
    </HStack>
  );
};

export default NavBar;
