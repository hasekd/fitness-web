import { Button, Card, CardBody, Stack, Text } from "@chakra-ui/react";
import { theme } from "../../styles/theme";
import React from "react";

const ServiceCard = ({ plan, description, price }: any) => {
  return (
    <Card
      maxW={"md"}
      bgColor={theme.color.primary.blue}
      textColor={theme.color.text.white}
      p={"1rem"}
    >
      <CardBody>
        <Stack spacing="10" textAlign={"center"}>
          <Text fontSize={"2rem"}>{plan}</Text>
          <Text fontSize={"1.5rem"}>{description}</Text>
          <Text fontSize={"1.6rem"}>Cena: {price} Kč</Text>
          <Button
            fontSize={"1.25rem"}
            p={"1.6rem"}
            textColor={theme.color.text.black}
          >
            Mám zájem
          </Button>
        </Stack>
      </CardBody>
    </Card>
  );
};

export default ServiceCard;
