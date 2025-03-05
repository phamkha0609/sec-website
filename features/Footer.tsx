import { AspectRatio, BackgroundImage, Container } from '@mantine/core'
import React from 'react'
import { FooterBG } from '../assets/imgs'

function Footer() {
  return (
    <AspectRatio ratio={1920/1093}>
        <BackgroundImage src={FooterBG.src} bgsz={"cover"}>
        <Container fluid py={{base: 205, lg: 154, xl: 230}} px={{base: 16, lg: 106, xl: 160}}>

        </Container>
    </BackgroundImage>
    </AspectRatio>
  )
}

export default Footer
