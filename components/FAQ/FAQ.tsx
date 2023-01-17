import { Box, Divider, Text } from "@chakra-ui/react";
import { theme } from "@/styles/theme";
import React from "react";

const FAQ = () => {
  return (
    <Box mb={"3rem"}>
      <Text
        textTransform={"uppercase"}
        fontSize={"3rem"}
        mb={"1rem"}
        fontWeight={600}
      >
        faq
      </Text>
      <Divider borderColor={theme.color.primary.blue} borderWidth={"2px"} />
    </Box>
  );
};

export default FAQ;
