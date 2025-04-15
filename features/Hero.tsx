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
  LogoHeader,
  LogoHeader2,
  LogoHeader3,
  SECLogo,
} from "../assets/imgs";
import ArrowUp from "../assets/vectors/ArrowUp";
import ArrowDown from "../assets/vectors/ArrowDown";
import UpTrend from "../assets/vectors/UpTrend";
import DownTrend from "../assets/vectors/DownTrend";
import Link from "next/link";
import HeroSwap from "../components/HeroSwap";

import styles from "./hero.module.css";
import { useMediaQuery } from "@mantine/hooks";

function Hero() {
  const is991 = useMediaQuery("(min-width: 991px) and (max-width: 1279px)");
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
      <Container mih={"100vh"} px={{ base: 32, lg: 90, xl: 135 }}>
        <Center mih={"90vh"} pt={{ base: 105, lg: 168, xl: 182 }}>
          <Box>
            <Flex justify={"center"} align={"center"} gap={10}>
              <Text
                lh={"100%"}
                lts={{ base: -2, lg: -6 }}
                fz={{ base: 53, sm: 100, lg: 73, xl: 110 }}
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
                w={{ base: 119, sm: 140, xl: 180 }}
                h={{ base: 44, sm: 52, xl: 68 }}
                bg={"linear-gradient(  #3a3a3aaa,  #111111aa)"}
                style={{
                  borderRadius: 100,
                  border: "1px solid #C0C0C088",
                  clipPath: "inset(-500px 0 0.4px -500px)",
                }}
                pos={"relative"}
              >
                <Box opacity={0} pos={"absolute"} className={styles[`gold`]}>
                  <AspectRatio
                    ratio={68 / 95}
                    w={{ base: 36, sm: 52, lg: 68, xl: 68 }}
                  >
                    <Image src={Gold.src} alt="" />
                  </AspectRatio>
                </Box>
                <Box opacity={0} pos={"absolute"} className={styles[`gold2`]}>
                  <AspectRatio
                    ratio={68 / 95}
                    w={{ base: 36, sm: 52, lg: 68, xl: 68 }}
                  >
                    <Image src={Gold.src} alt="" />
                  </AspectRatio>
                </Box>
                <Box opacity={0} pos={"absolute"} className={styles[`gold3`]}>
                  <AspectRatio
                    ratio={68 / 95}
                    w={{ base: 36, sm: 52, lg: 68, xl: 68 }}
                  >
                    <Image src={Gold.src} alt="" />
                  </AspectRatio>
                </Box>
                <Box opacity={0} pos={"absolute"} className={styles[`gold4`]}>
                  <AspectRatio
                    ratio={68 / 95}
                    w={{ base: 36, sm: 52, lg: 68, xl: 68 }}
                  >
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
              fz={{ base: 53, sm: 100, xl: 150 }}
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
                w={{ base: 119, sm: 140, xl: 180 }}
                h={{ base: 44, sm: 52, xl: 68 }}
                bg={"linear-gradient( #000000, #303030aa)"}
                style={{
                  borderRadius: 100,
                  border: "1px solid #C0C0C088",
                  clipPath: "inset(0.4px 0 -500px -500px)",
                }}
                pos={"relative"}
              >
                <Box opacity={0} pos={"absolute"} className={styles[`sec`]}>
                  <AspectRatio ratio={67 / 70} w={{ base: 42, sm: 67, xl: 70 }}>
                    <Image src={LogoHeader.src} alt="" />
                  </AspectRatio>
                </Box>
                <Box opacity={0} pos={"absolute"} className={styles[`sec2`]}>
                  <AspectRatio ratio={67 / 70} w={{ base: 42, sm: 67, xl: 70 }}>
                    <Image src={LogoHeader2.src} alt="" />
                  </AspectRatio>
                </Box>
                <Box opacity={0} pos={"absolute"} className={styles[`sec3`]}>
                  <AspectRatio ratio={67 / 70} w={{ base: 42, sm: 67, xl: 70 }}>
                    <Image src={LogoHeader3.src} alt="" />
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
                fz={{ base: 53, sm: 100, lg: 73, xl: 110 }}
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
              direction={{ base: "column", sm: "row" }}
              align={"center"}
              mt={{ base: 52, lg: 100 }}
              gap={{ base: 8, lg: 15.5 }}
              style={{
                perspective: 1000,
              }}
            >
              <Box
                visibleFrom="md"
                w={{ base: "100%", sm: 350 }}
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
              <BalaceItem is991={is991} />
              <SwapItem is991={is991} />
              <ChartItem is991={is991} />
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
  px: { base: 12, lg: 20 },
  py: { base: 12, lg: 18 },
  style: {
    borderRadius: 15.5,
  },
};

