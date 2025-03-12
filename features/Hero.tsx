"use client";

import {
  AspectRatio,
  BackgroundImage,
  Badge,
  Box,
  BoxProps,
  Center,
  Container,
  Flex,
  Image,
  NavLink,
  Paper,
  Text,
  Title,
} from "@mantine/core";
import React from "react";
import {
  Gold,
  HeroBG,
  HeroChart,
  HeroLeft,
  HeroRight,
  SECLogo,
} from "../assets/imgs";
import ArrowUp from "../assets/vectors/ArrowUp";
import ArrowDown from "../assets/vectors/ArrowDown";
import UpTrend from "../assets/vectors/UpTrend";
import DownTrend from "../assets/vectors/DownTrend";
import Link from "next/link";
import HeroSwap from "../components/HeroSwap";

import styles from "./hero.module.css";

function Hero() {
  return (
    <BackgroundImage src={HeroBG.src} pos={"relative"} id="firtSection">
      <AspectRatio
        visibleFrom="lg"
        ratio={155 / 65}
        w={{ base: 0, lg: 103, xl: 155 }}
        pos={"absolute"}
        left={"15%"}
        top={"35%"}
        data-aos={"zoom-in-up"}
      >
        <Image src={HeroLeft.src} alt="" />
      </AspectRatio>
      <AspectRatio
        visibleFrom="lg"
        ratio={140 / 71}
        w={{ base: 0, lg: 103, xl: 155 }}
        pos={"absolute"}
        right={"15%"}
        top={"25%"}
        data-aos={"zoom-in-down"}
      >
        <Image src={HeroRight.src} alt="" />
      </AspectRatio>
      <Container mih={"100vh"}>
        <Center mih={"90vh"} pt={{ base: 105, lg: 168, xl: 182 }}>
          <Box>
            <Flex justify={"center"} align={"center"} gap={10}>
              <Text
                lh={"100%"}
                lts={{ base: -2, lg: -6 }}
                fz={{ base: 53, lg: 73, xl: 110 }}
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
                w={{ base: 119, xl: 180 }}
                h={{ base: 44, xl: 68 }}
                bg={"linear-gradient(  #3a3a3aaa,  #111111aa)"}
                style={{
                  borderRadius: 100,
                  border: "1px solid #C0C0C088",
                  clipPath: "inset(-500px 0 0 -500px)",
                }}
                pos={"relative"}
              >
                <Box opacity={0} pos={"absolute"} className={styles[`gold`]}>
                  <AspectRatio ratio={68 / 95} w={{ base: 36, lg: 68, xl: 68 }}>
                    <Image src={Gold.src} alt="" />
                  </AspectRatio>
                </Box>
                <Box opacity={0} pos={"absolute"} className={styles[`gold2`]}>
                  <AspectRatio ratio={68 / 95} w={{ base: 36, lg: 68, xl: 68 }}>
                    <Image src={Gold.src} alt="" />
                  </AspectRatio>
                </Box>
                <Box opacity={0} pos={"absolute"} className={styles[`gold3`]}>
                  <AspectRatio ratio={68 / 95} w={{ base: 36, lg: 68, xl: 68 }}>
                    <Image src={Gold.src} alt="" />
                  </AspectRatio>
                </Box>
                {/* mask */}
                <Box
                  w={"100%"}
                  h={"100%"}
                  pos={"absolute"}
                  bottom={-1}
                  bg={"linear-gradient(#47444200, #111111)"}
                  style={{
                    borderRadius: 100,
                    borderBottom: "1px solid #ffffffcc",
                  }}
                />
              </Box>
            </Flex>
            <Title
              fw={400}
              fz={{ base: 53, lg: 100, xl: 150 }}
              lts={{ base: -5, lg: -11 }}
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
                w={{ base: 119, xl: 180 }}
                h={{ base: 44, xl: 68 }}
                bg={"linear-gradient( #000000, #303030aa)"}
                style={{
                  borderRadius: 100,
                  border: "1px solid #C0C0C088",
                  clipPath: "inset(0 0 -500px -500px)",
                }}
                pos={"relative"}
              >
                <Box opacity={0} pos={"absolute"} className={styles[`sec`]}>
                  <AspectRatio ratio={64 / 78} w={{ base: 32, lg: 42, xl: 64 }}>
                    <Image src={SECLogo.src} alt="" />
                  </AspectRatio>
                </Box>
                <Box opacity={0} pos={"absolute"} className={styles[`sec2`]}>
                  <AspectRatio ratio={64 / 78} w={{ base: 32, lg: 42, xl: 64 }}>
                    <Image src={SECLogo.src} alt="" />
                  </AspectRatio>
                </Box>
                <Box opacity={0} pos={"absolute"} className={styles[`sec3`]}>
                  <AspectRatio ratio={64 / 78} w={{ base: 32, lg: 42, xl: 64 }}>
                    <Image src={SECLogo.src} alt="" />
                  </AspectRatio>
                </Box>
                {/* mask */}
                <Box
                  w={"100%"}
                  h={"100%"}
                  pos={"absolute"}
                  top={-1}
                  bg={"linear-gradient( #111111, #47444200)"}
                  style={{
                    borderRadius: 100,
                    borderTop: "1px solid #ffffffcc",
                  }}
                />
              </Box>
              <Text
                lh={"100%"}
                lts={{ base: -2, lg: -6 }}
                fz={{ base: 53, lg: 73, xl: 110 }}
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
              direction={{ base: "column", lg: "row" }}
              mt={{ base: 52, lg: 100 }}
              gap={15.5}
              style={{
                perspective: 1000,
              }}
            >
              <Box
                visibleFrom="md"
                w={350}
                h={306}
                bg={"#040404"}
                style={{
                  border: "1px solid #ffffff20",
                  borderRadius: 15.5,
                  transform: "rotateY(-15deg) scale(0.9) translateX(120px)",
                  transformOrigin: "center left",
                }}
                data-aos={"fade-up"}
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
                data-aos={"fade-up"}
              />
            </Flex>
          </Box>
        </Center>
      </Container>
    </BackgroundImage>
  );
}

