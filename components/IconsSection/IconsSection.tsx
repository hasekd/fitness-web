import { Box, chakra, Flex, Grid, Text } from "@chakra-ui/react";
import { theme } from "@/styles/theme";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUtensils,
  faDumbbell,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const IconsSection = () => {
  const Icon = chakra(FontAwesomeIcon);

  return (
    <Flex flexDir={"column"} align={"center"}>
      <Grid
        justifyContent={"center"}
        alignContent={"center"}
        gridTemplateColumns={{ base: "1fr", md: "1fr 1fr", lg: "1fr 1fr 1fr" }}
        gap={{ base: "5rem", lg: "10rem" }}
        maxW={"130rem"}
        m={"0 auto"}
        p={"4rem 2rem"}
        minH={"30rem"}
      >
        <Box
          as={motion.div}
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={"0.2s"}
          viewport={{ once: true, amount: 0.8 }}
        >
          <Icon
            icon={faUtensils}
            mb={"1rem"}
            w={"3.5rem"}
            h={"3.5rem"}
            textColor={theme.color.primary.blue}
          />
          <Text fontSize={"3rem"}>Stravovací plán</Text>
          <Text fontSize={"1.5rem"} m={"0 auto"}>
            Stravovací plán na míru je sestaven tak, aby vyhovoval preferencím a
            možnostem každého jednotlivého klienta a obsahuje pestrý výběr
            jídel. Součástí může být i suplementační plán.
          </Text>
        </Box>
        <Box
          as={motion.div}
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={"0.2s"}
          viewport={{ once: true, amount: 0.8 }}
        >
          <Icon
            icon={faDumbbell}
            mb={"1rem"}
            w={"4rem"}
            h={"4rem"}
            textColor={theme.color.primary.blue}
          />
          <Text fontSize={"3rem"}>Tréninkový plán</Text>
          <Text fontSize={"1.5rem"}>
            Tréninkový program je navržen tak, aby maximálně efektivně vedl ke
            klientovu cíli. V programu jsou detailně rozepsané podrobně konkétní
            cviky, počty, opakování, vhodné délky pauz mezi sériemi, zátěž a
            další důležité prvky.
          </Text>
        </Box>
        <Box
          as={motion.div}
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={"0.2s"}
          viewport={{ once: true, amount: 0.8 }}
        >
          <Icon
            icon={faHeart}
            mb={"1rem"}
            w={"4rem"}
            h={"4rem"}
            textColor={theme.color.primary.blue}
          />
          <Text fontSize={"3rem"}>Soukormý trénink</Text>
          <Text fontSize={"1.5rem"}>
            Tréninkový program je navržen tak, aby maximálně efektivně vedl ke
            klientovu cíli. V programu jsou detailně rozepsané podrobně konkétní
            cviky, počty, opakování, vhodné délky pauz mezi sériemi, zátěž a
            další důležité prvky.
          </Text>
        </Box>
      </Grid>
      <Link href={"/sluzby"}>
        <Text
          fontSize={"1.9rem"}
          p={"0.5rem 2.5rem"}
          fontWeight={500}
          mb={"3rem"}
          bgColor={theme.color.primary.blue}
          borderRadius={"0.5rem"}
          border={`2px solid ${theme.color.primary.blue}`}
          textColor={theme.color.text.white}
          _hover={{
            bgColor: theme.color.primary.white,
            textColor: theme.color.primary.blue,
          }}
          transition={"all 0.4s ease-out"}
        >
          Zjistit více
        </Text>
      </Link>
    </Flex>
  );
};

export default IconsSection;
