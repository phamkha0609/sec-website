"use client";
import { AspectRatio, Box, Flex, Image, Text } from "@mantine/core";
import React, { useEffect, useState } from "react";
import { headerMenu } from "../../constants/menu";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { HomeIcon } from "../../assets/imgs";

type MenuProps = {
  toggle?: () => void;
};

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

function Menu({ toggle }: MenuProps) {
  const router = useRouter();
  const pathname = usePathname();
  const [currentActive, setCurrentActive] = useState("/");

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

    setCurrentActive(link);
    if (toggle) {
      toggle();
    }
  };

  useEffect(() => {
    setCurrentActive(
      pathname.length > 1 ? pathname : `/${window.location.hash}`
    );
  }, [window.location.hash]);

  return (
    <Flex direction={{ base: "column", lg: "row" }}>
      {headerMenu.map((e, i) => (
        <Flex
          align={"center"}
          justify={"center"}
          miw={125}
          key={i}
          gap={currentActive === e.link ? { base: 8, lg: 14 } : 0}
          bg={
            currentActive === e.link
              ? "linear-gradient(90deg, #090909, #161616)"
              : "transparent"
          }
          py={{ base: 6, lg: 12 }}
          px={{ base: 8, lg: 16 }}
          style={
            currentActive === e.link
              ? {
                  borderRadius: 100,
                  border: "2px solid #262626",
                  overflow: "hidden",
                }
              : {
                  overflow: "hidden",
                  transition: "all .5s",
                  borderRadius: 100,
                }
          }
        >
          {currentActive === e.link ? (
            <AspectRatio ratio={1} w={{ base: 20, lg: 27 }}>
              <Image src={e.icon.src} alt="" />
            </AspectRatio>
          ) : (
            <></>
          )}
          <Link
            href={e.link}
            onClick={(event) => handleClick(event, e.link)}
            style={{
              textDecoration: "none",
            }}
          >
            <Text
              fw={currentActive === e.link ? 500 : 400}
              c={"#fff"}
              fz={{ base: 16, xl: 18 }}
              ta={"center"}
            >
              {e.title}
            </Text>
          </Link>
        </Flex>
      ))}
    </Flex>
  );
}

export default Menu;
