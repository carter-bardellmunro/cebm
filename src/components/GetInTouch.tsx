import React from 'react';
import { Container, Flex, Heading, Text, Link } from '@chakra-ui/react';
import { EmailIcon } from '@chakra-ui/icons';

const GetInTouch = () => (
    <Flex
        flexDir="column"
        bg="black"
        textAlign="center"
        justifyContent="center"
    >
        <Container maxW="lg">
            <Heading size="md" color="#689af8" p="20px">
                So, what&apos;s next?
            </Heading>
            <Heading size="3xl" color="white" p="20px">
                Let&apos;s talk.
            </Heading>
            <Text color="gray.300" p="20px">
                If you would like to chat about anything, big or small, feel
                free to drop me an email at cartermunro11@gmail.com. I&apos;d
                love to hear from you!
            </Text>
            <Flex
                flexDir="row"
                alignItems="center"
                marginBottom="20px"
                justifyContent="center"
            >
                <Link
                    href="mailto:cartermunro11@gmail.com"
                    color="gray.300"
                    _hover={{
                        textDecoration: 'none',
                    }}
                >
                    <Flex
                        flexDir="row"
                        alignItems="center"
                        borderBottom="1px solid #689af8"
                        pb="5px"
                        transition="all 508ms cubic-bezier(0, 0, 0.85, -0.02)"
                        _hover={{
                            marginLeft: '30px',
                        }}
                    >
                        <Text pr="15px">Send me an email</Text>
                        <EmailIcon color="white" />
                    </Flex>
                </Link>
            </Flex>
        </Container>
    </Flex>
);

export default GetInTouch;
