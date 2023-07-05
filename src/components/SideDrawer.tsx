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

function DrawerExample() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = React.useRef<HTMLButtonElement>(null);

    return (
        <>
            <Box alignItems="flex-end">
                <IconButton
                    ref={btnRef}
                    onClick={onOpen}
                    colorScheme="orange"
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
                <DrawerContent>
                    <DrawerCloseButton size="lg" colorScheme="purple" />
                    <VStack spacing="10" alignItems="center" my="50px">
                        <Link as={NextLink} href="#" fontSize="4xl">
                            About Me
                        </Link>
                        <Link as={NextLink} href="#" fontSize="4xl">
                            My Work
                        </Link>
                        <Link as={NextLink} href="#" fontSize="4xl">
                            Contact Me
                        </Link>
                    </VStack>
                </DrawerContent>
            </Drawer>
        </>
    );
}

export default DrawerExample;
