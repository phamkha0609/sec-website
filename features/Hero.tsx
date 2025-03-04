import {
  AspectRatio,
  BackgroundImage,
  Box,
  BoxProps,
  Center,
  Container,
  Flex,
  Paper,
  Text,
  Title,
} from "@mantine/core";
import React from "react";
import { HeroBG } from "../assets/imgs";
import ArrowUp from "../assets/vectors/ArrowUp";

function Hero() {
  return (
    <BackgroundImage src={HeroBG.src}>
      <Container mih={"100vh"}>
        <Center mih={"100vh"}>
          <Box>
            <Flex justify={"center"} align={"center"} gap={10}>
              <Text
                lh={"100%"}
                lts={-6}
                fz={{ lg: 110 }}
                fw={"500"}
                style={{
                  background: "radial-gradient(#ffffff 60%, #000000 100%)",
                  color: "transparent",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                SILVER
              </Text>
              <Box
                w={{ lg: 180 }}
                h={{ lg: 68 }}
                bg={"linear-gradient(  #C0C0C066, #C0C0C044,  #00000044)"}
                style={{
                  borderRadius: 100,
                  border: "2px solid #C0C0C088",
                }}
              ></Box>
            </Flex>
            <Title
              fw={400}
              fz={{ lg: 150 }}
              lts={-11}
              lh={"100%"}
              style={{
                background: "radial-gradient(#ffffff 60%, #000000 100%)",
                color: "transparent",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
              ta={"center"}
            >
              EXCHANGE
            </Title>
            <Flex justify={"center"} align={"center"} gap={10}>
              <Box
                w={{ lg: 180 }}
                h={{ lg: 68 }}
                bg={"linear-gradient(  #C0C0C066, #C0C0C044,  #00000044)"}
                style={{
                  borderRadius: 100,
                  border: "2px solid #C0C0C088",
                }}
              ></Box>
              <Text
                lh={"100%"}
                lts={-6}
                fz={{ lg: 110 }}
                style={{
                  background: "radial-gradient(#ffffff 60%, #000000 100%)",
                  color: "transparent",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
                fw={"500"}
              >
                CENTER
              </Text>
            </Flex>

            <Flex
              mt={{ base: 52, lg: 100 }}
              gap={15.5}
              style={{
                perspective: 1000,
              }}
            >
              <Box
                visibleFrom="lg"
                w={350}
                h={306}
                bg={"#040404"}
                style={{
                  border: "1px solid #ffffff20",
                  borderRadius: 15.5,
                  transform: "rotateY(-15deg) scale(0.9) translateX(120px)",
                  transformOrigin: "center left",
                }}
              />
              <BalaceItem />
              <SwapItem />
              <ChartItem />
              <Box
                visibleFrom="lg"
                w={350}
                h={306}
                bg={"#040404"}
                style={{
                  border: "1px solid #ffffff20",
                  borderRadius: 15.5,
                  transform: "rotateY(15deg) scale(0.985) translateX(-5px)",
                  transformOrigin: "center left",
                }}
              />
            </Flex>
          </Box>
        </Center>
      </Container>
    </BackgroundImage>
  );
}

const itemStyle: BoxProps = {
  w: { lg: 315 },
  h: { lg: 306 },
  bg: "#181818",
  px: { base: 10, lg: 20 },
  py: { base: 8, lg: 18 },
  style: {
    borderRadius: 15.5,
  },
};

const BalaceItem = () => (
  <Box {...itemStyle}>
    <Text c={"#ffffffcc"} ta={"center"} fz={{ lg: 18 }}>
      Online Silver Exchange
    </Text>

    <Paper
      mx={"auto"}
      w={"fit-content"}
      radius={100}
      bg={"#ffffff22"}
      mt={{ base: 24, lg: 42 }}
      py={{ base: 2, lg: 4 }}
      px={{ base: 6, lg: 10 }}
    >
      <Text c={"#fff"} fz={{ lg: 15.5 }}>
        My Balance
      </Text>
    </Paper>

    <Flex
      gap={6}
      mt={{ base: 10, lg: 15.5 }}
      justify={"center"}
      align={"center"}
    >
      <Text fz={{ base: 16, lg: 38 }} c={"#ffffffcc"}>
        0.00
      </Text>
      <Text c={"#ffffffcc"} fz={{ base: 10, lg: 15.5 }}>
        USD
      </Text>
    </Flex>

    <Flex mt={{ base: 15, lg: 35 }}>
      <Paper bg={"#ffffff10"} p={{ base: 4, lg: 8 }} radius={12}>
        <Flex align={"center"} gap={4}>
          <Center
            w={21}
            h={21}
            bg={"#fff"}
            style={{
              borderRadius: 21,
            }}
          >
            <Box>
              <AspectRatio ratio={8 / 10} w={8}>
                <ArrowUp />
              </AspectRatio>
            </Box>
          </Center>

          <Text c={"#ffffffcc"}>Income</Text>
        </Flex>
      </Paper>
      <Paper></Paper>
    </Flex>
  </Box>
);
const SwapItem = () => <Box {...itemStyle}></Box>;
const ChartItem = () => <Box {...itemStyle}></Box>;

export default Hero;
