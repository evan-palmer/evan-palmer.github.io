import React from "react";
import { Flex } from "@chakra-ui/react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Title from "./Title";

function Page({ title, children }) {
  return (
    <Flex h="100%" w="85%" flexDirection="column" margin="0 auto">
      <Navbar />
      <Title content={title} />
      {children}
      <Footer />
    </Flex>
  );
}

export default Page;
