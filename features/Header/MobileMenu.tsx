"use client"

import { Box, Button, Flex, Paper, Text, Transition } from '@mantine/core'
import React from 'react'
import { useDisclosure } from '@mantine/hooks';
import { Burger } from '@mantine/core';
import Menu from './Menu';
import CustomButton from './CustomButton';

function MobileMenu() {
    const [opened, { toggle }] = useDisclosure();

    return (
        <Box>
            <Transition
                mounted={opened}
                transition="fade"
                duration={400}
                timingFunction="ease"
                >
                {(styles) => <div style={styles}>
                    <Box px={16} py={20} pos={"absolute"} top={0} left={0} w={"100%"} h={"100vh"} bg={"#080808"} style={{
                        zIndex: 900
                    }}>
                        <Flex justify={"flex-end"}>
                            <Paper 
                                radius={100} 
                                p={4} 
                                bg={"linear-gradient(#0c0c0c, #312e2e)"} 
                                style={{
                                    border: "1px solid #434040"
                                }}>
                                    <Button 
                                        h={35}
                                        bg={"linear-gradient(#0c0c0c, #312e2e)"}
                                        radius={100} 
                                        onClick={toggle} 
                                        leftSection={<Burger size={"sm"} color='#fff' opened={opened} onClick={toggle} aria-label="Toggle navigation" />}
                                        style={{
                                            border: "1px solid #434040"
                                        }}
                                        >
                                            <Text>Menu</Text>
                                    </Button>
                            </Paper>
                        </Flex>

                        <Box my={16}>
                            <Menu />
                        </Box>
                        <Box mx={"auto"} w={"fit-content"}>
                            <CustomButton />
                        </Box>
                    </Box>
                </div>}
            </Transition>

            <Paper 
                radius={100} 
                p={4} 
                bg={"linear-gradient(#0c0c0c, #312e2e)"} 
                style={{
                    border: "1px solid #434040"
                }}>
                    <Button 
                        h={35}
                        bg={"linear-gradient(#0c0c0c, #312e2e)"}
                        radius={100} 
                        onClick={toggle} 
                        leftSection={<Burger size={"sm"} color='#fff' opened={opened} onClick={toggle} aria-label="Toggle navigation" />}
                        style={{
                            border: "1px solid #434040"
                        }}
                        >
                            <Text>Menu</Text>
                    </Button>
            </Paper>
        </Box>
    )
}

export default MobileMenu
