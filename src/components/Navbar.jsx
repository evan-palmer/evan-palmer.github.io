'use client';

import {
  Box,
  Button,
  Flex,
  HStack,
  Image,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import React from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';

import Logo from '../assets/images/logo.svg';
import Cv from '../assets/pdfs/cv.pdf';

const Links = [
  { title: 'About', dest: '/' },
  { title: 'Publications', dest: '/publications' },
];

function NavLink({ link }) {
  const location = useLocation();
  const isActive = link.dest === location.pathname;

  const backgroundColor = useColorModeValue('tan.50');
  const inactiveTextColor = useColorModeValue('greyscale.700');
  const activeTextColor = useColorModeValue('greyscale.900');

  return (
    <RouterLink to={link.dest}>
      <Button
        bg={backgroundColor}
        textColor={isActive ? activeTextColor : inactiveTextColor}
        fontWeight={isActive ? 500 : 400}
        _hover={{
          color: activeTextColor,
          transitionDuration: '0.3s',
          transitionTimingFunction: 'ease-in-out',
        }}
        _active={{
          bg: backgroundColor,
        }}
        fontSize={{
          base: 'calc(16px + 4 * ((100vw - 320px) / (680)))',
          md: '1.25rem',
        }}
        marginLeft={{ base: '3vw' }}
        padding={0}
      >
        {link.title}
      </Button>
    </RouterLink>
  );
}

function Resume() {
  return (
    <Button
      as="a"
      bg={useColorModeValue('tan.50', 'primary.400')}
      textColor={useColorModeValue('greyscale.700')}
      fontWeight={400}
      _hover={{
        color: useColorModeValue('greyscale.900'),
        transitionDuration: '0.3s',
        transitionTimingFunction: 'ease-in-out',
      }}
      _active={{
        bg: useColorModeValue('tan.50'),
      }}
      fontSize={{
        base: 'calc(16px + 4 * ((100vw - 320px) / (680)))',
        md: '1.25rem',
      }}
      marginLeft={{ base: '3vw' }}
      padding={0}
      href={Cv}
    >
      Resume
    </Button>
  );
}

export default function Navbar() {
  return (
    <Box
      bg={useColorModeValue('grayscale.50')}
      marginTop={{ base: '3vh', md: '7vh' }}
      marginBottom={{ base: '1vh', md: '5vh' }}
    >
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <RouterLink to="/">
          <Flex alignItems="center">
            <Image src={Logo} h="50px" marginRight="1vw" />
            <Text
              fontSize={{
                base: 'calc(18px + 18 * ((100vw - 320px) / (680)))',
                lg: '2.3rem',
              }}
              fontWeight={500}
              display={{ base: 'none', md: 'flex' }}
            >
              Evan Palmer
            </Text>
          </Flex>
        </RouterLink>
        <HStack spacing={8} alignItems="center">
          <HStack as="nav">
            {Links.map((link) => (
              <NavLink key={link.title} link={link} />
            ))}
            <Resume />
          </HStack>
        </HStack>
      </Flex>
    </Box>
  );
}
