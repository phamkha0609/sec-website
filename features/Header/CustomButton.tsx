import { Button, Text } from '@mantine/core'
import React from 'react'

function CustomButton() {
  return (
    <Button radius={100} px={{base: 24, xl: 36}} h={{base: 35, xl: 52}} bg={"linear-gradient(90deg, #272422, #060606)"} style={{
      border: "2px solid #414141"
    }}>
        <Text fw={500} fz={{base: 12, xl: 18}}>Access App</Text>
    </Button>
  )
}

export default CustomButton
