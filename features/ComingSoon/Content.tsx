"use client"

import { AspectRatio, BackgroundImage, Box, Image } from '@mantine/core'
import React from 'react'
import { ComingSoonBG, ComingSoonMobileBG, SECLogo } from '../../assets/imgs'
import { useMediaQuery } from '@mantine/hooks'

import styles from "../pioneer.module.css"

function Content() {
    const isMobile = useMediaQuery("(max-width: 768px)");
  return (
    <Box bg={"#7f612f"}>
        <BackgroundImage src={isMobile ? ComingSoonMobileBG.src : ComingSoonBG.src} mih={"100vh"} pos={"relative"}>
            <Box
                pos={"absolute"}
                bottom={{base: "50%", xl: "40%"}}
                left={{base: "15%", xl: "10%"}}
                className={styles["floating"]}
            >
                <AspectRatio ratio={77 / 93} w={{ base: 39, lg: 109, xl: 164 }}>
                    <Image src={SECLogo.src} alt="" />
                </AspectRatio>
            </Box>
            <Box
                pos={"absolute"}
                bottom={{base: "55%", xl: "60%"}}
                right={{base: "25%", xl: "15%"}}
                className={styles["floating"]}
            >
                <AspectRatio ratio={77 / 93} w={{ base: 37, lg: 94, xl: 141 }}>
                    <Image src={SECLogo.src} alt="" />
                </AspectRatio>
            </Box>
            <Box
                pos={"absolute"}
                bottom={{base: "40%", xl: "20%"}}
                right={{base: "35%", xl: "15%"}}
                className={styles["floating"]}
            >
                <AspectRatio ratio={77 / 93} w={{ base: 72, lg: 50, xl: 75 }}>
                    <Image src={SECLogo.src} alt="" />
                </AspectRatio>
            </Box>
        </BackgroundImage>
    </Box>
  )
}

export default Content
