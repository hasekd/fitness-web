import { Box, Flex, Heading, Text, TextProps } from "@chakra-ui/react";
import Link from "next/link";
import { theme } from "../../../styles/theme";
import React, { useLayoutEffect, useState } from "react";
import MobileNavbar from "./MobileNavbar";

const LinkStyles: TextProps = {
  textTransform: "uppercase",
  cursor: "pointer",
  pos: "relative",
  fontWeight: 600,
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
    bgColor: theme.color.primary.blue,
    transformOrigin: "bottom right",
    transition: "transform 0.3s ease-out",
  },
};

const useWindowSize = () => {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  return size;
};

const Navbar = () => {
  const [width, height] = useWindowSize();
  return (
    <>
      {width > 767 ? (
        <Box
          bgColor={theme.color.primary.white}
          pos={"sticky"}
          top={0}
          zIndex={10}
          boxShadow={theme.shadow.boxShadow}
        >
          <Flex
            justify={"space-between"}
            h={"7rem"}
            align={"center"}
            maxW={"130rem"}
            m={"0 auto"}
            p={"0 2rem"}
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
      ) : (
        <MobileNavbar />
      )}
    </>
  );
};

export default Navbar;
