import { Box, Heading, Link } from "@chakra-ui/react";
import Image from "next/image";

import React from "react";

const Header = () => {
  return (
    <Box pos={"relative"}>
      <Image
        src={require("../../../public/images/girl-header.jpeg")}
        alt={"Fitness girl"}
        width={2000}
        height={2000}
        style={{ maxHeight: "100vh" }}
      />
      <Heading
        pos={"absolute"}
        top={"35%"}
        left={"50%"}
        transform={"translate(-50%, -50%)"}
        fontSize={"6rem"}
        textColor={"#fff"}
      >
        Daniel Hasek
      </Heading>
      <Link
        href={"#about"}
        pos={"absolute"}
        top={"60%"}
        left={"50%"}
        transform={"translate(-50%, -50%)"}
        fontSize={"4rem"}
        textColor={"#fff"}
      >
        Zjistit více
      </Link>
    </Box>
  );
};

export default Header;
