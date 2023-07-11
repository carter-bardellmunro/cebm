import React from 'react';
import NextImage from 'next/image';
import { Box, Container, Flex, Heading } from '@chakra-ui/react';

const imageStyle = {
    borderRadius: '3%',
};

const HeroSection = () => {
    return (
        <Flex
            flexDir={{ base: 'column', lg: 'row' }}
            justifyContent="space-around"
            alignItems="center"
            py="10em"
        >
            <Box>
                <Container
                    maxW="md"
                    alignItems={{ base: 'center', lg: 'space-between' }}
                    textAlign={{ base: 'center', lg: 'start' }}
                >
                    <Heading size="lg" color="white">
                        Hi.
                    </Heading>
                    <Flex
                        flexDir="row"
                        justifyContent={{ base: 'center', lg: 'flex-start' }}
                    >
                        <Heading size="4xl" color="#335E31">
                            I&apos;m Carter
                        </Heading>
                        <Heading size="4xl" color="white">
                            .
                        </Heading>
                    </Flex>
                    <Box>
                        <Heading size="xl" color="white">
                            A Full Stack Software Developer based out of
                            Auckland, NZ.
                        </Heading>
                    </Box>
                </Container>
            </Box>
            <Box>
                <NextImage
                    src="/sanfrancisco.jpg"
                    alt="Me standing in front of wall"
                    width={350}
                    height={100}
                    style={imageStyle}
                />
            </Box>
        </Flex>
    );
};

export default HeroSection;
