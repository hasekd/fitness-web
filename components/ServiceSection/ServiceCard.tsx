import {
  Button,
  Flex,
  Text,
  Card,
  CardBody,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Stack,
  CardFooter,
} from "@chakra-ui/react";
import { theme } from "../../styles/theme";
import Image from "next/image";
import React from "react";
import ContactSection from "../ContactSection/ContactSection";
import { motion } from "framer-motion";

const ServiceCard = ({ title, description, price, delay }: any) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Card
        as={motion.div}
        initial={{ transform: "translateY(0px)" }}
        whileHover={{ transform: "translateY(-15px)" }}
        transition={"0.1s"}
        maxW={{ base: "lg", lg: "xl" }}
        p={"0.5rem"}
        boxShadow={"0 0 7px rgba(0, 0, 0, 0.2)"}
      >
        <CardBody>
          <Image
            src={require("../../public/images/girl-header.jpeg")}
            alt="girl"
            width={400}
            height={400}
            style={{ borderRadius: "5px" }}
          />
          <Stack mt="6" spacing="3">
            <Text
              fontSize={{ base: "2rem", lg: "3rem" }}
              mb={"1.5rem"}
              fontWeight={500}
            >
              {title}
            </Text>
            <Text fontSize={{ base: "1.2rem", lg: "1.5rem" }} maxW={"40rem"}>
              {description}
            </Text>
          </Stack>
        </CardBody>
        <CardFooter>
          <Flex
            flexDir={{ base: "column", lg: "unset" }}
            gap={{ base: "1rem", lg: "unset" }}
            justify={"space-between"}
            align={{ base: "unset", lg: "center" }}
            w={"100%"}
          >
            <Text fontSize={{ base: "1.4rem", lg: "1.8rem" }}>
              Cena: {price} Kč
            </Text>
            <Button
              fontSize={{ base: "1.1rem", lg: "1.4rem" }}
              h={{ base: "2.7rem", lg: "3.5rem" }}
              display={"inline-block"}
              fontWeight={600}
              bgColor={theme.color.primary.blue}
              borderRadius={"0.5rem"}
              border={`2px solid ${theme.color.primary.blue}`}
              textColor={theme.color.text.white}
              _hover={{
                bgColor: "transparent",
                textColor: theme.color.primary.blue,
              }}
              transition={"all 0.4s ease-out"}
              onClick={onOpen}
            >
              Začít spolupráci
            </Button>
          </Flex>
        </CardFooter>
      </Card>

      <Modal isOpen={isOpen} onClose={onClose} size={"6xl"}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
            <ContactSection title={"začít spolupráci"} width={"28rem"} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ServiceCard;
