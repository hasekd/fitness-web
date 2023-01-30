import {
  Box,
  Button,
  Divider,
  Flex,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import Image from "next/image";
import { theme } from "@/styles/theme";
import React from "react";
import ContactSection from "../ContactSection/ContactSection";
import ServiceCard from "./ServiceCard";

const Service = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box maxW={"11.5rem"} m={"3rem auto 0"}>
        <Text
          textTransform={"uppercase"}
          fontSize={"3rem"}
          mb={"1rem"}
          fontWeight={600}
        >
          Služby
        </Text>
        <Divider borderColor={theme.color.primary.blue} borderWidth={"2px"} />
      </Box>

      <Flex
        flexDir={{ base: "column", lg: "unset" }}
        justify={"space-between"}
        align={"center"}
        maxW={"130rem"}
        m={"0 auto"}
        gap={"5rem"}
        p={"6rem 2rem"}
      >
        <ServiceCard
          title={"Stravovací plán"}
          description={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit Eius consequatur Lorem ipsum dolor sit amet consectetur adipisicingelit Eius consequatur"
          }
          price={1299}
        />
        <ServiceCard
          title={"Tréninkový plán"}
          description={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit Eius consequatur Lorem ipsum dolor sit amet consectetur adipisicingelit Eius consequatur"
          }
          price={1299}
        />

        <ServiceCard
          title={"Soukromý trénink"}
          description={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit Eius consequatur Lorem ipsum dolor sit amet consectetur adipisicingelit Eius consequatur"
          }
          price={1299}
        />
      </Flex>
    </>
  );
};

export default Service;
