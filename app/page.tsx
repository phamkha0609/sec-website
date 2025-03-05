"use client"

import { Box, Container, Text } from "@mantine/core";
import Hero from "../features/Hero";
import About from "../features/About";
import WhyChoose from "../features/WhyChoose";
import Revenue from "../features/Revenue";
import Investors from "../features/Investors";
import Pioneer from "../features/Pioneer";
import Footer from "../features/Footer";
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from "react";

export default function HomePage() {
  useEffect(() => {
    AOS.init({duration: 1500})
  }, [])
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
      <Footer />
    </Box>
  );
}
