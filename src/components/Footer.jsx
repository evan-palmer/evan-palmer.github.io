import {
  Flex, HStack,
  Link, useColorModeValue,
} from '@chakra-ui/react';
import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa6';
import { SiGmail, SiGooglescholar } from 'react-icons/si';

function SocialLink({ href, icon: Icon, size = 25 }) {
  return (
    <Link
      color={useColorModeValue('greyscale.700')}
      href={href}
      _hover={{
        color: useColorModeValue('greyscale.900'),
        transitionDuration: '0.3s',
        transitionTimingFunction: 'ease-in-out',
      }}
      isExternal
    >
      <Icon size={size} />
    </Link>
  );
}

function Footer() {
  return (
    <Flex
      bg={useColorModeValue('greyscale.50')}
      marginTop="5vh"
      marginBottom="4vh"
      alignItems="start"
    >
      <HStack spacing={5}>
        <SocialLink href="https://github.com/evan-palmer" icon={FaGithub} />
        <SocialLink
          href="https://www.linkedin.com/in/evanfpalmer/"
          icon={FaLinkedinIn}
        />
        <SocialLink href="mailto:palmeeva@oregonstate.edu" icon={SiGmail} />
        <SocialLink
          href="https://scholar.google.com/citations?user=qm0jBGcAAAAJ&hl=en"
          icon={SiGooglescholar}
        />
      </HStack>
    </Flex>
  );
}

export default Footer;
