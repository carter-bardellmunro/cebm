import React from 'react';
import NextImage from 'next/image';
import { Box, Container, Flex, Text } from '@chakra-ui/react';
import { FiPlus } from 'react-icons//fi';
import SectionHeading from './SectionHeading';

const imageStyle = {
    borderRadius: '3%',
};

const AboutMe = () => {
    return (
        <Box py="4em" id="about-me">
            <Flex flexDir="row" alignItems="center" justifyContent="flex-end">
                <Box mr="10px">
                    <SectionHeading text="About Me" size="3xl" color="FFFFFF" />
                </Box>
                <FiPlus color="#689af8" size="2em" />
            </Flex>
            <Flex
                flexDir={{ base: 'column', lg: 'row' }}
                alignItems="center"
                justifyContent="center"
                py="5em"
            >
                <Box>
                    <NextImage
                        src="/mexicocity.jpg"
                        alt="Me standing in front of wall"
                        width={300}
                        height={100}
                        style={imageStyle}
                    />
                </Box>
                <Container maxW="sm" textAlign="center" p="3em" mx="0em">
                    <Text color="gray.300" fontSize="xl">
                        I&apos;m a full stack developer with knowledge in a lot
                        of different areas and technologies. I love working with
                        a team of diverse individuals who work collaboratively
                        on exciting projects that are intuitive and provide
                        value to their users. I enjoy pushing myself outside my
                        comfort zone and to always bring an inquisitive nature
                        to allow me to keep learning everyday.
                    </Text>
                </Container>
            </Flex>
        </Box>
    );
};

export default AboutMe;
