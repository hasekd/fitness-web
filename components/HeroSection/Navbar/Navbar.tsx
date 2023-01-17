import { Box, Flex, Heading, Text, TextProps } from "@chakra-ui/react";
import Link from "next/link";
import { theme } from "../../../styles/theme";
import React from "react";

const LinkStyles: TextProps = {
  textTransform: "uppercase",
  cursor: "pointer",
  pos: "relative",
  fontWeight: 500,
  _hover: {
    _after: { transform: "scaleX(1)", transformOrigin: "bottom left" },
  },
  _after: {
    content: '""',
    pos: "absolute",
    w: "100%",
    transform: "scaleX(0)",
    h: "0.15rem",
    bottom: "-0.2rem",
    left: "0",
    bgColor: theme.color.primary.white,
    transformOrigin: "bottom right",
    transition: "transform 0.3s ease-out",
  },
};

const Navbar = () => {
  return (
    <Box
      bgColor={theme.color.primary.blue}
      textColor={"#fff"}
      pos={"sticky"}
      top={0}
      zIndex={10}
    >
      <Flex
        justify={"space-between"}
        h={"7rem"}
        align={"center"}
        maxW={"130rem"}
        m={"0 auto"}
      >
        <Link href={"/"}>
          <Heading>LOGO</Heading>
        </Link>
        <Flex fontSize={"1.8rem"} gap={"3rem"}>
          <Link href={"/"}>
            <Text {...LinkStyles}>úvod</Text>
          </Link>
          <Link href={"/sluzby"}>
            <Text {...LinkStyles}>služby</Text>
          </Link>
          <Link href={"/faq"}>
            <Text {...LinkStyles}>faq</Text>
          </Link>
          <Link href={"/kontakt"}>
            <Text {...LinkStyles}>kontakt</Text>
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;
