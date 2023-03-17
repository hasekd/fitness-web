import { Box, Divider, Flex, Text } from "@chakra-ui/react";
import { theme } from "../../styles/theme";
import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <Box bgColor={theme.color.primary.white} id={"about"}>
      <Flex
        as={motion.div}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={"0.2s"}
        viewport={{ once: true, amount: 0.8 }}
        maxW={"130rem"}
        m={"0 auto"}
        textAlign={"center"}
        minH={"30vh"}
        flexDir={"column"}
        justify={"center"}
        align={"center"}
        p={"3rem 1rem"}
      >
        <Box mb={"3rem"}>
          <Text
            textTransform={"uppercase"}
            fontSize={{ base: "2.5rem", md: "3rem" }}
            mb={"1rem"}
            fontWeight={600}
          >
            O mně
          </Text>
          <Divider borderColor={theme.color.primary.blue} borderWidth={"2px"} />
        </Box>
        <Text
          fontSize={{ base: "1.3rem", md: "1.4rem" }}
          w={{ base: "", md: "60%" }}
          p={"0 1rem"}
          m={"0 auto"}
        >
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit natus
          delectus distinctio, quis consequatur autem assumenda rem optio odio
          molestiae qui aut totam a voluptatum! Rem natus cupiditate nisi
          labore? Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit,
          quas animi iste cum asperiores alias? Reiciendis eligendi accusamus
          deleniti minima, asperiores voluptates.
        </Text>
        <Text>Test</Text>
      </Flex>
    </Box>
  );
};

export default About;
