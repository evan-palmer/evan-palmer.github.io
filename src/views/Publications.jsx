/* eslint-disable react/no-array-index-key */
import {
  Box, Flex,
  List, Text,
} from '@chakra-ui/react';
import React from 'react';
import ReactGA from 'react-ga4';

import RalKundeProficiency from '../assets/pdfs/papers/2022_RAL_Kunde_Proficiency.pdf';
import Page from '../components/Page';
import Publication from '../components/Publication';

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
  const JournalPapers = [
    {
      title:
        'Recognizing User Proficiency In Piloting Small Unmanned Aerial Vehicles (SUAV)',
      authors: ['Siya Kunde', 'Evan Palmer', 'Britany Duncan'],
      venue: 'IEEE Robotics and Automation Letters (RA-L)',
      year: '2022',
      doi: 'https://ieeexplore.ieee.org/document/9681275',
      pdf: RalKundeProficiency,
    },
  ];

  const ConferencePapers = [
    {
      title:
        'Angler: An Autonomy Framework for Intervention Tasks with Lightweight Underwater Vehicle Manipulator Systems',
      authors: ['Evan Palmer', 'Christopher Holm', 'Geoffrey Hollinger'],
      venue: 'IEEE International Conference on Robotics and Automation (ICRA)',
      year: '2024',
      toAppear: true,
    },
  ];

  ReactGA.send({
    hitType: 'pageview',
    page: '/',
    title: 'Publications',
  });

  return (
    <Page title="✍🏻 Check out my publications">
      <Section title="Journal Articles" papers={JournalPapers} />
      <Section title="Conference Papers" papers={ConferencePapers} />
    </Page>
  );
}

export default Publications;
