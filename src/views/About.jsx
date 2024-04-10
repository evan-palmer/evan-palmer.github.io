import {
  Center,
  Grid,
  GridItem,
  Image,
  Link,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import React from 'react';
import ReactGA from 'react-ga4';

import profile from '../assets/images/profile.jpg';
import Page from '../components/Page';

function ResponsiveText({ children }) {
  ReactGA.send({
    hitType: 'pageview',
    page: '/',
    title: 'About',
  });

  return (
    <Text
      fontSize={{
        base: 'calc(16px + 6 * ((100vw - 320px) / (680)))',
        md: '1.3rem',
      }}
      lineHeight={{
        base: '24px',
        md: '32px',
      }}
      marginBottom={{
        base: '24px',
        md: '30px',
      }}
    >
      {children}
    </Text>
  );
}

function About() {
  return (
    <Page title="👋🏻 Hi, I'm Evan!">
      <Grid
        templateColumns={{ md: '1fr', lg: '1fr 1fr' }}
        gap={5}
        marginTop="5vh"
        marginBottom="5vh"
      >
        <GridItem w="100%">
          <ResponsiveText>
            I&apos;m an
            {' '}
            <Link
              color={useColorModeValue('primary.800')}
              href="https://ndseg.org/"
              _hover={{
                color: useColorModeValue('primary.600'),
              }}
              isExternal
            >
              NDSEG Fellow
            </Link>
            {' '}
            and a Robotics Ph.D. Student at Oregon State University where
            I&apos;m advised by
            {' '}
            <Link
              color={useColorModeValue('primary.800')}
              href="https://engineering.oregonstate.edu/people/geoff-hollinger"
              _hover={{
                color: useColorModeValue('primary.600'),
              }}
              isExternal
            >
              Geoff Hollinger
            </Link>
            . The goal of my research is to create safe motion planning and
            control algorithms for robots that operate in challenging
            environments and to deploy these algorithms into the real world.
          </ResponsiveText>
          <ResponsiveText>
            If I&apos;m not in the lab working on my latest idea, you can find me
            outdoors, training to hit a new PR in the gym, or playing video
            games with my friends.
          </ResponsiveText>
          <ResponsiveText
            fontSize={{
              base: 'calc(18px + 6 * ((100vw - 320px) / (680)))',
              md: '1.3rem',
            }}
            lineHeight="32px"
            marginBottom="30px"
          >
            Interested in collaborating or have any questions? Please feel free
            to
            {' '}
            <Link
              color={useColorModeValue('primary.800')}
              href="mailto:palmeeva@oregonstate.edu"
              _hover={{
                color: useColorModeValue('primary.600'),
              }}
            >
              contact me!
            </Link>
          </ResponsiveText>
        </GridItem>
        <GridItem w="100%">
          <Center>
            <Image
              src={profile}
              h={{ base: '35vh', md: '25em' }}
              w={{ base: '35vh', md: '25em' }}
              borderRadius="50%"
            />
          </Center>
        </GridItem>
      </Grid>
    </Page>
  );
}

export default About;