const itemStyle: BoxProps = {
  w: { base: 315, lg: 315 },
  h: { lg: 306 },
  bg: "#181818",
  px: { base: 10, lg: 20 },
  py: { base: 8, lg: 18 },
  style: {
    borderRadius: 15.5,
  },
};

const BalaceItem = () => (
  <Box {...itemStyle} data-aos={"slide-up"}>
    <Text fw={500} c={"#ffffffcc"} ta={"center"} fz={{ lg: 18 }}>
      Online Silver Exchange
    </Text>

    <Paper
      mx={"auto"}
      w={"fit-content"}
      radius={100}
      bg={"#ffffff22"}
      mt={{ base: 24, lg: 32 }}
      py={{ base: 2, lg: 4 }}
      px={{ base: 6, lg: 10.33 }}
    >
      <Text fw={400} lh={"100%"} c={"#fff"} fz={{ lg: 15.5 }}>
        My Balance
      </Text>
    </Paper>

    <Flex gap={6} mt={{ base: 6, lg: 10 }} justify={"center"} align={"center"}>
      <Text fw={400} lh={"100%"} fz={{ base: 16, lg: 38 }} c={"#ffffffcc"}>
        0.00
      </Text>
      <Text fw={400} lh={"100%"} c={"#ffffffcc"} fz={{ base: 10, lg: 15.5 }}>
        USD
      </Text>
    </Flex>

    <Flex mt={{ base: 15, lg: 24 }} justify={"space-between"} gap={8}>
      <Paper
        bg={"#ffffff10"}
        p={{ base: 4, lg: 8 }}
        radius={12}
        w={{ base: "50%", lg: "50%" }}
      >
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

        <Flex mt={{ base: 6, lg: 12 }} gap={{ base: 32, lg: 20 }}>
          <Flex gap={6} justify={"center"} align={"center"}>
            <Text c={"#ffffffcc"}>0.00</Text>
            <Text c={"#ffffffcc"} fz={{ base: 6, lg: 8 }}>
              USD
            </Text>
          </Flex>

          <Badge fw={400} p={4} radius={4} color="#8BDBA344" c={"#00C270"}>
            +16%
          </Badge>
        </Flex>
      </Paper>
      <Paper
        w={{ base: "50%", lg: "50%" }}
        bg={"#ffffff10"}
        p={{ base: 4, lg: 8 }}
        radius={12}
      >
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
                <ArrowDown />
              </AspectRatio>
            </Box>
          </Center>

          <Text c={"#ffffffcc"}>Expense</Text>
        </Flex>

        <Flex mt={{ base: 6, lg: 12 }} gap={{ base: 32, lg: 20 }}>
          <Flex gap={6} justify={"center"} align={"center"}>
            <Text c={"#ffffffcc"}>0.00</Text>
            <Text c={"#ffffffcc"} fz={{ base: 6, lg: 8 }}>
              USD
            </Text>
          </Flex>

          <Badge fw={400} p={4} radius={4} color="#DB8B8B44" c={"#FA5343"}>
            -10%
          </Badge>
        </Flex>
      </Paper>
    </Flex>
  </Box>
);
const SwapItem = () => (
  <Box {...itemStyle} data-aos={"slide-up"} data-aos-delay={100}>
    <Text fw={500} c={"#ffffffcc"} ta={"center"} fz={{ lg: 18 }}>
      Silver Swap
    </Text>

    <Box mt={{ base: 22, lg: 45 }}>
      <HeroSwap />
    </Box>
  </Box>
);
const ChartItem = () => (
  <Box {...itemStyle} data-aos={"slide-up"} data-aos-delay={200}>
    <Text fw={500} c={"#ffffffcc"} fz={{ lg: 18 }}>
      Statistic
    </Text>

    <AspectRatio mt={{ base: 8, lg: 16 }} ratio={287 / 120} w={"100%"}>
      <Image src={HeroChart.src} alt="" />
    </AspectRatio>

    <Flex mt={{ base: 12, lg: 26 }} justify={"space-between"}>
      <Box>
        <Text fw={400} lh={"120%"} fz={{ base: 8, lg: 10 }} c={"#F2F5F7cc"}>
          Avg monthly spend
        </Text>
        <Flex mt={{ base: 4, lg: 8 }} gap={6} align={"center"}>
          <Text fw={500} lh={"100%"} c={"#F2F5F7cc"} fz={{ lg: 14 }}>
            820.00 USD
          </Text>

          <AspectRatio ratio={14 / 11} w={{ base: 10, lg: 14 }}>
            <UpTrend />
          </AspectRatio>

          <Text fz={{ base: 8, lg: 10 }} c={"#00bf8e"}>
            11.9%
          </Text>
        </Flex>
      </Box>
      <Box>
        <Text fw={400} lh={"120%"} fz={{ base: 8, lg: 10 }} c={"#F2F5F7cc"}>
          Spent this month
        </Text>
        <Flex mt={{ base: 4, lg: 8 }} gap={6} align={"center"}>
          <Text fw={500} lh={"100%"} c={"#F2F5F7cc"} fz={{ lg: 14 }}>
            440.00 USD
          </Text>

          <AspectRatio ratio={14 / 11} w={{ base: 10, lg: 14 }}>
            <DownTrend />
          </AspectRatio>

          <Text fz={{ base: 8, lg: 10 }} c={"#d93c3c"}>
            3.9%
          </Text>
        </Flex>
      </Box>
    </Flex>

    <Box mt={{ base: 12, lg: 20 }} mx={"auto"} w={"fit-content"}>
      <Link
        href={"#"}
        style={{
          textDecorationColor: "#F2F5F7cc",
        }}
      >
        <Text c={"#F2F5F7cc"} fz={{ base: 11, lg: 14 }}>
          See Details
        </Text>
      </Link>
    </Box>
  </Box>
);

export default Hero;
