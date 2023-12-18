import React from "react";
import { HStack, Heading, Text, Button } from "@chakra-ui/react";

const NavBar = () => {
  return (
    <HStack
      opacity={"0.6"}
      bg={"white"}
      px={["10px", "120px"]}
      py={"20px"}
      justify={"space-between"}
    >
      <Heading fontWeight={"100"}>
        nex
        <Text fontWeight={"700"} color={"lightgreen"} as={"span"}>
          Loop
        </Text>
      </Heading>

      <Button borderRadius={"30px"} py={"10px"} backgroundColor={"white"}>
        Join the Community{" "}
        <Text>
          <ion-icon name="arrow-forward-outline"></ion-icon>{" "}
        </Text>{" "}
      </Button>
    </HStack>
  );
};

export default NavBar;
