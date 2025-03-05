import { Box, Button, Flex, Text } from '@mantine/core'
import React from 'react'
import { categoriesMenu } from '../../constants/menu'

function CategoryMenu() {
  return (
    <Flex justify={"space-between"} wrap={"wrap"} gap={"md"}>
        {
            categoriesMenu.map((e, i) => (
                <Box key={i} w={{base: "40%", lg: "30%"}}>
                    <Text c={"#1F2937"} fw={500} fz={{base: 16, xl: 24}}>{e.title}</Text>

                    <Flex direction={"column"} mt={{base: 20, xl: 32}} gap={{base: 14, xl: 20}}>
                        {
                            e.content.map((el, ind) => (
                                <Button c={"#6B7280"} w={"fit-content"} px={0} variant={"transparent"} key={ind}>
                                    <Text fz={{base: 14, xl: 20}}>{el.name}</Text>
                                </Button>
                            ))
                        }
                    </Flex>
                </Box>
            ))
        }
    </Flex>
  )
}

export default CategoryMenu
