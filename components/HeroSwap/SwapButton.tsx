import { ActionIcon, AspectRatio } from "@mantine/core";
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
      <AspectRatio ratio={22 / 20} w={{ base: 12, sm: 22 }}>
        <SwapIcon />
      </AspectRatio>
    </ActionIcon>
  );
}

export default SwapButton;
