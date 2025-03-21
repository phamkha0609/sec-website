"use client";
import { AspectRatio, Box, Button, Flex, Text } from "@mantine/core";
import React from "react";
import { socialsMenu } from "../../constants/menu";
import ArrowUpRight from "../../assets/vectors/ArrowUpRight";
import { useRouter } from "next/navigation";

function SocialMenu() {
  const router = useRouter();
  const handleNavigate = (link: string) => {
    router.push(link || "/");
  };
  return (
    <Box>
      <Text fz={{ base: 20, xl: 32 }} c={"#1F2937"}>
        Social media
      </Text>

      <Flex wrap={"wrap"} mt={{ base: 12, xl: 28 }}>
        {socialsMenu.map((e, i) => (
          <Box
            onClick={() => handleNavigate(e.link)}
            mt={4}
            mr={{ base: 20, xl: 32 }}
            w={"25%"}
            key={i}
          >
            <Button
              px={0}
              variant={"transparent"}
              rightSection={
                <AspectRatio ratio={1} w={{ base: 16, xl: 24 }}>
                  <ArrowUpRight color="#1F2937" />
                </AspectRatio>
              }
            >
              <Text c={"#1F2937"} fz={{ base: 16, xl: 24 }}>
                {e.title}
              </Text>
            </Button>
          </Box>
        ))}
      </Flex>
    </Box>
  );
}

export default SocialMenu;
