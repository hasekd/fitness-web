import { Box, Center, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";

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
      <Heading
        as={motion.h1}
        animate={{ opacity: [0, 1] }}
        transition="0.5s ease-out"
        pos={"absolute"}
        top={"40%"}
        left={"50%"}
        transform={"translate(-50%, -40%)"}
        fontSize={{ base: "2rem", md: "5rem", lg: "6rem" }}
        textColor={"#fff"}
      >
        Daniel Hasek
      </Heading>
      <Center>
        <Text
          as={motion.h1}
          animate={{ opacity: [0, 1] }}
          transition="0.5s ease-out"
          pos={"absolute"}
          top={"50%"}
          left={"50%"}
          transform={"translate(-50%, -50%)"}
          fontSize={{ base: "2rem", md: "5rem", lg: "6rem" }}
          textColor={"#fff"}
        >
          Soukromý trenér
        </Text>
      </Center>
    </Box>
  );
};

export default Header;
