import { Box, Container, Text } from "@mantine/core";
import Hero from "../features/Hero";
import About from "../features/About";
import WhyChoose from "../features/WhyChoose";

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
    </Box>
  );
}
