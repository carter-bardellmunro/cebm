import React from 'react';
import { Box, Heading, List, ListItem, ListIcon } from '@chakra-ui/react';
import { CheckCircleIcon } from '@chakra-ui/icons';

const SkillSet = () => (
    <Box>
        <Heading>My Skills</Heading>
        <List spacing={3}>
            <ListItem>
                <ListIcon as={CheckCircleIcon} color="green.500" />
                This is a skill of mine
            </ListItem>
            <ListItem>
                <ListIcon as={CheckCircleIcon} color="green.500" />
                This is a skill of mine
            </ListItem>
            <ListItem>
                <ListIcon as={CheckCircleIcon} color="green.500" />
                This is a skill of mine
            </ListItem>
        </List>
    </Box>
);

export default SkillSet;
