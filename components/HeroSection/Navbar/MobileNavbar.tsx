import { RxHamburgerMenu } from "react-icons/rx";
import { theme } from "@/styles/theme";
import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Icon,
  useDisclosure,
  Flex,
  Text,
  TextProps,
  Heading,
} from "@chakra-ui/react";
import Link from "next/link";
import Image from "next/image";

const LinkStyles: TextProps = {
  textTransform: "uppercase",
  cursor: "pointer",
  pos: "relative",
  fontWeight: 600,
  _hover: {
    _after: { transform: "scaleX(1)", transformOrigin: "bottom left" },
  },
  _after: {
    content: '""',
    pos: "absolute",
    w: "100%",
    transform: "scaleX(0)",
    h: "0.15rem",
    bottom: "-0.2rem",
    left: "0",
    bgColor: theme.color.primary.white,
    transformOrigin: "bottom right",
    transition: "transform 0.3s ease-out",
  },
};

const MobileNavbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Flex
        justify={"space-between"}
        align={"center"}
        p={"2rem"}
        boxShadow={theme.shadow.boxShadow}
      >
        <Link href={"/"}>
          <Heading>LOGO</Heading>
        </Link>
        <Icon
          as={RxHamburgerMenu}
          onClick={onOpen}
          cursor={"pointer"}
          w={"2.7rem"}
          h={"2.7rem"}
        />
      </Flex>
      <Drawer isOpen={isOpen} placement="top" onClose={onClose} size={"full"}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton
            fontSize={"1.3rem"}
            p={"2rem"}
            _hover={{
              bgColor: "transparent",
              textColor: theme.color.primary.blue,
            }}
          />
          <DrawerBody pt={"4rem"}>
            <Flex
              flexDir={"column"}
              align={"center"}
              fontSize={"1.8rem"}
              gap={"3rem"}
            >
              <Link href={"/"}>
                <Text {...LinkStyles}>úvod</Text>
              </Link>
              <Link href={"/sluzby"}>
                <Text {...LinkStyles}>služby</Text>
              </Link>
              <Link href={"/faq"}>
                <Text {...LinkStyles}>faq</Text>
              </Link>
              <Link href={"/kontakt"}>
                <Text {...LinkStyles}>kontakt</Text>
              </Link>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default MobileNavbar;
