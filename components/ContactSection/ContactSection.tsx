import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Text,
  Divider,
} from "@chakra-ui/react";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { theme } from "../../styles/theme";

type Inputs = {
  name: string;
  email: string;
  message: string;
};

const ContactSection = ({ title, width }: any) => {
  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <Box maxW={"130rem"} m={"0 auto"} textAlign={"center"} pt={"3rem"}>
      <Box maxW={width} m={"0 auto"}>
        <Text
          textTransform={"uppercase"}
          fontSize={"3rem"}
          mb={"1rem"}
          fontWeight={600}
        >
          {title}
        </Text>
        <Divider borderColor={theme.color.primary.blue} borderWidth={"2px"} />
      </Box>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl maxW={"70rem"} m={"5rem auto"} p={"0 2rem"}>
          <Flex flexDir={"column"}>
            <Flex
              gap={"2rem"}
              mb={"2rem"}
              flexDir={{ base: "column", sm: "unset" }}
            >
              <Flex flexDir={"column"} w={"100%"}>
                <FormLabel fontSize={"2rem"} mb={"1rem"} textColor={"#666666"}>
                  Jméno
                </FormLabel>
                <Input
                  size={"lg"}
                  h={"4.8rem"}
                  fontSize={"1.5rem"}
                  borderColor={"black"}
                  _hover={{ borderColor: theme.color.primary.blue }}
                  {...register("name")}
                  required
                />
              </Flex>
              <Flex flexDir={"column"} w={"100%"}>
                <FormLabel fontSize={"2rem"} mb={"1rem"} textColor={"#666666"}>
                  E-mail
                </FormLabel>
                <Input
                  type={"email"}
                  size={"lg"}
                  h={"4.8rem"}
                  fontSize={"1.5rem"}
                  borderColor={"black"}
                  _hover={{ borderColor: theme.color.primary.blue }}
                  {...register("email")}
                  required
                />
              </Flex>
            </Flex>
            <FormLabel fontSize={"2rem"} mb={"1rem"} textColor={"#666666"}>
              Zpráva
            </FormLabel>
            <Textarea
              minHeight="23rem"
              fontSize={"1.5rem"}
              borderColor={"black"}
              _hover={{ borderColor: theme.color.primary.blue }}
              {...register("message")}
              required
            />
            <Button
              mt="3.5rem"
              p={{ base: "2rem 3.5rem", sm: "2.1rem 5rem" }}
              fontSize={"1.7rem"}
              bgColor={"transparent"}
              borderRadius={"0.5rem"}
              fontWeight={500}
              alignSelf={"center"}
              border={`2px solid ${theme.color.primary.blue}`}
              textColor={theme.color.primary.blue}
              _hover={{
                bgColor: theme.color.hover.blue,
                textColor: theme.color.text.white,
              }}
              transition={"all 0.4s ease-out"}
              type="submit"
            >
              Odeslat
            </Button>
          </Flex>
        </FormControl>
      </form>
    </Box>
  );
};

export default ContactSection;
