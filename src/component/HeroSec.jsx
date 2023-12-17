import React from "react";
import img from "../assets/colin-watts-xG79esLZJ7U-unsplash.jpg";
import { Box, Text } from "@chakra-ui/react";

const HeroSec = () => {
  return (
    <div className="hero">
      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        backgroundColor={"gray"}
      >
        <Text as={"h1"} fontStyle={"bold"}>
          India's Most Passionate CleanTech Community!
        </Text>
      </Box>
    </div>
  );
};

export default HeroSec;
