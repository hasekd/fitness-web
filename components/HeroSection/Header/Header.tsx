import { Box, Center, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";
import Navbar from "../Navbar/HomeNavbar";

const Header = () => {
  return (
    <Box
      as={motion.div}
      initial={{ scale: 1.3 }}
      animate={{ scale: [1.3, 1] }}
      transition={"1s"}
      pos={"relative"}
    >
      <Image
        src={require("../../../public/images/girl-header.jpeg")}
        alt={"Fitness girl"}
        width={2000}
        height={2000}
        style={{ maxHeight: "100vh" }}
      />
      <Center>
        <Heading
          as={motion.h1}
          animate={{ opacity: [0, 1] }}
          transition="0.5s ease-out"
          pos={"absolute"}
          top={{ base: "50%", sm: "40%" }}
          // left={"50%"}
          transform={"translate(0, -40%)"}
          fontSize={{ base: "2rem", sm: "3rem", md: "5rem", lg: "6rem" }}
          textColor={"#fff"}
        >
          Jana Hornsteinerová
        </Heading>
      </Center>
      <Center>
        <Text
          as={motion.h1}
          animate={{ opacity: [0, 1] }}
          transition="0.5s ease-out"
          pos={"absolute"}
          top={{ base: "65%", sm: "55%" }}
          transform={"translate(0, -55%)"}
          fontSize={{ base: "2rem", sm: "3rem", md: "5rem", lg: "6rem" }}
          textColor={"#fff"}
        >
          Soukromá trenérka
        </Text>
      </Center>
    </Box>
  );
};

export default Header;
