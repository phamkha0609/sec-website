"use client";

import {
  AspectRatio,
  Box,
  Button,
  Center,
  Flex,
  Image,
  Input,
  Modal,
  Paper,
  Text,
} from "@mantine/core";
import { useDisclosure, useHover, useMediaQuery } from "@mantine/hooks";
import React from "react";
import ArrowDownV2 from "../../assets/vectors/ArrowDownV2";
import { CoinDataProps } from "./coin.data";
import { coinDataList } from "./coin.data";

type SelectInputProps = {
  coinData?: CoinDataProps;
  fromCoin?: CoinDataProps;
  toCoin?: CoinDataProps;
  onSelect?: React.Dispatch<React.SetStateAction<CoinDataProps>>;
};

function SelectInput({
  coinData,
  onSelect,
  fromCoin,
  toCoin,
}: SelectInputProps) {
  const [opened, { open, close }] = useDisclosure(false);
  const isMobile = useMediaQuery("(max-width: 1024px)");

  return (
    <Paper
      bg={"transparent"}
      w={"100%"}
      radius={isMobile ? 8 : 24}
      style={{
        border: "2px solid #ffffff10",
      }}
      p={{ base: 8, lg: 15 }}
    >
      <Flex align={"center"}>
        <Box w={{ base: "50%", lg: "50%" }}>
          <Flex align={"center"} gap={8}>
            <Box>
              <Paper
                style={{
                  border: "1px solid #ffffff44",
                }}
                bg={"transparent"}
                w={{ base: 22, lg: 52 }}
                h={{ base: 22, lg: 52 }}
                radius={52}
              >
                <Center w={"100%"} h={"100%"}>
                  {coinData && (
                    <AspectRatio ratio={1} w={"80%"}>
                      <Image src={coinData?.icon.src} alt="" />
                    </AspectRatio>
                  )}
                </Center>
              </Paper>
            </Box>

            <Input
              variant={"unstyled"}
              placeholder="0.00"
              type={"number"}
              styles={{
                input: {
                  color: "#ffffffcc",
                  fontSize: isMobile ? 10 : 20,
                },
              }}
            />
          </Flex>
        </Box>
        <Box w={{ base: "50%", lg: "50%" }}>
          <Box w={"fit-content"} ml={"auto"}>
            <Button
              onClick={open}
              size={"sm"}
              variant={"transparent"}
              rightSection={
                <AspectRatio ratio={11 / 8} w={{ base: 8, lg: 11 }}>
                  <ArrowDownV2 />
                </AspectRatio>
              }
            >
              <Text c={"#ffffffcc"} fz={{ base: 10, lg: 16 }}>
                {coinData ? coinData.symbol : "Select"}
              </Text>
            </Button>
          </Box>
        </Box>
      </Flex>

      <Modal centered opened={opened} onClose={close} title="Select Coin">
        <Flex direction={"column"} gap={4}>
          {coinDataList.map((e, i) => (
            <CoinListItem
              isVisible={
                e.symbol != fromCoin?.symbol && e.symbol != toCoin?.symbol
              }
              props={e}
              key={i}
              onSelect={onSelect}
              close={close}
            />
          ))}
        </Flex>
      </Modal>
    </Paper>
  );
}

type CoinListItem = {
  props: CoinDataProps;
  onSelect?: React.Dispatch<React.SetStateAction<CoinDataProps>>;
  close: () => void;
  isVisible: boolean;
};

const CoinListItem = ({ props, onSelect, close, isVisible }: CoinListItem) => {
  const { ref, hovered } = useHover();
  return (
    <Flex
      ref={ref}
      p={4}
      opacity={isVisible ? 1 : 0.5}
      style={{
        cursor: isVisible ? "pointer" : "not-allowed",
        borderRadius: 8,
      }}
      bg={isVisible ? (hovered ? "#00000011" : "#00000005") : "#0000005"}
      align={"center"}
      gap={"sm"}
      onClick={() => {
        if (onSelect && isVisible) {
          onSelect(props);
          close();
        }
      }}
    >
      <Box>
        <AspectRatio ratio={1} w={{ base: 20, lg: 32 }}>
          <Image src={props.icon.src} alt="" />
        </AspectRatio>
      </Box>
      <Box>
        <Text fz={{ base: 12, lg: 14 }}>{props.name}</Text>
      </Box>
    </Flex>
  );
};

export default SelectInput;
