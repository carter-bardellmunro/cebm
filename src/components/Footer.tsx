import React from 'react';
import { Box, Container, IconButton, Text, Stack } from '@chakra-ui/react';
import { BsGithub, BsLinkedin } from 'react-icons/bs';

const Footer = () => (
    <Box position="relative" left="0" bottom="0">
        <Container
            as={Stack}
            maxW="6xl"
            py={4}
            direction={{ base: 'column', md: 'row' }}
            spacing={4}
            justify={{ base: 'center', md: 'space-between' }}
            align={{ base: 'center', md: 'center' }}
        >
            <Text ml="40">Built from scratch by me :) </Text>
            <Stack direction="row" spacing={6}>
                <IconButton
                    icon={<BsGithub />}
                    size="lg"
                    aria-label="Link to Github"
                />
                <IconButton
                    icon={<BsLinkedin />}
                    size="lg"
                    aria-label="Link to LinkedIn"
                />
            </Stack>
        </Container>
    </Box>
);

export default Footer;
