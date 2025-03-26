import { AspectRatio, Box, Image, MantineStyleProp } from "@mantine/core";
import React from "react";
import { ArrowAnim } from "../assets/imgs";

type ArrowProps = {
  className?: string;
  style?: MantineStyleProp;
};

function ArrowAnimation({ className, style }: ArrowProps) {
  return (
    <Box w={{ base: 6, sm: 12 }} className={className} style={style}>
      <AspectRatio ratio={6 / 11} w={"100%"}>
        <Image src={ArrowAnim.src} alt="" />
      </AspectRatio>
    </Box>
  );
}

export default ArrowAnimation;
