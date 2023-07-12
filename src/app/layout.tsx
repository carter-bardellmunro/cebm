'use client';

import React from 'react';
import { Box, Flex } from '@chakra-ui/react';
import { Providers } from './providers';
import SideDrawer from '../components/SideDrawer';

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>
                <Providers>
                    <Box bg="#121113">
                        <Flex justifyContent="flex-end">
                            <SideDrawer />
                        </Flex>
                        {children}
                    </Box>
                </Providers>
            </body>
        </html>
    );
}
