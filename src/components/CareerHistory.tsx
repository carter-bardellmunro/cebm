import React from 'react';
import {
    Box,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Flex,
    Heading,
    Stack,
    Text,
    StackDivider,
    Link,
} from '@chakra-ui/react';
import { FiPlus } from 'react-icons//fi';
import { TbFileCertificate } from 'react-icons/tb';
import CTAButton from './CTAButton';

const CareerHistory = () => {
    return (
        <Box py="50">
            <Flex alignItems="center" justifyContent="space-between">
                <Flex flexDir="row" alignItems="center">
                    <Heading size="3xl" color="white" mr="10px">
                        Career
                    </Heading>
                    <FiPlus color="#689af8" size="2em" />
                </Flex>
            </Flex>
            <Card bg="black" py="2em">
                <CardBody>
                    <Stack
                        direction={['column', 'column', 'column', 'row']}
                        divider={<StackDivider />}
                        spacing="4"
                        wrap="wrap"
                        justifyContent="center"
                    >
                        <Box>
                            <Heading size="md" color="#689af8">
                                Easy Crypto
                            </Heading>
                            <Heading size="sm" color="white">
                                Full Stack Software Engineer
                            </Heading>
                            <Text size="sm" color="gray.300">
                                Jan 2022 - Aug 2022
                            </Text>
                        </Box>
                        <Box>
                            <Heading size="md" color="#689af8">
                                PHX Consulting
                            </Heading>
                            <Heading size="sm" color="white">
                                Freelance Full Stack Software Engineer
                            </Heading>
                            <Text color="gray.300">Oct 2021 - Dec 2022</Text>
                        </Box>
                        <Box>
                            <Heading size="md" color="#689af8">
                                Enspiral Dev Academy
                            </Heading>
                            <Heading size="sm" color="white">
                                Web Development Bootcamp
                            </Heading>
                            <Text color="gray.300">April 2021 - Jul 2021</Text>
                        </Box>
                    </Stack>
                </CardBody>
            </Card>
            <Flex alignItems="center" justifyContent="center" pt="3em">
                <Link
                    color="white"
                    _hover={{
                        textDecoration: 'none',
                    }}
                >
                    <CTAButton text="My CV" icon={<TbFileCertificate />} />
                </Link>
            </Flex>
        </Box>
    );
};

export default CareerHistory;
