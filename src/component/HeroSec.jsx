import React from "react";
import img from "../assets/colin-watts-xG79esLZJ7U-unsplash.jpg";
import { Box, HStack, Heading, Img, Text } from "@chakra-ui/react";

const HeroSec = () => {
  return (
    <div className="hero">
      <Box
        display={"flex"}
        flexDir={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        backgroundColor={"lightgray"}
        opacity={"0.7"}
        mx={["30px", "220px"]}
        my={"2rem"}
        h={"80vh"}
        color={"black"}
        borderRadius={"15px"}
      >
        <Heading fontSize={"4rem"} textAlign={"center"}>
          India's Most Passionate{" "}
          <Text as={"span"} color={"green"}>
            {" "}
            CleanTech
          </Text>{" "}
          Community!
        </Heading>
        <Text fontSize={"2rem"} fontWeight={"500"}>
          A place to Learn, Network & Solve
        </Text>
        <HStack justify={"space-between"} mt={"2rem"} gap={"20"}>
          <Text
            border={"black"}
            p={"6px"}
            borderRadius={"15px"}
            bgColor={"lightcyan"}
          >
            Learn
          </Text>
          <Text
            border={"black"}
            p={"6px"}
            borderRadius={"15px"}
            bgColor={"lightcyan"}
          >
            Jobs
          </Text>
          <Text
            border={"black"}
            p={"6px"}
            borderRadius={"15px"}
            bgColor={"lightcyan"}
          >
            Network
          </Text>
          <Text
            border={"black"}
            p={"6px"}
            borderRadius={"15px"}
            bgColor={"lightcyan"}
          >
            News and Article
          </Text>
          <Text
            border={"black"}
            p={"6px"}
            borderRadius={"15px"}
            bgColor={"lightcyan"}
          >
            Calender
          </Text>
        </HStack>
      </Box>
    </div>
  );
};

export default HeroSec;
