"use client";
import { Flex, Text } from "@mantine/core";
import React, { useEffect, useState } from "react";
import { headerMenu } from "../../constants/menu";
import Link from "next/link";
import { useRouter } from "next/navigation";

function smoothScrollTo(targetY: number, duration: number = 3000) {
  const startY = window.scrollY;
  const startTime = performance.now();

  function step(currentTime: number) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const easeInOutCubic =
      progress < 0.5
        ? 4 * progress * progress * progress
        : 1 - Math.pow(-2 * progress + 2, 3) / 2;

    window.scrollTo(0, startY + (targetY - startY) * easeInOutCubic);

    if (elapsed < duration) {
      requestAnimationFrame(step);
    }
  }

  requestAnimationFrame(step);
}

function Menu() {
  const router = useRouter();

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    link: string
  ) => {
    if (link.startsWith("#")) {
      e.preventDefault();
      const section = document.querySelector(link);
      if (section) {
        const yOffset = -80;
        const targetY =
          section.getBoundingClientRect().top + window.scrollY + yOffset;
        smoothScrollTo(targetY);
      }
    } else {
      router.push(link);
    }
  };
  return (
    <Flex
      gap={{ base: 28, xl: 42 }}
      direction={{ base: "column", lg: "row" }}
    >
      {headerMenu.map((e, i) => (
        <Link
          href={e.link}
          key={i}
          onClick={(event) => handleClick(event, e.link)}
          style={{
            textDecoration: "none",
          }}
        >
          <Text
            c={"#fff"}
            fz={{ base: 16, xl: 18 }}
            ta={"center"}
          >
            {e.title}
          </Text>
        </Link>
      ))}
    </Flex>
  );
}

export default Menu;
