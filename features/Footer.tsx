import { AspectRatio, BackgroundImage, Box, Container, Divider, Flex, Image, Input, Text, Title } from '@mantine/core'
import React from 'react'
import { FooterBG, SECLogo } from '../assets/imgs'
import ArrowUpRight from '../assets/vectors/ArrowUpRight'
import SocialMenu from '../components/Footer/SocialMenu'
import CategoryMenu from '../components/Footer/CategoryMenu'
import PolicyMenu from '../components/Footer/PolicyMenu'

function Footer() {
  return (
    <Box pos={"relative"} style={{
      zIndex: 100
    }} bg={"#070707"}>
      <AspectRatio ratio={1920/1158} >
        <BackgroundImage src={FooterBG.src} bgsz={"cover"}>
          <Container fluid pt={{base: 205, lg: 154, xl: 420}} px={{base: 16, lg: 106, xl: 160}}>
            <Flex
                direction={{ base: "column", lg: "row" }}
                align={"center"}
                justify={"space-between"}
                gap={24}
              >
                <Box w={{ base: "100%", lg: "50%" }}>
                  <Text tt={"uppercase"} lh={"100%"} fz={{ base: 40, xl: 80 }} fw={400} c={"#1F2937"}>
                    Let’s Talk 
                  </Text>
                  <Title tt={"uppercase"} lh={"100%"} fz={{ base: 40, xl: 80 }} fw={400} c={"#1F2937"}>
                    Together
                  </Title>
                </Box>
                <Box w={{ base: "100%", lg: "40%" }}>
                  <Flex align={"center"} justify={"space-between"}>
                    <Text c={"#1F2937"} fz={{base: 16, lg: 20, xl: 32}}>Enter Your Email</Text>

                    <AspectRatio ratio={1} w={{base: 26, lg: 40}}>
                      <ArrowUpRight color='#1F2937' />
                    </AspectRatio>
                  </Flex>

                  <Input variant={"unstyled"} style={{
                    borderBottom: "1px solid #D1D5DB"
                  }} />
                </Box>
              </Flex>

              <Flex mt={{base: 40, lg: 60}} justify={"space-between"} gap={40} direction={{base: "column", lg: "row"}}>
                  <Box w={{base: "100%", lg: "35%"}}>
                    <SocialMenu />
                    <Box mt={{base: 52, xl: 80}}>
                      <Text c={"#1F2937"} fz={{base: 20, xl: 32}}>About Us</Text>

                      <Text mt={{base: 22, xl: 33}} c={"#1F2937"} fz={{base: 12, xl: 16}}>
                        SEC (Silver Exchange Company) was born with the mission to revolutionize silver investment in Vietnam, bringing a pioneering digitized silver solution, applying blockchain technology to solve existing problems of the traditional silver market.
                      </Text>
                    </Box>
                  </Box>

                  <Box w={{base: "100%", lg: "45%"}}>
                    <CategoryMenu />
                  </Box>
              </Flex>
          </Container>
          <Divider mt={{base: 40, lg: 52, xl: 80}} />

          <Flex wrap={"wrap"} align={"center"} py={{base: 16, xl: 24}} px={{base: 16, lg: 106, xl: 160}} justify={"space-between"}>
            <Text w={{base: "50%", lg: "40%"}} c={"#1F2937"} fz={{base: 14, xl: 22}}>© 2024 Copyright By SEC</Text>

            <Flex w={{base: "50%", lg: "20%"}} gap={"md"}>
              <AspectRatio ratio={40/49} w={{base: 27, xl: 40}}>
                  <Image src={SECLogo.src} alt='' />
              </AspectRatio>

              <Text c={"#1f2937"} fw={500} fz={{base: 20, xl: 32}}>SEC</Text>
            </Flex>

            <Box w={{base: "100%", lg: "40%"}}>
              <PolicyMenu />
            </Box>
          </Flex>
        </BackgroundImage>
    </AspectRatio>
    </Box>
  )
}

export default Footer
