import { Box, Flex, Icon, Text } from "@chakra-ui/react";
import { GiMeal, GiWeightLiftingUp } from "react-icons/gi";
import { theme } from "@/styles/theme";
import React from "react";

const IconsSection = () => {
  return (
    <Flex
      justify={"center"}
      align={"center"}
      gap={"5rem"}
      maxW={"100rem"}
      m={"0 auto"}
      minH={"30rem"}
    >
      <Box>
        <Icon
          as={GiMeal}
          mb={"1rem"}
          w={"4rem"}
          h={"4rem"}
          textColor={theme.color.primary.blue}
        />
        <Text fontSize={"3rem"}>Stravovací plán</Text>
        <Text fontSize={"1.5rem"} m={"0 auto"}>
          Stravovací plán na míru je sestaven tak, aby vyhovoval preferencím a
          možnostem každého jednotlivého klienta a obsahuje pestrý výběr jídel.
          Součástí může být i suplementační plán.
        </Text>
      </Box>
      <Box>
        <Icon
          as={GiWeightLiftingUp}
          mb={"1rem"}
          w={"4rem"}
          h={"4rem"}
          textColor={theme.color.primary.blue}
        />
        <Text fontSize={"3rem"}>Tréninkový plán</Text>
        <Text fontSize={"1.5rem"}>
          Tréninkový program je navržen tak, aby maximálně efektivně vedl ke
          klientovu cíli. V programu jsou detailně rozepsané podrobně konkétní
          cviky, počty, opakování, vhodné délky pauz mezi sériemi, zátěž a další
          důležité prvky.
        </Text>
      </Box>
    </Flex>
  );
};

export default IconsSection;
