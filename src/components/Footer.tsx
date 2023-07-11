import React from 'react';
import NextLink from 'next/link';
import {
    Box,
    Container,
    IconButton,
    Link,
    Text,
    Stack,
} from '@chakra-ui/react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
    return (
        <Box marginTop="auto">
            <Container
                as={Stack}
                maxW="3xl"
                py={4}
                direction={{ base: 'column', md: 'row' }}
                spacing={4}
                justify={{ base: 'center', md: 'space-between' }}
                align={{ base: 'center', md: 'center' }}
            >
                <Text color="gray.200">Built from scratch by me :) </Text>
                <Stack direction="row" spacing={6}>
                    <Link
                        as={NextLink}
                        href="https://github.com/carter-bardellmunro"
                    >
                        <IconButton
                            icon={<FaGithub />}
                            size="md"
                            fontSize="25px"
                            colorScheme="gray"
                            borderRadius="2"
                            _hover={{ bg: '#c9510c' }}
                            aria-label="Link to Github"
                        />
                    </Link>
                    <Link
                        as={NextLink}
                        href="https://www.linkedin.com/in/carter-bardell-munro-b20a27123/"
                    >
                        <IconButton
                            icon={<FaLinkedinIn />}
                            size="md"
                            fontSize="25px"
                            colorScheme="gray"
                            borderRadius="2"
                            _hover={{ bg: '#0072b1' }}
                            aria-label="Link to LinkedIn"
                        />
                    </Link>
                </Stack>
            </Container>
        </Box>
    );
};

export default Footer;
