import { Box, Divider, Flex, Text } from "@chakra-ui/react";
import { theme } from "../../styles/theme";
import React from "react";

const About = () => {
  return (
    <Box bgColor={"#222222"} id={"about"}>
      <Flex
        maxW={"130rem"}
        m={"0 auto"}
        textAlign={"center"}
        minH={"40vh"}
        flexDir={"column"}
        justify={"center"}
        align={"center"}
        textColor={"#fff"}
      >
        <Box mb={"3rem"}>
          <Text
            textTransform={"uppercase"}
            fontSize={"3rem"}
            mb={"1rem"}
            fontWeight={600}
          >
            O mně
          </Text>
          <Divider borderColor={theme.color.primary.blue} borderWidth={"2px"} />
        </Box>
        <Text fontSize={"1.4rem"} w={"60%"} m={"0 auto"}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit natus
          delectus distinctio, quis consequatur autem assumenda rem optio odio
          molestiae qui aut totam a voluptatum! Rem natus cupiditate nisi
          labore? Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit,
          quas animi iste cum asperiores alias? Reiciendis eligendi accusamus
          deleniti minima, asperiores voluptates.
        </Text>
      </Flex>
    </Box>
  );
};

export default About;
