import { AspectRatio, Box, Flex, Image, Paper, Text } from '@mantine/core'
import React from 'react'
import { SECLogo } from '../../assets/imgs'
import Menu from './Menu'
import CustomButton from './CustomButton'
import MobileMenu from './MobileMenu'

function Navbar() {
  return (
    <Flex pos={"fixed"} top={0} w={"100%"} style={{
        zIndex: 1000
    }} 
    align={"center"} 
    justify={"space-between"} 
    px={{base: 16, lg: 52, xl: 80}} 
    py={{base: 20, lg: 16, xl: 24}}>
        <Flex gap={{base: 8, xl: 12}}>
            <Box>
                <AspectRatio ratio={40/49} w={{base: 27, xl: 40}}>
                    <Image src={SECLogo.src} alt='' />
                </AspectRatio>
            </Box>
            <Text c={'#ababab'} fz={{base: 21, xl: 32}} fw={500}>SEC</Text>
        </Flex>

        <Paper visibleFrom='lg' bg={"#0B0B0B"} radius={100} px={{base: 27, xl: 40}} py={{base: 16}} style={{
            border: "2px solid #262626"
        }}>
            <Menu />
        </Paper>

        <Box visibleFrom='lg'>
            <CustomButton  />
        </Box>

        <Box hiddenFrom='lg'>
            <MobileMenu />
        </Box>
    </Flex>
  )
}

export default Navbar
