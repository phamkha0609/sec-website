import { Flex, Text } from '@mantine/core'
import React from 'react'
import { headerMenu } from '../../constants/menu'
import Link from 'next/link'

function Menu() {
  return (
    <Flex gap={{base: 28, xl: 42}} direction={{base: "column", lg: "row"}}>
        {
            headerMenu.map((e, i) => (
                <Link href={e.link} key={i} style={{
                    textDecoration: "none"
                }}>
                    <Text c={"#fff"} fz={{base: 16, xl: 18}} ta={"center"}>{e.title}</Text>
                </Link>
            ))
        }
    </Flex>
  )
}

export default Menu
