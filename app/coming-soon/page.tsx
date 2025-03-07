import { Box } from "@mantine/core";
import React from "react";
import Content from "../../features/ComingSoon/Content";
import Navbar from "../../features/Header/Navbar";

function ComingSoon() {
  return (
    <Box
      style={{
        overflowX: "hidden",
      }}
      pos={"relative"}
    >
      <Navbar />
      <Content />
    </Box>
  );
}

export default ComingSoon;
