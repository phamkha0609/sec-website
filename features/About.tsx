import {
  AspectRatio,
  BackgroundImage,
  Box,
  Center,
  Container,
  Flex,
  Image,
  Text,
  Title,
} from "@mantine/core";
import React from "react";
import { AboutBG, BackedImg, CardCollect, GatewayImg } from "../assets/imgs";
import { useMediaQuery } from "@mantine/hooks";

function About() {
  const matches = useMediaQuery("(min-width: 991px) and (max-width: 1279px)");
  const isBigTablet = useMediaQuery(
    "(min-width: 1280px) and (max-width: 1919px)"
  );
  const is1440 = useMediaQuery("(min-width: 1440px) and (max-width: 1919px)");

  return (
    <Box bg={"#000000"} pos={"relative"} id="about">
      <Box
        pos={"absolute"}
        left={matches ? "10%" : { base: "5%", lg: "20%", xl: "15%" }}
        top={is1440 ? "70%" : { base: "55%", lg: "50%" }}
        style={{
          zIndex: 2,
        }}
      >
        <AspectRatio
          ratio={368 / 208}
          w={{ base: 154, sm: 200, lg: 245, xl: 368 }}
          data-aos={"fade-right"}
        >
          <Image src={BackedImg.src} alt="" />
        </AspectRatio>
      </Box>
      <Box
        pos={"absolute"}
        right={{ base: "5%", lg: "5%", xl: "5%" }}
        bottom={{ base: "20%", lg: "5%", xl: "3%" }}
      >
        <AspectRatio
          ratio={279 / 269}
          w={is1440 ? 300 : { base: 80, sm: 200, lg: 279, xl: 419 }}
          data-aos={"zoom-in-up"}
        >
          <Image src={CardCollect.src} alt="" />
        </AspectRatio>
      </Box>
      <AspectRatio ratio={1920 / 1358}>
        <BackgroundImage
          src={AboutBG.src}
          mih={matches ? "auto" : { lg: "100vh" }}
        >
          <Container
            fluid
            px={matches ? 40 : isBigTablet ? 100 : { lg: 160 }}
            pt={{ base: 200, lg: 240, xl: 360 }}
          >
            <Flex
              direction={{ base: "column", sm: "row" }}
              align={"center"}
              justify={"space-between"}
              gap={24}
            >
              <Box w={{ base: "100%", lg: "50%" }}>
                <Text lh={"100%"} fz={{ base: 40, xl: 80 }} fw={500}>
                  ABOUT
                </Text>
                <Title lh={"100%"} fz={{ base: 40, xl: 80 }} fw={400}>
                  SILVER EXCHANGE
                </Title>
                <Text lh={"100%"} fz={{ base: 40, xl: 80 }} fw={500}>
                  CENTER
                </Text>
              </Box>
              <Box>
                <Text
                  maw={{ base: 348, xl: 522 }}
                  c={"#6b728b"}
                  fw={500}
                  fz={{ base: 14, xl: 20 }}
                >
                  SEC is built to comprehensively address the pain points of the
                  current silver market in Vietnam by integrating Blockchain and
                  Crypto Currency technology into the silver trading ecosystem.
                </Text>
              </Box>
            </Flex>

            <Center>
              <Box>
                <AspectRatio
                  mx={"auto"}
                  ratio={503 / 569}
                  w={is1440 ? 380 : { base: "90%", sm: 320, lg: 503 }}
                  data-aos={"fade-up"}
                >
                  <Image src={GatewayImg.src} alt="" />
                </AspectRatio>
                <Box mx={"auto"} w={"fit-content"} mt={{ base: 20, lg: 40 }}>
                  <Text
                    ta={"center"}
                    fw={500}
                    fz={{ base: 15, xl: 20 }}
                    c={"#1f2937"}
                  >
                    Bridging Physical Silver with Digital Innovation
                  </Text>
                  <Text fz={{ base: 15, xl: 20 }} c={"#6B7280"}>
                    Digital Silver Token backed by Physical Silver
                  </Text>
                </Box>
              </Box>
            </Center>
          </Container>
        </BackgroundImage>
      </AspectRatio>
    </Box>
  );
}

export default About;
