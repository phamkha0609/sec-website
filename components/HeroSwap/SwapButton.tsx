import { ActionIcon, AspectRatio, Box, Center } from "@mantine/core";
import React from "react";
import SwapIcon from "../../assets/vectors/SwapIcon";

type SwapButtonProps = {
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
};

function SwapButton({ onClick }: SwapButtonProps) {
  return (
    <ActionIcon
      my={{ base: "auto", sm: -17 }}
      color="#fc5a40"
      onClick={onClick}
      w={{ base: 24, sm: 52 }}
      h={{ base: 24, sm: 52 }}
      radius={52}
      mx={{ base: 10, lg: "auto" }}
    >
      <Center>
        <Box>
          <AspectRatio
            ratio={22 / 19}
            w={{ base: 12, sm: 22 }}
            mb={{ base: -1.5, sm: -4 }}
          >
            <SwapIcon />
          </AspectRatio>
        </Box>
      </Center>
    </ActionIcon>
  );
}

export default SwapButton;
