import { Metadata } from 'next';
import React from 'react';

declare const metadata: Metadata;
declare function RootLayout({ children }: {
    children: React.ReactNode;
}): React.JSX.Element;

export { RootLayout as default, metadata };
