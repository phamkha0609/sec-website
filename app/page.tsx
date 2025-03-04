import { Box, Container, Text } from "@mantine/core";
import Hero from "../features/Hero";
import About from "../features/About";
import WhyChoose from "../features/WhyChoose";
import Revenue from "../features/Revenue";
import Investors from "../features/Investors";
import Pioneer from "../features/Pioneer";

export default function HomePage() {
  return (
    <Box
      style={{
        overflowX: "hidden",
      }}
    >
      <Hero />
      <About />
      <WhyChoose />
      <Revenue />
      <Investors />
      <Pioneer />
    </Box>
  );
}
