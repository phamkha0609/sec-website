import {
  AspectRatio,
  Box,
  Container,
  Divider,
  Flex,
  Image,
  Input,
  Text,
  Title,
} from "@mantine/core";
import React from "react";
import { LogoVectorDark } from "../assets/imgs";
import ArrowUpRight from "../assets/vectors/ArrowUpRight";
import SocialMenu from "../components/Footer/SocialMenu";
import CategoryMenu from "../components/Footer/CategoryMenu";
import PolicyMenu from "../components/Footer/PolicyMenu";
import { useMediaQuery } from "@mantine/hooks";

function Footer() {
  const isMobile = useMediaQuery("(max-width: 1279px)");
  const isBigTablet = useMediaQuery(
    "(min-width: 1280px) and (max-width: 1919px)"
  );
  const tablet = useMediaQuery("(min-width: 991px) and (max-width: 1279px)");

  return (
    <Box
      w={"100%"}
      style={{
        zIndex: -1,
      }}
      bg={isMobile ? "linear-gradient(#fffdfc, #fff)" : "#fff"}
    >
      <Box>
        <Container
          fluid
          pt={{ base: 60, sm: 0 }}
          px={isBigTablet ? 106 : { base: 16, lg: 106, xl: 160 }}
        >
          <Flex
            direction={{ base: "column", sm: "row" }}
            align={"center"}
            justify={"space-between"}
            gap={24}
          >
            <Box w={{ base: "100%", lg: "50%" }}>
              <Text
                tt={"uppercase"}
                lh={"100%"}
                fz={{ base: 40, xl: 80 }}
                c={"#1F2937"}
              >
                Let’s Talk
              </Text>
              <Title
                tt={"uppercase"}
                lh={"100%"}
                fz={{ base: 40, xl: 80 }}
                fw={400}
                c={"#1F2937"}
              >
                Together
              </Title>
            </Box>
            <Box w={{ base: "100%", lg: "40%" }}>
              <Flex align={"center"} justify={"space-between"}>
                <Text c={"#1F2937"} fz={{ base: 16, lg: 20, xl: 32 }}>
                  Enter Your Email
                </Text>

                <AspectRatio ratio={1} w={{ base: 26, lg: 40 }}>
                  <ArrowUpRight color="#1F2937" />
                </AspectRatio>
              </Flex>

              <Input
                variant={"unstyled"}
                style={{
                  borderBottom: "1px solid #D1D5DB",
                }}
              />
            </Box>
          </Flex>

          <Flex
            mt={{ base: 40, lg: 60 }}
            justify={"space-between"}
            gap={40}
            direction={{ base: "column", sm: "row" }}
          >
            <Box w={{ base: "100%", lg: "35%" }}>
              <SocialMenu />
              <Box mt={{ base: 52, xl: 80 }}>
                <Text c={"#1F2937"} fz={{ base: 20, xl: 32 }}>
                  About Us
                </Text>

                <Text
                  mt={{ base: 22, xl: 33 }}
                  c={"#1F2937"}
                  fz={{ base: 12, xl: 16 }}
                  maw={352}
                >
                  SEC (Silver Exchange Center) was born with the mission to
                  revolutionize silver investment in Vietnam, bringing a
                  pioneering digitized silver solution, applying blockchain
                  technology to solve existing problems of the traditional
                  silver market.
                </Text>
              </Box>
            </Box>

            <Box w={{ base: "100%", lg: "45%" }}>
              <CategoryMenu isTablet />
            </Box>
          </Flex>
        </Container>
        <Divider mt={{ base: 40, lg: 52, xl: 80 }} />

        <Flex
          wrap={"wrap"}
          align={"center"}
          py={{ base: 16, xl: 24 }}
          px={{ base: 16, lg: 106, xl: 160 }}
          justify={"space-between"}
        >
          <Flex w={{ base: "50%", sm: "20%" }} gap={"md"} align={"center"}>
            <AspectRatio ratio={1} w={{ base: 27, xl: 40 }}>
              <Image src={LogoVectorDark.src} alt="" />
            </AspectRatio>

            <Text c={"#1f2937"} fw={500} fz={{ base: 20, xl: 32 }}>
              SEC
            </Text>
          </Flex>

          <Text
            w={{ base: "50%", lg: "40%" }}
            c={"#1F2937"}
            fz={{ base: 14, xl: 22 }}
            ta={tablet ? "end" : "center"}
          >
            © 2024 Copyright By SEC
          </Text>

          <Box w={{ base: "100%", lg: "40%" }}>
            <PolicyMenu />
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}

export default Footer;
