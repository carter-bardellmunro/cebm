import React from 'react';
import { Box, Flex, Heading } from '@chakra-ui/react';

const HeroSection = () => {
    return (
        <Box py="10em">
            <Heading size="lg" color="white">
                Hi.
            </Heading>
            <Flex flexDir="row">
                <Heading size="4xl" color="#689af8">
                    I&apos;m Carter
                </Heading>
                <Heading size="4xl" color="white">
                    .
                </Heading>
            </Flex>
            <Box w={['20em', '25em', '35em']}>
                <Heading size="xl" color="white">
                    A Full Stack Software Developer based out of Auckland, NZ.
                </Heading>
            </Box>
        </Box>
    );
};

export default HeroSection;
