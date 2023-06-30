'use client';

import React from 'react';
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
                    <SideDrawer />
                    {children}
                </Providers>
            </body>
        </html>
    );
}