const BalaceItem = ({ is991 }: { is991?: boolean }) => {
  const isMobile = useMediaQuery("(max-width: 431px)");
  return (
    <Box
      {...itemStyle}
      maw={is991 ? 300 : 315}
      style={{
        borderRadius: isMobile ? 12 : 16,
      }}
      data-aos={"slide-up"}
      px={{ base: 12, lg: 20 }}
      py={{ base: 12 }}
    >
      <Flex
        direction={{ base: "row", sm: "column" }}
        justify={"space-between"}
        align={"center"}
      >
        <Text fw={500} c={"#ffffffcc"} ta={"center"} fz={{ base: 11, sm: 18 }}>
          Online Silver Exchange
        </Text>

        <Flex
          mt={{ base: 0, sm: 32 }}
          w={{ base: "50%", lg: "100%" }}
          direction={{ base: "row", sm: "column" }}
          justify={{ base: "space-between", lg: "center" }}
          gap={8}
          align={"center"}
        >
          <Paper
            mx={{ base: 0, lg: "auto" }}
            w={"fit-content"}
            h={"fit-content"}
            radius={100}
            bg={"#ffffff22"}
            py={{ base: 2, sm: 4 }}
            px={{ base: 6, sm: 10.33 }}
          >
            <Text fw={300} lh={"100%"} c={"#fff"} fz={{ base: 8, sm: 15.5 }}>
              My Balance
            </Text>
          </Paper>

          <Flex
            gap={6}
            mt={{ base: 0, sm: 10 }}
            justify={"center"}
            align={"center"}
          >
            <Text
              fw={400}
              lh={"100%"}
              fz={{ base: 16, sm: 38 }}
              c={"#ffffffcc"}
            >
              0.00
            </Text>
            <Text
              fw={300}
              lh={"100%"}
              c={"#ffffffcc"}
              fz={{ base: 7, sm: 15.5 }}
            >
              USD
            </Text>
          </Flex>
        </Flex>
      </Flex>

      <Flex mt={{ base: 12, sm: 35 }} justify={"space-between"} gap={8}>
        <Paper
          bg={"#ffffff10"}
          p={{ base: 4, sm: 8 }}
          radius={isMobile ? 6 : 12}
          w={{ base: "50%", sm: "50%" }}
          h={"fit-content"}
        >
          <Flex align={"center"} gap={4}>
            <Center
              w={{ base: 11, sm: 21 }}
              h={{ base: 11, sm: 21 }}
              bg={"#fff"}
              style={{
                borderRadius: 21,
              }}
            >
              <Box
                w={{ base: 4, sm: 8 }}
                mt={{ base: -4, sm: 0 }}
                mr={{ base: -1, sm: 0 }}
              >
                <AspectRatio ratio={8 / 10} w={{ base: 4, sm: 8 }}>
                  <ArrowUp />
                </AspectRatio>
              </Box>
            </Center>

            <Text c={"#ffffffcc"} fz={{ base: 10, sm: 12 }}>
              Income
            </Text>
          </Flex>

          <Flex
            mt={{ base: 6, sm: 13 }}
            gap={{ base: 32, sm: 20 }}
            justify={"space-between"}
          >
            <Flex gap={3} justify={"center"} align={"center"}>
              <Text
                fw={400}
                c={"#ffffffcc"}
                lh={"100%"}
                fz={{ base: 12, xl: 14 }}
              >
                0.00
              </Text>
              <Text
                lh={"100%"}
                fw={300}
                c={"#ffffffcc"}
                fz={{ base: 6, sm: 8 }}
                mt={{ base: 1, sm: 2 }}
              >
                USD
              </Text>
            </Flex>

            <Text
              fw={400}
              p={{ base: 2, sm: 4 }}
              style={{
                borderRadius: isMobile ? 2 : 4,
              }}
              bg="#8BDBA344"
              c={"#00C270"}
              lts={"-2%"}
              lh={"100%"}
              fz={{ base: 7, sm: 8, xl: 10 }}
            >
              +16%
            </Text>
          </Flex>
        </Paper>
        <Paper
          w={{ base: "50%", lg: "50%" }}
          bg={"#ffffff10"}
          h={"fit-content"}
          p={{ base: 4, sm: 8 }}
          radius={isMobile ? 6 : 12}
        >
          <Flex align={"center"} gap={4}>
            <Center
              w={{ base: 11, sm: 21 }}
              h={{ base: 11, sm: 21 }}
              bg={"#fff"}
              style={{
                borderRadius: 21,
              }}
            >
              <Box
                w={{ base: 4, sm: 8 }}
                mt={{ base: -4, sm: 0 }}
                mr={{ base: -1, sm: 0 }}
              >
                <AspectRatio ratio={8 / 10} w={{ base: 4, sm: 8 }}>
                  <ArrowDown />
                </AspectRatio>
              </Box>
            </Center>

            <Text c={"#ffffffcc"} fz={{ base: 10, sm: 12 }}>
              Expense
            </Text>
          </Flex>

          <Flex
            mt={{ base: 6, sm: 13 }}
            gap={{ base: 32, sm: 20 }}
            justify={"space-between"}
          >
            <Flex gap={{ base: 3 }} justify={"center"} align={"center"}>
              <Text lh={"100%"} c={"#ffffffcc"} fz={{ base: 12, xl: 14 }}>
                0.00
              </Text>
              <Text
                fw={300}
                c={"#ffffffcc"}
                fz={{ base: 6, sm: 8 }}
                mt={{ base: 1, sm: 2 }}
              >
                USD
              </Text>
            </Flex>

            <Text
              fw={400}
              p={{ base: 2, sm: 4 }}
              style={{
                borderRadius: isMobile ? 2 : 4,
              }}
              bg="#DB8B8B44"
              c={"#FA5343"}
              lts={"-2%"}
              lh={"100%"}
              h={"fit-content"}
              fz={{ base: 7, sm: 8, xl: 10 }}
            >
              -10%
            </Text>
          </Flex>
        </Paper>
      </Flex>
    </Box>
  );
};

