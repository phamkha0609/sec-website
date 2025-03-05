import { Box, Button, Flex, Text } from '@mantine/core'
import React from 'react'
import { policiesMenu } from '../../constants/menu'

function PolicyMenu() {
  return (
    <Flex justify={{base: "flex-start", lg: "flex-end"}} gap={"md"}>
        {
            policiesMenu.map((e, i) => (
                <Box key={i} w={{base: "25%", lg: "fit-content"}}>
                  <Button px={0} variant={"transparent"}>
                      <Text c={"#1F2937"} fz={{base: 12, xl: 20}}>{e.title}</Text>
                  </Button>
                </Box>
            ))
        }
    </Flex>
  )
}

export default PolicyMenu
