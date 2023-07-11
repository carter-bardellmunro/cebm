import React from 'react';
import { Container, Flex, Heading, Text, Link } from '@chakra-ui/react';
import { EmailIcon } from '@chakra-ui/icons';
import CTAButton from './CTAButton';

const GetInTouch = () => {
    return (
        <Flex
            id="contact-me"
            flexDir="column"
            textAlign="center"
            justifyContent="center"
            mt="4em"
            mb="10em"
        >
            <Container maxW="lg">
                <Heading size="lg" color="#689af8" p="20px">
                    So, what&apos;s next?
                </Heading>
                <Heading size="4xl" color="white" p="20px">
                    Let&apos;s talk.
                </Heading>
                <Text color="gray.300" p="20px">
                    If you would like to chat about anything, big or small, feel
                    free to drop me an email at cartermunro11@gmail.com.
                    I&apos;d love to hear from you!
                </Text>
                <Flex flexDir="row" alignItems="center" justifyContent="center">
                    <Link
                        href="mailto:cartermunro11@gmail.com"
                        color="gray.300"
                        _hover={{
                            textDecoration: 'none',
                        }}
                    >
                        <CTAButton
                            text="Send me an email"
                            icon={<EmailIcon />}
                        />
                    </Link>
                </Flex>
            </Container>
        </Flex>
    );
};

export default GetInTouch;
