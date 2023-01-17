import { Box, Divider, Flex, Text } from "@chakra-ui/react";
import React from "react";
import ServiceCard from "./ServiceCard";
import { theme } from "../../styles/theme";

const Service = () => {
  return (
    <Flex
      flexDir={"column"}
      justify={"center"}
      minH={"45rem"}
      maxW={"130rem"}
      m={"0 auto"}
    >
      <Flex maxW={"130rem"} m={"0 auto"} flexDir={"column"} align={"center"}>
        <Box mb={"4rem"}>
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
        <Flex flexWrap={"wrap"} gap={"3rem"} justify={"center"}>
          <ServiceCard
            plan={"Stravovací plán"}
            description={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius consequatur"
            }
            price={"1 299"}
          />
          <ServiceCard
            plan={"Tréninkový plán"}
            description={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius consequatur"
            }
            price={"1 299"}
          />
          <ServiceCard
            plan={"Soukormý trénink"}
            description={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius consequatur"
            }
            price={"1 299"}
          />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Service;
