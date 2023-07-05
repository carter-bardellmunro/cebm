'use client';

import React from 'react';
import { Flex } from '@chakra-ui/react';
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
                    <Flex justifyContent="flex-end">
                        <SideDrawer />
                    </Flex>
                    {children}
                </Providers>
            </body>
        </html>
    );
}
