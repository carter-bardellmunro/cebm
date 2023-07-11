import React from 'react';
import {
    useDisclosure,
    Box,
    Drawer,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Link,
    IconButton,
    VStack,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import { HamburgerIcon } from '@chakra-ui/icons';

const navOptions = [
    { link: 'About Me', id: '#about-me' },
    { link: 'Skills', id: '#my-skills' },
    { link: 'Career', id: '#my-career' },
    { link: 'Contact', id: '#contact-me' },
];

const DrawerExample = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = React.useRef<HTMLButtonElement>(null);

    return (
        <>
            <Box justifyContent="flex-end" position="fixed">
                <IconButton
                    ref={btnRef}
                    onClick={onOpen}
                    bg="#689af8"
                    colorScheme="white"
                    size="lg"
                    aria-label="Search database"
                    icon={<HamburgerIcon />}
                    marginRight="16px"
                    marginTop="16px"
                />
            </Box>
            <Drawer
                isOpen={isOpen}
                placement="top"
                onClose={onClose}
                finalFocusRef={btnRef}
                size="xl"
                colorScheme="telegram"
            >
                <DrawerOverlay />
                <DrawerContent bg="#4D7EA8">
                    <DrawerCloseButton size="lg" />
                    <VStack spacing="10" alignItems="center" my="50px">
                        {navOptions.map((option, i) => {
                            return (
                                <Link
                                    key={i}
                                    as={NextLink}
                                    href={`${option.id}`}
                                    fontSize="4xl"
                                    color="white"
                                    position="relative"
                                    onClick={onClose}
                                    _before={{
                                        content: '""',
                                        position: 'absolute',
                                        width: '100%',
                                        height: '4px',
                                        borderRadius: '4px',
                                        backgroundColor: 'white',
                                        bottom: 0,
                                        left: 0,
                                        transformOrigin: 'right',
                                        transform: 'scaleX(0)',
                                        transition: 'transform .3s ease-in-out',
                                    }}
                                    _hover={{
                                        _before: {
                                            transformOrigin: 'left',
                                            transform: 'scaleX(1)',
                                        },
                                    }}
                                >
                                    {option.link}
                                </Link>
                            );
                        })}
                    </VStack>
                </DrawerContent>
            </Drawer>
        </>
    );
};

export default DrawerExample;
