import React from 'react';
import { Container, Flex, Heading, Text, Link } from '@chakra-ui/react';
import { EmailIcon } from '@chakra-ui/icons';
import CTAButton from './CTAButton';

const GetInTouch = () => (
    <Flex flexDir="column" textAlign="center" justifyContent="center">
        <Container maxW="lg" my="40px">
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
                // marginBottom="20px"
                justifyContent="center"
            >
                <Link
                    href="mailto:cartermunro11@gmail.com"
                    color="gray.300"
                    _hover={{
                        textDecoration: 'none',
                    }}
                >
                    <CTAButton text="Send me an email" icon={<EmailIcon />} />
                </Link>
            </Flex>
        </Container>
    </Flex>
);

export default GetInTouch;
