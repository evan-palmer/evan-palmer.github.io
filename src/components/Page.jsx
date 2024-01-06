import { Flex, Text } from '@chakra-ui/react';
import React from 'react';

import Footer from './Footer';
import Navbar from './Navbar';

function Title({ content }) {
  return (
    <Text
      fontSize={{
        base: 'calc(36px + 36* ((100vw - 320px) / 680))',
        lg: '4rem',
      }}
      fontWeight="600"
      marginTop="5vh"
    >
      {content}
    </Text>
  );
}

function Page({ title, children }) {
  return (
    <Flex h="100%" w="82%" flexDirection="column" margin="0 auto">
      <Navbar />
      <Title content={title} />
      {children}
      <Footer />
    </Flex>
  );
}

export default Page;