const SwapItem = ({ is991 }: { is991?: boolean }) => {
  const isMobile = useMediaQuery("(max-width: 431px)");
  const smallTablet = useMediaQuery(
    "(min-width: 991px) and (max-width: 1280px)"
  );

  return (
    <Box
      {...itemStyle}
      maw={is991 ? 300 : 315}
      style={{
        borderRadius: isMobile ? 12 : 16,
      }}
      data-aos={"slide-up"}
      data-aos-delay={100}
      mih={{ base: smallTablet ? 257 : "auto", lg: "auto" }}
      px={{ base: 12, lg: 20, xl: 28 }}
    >
      <Text
        fw={500}
        c={"#ffffffcc"}
        ta={isMobile ? "start" : "center"}
        fz={{ base: 11, sm: 18 }}
      >
        Silver Swap
      </Text>

      <Box mt={{ base: 8, sm: 45 }}>
        <HeroSwap />
      </Box>
    </Box>
  );
};

const ChartItem = ({ is991 }: { is991?: boolean }) => {
  const isMobile = useMediaQuery("(max-width: 431px)");

  return (
    <Box
      {...itemStyle}
      maw={is991 ? 300 : 315}
      data-aos={"slide-up"}
      data-aos-delay={200}
      style={{
        borderRadius: isMobile ? 12 : 16,
      }}
    >
      <Text fw={500} c={"#ffffffcc"} fz={{ base: 11, sm: 18 }}>
        Statistic
      </Text>

      <AspectRatio mt={{ base: 8, lg: 16 }} ratio={287 / 120} w={"100%"}>
        <Image src={HeroChart.src} alt="" />
      </AspectRatio>

      <Flex mt={{ base: 12, lg: 26 }} justify={"space-between"}>
        <Box>
          <Text fw={400} lh={"120%"} fz={12} c={"#F2F5F7cc"}>
            Avg monthly spend
          </Text>
          <Flex mt={{ base: 4, lg: 8 }} gap={6} align={"center"}>
            <Text fw={500} lh={"100%"} c={"#F2F5F7cc"} fz={12}>
              820.00 USD
            </Text>

            <AspectRatio
              ratio={14 / 11}
              w={{ base: 10, lg: 14 }}
              mt={{ base: -4, lg: 0 }}
            >
              <UpTrend />
            </AspectRatio>

            <Text fw={400} fz={{ base: 8, lg: 10 }} c={"#00bf8e"} lh={"100%"}>
              11.9%
            </Text>
          </Flex>
        </Box>
        <Box>
          <Text fw={400} lh={"120%"} fz={12} c={"#F2F5F7cc"}>
            Spent this month
          </Text>
          <Flex mt={{ base: 4, lg: 8 }} gap={6} align={"center"}>
            <Text fw={500} lh={"100%"} c={"#F2F5F7cc"} fz={12}>
              440.00 USD
            </Text>

            <AspectRatio
              ratio={14 / 11}
              w={{ base: 10, lg: 14 }}
              mt={{ base: -4, lg: 0 }}
            >
              <DownTrend />
            </AspectRatio>

            <Text lh={"100%"} fw={400} fz={{ base: 8, lg: 10 }} c={"#d93c3c"}>
              3.9%
            </Text>
          </Flex>
        </Box>
      </Flex>

      <Box
        mt={{ base: 12, lg: 20 }}
        mx={"auto"}
        w={"fit-content"}
        style={{
          borderBottom: "1px solid #F2F5F7cc",
        }}
      >
        <Link
          href={"#"}
          style={{
            textDecoration: "none",
          }}
        >
          <Text c={"#F2F5F7cc"} fz={{ base: 11, lg: 14 }}>
            See details
          </Text>
        </Link>
      </Box>
    </Box>
  );
};

export default Hero;
