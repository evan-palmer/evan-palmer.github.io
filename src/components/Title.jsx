import React from "react";
import { Text } from "@chakra-ui/react";

function Title({ content }) {
  return (
    <Text
      fontSize={{
        base: "calc(36px + 36* ((100vw - 320px) / 680))",
        lg: "4rem",
      }}
      fontWeight="600"
      marginTop="5vh"
    >
      {content}
    </Text>
  );
}

export default Title;
