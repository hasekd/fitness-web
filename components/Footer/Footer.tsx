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
      minH={"35vh"}
      bgColor={theme.color.primary.blue}
      textColor={theme.color.text.white}
    >
      <Flex
        align={"center"}
        justify={"space-between"}
        w={"50%"}
        maxW={"130rem"}
        mt={"5rem"}
      >
        <Flex flexDir={"column"} align={"center"} gap={"1rem"}>
          <Heading>LOGO</Heading>
          <Box>
            <Icon as={AiOutlineInstagram} mr={"1rem"} w={"3rem"} h={"3rem"} />
            <Icon as={AiOutlineInstagram} w={"3rem"} h={"3rem"} />
          </Box>
        </Flex>
        <Box textAlign={"center"}>
          <Text fontSize={"2.2rem"} mb={"1rem"}>
            Dokumenty
          </Text>
          <Flex flexDir={"column"} gap={"0.5rem"}>
            <Link href={"/"}>
              <Text fontSize={"1.6rem"}>Zásady ochrany osobních údajů</Text>
            </Link>
            <Link href={"/"}>
              <Text fontSize={"1.6rem"}>Všeobecné obchodní podmínky</Text>
            </Link>
          </Flex>
        </Box>
      </Flex>
      <Text fontSize={"1.8rem"} mt={"auto"} mb={"1rem"}>
        Copyright {new Date().getFullYear()} &copy; Daniel Hasek
      </Text>
    </Flex>
  );
};

export default Footer;
