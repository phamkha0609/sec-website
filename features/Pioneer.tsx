"use client";

import {
  AspectRatio,
  BackgroundImage,
  Box,
  Button,
  Center,
  Flex,
  Image,
  Text,
  Title,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import React from "react";
import {
  CommunityBG,
  CommunityMobileBG,
  DiscoverButton,
  Platform,
  SECLogo,
} from "../assets/imgs";

import styles from "./pioneer.module.css";

function Pioneer() {
  const isMobile = useMediaQuery("(max-width: 801px)");
  const isTablet = useMediaQuery("(min-width: 801px)");
  const matches = useMediaQuery("(min-width: 61em) and (max-width: 90em)");

  return (
    <Box
      pos={"relative"}
      style={{
        zIndex: 5,
        overflow: "hidden",
      }}
    >
      <Box
        bg={"linear-gradient(#070707 96%, #3a1f0d)"}
        style={{
          borderTopLeftRadius: isMobile ? 40 : isTablet ? 52 : 80,
          borderTopRightRadius: isMobile ? 40 : isTablet ? 52 : 80,
        }}
      >
        <Flex
          direction={{ base: "column", sm: "row" }}
          align={"center"}
          justify={"space-between"}
          gap={66}
          px={matches ? 40 : { base: 16, lg: 119, xl: 145 }}
          py={{ base: 60, lg: 105, xl: 140 }}
        >
          <Box w={{ base: "100%", lg: "50%" }} data-aos={"fade-up"}>
            <Text c={"#fff"} lh={"100%"} fz={{ base: 40, xl: 80 }} fw={500}>
              WE ARE
            </Text>
            <Title c={"#fff"} lh={"100%"} fz={{ base: 40, xl: 80 }} fw={400}>
              THE PIONEER
            </Title>

            <Text
              mt={{ base: 22, xl: 33 }}
              maw={{ base: 348, xl: 522 }}
              c={"#b4b4b4"}
              fw={400}
              fz={{ base: 14, xl: 20 }}
            >
              <b style={{ color: "#fff" }}>Silver Exchange Center (SEC)</b> is
              designed to create a complete silver trading ecosystem, combining
              physical silver and tokenized silver through blockchain
              technology.
            </Text>

            <Button
              h={{ base: 30, lg: 46 }}
              w={{ base: 127, xl: 177 }}
              mt={{ base: 40, lg: 75 }}
              radius={100}
              bg="linear-gradient(120deg, #FC5A4088, #3F120B88 100%)"
              style={{
                border: "1px solid #FC5A4088",
              }}
              fw={500}
              fz={{ base: 12, lg: 16 }}
            >
              How, you ask?
            </Button>
          </Box>
          <Box w={{ base: "100%", lg: "50%" }}>
            <AspectRatio ratio={753 / 510} w={{ base: 360, lg: 502, xl: 753 }}>
              <BackgroundImage src={Platform.src} pos={"relative"}>
                <Box
                  pos={"absolute"}
                  bottom={"27%"}
                  right={"47%"}
                  className={styles["floating"]}
                >
                  <AspectRatio ratio={77 / 93} w={{ base: 36, lg: 51, xl: 77 }}>
                    <Image src={SECLogo.src} alt="" />
                  </AspectRatio>
                </Box>
              </BackgroundImage>
            </AspectRatio>
          </Box>
        </Flex>

        <AspectRatio
          ratio={isMobile ? 390 / 589 : 3840 / 2346}
          w={{ base: "120%", lg: "100%" }}
          id="ecosystem"
        >
          <BackgroundImage
            data-aos={"fade-up"}
            src={isMobile ? CommunityMobileBG.src : CommunityBG.src}
            pos={"relative"}
          >
            <Center
              pos={"absolute"}
              w={"100%"}
              bottom={{ base: "25%", xl: 280 }}
            >
              <Box>
                <Text
                  fw={500}
                  ta={"center"}
                  c={"#fff"}
                  fz={{ base: 40, lg: 52, xl: 80 }}
                  lh={"100%"}
                >
                  SILVERSE <br /> ECOSYSTEM
                </Text>

                <Box
                  mt={{ base: 12, lg: 26, xl: 40 }}
                  mx={"auto"}
                  w={"fit-content"}
                  style={{
                    cursor: "pointer",
                  }}
                >
                  <AspectRatio
                    ratio={221 / 56}
                    w={{ base: 128, lg: 151, xl: 221 }}
                  >
                    <Image src={DiscoverButton.src} alt="" />
                  </AspectRatio>
                </Box>
              </Box>
            </Center>
          </BackgroundImage>
        </AspectRatio>
      </Box>
    </Box>
  );
}

export default Pioneer;
