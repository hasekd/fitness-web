import { Box, Flex, Heading, Icon, Text } from "@chakra-ui/react";
import { AiOutlineInstagram } from "react-icons/ai";
import React from "react";
import Link from "next/link";
import { theme } from "@/styles/theme";

const Footer = () => {
  return (
    <Flex
      flexDir={"column"}
      align={"center"}
      justify={"center"}
      minH={"30vh"}
      gap={{ base: "5rem", lg: "unset" }}
      bgColor={theme.color.primary.blue}
      textColor={theme.color.text.white}
    >
      <Flex
        align={"center"}
        justify={"space-between"}
        w={"50%"}
        maxW={"130rem"}
        mt={"4rem"}
        flexDir={{ base: "column", lg: "unset" }}
        gap={{ base: "3rem", lg: "unset" }}
      >
        <Flex flexDir={"column"} align={"center"} gap={"1rem"}>
          <Heading>LOGO</Heading>
          <Box>
            <Icon
              as={AiOutlineInstagram}
              mr={"1rem"}
              w={{ base: "2.5rem", lg: "3rem" }}
              h={{ base: "2.5rem", lg: "3rem" }}
            />
            <Icon
              as={AiOutlineInstagram}
              w={{ base: "2.5rem", lg: "3rem" }}
              h={{ base: "2.5rem", lg: "3rem" }}
            />
          </Box>
        </Flex>
        <Box textAlign={"center"}>
          <Text fontSize={{ base: "1.8rem", lg: "2.2rem" }} mb={"1rem"}>
            Dokumenty
          </Text>
          <Flex
            flexDir={"column"}
            gap={"0.5rem"}
            fontSize={{ base: "1.3rem", lg: "1.6rem" }}
          >
            <Link href={"/"}>
              <Text>Zásady ochrany osobních údajů</Text>
            </Link>
            <Link href={"/"}>
              <Text>Všeobecné obchodní podmínky</Text>
            </Link>
          </Flex>
        </Box>
      </Flex>
      <Text fontSize={{ base: "1.4rem", lg: "1.8rem" }} mt={"auto"} mb={"1rem"}>
        Copyright {new Date().getFullYear()} &copy; Daniel Hasek
      </Text>
    </Flex>
  );
};

export default Footer;
