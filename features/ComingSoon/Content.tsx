"use client";

import { AspectRatio, BackgroundImage, Box, Flex, Image } from "@mantine/core";
import React from "react";
import { ComingSoonBG, ComingSoonMobileBG, SECLogo } from "../../assets/imgs";
import { useMediaQuery } from "@mantine/hooks";

import styles from "../pioneer.module.css";
import ArrowAnimation from "../../components/ArrowAnimation";

import arrowCSS from "../../components/arrow.module.css";

function Content() {
  const isMobile = useMediaQuery("(max-width: 768px)");
  return (
    <Box bg={"#7f612f"}>
      <BackgroundImage
        src={isMobile ? ComingSoonMobileBG.src : ComingSoonBG.src}
        mih={"100vh"}
        pos={"relative"}
      >
        <Flex
          gap={{ base: 125, sm: 200 }}
          pos={"absolute"}
          top={{ base: "28.5%", sm: "45%" }}
          w={"100%"}
          justify={"center"}
        >
          <Flex gap={6}>
            <ArrowAnimation className={arrowCSS["arrow-anim"]} />
            <ArrowAnimation className={arrowCSS["arrow-anim2"]} />
            <ArrowAnimation className={arrowCSS["arrow-anim3"]} />
            <ArrowAnimation className={arrowCSS["arrow-anim4"]} />
            <ArrowAnimation className={arrowCSS["arrow-anim5"]} />
          </Flex>

          <Flex gap={6} direction={"row-reverse"}>
            <ArrowAnimation
              className={arrowCSS["arrow-anim"]}
              style={{
                transform: "rotate(180deg)",
              }}
            />
            <ArrowAnimation
              className={arrowCSS["arrow-anim2"]}
              style={{
                transform: "rotate(180deg)",
              }}
            />
            <ArrowAnimation
              className={arrowCSS["arrow-anim3"]}
              style={{
                transform: "rotate(180deg)",
              }}
            />
            <ArrowAnimation
              className={arrowCSS["arrow-anim4"]}
              style={{
                transform: "rotate(180deg)",
              }}
            />
            <ArrowAnimation
              className={arrowCSS["arrow-anim5"]}
              style={{
                transform: "rotate(180deg)",
              }}
            />
          </Flex>
        </Flex>

        <Box
          pos={"absolute"}
          bottom={{ base: "50%", xl: "40%" }}
          left={{ base: "15%", xl: "10%" }}
          className={styles["floating"]}
        >
          <AspectRatio ratio={77 / 93} w={{ base: 39, lg: 109, xl: 164 }}>
            <Image src={SECLogo.src} alt="" />
          </AspectRatio>
        </Box>
        <Box
          pos={"absolute"}
          bottom={{ base: "55%", xl: "60%" }}
          right={{ base: "25%", xl: "15%" }}
          className={styles["floating"]}
        >
          <AspectRatio ratio={77 / 93} w={{ base: 37, lg: 94, xl: 141 }}>
            <Image src={SECLogo.src} alt="" />
          </AspectRatio>
        </Box>
        <Box
          pos={"absolute"}
          bottom={{ base: "40%", xl: "20%" }}
          right={{ base: "35%", xl: "15%" }}
          className={styles["floating"]}
        >
          <AspectRatio ratio={77 / 93} w={{ base: 72, lg: 50, xl: 75 }}>
            <Image src={SECLogo.src} alt="" />
          </AspectRatio>
        </Box>
      </BackgroundImage>
    </Box>
  );
}

export default Content;
