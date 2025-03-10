"use client";

import {
  ActionIcon,
  AspectRatio,
  BackgroundImage,
  Box,
  Center,
  Container,
  Flex,
  Paper,
  Text,
  Title,
} from "@mantine/core";
import React from "react";
import { PaperBG, RevenueImg } from "../assets/imgs";
import ArrowUpRight from "../assets/vectors/ArrowUpRight";
import TransactionIcon from "../assets/vectors/TransactionIcon";
import TokenFee from "../assets/vectors/TokenFee";
import PaymentFee from "../assets/vectors/PaymentFee";
import DappFee from "../assets/vectors/DappFee";
import AssetIcon from "../assets/vectors/AssetIcon";
import IotIcon from "../assets/vectors/IotIcon";
import { useHover } from "@mantine/hooks";

const revenueData = [
  {
    Icon: TransactionIcon,
    title: "Transaction Fees",
  },
  {
    Icon: TokenFee,
    title: "Tokenization Fee",
  },
  {
    Icon: PaymentFee,
    title: "Payment Fee",
  },
  {
    Icon: DappFee,
    title: "DApp Usage Fees",
  },
  {
    Icon: AssetIcon,
    title: "Asset management fees",
  },
  {
    Icon: IotIcon,
    title: "Revenue from Staking",
  },
];

function Revenue() {
  return (
    <Container
      fluid
      pb={{ base: 60, lg: 120, xl: 180 }}
      px={{ lg: 100, xl: 160 }}
      id="revenue"
    >
      <Flex
        direction={{ base: "column", lg: "row" }}
        align={"center"}
        justify={"space-between"}
        gap={24}
      >
        <Box w={{ base: "100%", lg: "50%" }}>
          <Text lh={"100%"} fz={{ base: 40, xl: 80 }} fw={500}>
            MAIN
          </Text>
          <Title lh={"100%"} fz={{ base: 40, xl: 80 }} fw={400}>
            REVENUE
          </Title>
          <Text lh={"100%"} fz={{ base: 40, xl: 80 }} fw={500}>
            STREAM
          </Text>
        </Box>
        <Box>
          <Text
            maw={{ base: 348, xl: 522 }}
            c={"#6b728b"}
            fw={500}
            fz={{ base: 14, xl: 20 }}
          >
            <span style={{ color: "#1f2937" }}>
              Silver Exchange Center (SEC)
            </span>{" "}
            is designed to create a complete silver trading ecosystem, combining
            physical silver and tokenized silver through blockchain technology.
          </Text>
        </Box>
      </Flex>

      <Flex
        mt={{ base: 40, lg: 52, xl: 80 }}
        direction={{ base: "column", lg: "row" }}
        justify={"space-between"}
        gap={24}
      >
        <Box
          w={{ base: "100%", lg: 465, xl: 689 }}
          h={{ base: "auto", lg: 192, xl: 288 }}
        >
          <AspectRatio ratio={698 / 617} w={"100%"}>
            <BackgroundImage src={RevenueImg.src} pos={"relative"} data-aos={"fade-in"}>
              <Box pos={"absolute"} right={"5%"} bottom={"5%"}>
                <ActionIcon
                  color="#FC5A40"
                  w={{ base: 82, lg: 106, xl: 160 }}
                  h={{ base: 82, lg: 106, xl: 160 }}
                  radius={100}
                  data-aos={"zoom-in"}
                >
                  <AspectRatio ratio={1} w={{ base: 32, lg: 45, xl: 90 }}>
                    <ArrowUpRight />
                  </AspectRatio>
                </ActionIcon>
              </Box>
            </BackgroundImage>
          </AspectRatio>
        </Box>

        <Flex wrap={"wrap"} w={{ base: "100%", lg: 560, xl: 841 }}>
          {revenueData.map((e, i) => (
            <RevenueItem key={i} {...e} />
          ))}
        </Flex>
      </Flex>
    </Container>
  );
}

type RevenueItemProps = (typeof revenueData)[0];

const RevenueItem = ({ Icon, title }: RevenueItemProps) => {
  const { ref, hovered } = useHover();
  return (
    <BackgroundImage w={{ base: "33.33%", lg: 186, xl: 280 }} src={PaperBG.src} bgsz={"cover"} style={{
      borderRadius: 10
    }} data-aos={"fade-left"}>
      <Paper
        w={"100%"}
        h={"100%"}
        py={{ base: 42, lg: 64 }}
        ref={ref}
        style={{
          cursor: "pointer",
        }}
        bg={hovered ? "transparent" : "#fff"}
      >
        <Flex direction={"column"} align={"center"}>
          <AspectRatio ratio={1} w={{ base: 32, lg: 45, xl: 68 }}>
            <Icon color={hovered ? "#000" : "#6B728088"} />
          </AspectRatio>

          <Text
            fw={500}
            fz={{ base: 12, lg: 20 }}
            mt={{ base: 16, lg: 32 }}
            ta={"center"}
            c={hovered ? "#000" : "#6B728088"}
            maw={167}
          >
            {title}
          </Text>
        </Flex>
      </Paper>
    </BackgroundImage>
  );
};

export default Revenue;
