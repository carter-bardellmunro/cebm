import React from 'react';
import {
    Box,
    Flex,
    Heading,
    List,
    ListItem,
    ListIcon,
    SimpleGrid,
} from '@chakra-ui/react';
import { FiPlus, FiZap } from 'react-icons//fi';

const skills = [
    ['JavaScript', 'TypeScript', 'React.js'],
    ['React Native', 'Next.js', 'Redux.js'],
    ['Node.js', 'Express.js', 'REST APIs'],
    ['Chakra UI', 'Styled components', 'CSS'],
    ['HTML', 'Stoybook', 'Github'],
    ['Component driven development', 'Agile', 'Jira'],
];

const SkillSet = () => (
    <Box>
        <Flex
            flexDir="row"
            alignItems="center"
            justifyContent="space-evenly"
            w="18em"
        >
            <Heading size="3xl" color="white">
                My Skills
            </Heading>
            <FiPlus color="#689af8" size="2em" />
        </Flex>
        <Flex flexDir="row" justifyContent="center" my="90px">
            <SimpleGrid columns={3} spacing={10}>
                {skills.map(skill => (
                    <List spacing={3}>
                        <ListItem color="gray.300">
                            <ListIcon as={FiZap} color="#689af8" />
                            {skill[0]}
                        </ListItem>
                        <ListItem color="gray.300">
                            <ListIcon as={FiZap} color="#689af8" />
                            {skill[1]}
                        </ListItem>
                        <ListItem color="gray.300">
                            <ListIcon as={FiZap} color="#689af8" />
                            {skill[2]}
                        </ListItem>
                    </List>
                ))}
            </SimpleGrid>
        </Flex>
    </Box>
);

export default SkillSet;
