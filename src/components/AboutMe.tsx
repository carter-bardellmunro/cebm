import React from 'react';
import NextImage from 'next/image';
import { Box, Container, Flex, Heading, Text } from '@chakra-ui/react';
import { FiPlus } from 'react-icons//fi';

const imageStyle = {
    borderRadius: '3%',
};

const AboutMe = () => {
    return (
        <Box py="5em">
            <Flex flexDir="row" alignItems="center" justifyContent="flex-end">
                <Heading size="3xl" color="white" mr="10px">
                    About Me
                </Heading>
                <FiPlus color="#689af8" size="2em" />
            </Flex>
            <Flex
                flexDir="row"
                alignItems="center"
                justifyContent="center"
                py="3em"
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
