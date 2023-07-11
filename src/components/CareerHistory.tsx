import React from 'react';
import {
    Box,
    Card,
    CardBody,
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

const jobs = [
    {
        company: 'Easy Crypto',
        position: 'Full Stack Software Engineer',
        dates: 'Jan 2022 - Aug 2022',
    },
    {
        company: 'PHX Consulting',
        position: 'Freelance Full Stack Software Engineer',
        dates: 'Oct 2021 - Dec 2021',
    },
    {
        company: 'Enspiral Dev Academy',
        position: 'Web Development Bootcamp',
        dates: 'April 2021 - July 2021',
    },
];

const CareerHistory = () => {
    return (
        <Box py="50" id="my-career">
            <Flex flexDir="row" alignItems="center" justifyContent="flex-end">
                <Heading size="3xl" color="white" mr="10px">
                    Career
                </Heading>
                <FiPlus color="#689af8" size="2em" />
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
                        {jobs.map((job, i) => {
                            return (
                                <Box key={i}>
                                    <Heading size="md" color="#689af8">
                                        {job.company}
                                    </Heading>
                                    <Heading size="sm" color="white">
                                        {job.position}
                                    </Heading>
                                    <Text size="sm" color="gray.300">
                                        {job.dates}
                                    </Text>
                                </Box>
                            );
                        })}
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
