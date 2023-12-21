import React from "react";
import {
  Box,
  Text,
  Link,
  useColorModeValue,
  Button,
  HStack,
} from "@chakra-ui/react";

function PublicationButton({ href, label, bgColor, hoverColor, textColor }) {
  return (
    <Link href={href} isExternal>
      <Button
        backgroundColor={bgColor}
        color={textColor}
        _hover={{
          backgroundColor: hoverColor,
        }}
        variant="solid"
        size="sm"
        marginTop="7px"
      >
        {label}
      </Button>
    </Link>
  );
}

function Publication({ paper }) {
  // Button Colors
  const doiBtnBgColor = useColorModeValue("primary.800");
  const doiBtnHoverColor = useColorModeValue("primary.600");
  const pdfBtnColor = useColorModeValue("triadic.700");
  const pdfBtnHoverColor = useColorModeValue("triadic.600");
  const textColor = useColorModeValue("greyscale.50");

  const formatAuthorsList = (authors, yourName) => {
    return authors.map((author, index) => {
      const isMe = author === yourName;
      const isLast = index === authors.length - 1;

      if (isLast) {
        return (
          <span key={index}>
            and <Text as={isMe ? "b" : "span"}>{author}</Text>
          </span>
        );
      } else {
        return (
          <span key={index}>
            <Text as={isMe ? "b" : "span"}>{author}</Text>,{" "}
          </span>
        );
      }
    });
  };

  return (
    <Box marginTop="1vh">
      <Text
        color={useColorModeValue("primary.800")}
        fontSize={{
          base: "calc(18px + 6 * ((100vw - 320px) / (680)))",
          md: "1.3rem",
        }}
        lineHeight="32px"
      >
        {paper.title}
      </Text>
      <Text
        fontSize={{
          base: "calc(16px + 6 * ((100vw - 320px) / (680)))",
          md: "1.3rem",
        }}
      >
        {formatAuthorsList(paper.authors, "Evan Palmer")}
      </Text>
      <Text
        fontSize={{
          base: "calc(16px + 6 * ((100vw - 320px) / (680)))",
          md: "1.3rem",
        }}
      >
        <i>{paper.venue}</i>, {paper.year}
        <i>{paper.underReview ? ", Under Review" : ""}</i>
      </Text>
      <HStack spacing={3}>
        {paper.doi && (
          <PublicationButton
            href={paper.doi}
            label="DOI"
            bgColor={doiBtnBgColor}
            hoverColor={doiBtnHoverColor}
            textColor={textColor}
          />
        )}
        {paper.pdf && (
          <PublicationButton
            href={paper.pdf}
            label="PDF"
            bgColor={pdfBtnColor}
            hoverColor={pdfBtnHoverColor}
            textColor={textColor}
          />
        )}
      </HStack>
    </Box>
  );
}

export default Publication;
