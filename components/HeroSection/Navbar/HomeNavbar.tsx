import { Box, Flex, Heading, Text, TextProps } from "@chakra-ui/react";
import Link from "next/link";
import { theme } from "../../../styles/theme";
import React, { useEffect, useLayoutEffect, useState } from "react";
import HomeMobileNavbar from "./HomeMobileNavbar";
import { useWindowSize } from "@/hooks/useWindowSize";
import { motion } from "framer-motion";

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

const HomeNavbar = () => {
  const size = useWindowSize();
  const [scrollPos, setScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPos(window.pageYOffset);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const childContainer = {
    // hidden: { opacity: 0, x: -200 },
    visible: {
      y: scrollPos > 400 ? [-100, 0] : "",
      transition: { type: "spring", stiffness: 50 },
    },
  };

  return (
    <>
      {size > 767 ? (
        <Box
          pos={scrollPos > 400 ? "fixed" : "absolute"}
          top={0}
          zIndex={10}
          boxShadow={scrollPos > 400 ? theme.shadow.boxShadow : ""}
          w={"100%"}
          bgColor={scrollPos > 400 ? "white" : ""}
          textColor={scrollPos > 400 ? "black" : "white"}
          transition={"all 0.3s ease-out"}
        >
          <Flex
            justify={"space-between"}
            h={"7rem"}
            align={"center"}
            maxW={"130rem"}
            m={"0 auto"}
            p={"0 2rem"}
            as={motion.div}
            variants={childContainer}
            animate="visible"
            // animate={{ y: scrollPos > 400 ? [-100, 0] : "" }}
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
        <HomeMobileNavbar />
      )}
    </>
  );
};

export default HomeNavbar;
