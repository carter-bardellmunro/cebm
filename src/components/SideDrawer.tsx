import React from 'react';
import {
    useDisclosure,
    Box,
    Drawer,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    DrawerHeader,
    DrawerBody,
    Link,
    IconButton,
    VStack,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import { HamburgerIcon } from '@chakra-ui/icons';

function DrawerExample() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = React.useRef<HTMLButtonElement>(null);

    return (
        <>
            <IconButton
                ref={btnRef}
                onClick={onOpen}
                color="black"
                colorScheme="transparent"
                size="lg"
                aria-label="Search database"
                icon={<HamburgerIcon />}
            >
                Open
            </IconButton>
            <Drawer
                isOpen={isOpen}
                placement="left"
                onClose={onClose}
                finalFocusRef={btnRef}
            >
                <DrawerOverlay />
                <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
                    <DrawerOverlay />
                    <DrawerContent>
                        <Box alignItems="flex-start">
                            <DrawerCloseButton />
                            <DrawerHeader>The Menu</DrawerHeader>
                        </Box>
                        <DrawerBody>
                            <VStack align="flex-start" spacing="5">
                                <Link as={NextLink} href="#">
                                    About Me
                                </Link>
                                <Link as={NextLink} href="#">
                                    Contact Me
                                </Link>
                                <Link as={NextLink} href="#">
                                    Blog
                                </Link>
                            </VStack>
                        </DrawerBody>
                    </DrawerContent>
                </Drawer>
            </Drawer>
        </>
    );
}

export default DrawerExample;
