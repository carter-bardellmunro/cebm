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

const SkillSet = () => {
    return (
        <Box id="my-skills" py="4em">
            <Flex flexDir="row" alignItems="center" w="18em">
                <Heading size="3xl" color="white" mr="10px">
                    My Skills
                </Heading>
                <FiPlus color="#689af8" size="2em" />
            </Flex>
            <Flex flexDir="row" justifyContent="center" my="10em">
                <SimpleGrid columns={3} spacing={10}>
                    {skills.map((skill, i) => {
                        return (
                            <List spacing={3} key={i}>
                                <ListItem fontSize="xl" color="gray.300">
                                    <ListIcon as={FiZap} color="#689af8" />
                                    {skill[0]}
                                </ListItem>
                                {skill[1] ? (
                                    <ListItem fontSize="xl" color="gray.300">
                                        <ListIcon as={FiZap} color="#689af8" />
                                        {skill[1]}
                                    </ListItem>
                                ) : null}
                                {skill[2] ? (
                                    <ListItem fontSize="xl" color="gray.300">
                                        <ListIcon as={FiZap} color="#689af8" />
                                        {skill[2]}
                                    </ListItem>
                                ) : null}
                            </List>
                        );
                    })}
                </SimpleGrid>
            </Flex>
        </Box>
    );
};

export default SkillSet;
