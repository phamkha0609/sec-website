"use client";

import { Box, Flex } from "@mantine/core";
import React, { useState } from "react";
import SelectInput from "./SelectInput";
import SwapButton from "./SwapButton";
import { coinDataList } from "./coin.data";

function HeroSwap() {
  const [fromCoin, setFromCoin] = useState(coinDataList[0]);
  const [toCoin, setToCoin] = useState(coinDataList[1]);

  const handleSwap = () => {
    setFromCoin(toCoin);
    setToCoin(fromCoin);
  };

  return (
    <Box>
      <Flex
        direction={{ base: "row", sm: "column" }}
        align={"center"}
        justify={"space-between"}
      >
        <Box w={{ base: "43%", sm: "100%" }}>
          <SelectInput
            coinData={fromCoin}
            fromCoin={fromCoin}
            toCoin={toCoin}
            onSelect={setFromCoin}
          />
        </Box>
        <SwapButton onClick={handleSwap} />
        <Box w={{ base: "43%", sm: "100%" }}>
          <SelectInput
            coinData={toCoin}
            fromCoin={fromCoin}
            toCoin={toCoin}
            onSelect={setToCoin}
          />
        </Box>
      </Flex>
    </Box>
  );
}

export default HeroSwap;
