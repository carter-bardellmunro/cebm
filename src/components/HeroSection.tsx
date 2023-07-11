import React from 'react';
import NextImage from 'next/image';
import { Box, Flex, Heading } from '@chakra-ui/react';

const imageStyle = {
    borderRadius: '3%',
};

const HeroSection = () => {
    return (
        <Flex
            flexDir="row"
            justifyContent="space-around"
            alignItems="center"
            py="10em"
        >
            <Box>
                <Heading size="lg" color="white">
                    Hi.
                </Heading>
                <Flex flexDir="row">
                    <Heading size="4xl" color="#335E31">
                        I&apos;m Carter
                    </Heading>
                    <Heading size="4xl" color="white">
                        .
                    </Heading>
                </Flex>
                <Box w={['20em', '25em', '35em']}>
                    <Heading size="xl" color="white">
                        A Full Stack Software Developer based out of Auckland,
                        NZ.
                    </Heading>
                </Box>
            </Box>
            <Box>
                <NextImage
                    src="/sanfrancisco.jpg"
                    alt="Me standing in front of wall"
                    width={300}
                    height={100}
                    style={imageStyle}
                />
            </Box>
        </Flex>
    );
};

export default HeroSection;
