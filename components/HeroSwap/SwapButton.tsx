import { ActionIcon, AspectRatio } from "@mantine/core";
import React from "react";
import SwapIcon from "../../assets/vectors/SwapIcon";

type SwapButtonProps = {
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
};

function SwapButton({ onClick }: SwapButtonProps) {
  return (
    <ActionIcon
      my={{ base: "auto", lg: -17 }}
      color="#fc5a40"
      onClick={onClick}
      w={{ lg: 52 }}
      h={{ lg: 52 }}
      radius={52}
    >
      <AspectRatio ratio={22 / 20} w={{ base: 12, lg: 22 }}>
        <SwapIcon />
      </AspectRatio>
    </ActionIcon>
  );
}

export default SwapButton;
