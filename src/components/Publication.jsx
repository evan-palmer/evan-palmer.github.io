/* eslint-disable react/no-array-index-key */
import {
  Box,
  Button,
  HStack,
  Link,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import React from 'react';

function PublicationButton({
  href, label, bgColor, hoverColor, textColor,
}) {
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
        fontSize={{
          base: 'calc(12px + 6 * ((100vw - 320px) / (680)))',
          md: '1rem',
        }}
      >
        {label}
      </Button>
    </Link>
  );
}

function Title({ children }) {
  return (
    <Text
      lineHeight={{
        base: '24px',
        md: '30px',
      }}
      marginBottom={{
        base: '2px',
      }}
      fontSize={{
        base: 'calc(16px + 6 * ((100vw - 320px) / (680)))',
        md: '1.3rem',
      }}
      fontWeight="500"
      color={useColorModeValue('greyscale.900')}
    >
      {children}
    </Text>
  );
}

function Authors({ children }) {
  // Bold your name and add an 'and' before the last author
  const formatAuthorsList = (authors, yourName) => authors.map((author, index) => {
    const isMe = author === yourName;
    const isLast = index === authors.length - 1;

    if (isLast) {
      return (
        <span key={index}>
          and
          {' '}
          <Text as="span" fontWeight={isMe ? '600' : '400'}>
            {author}
          </Text>
        </span>
      );
    }
    return (
      <span key={index}>
        <Text as="span" fontWeight={isMe ? '600' : '400'}>
          {author}
        </Text>
        ,
        {' '}
      </span>
    );
  });

  return (
    <Text
      fontSize={{
        base: 'calc(14px + 6 * ((100vw - 320px) / (680)))',
        md: '1.2rem',
      }}
      lineHeight={{
        base: '24px',
        md: '30px',
      }}
    >
      {formatAuthorsList(children, 'Evan Palmer')}
    </Text>
  );
}

function Venue({
  venue, date, underReview, toAppear,
}) {
  return (
    <Text
      fontSize={{
        base: 'calc(14px + 6 * ((100vw - 320px) / (680)))',
        md: '1.2rem',
      }}
      lineHeight={{
        base: '24px',
        md: '30px',
      }}
    >
      <i>{venue}</i>
      ,
      {' '}
      {date}
      <i>{underReview ? ', Under Review' : ''}</i>
      <i>{toAppear ? ', To Appear' : ''}</i>
    </Text>
  );
}

function Publication({ paper }) {
  // Button Colors
  const btnBgColor = useColorModeValue('primary.600');
  const btnHoverColor = useColorModeValue('primary.500');
  const textColor = useColorModeValue('greyscale.50');

  return (
    <Box>
      <Title>{paper.title}</Title>
      <Authors>{paper.authors}</Authors>
      <Venue
        venue={paper.venue}
        date={paper.year}
        underReview={paper.underReview}
        toAppear={paper.toAppear}
      />
      <HStack spacing={3}>
        {paper.doi && (
          <PublicationButton
            href={paper.doi}
            label="DOI"
            bgColor={btnBgColor}
            hoverColor={btnHoverColor}
            textColor={textColor}
          />
        )}
        {paper.pdf && (
          <PublicationButton
            href={paper.pdf}
            label="PDF"
            bgColor={btnBgColor}
            hoverColor={btnHoverColor}
            textColor={textColor}
          />
        )}
      </HStack>
    </Box>
  );
}

export default Publication;
