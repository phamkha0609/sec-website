import {
  AspectRatio,
  Box,
  Container,
  Divider,
  Flex,
  Text,
  Title,
} from "@mantine/core";
import React from "react";
import UserIcon from "../assets/vectors/UserIcon";
import CircleIcon from "../assets/vectors/CircleIcon";
import BarIcon from "../assets/vectors/BarIcon";

const data = [
  {
    icon: (
      <AspectRatio ratio={1} w={{ base: 12, lg: 16 }}>
        <UserIcon />
      </AspectRatio>
    ),
    subTitle: "Transparency and Security",
    title: "DEVELOP TOKENIZED SILVER CERTIFICATES",
    content:
      "SEC develops Tokenized Silver Certificates, a digital asset representing ownership of physical silver stored securely.",
  },
  {
    icon: (
      <AspectRatio ratio={1} w={{ base: 12, lg: 16 }}>
        <CircleIcon />
      </AspectRatio>
    ),
    subTitle: "High Liquidity",
    title: "REDUCE TRANSACTION COSTS",
    content:
      "SEC applies blockchain technology to minimize transaction costs, enhance efficiency, and improve transparency in the silver market.",
  },
  {
    icon: (
      <AspectRatio ratio={1} w={{ base: 12, lg: 16 }}>
        <CircleIcon />
      </AspectRatio>
    ),
    subTitle: "Convenient and Flexible",
    title: "ESTABLISH A MARKETPLACE",
    content:
      "SEC creates a dynamic market for silver-related products and services, including trading, storage, and lending.",
  },
  {
    icon: (
      <AspectRatio ratio={1} w={{ base: 12, lg: 16 }}>
        <BarIcon />
      </AspectRatio>
    ),
    subTitle: "Low Cost",
    title: "EASY ACCESS AND USER-FRIENDLY",
    content:
      "The SEC platform is designed to be user-friendly, helping all investors easily access and participate in the silver market.",
  },
];

function WhyChoose() {
  return (
    <Container
      fluid
      py={{ base: 60, lg: 120, xl: 180 }}
      px={{ lg: 100, xl: 160 }}
    >
      <Flex
        direction={{ base: "column", lg: "row" }}
        align={"center"}
        justify={"space-between"}
        gap={24}
      >
        <Box w={{ base: "100%", lg: "50%" }}>
          <Text lh={"100%"} fz={{ base: 40, xl: 80 }} fw={500}>
            WHY
          </Text>
          <Title lh={"100%"} fz={{ base: 40, xl: 80 }} fw={400}>
            CHOOSE
          </Title>
          <Text lh={"100%"} fz={{ base: 40, xl: 80 }} fw={500}>
            US
          </Text>
        </Box>
        <Box>
          <Text
            maw={{ base: 348, xl: 522 }}
            c={"#6b728b"}
            fw={500}
            fz={{ base: 14, xl: 20 }}
          >
            Silver Exchange Center is an advanced silver trading platform that
            combines physical silver and tokenized silver to meet the diverse
            needs of investors.
          </Text>
        </Box>
      </Flex>

      <Flex
        mt={40}
        justify={"space-between"}
        direction={{ base: "column", lg: "row" }}
      >
        {data.map((e, i) => (
          <Flex key={i} direction={{ base: "column", xl: "row" }}>
            <FeatureItem {...e} />
            {i !== data.length - 1 && (
              <Divider
                visibleFrom="xl"
                ml={52}
                orientation={"vertical"}
                variant={"dashed"}
                h={"75%"}
              />
            )}
            {i !== data.length - 1 && (
              <Divider hiddenFrom="lg" variant={"dashed"} my={20} />
            )}
          </Flex>
        ))}
      </Flex>
    </Container>
  );
}

type FeatureItemProps = (typeof data)[0];

const FeatureItem = ({ icon, subTitle, title, content }: FeatureItemProps) => (
  <Box w={{ base: "100%", lg: 220, xl: 280 }}>
    <Flex
      align={"center"}
      gap={10}
      bg={"#FE883310"}
      py={4}
      px={10}
      style={{
        borderRadius: 12,
      }}
    >
      <Box>{icon}</Box>
      <Text lh={"100%"} c={"#fe8833"} fz={{ base: 11, lg: 16 }}>
        {subTitle}
      </Text>
    </Flex>

    <Text
      lh={"120%"}
      fw={500}
      mt={{ base: 40, lg: 60 }}
      fz={{ base: 16, lg: 24 }}
    >
      {title}
    </Text>

    <Text c={"#6b7280"} mt={{ base: 21, lg: 32 }} fz={{ base: 11, lg: 16 }}>
      {content}
    </Text>
  </Box>
);

export default WhyChoose;
