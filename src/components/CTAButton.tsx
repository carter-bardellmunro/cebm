import React from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';

interface CTAButtonInterface {
    text: string;
    icon: JSX.Element;
}

const CTAButton = ({ text, icon }: CTAButtonInterface) => {
    return (
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
            <Text pr="15px">{text}</Text>
            <Box color="white">{icon}</Box>
        </Flex>
    );
};

export default CTAButton;
