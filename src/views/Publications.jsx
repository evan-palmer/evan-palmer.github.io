/* eslint-disable react/no-array-index-key */
import {
  Box, Flex,
  List, Text,
} from '@chakra-ui/react';
import React from 'react';

import Page from '../components/Page';
import Publication from '../components/Publication';
import ConferencePapers from '../publications/Conference';
import JournalPapers from '../publications/Journal';

function Section({ title, papers }) {
  return (
    <Box>
      <Text
        fontSize={{ base: '1.8rem', lg: '2rem' }}
        fontWeight="500"
        marginTop="4vh"
      >
        {title}
      </Text>
      <List spacing={4} marginTop="1vh">
        {papers.map((paper, index) => (
          <Flex>
            <Text
              lineHeight={{
                base: '24px',
                md: '30px',
              }}
              marginBottom={{
                base: '2px',
              }}
              fontSize={{
                base: 'calc(12px + 5 * ((100vw - 320px) / (680)))',
                md: '1.1rem',
              }}
              marginRight={{ base: '0.9rem', md: '1.1rem' }}
            >
              {index + 1}
              .
            </Text>
            <Publication key={index} paper={paper} />
          </Flex>
        ))}
      </List>
    </Box>
  );
}

function Publications() {
  return (
    <Page title="Check out my publications">
      <Section title="Journal Articles" papers={JournalPapers} />
      <Section title="Conference Papers" papers={ConferencePapers} />
    </Page>
  );
}

export default Publications;
