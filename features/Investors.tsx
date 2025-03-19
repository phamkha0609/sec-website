import { AspectRatio, Box, Flex, Image, Text, Title } from "@mantine/core";
import React from "react";
import Marquee from "react-fast-marquee";
import { QoutientImg } from "../assets/imgs";

function Investors() {
  return (
    <Box pb={{ base: 60, lg: 80, xl: 120 }}>
      <Text
        fw={500}
        c={"#1F2937"}
        ta={"center"}
        fz={{ base: 40, lg: 52, xl: 80 }}
        lh={"100%"}
        mah={140}
        style={{
          overflowY: "hidden",
        }}
      >
        OUR
      </Text>
      <Title
        fw={500}
        c={"#1F2937"}
        ta={"center"}
        fz={{ base: 40, lg: 52, xl: 80 }}
        lh={"100%"}
        mah={140}
        style={{
          overflowY: "hidden",
        }}
      >
        INVESTORS
      </Title>

      <Box mt={{ base: 40, lg: 60 }}>
        <Marquee loop={0} autoFill>
          <Flex align={"center"}>
            <AspectRatio ratio={210 / 59} w={{ base: 120, lg: 140, xl: 210 }}>
              <Image src={QoutientImg.src} alt="" />
            </AspectRatio>

            <Box
              w={1}
              h={40}
              bg={"#1F293722"}
              mx={{ base: 12, lg: 20, xl: 32 }}
            />
          </Flex>
        </Marquee>
      </Box>
    </Box>
  );
}

export default Investors;
